import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { Hero } from "@/components/sections/Hero";
import { Favorites } from "@/components/sections/Favorites";
import { Menu } from "@/components/sections/Menu";
import { Toppings } from "@/components/sections/Toppings";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { Reviews } from "@/components/sections/Reviews";
import { Visit } from "@/components/sections/Visit";
import { RestaurantJsonLd } from "@/components/seo/RestaurantJsonLd";
import { Reveal } from "@/components/ui/Reveal";
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <>
      <SkipLink label={getDictionary(locale).skip} />
      <Header locale={locale} />
      <main id="main">
        <Hero locale={locale} />
        <Reveal>
          <Favorites locale={locale} />
        </Reveal>
        <Menu locale={locale} />
        <Reveal>
          <Toppings locale={locale} />
        </Reveal>
        <Gallery locale={locale} />
        <About locale={locale} />
        <Reviews locale={locale} />
        <Visit locale={locale} />
      </main>
      <Footer locale={locale} />
      <RestaurantJsonLd locale={locale} />
    </>
  );
}
