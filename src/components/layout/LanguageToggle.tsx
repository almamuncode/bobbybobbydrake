import type { Locale } from "@/i18n/config";
export function LanguageToggle({ locale }: { locale: Locale }) {
  return (
    <a
      className="language-toggle"
      href={`/${locale === "en" ? "ko" : "en"}/`}
      lang={locale === "en" ? "ko" : "en"}
      aria-label={locale === "en" ? "한국어로 보기" : "View in English"}
    >
      <span className={locale === "en" ? "font-extrabold" : "opacity-50"}>
        EN
      </span>
      <span aria-hidden="true" className="opacity-30">
        /
      </span>
      <span className={locale === "ko" ? "font-extrabold" : "opacity-50"}>
        KO
      </span>
    </a>
  );
}
