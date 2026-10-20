import { en } from "./dictionaries/en";
import { ko } from "./dictionaries/ko";
import type { Locale } from "./config";
export function getDictionary(locale: Locale) {
  return locale === "ko" ? ko : en;
}
