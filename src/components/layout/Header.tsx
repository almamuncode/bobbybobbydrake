import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";
import { ActiveNav } from "./ActiveNav";
import { LanguageToggle } from "./LanguageToggle";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
export function Header({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const links = [
    { id: "favorites", label: d.favorites },
    { id: "menu", label: d.menu },
    { id: "toppings", label: d.toppings },
    { id: "photos", label: d.photos },
    { id: "visit", label: d.visit },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas">
      <Container className="relative flex h-20 items-center justify-between gap-3">
        <a
          href={`/${locale}/`}
          className="flex items-center gap-3"
          aria-label="Dogs N Buns home"
        >
          <Image
            src="/assets/logo.png"
            alt="Dogs N Buns"
            width={1536}
            height={455}
            sizes="(max-width: 767px) 190px, 220px"
            className="h-auto w-[190px] rounded-md md:w-[220px]"
          />
        </a>
        <ActiveNav links={links} label={d.navigation} />
        <div className="flex items-center gap-2">
          <LanguageToggle locale={locale} />
          <MobileNav links={links} label={d.navigation} closeLabel={d.close} />
        </div>
      </Container>
    </header>
  );
}
