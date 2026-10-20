export const locales = ["en", "ko"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale = "en";
export function isLocale(x: string): x is Locale {
  return x === "en" || x === "ko";
}
