import { chromium } from "@playwright/test";
import {
  menu,
  sliderPricing,
  comboUpgrade,
  wingFlavors,
  toppings,
} from "../src/data/menu.ts";
const response = await fetch("https://dogsnbuns.kr/");
if (!response.ok) throw new Error(`Existing site returned ${response.status}`);
const html = await response.text();
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH,
});
try {
  const page = await browser.newPage();
  await page.route("**/*", (route) => route.abort());
  await page.setContent(html);
  const reference = await page.evaluate(() => {
    const clean = (value) => (value || "").replace(/\s+/g, " ").trim();
    const price = (value) =>
      Number((value.match(/₩([\d,]+)/)?.[1] || "0").replaceAll(",", ""));
    const entries = [...document.querySelectorAll("#menu h4")].map((h) => {
      const card = h.closest(".menu-item, .menu-photo-card, .kids-card");
      const heading = h.cloneNode(true);
      heading.querySelectorAll("span").forEach((s) => s.remove());
      return {
        name: clean(heading.textContent),
        description: clean(card.querySelector("p")?.textContent),
        price:
          price(card.textContent) ||
          (card.classList.contains("kids-card")
            ? price(
                card.closest("section").querySelector(".combo-pill")
                  .textContent,
              )
            : 0),
        supplement: clean(card.textContent).includes("+₩"),
      };
    });
    const sliders = [...document.querySelectorAll(".price-strip > div")].map(
      (el) => ({
        name: clean(el.querySelector("span")?.textContent),
        price: price(el.textContent),
      }),
    );
    return {
      entries,
      sliders,
      comboUpgrade: price(
        document.querySelector("#signature-dogs .combo-pill").textContent,
      ),
      toppingsText: clean(document.querySelector("#toppings").textContent),
    };
  });
  const local = menu.flatMap((c) => c.items);
  const differences = [];
  for (const entry of reference.entries) {
    const item = local.find((i) => i.name.en === entry.name);
    if (!item) {
      differences.push(`Missing: ${entry.name}`);
      continue;
    }
    for (const field of ["price", "description", "supplement"]) {
      const actual =
        field === "description"
          ? item.description.en
          : field === "supplement"
            ? Boolean(item.supplement)
            : item.price;
      if (actual !== entry[field])
        differences.push(
          `${entry.name} ${field}: local=${JSON.stringify(actual)} existing=${JSON.stringify(entry[field])}`,
        );
    }
  }
  for (const item of local)
    if (!reference.entries.some((e) => e.name === item.name.en))
      differences.push(`Extra: ${item.name.en}`);
  for (const tier of reference.sliders)
    if (
      !sliderPricing.some(
        (p) => p.name.en === tier.name && p.price === tier.price,
      )
    )
      differences.push(`Slider price mismatch: ${tier.name}`);
  if (sliderPricing.length !== reference.sliders.length)
    differences.push("Slider tier count mismatch");
  if (comboUpgrade !== reference.comboUpgrade)
    differences.push("Signature combo upgrade mismatch");
  for (const group of toppings)
    for (const item of group.items) {
      const text = item.en.replace("Chili (100% Beef)", "Chili — 100% Beef");
      if (!reference.toppingsText.includes(text))
        differences.push(`Topping/sauce mismatch: ${item.en}`);
    }
  for (const flavor of wingFlavors)
    if (
      !reference.entries
        .find((e) => e.name === "8 Wings")
        ?.description.includes(flavor.en)
    )
      differences.push(`Wing flavor mismatch: ${flavor.en}`);
  console.log(
    JSON.stringify(
      {
        source: "https://dogsnbuns.kr/",
        entries: reference.entries.length,
        sliderTiers: reference.sliders.length,
        differences,
      },
      null,
      2,
    ),
  );
  if (differences.length) process.exitCode = 1;
} finally {
  await browser.close();
}
