import { existsSync } from "node:fs";
import { join } from "node:path";
export function foodImage(name: string) {
  const file = `/assets/${name}.webp`;
  return existsSync(join(process.cwd(), "public", file))
    ? file
    : name.includes("dog") || name.includes("byo")
      ? "/assets/hotdog-stock.jpg"
      : name.includes("slider")
        ? "/assets/slider.svg"
        : name.includes("wing") || name.includes("nugget")
          ? "/assets/wings.svg"
          : "/assets/fries.svg";
}
export function hasLogo() {
  return existsSync(join(process.cwd(), "public/assets/logo.png"));
}
