import { Noto_Sans_KR } from "next/font/google";
import "../globals.css";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { foodImage, hasLogo } from "@/lib/assets";
import { siteConfig } from "@/data/site-config";
const korean = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-korean",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#111111",
  colorScheme: "dark",
};
export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const title =
    locale === "en"
      ? "Dogs N Buns | American Hotdogs, Wings & Sliders in Pyeongtaek"
      : "Dogs N Buns | 평택 아메리칸 핫도그, 윙 & 슬라이더";
  const description =
    locale === "en"
      ? "Dogs N Buns serves American-style hotdogs, signature dogs, sliders, wings, loaded fries, chicken nuggets, kids meals and drinks near Camp Humphreys in Anjeong-ri, Pyeongtaek."
      : "평택 안정리 캠프 험프리스 근처 Dogs N Buns에서 아메리칸 핫도그, 시그니처 도그, 슬라이더, 윙, 로디드 프라이, 치킨 너겟, 키즈 밀과 음료를 즐겨보세요.";
  const images = [
    {
      url: foodImage("chili-cheese-dog-combo"),
      width: 1000,
      height: 1000,
      alt: "Dogs N Buns American-style hotdogs",
    },
  ];
  return {
    metadataBase: new URL(siteConfig.siteUrl),
    icons: { icon: hasLogo() ? "/assets/logo.png" : "/assets/icon.svg" },
    title,
    description,
    alternates: {
      canonical: `/${locale}/`,
      languages: { en: "/en/", ko: "/ko/", "x-default": "/en/" },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${siteConfig.siteUrl}/${locale}/`,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      alternateLocale: locale === "ko" ? "en_US" : "ko_KR",
      siteName: "Dogs N Buns",
      images,
    },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale}>
      <body className={korean.variable}>{children}</body>
    </html>
  );
}
