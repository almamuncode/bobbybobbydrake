import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH,
});
await mkdir("/tmp/dnb-qa", { recursive: true });
const results = [];
for (const locale of ["en", "ko"]) {
  for (const width of [375, 768, 1280]) {
    const page = await browser.newPage({
      viewport: { width, height: 900 },
      reducedMotion: "reduce",
      colorScheme: "light",
    });
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(`http://127.0.0.1:3000/${locale}/`, {
      waitUntil: "networkidle",
    });
    await page.evaluate(async () => {
      document.querySelectorAll("img").forEach((img) => {
        img.loading = "eager";
      });
      await document.fonts.ready;
      await Promise.all(
        Array.from(document.images).map((img) => img.decode().catch(() => {})),
      );
    });
    const layout = await page.evaluate(() => ({
      lang: document.documentElement.lang,
      colorScheme: getComputedStyle(document.documentElement).colorScheme,
      background: getComputedStyle(document.body).backgroundColor,
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      h1: document.querySelectorAll("h1").length,
      broken: [...document.images].filter((i) => !i.complete || !i.naturalWidth)
        .length,
    }));
    await page.screenshot({ path: `/tmp/dnb-qa/${locale}-${width}.png` });
    if (width === 375) {
      await page.locator("header button[aria-controls]").click();
      await page.keyboard.press("Escape");
      if (
        (await page
          .locator("header button[aria-controls]")
          .getAttribute("aria-expanded")) !== "false"
      )
        throw Error("Mobile escape failed");
    }
    await page.locator("#photos button").first().click();
    await page.keyboard.press("ArrowRight");
    await page.waitForFunction(() =>
      document.querySelector("dialog p")?.textContent?.includes("2/8"),
    );
    await page.keyboard.press("Escape");
    if (await page.locator("dialog").evaluate((el) => el.open))
      throw Error("Lightbox escape failed");
    results.push({ locale, width, ...layout, errors });
    await page.close();
  }
}
const staticPage = await browser.newPage({ javaScriptEnabled: false });
await staticPage.goto("http://127.0.0.1:3000/");
await staticPage.waitForURL("**/en/");
await staticPage.close();
console.log("Root redirect passes with JavaScript disabled.");
console.log(JSON.stringify(results, null, 2));
await browser.close();
if (
  results.some(
    (r) =>
      r.colorScheme !== "dark" ||
      r.background !== "rgb(17, 17, 17)" ||
      r.width !== r.scrollWidth ||
      r.h1 !== 1 ||
      r.broken ||
      r.errors.length ||
      r.lang !== r.locale,
  )
)
  process.exitCode = 1;
