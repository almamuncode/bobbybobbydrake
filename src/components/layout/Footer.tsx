import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
export function Footer({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <footer className="bg-charcoal py-12 text-cream">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <a
              href={`/${locale}/`}
              className="inline-flex min-h-11 items-center"
            >
              <Image
                src="/assets/logo.png"
                alt="Dogs N Buns"
                width={1536}
                height={455}
                sizes="250px"
                className="h-auto w-[250px] rounded-md"
              />
            </a>
            <p className="mt-4 max-w-md text-xs leading-6 text-cream/70">
              {d.footerTag}
            </p>
          </div>
          <nav
            aria-label={d.navigation}
            className="flex flex-wrap gap-6 text-sm"
          >
            {["favorites", "menu", "toppings", "photos", "visit"].map((id) => (
              <a className="py-3" key={id} href={`#${id}`}>
                {id === "favorites"
                  ? d.favorites
                  : id === "menu"
                    ? d.menu
                    : id === "toppings"
                      ? d.toppings
                      : id === "photos"
                        ? d.photos
                        : d.visit}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-wrap justify-between gap-4 border-t border-cream/20 pt-6 text-[10px] text-cream/70">
          <p>© 2026 Dogs N Buns. {d.rights}</p>
          <p>
            {locale === "en"
              ? "Wed–Sun 10:30 AM until late · Mon–Tue closed"
              : "수–일 오전 10:30부터 늦은 밤까지 · 월–화 휴무"}
          </p>
          {siteConfig.instagram && (
            <a href={siteConfig.instagram}>Instagram ↗</a>
          )}
        </div>
      </Container>
    </footer>
  );
}
