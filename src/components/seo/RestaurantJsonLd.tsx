import { foodImage } from "@/lib/assets";
import { siteConfig } from "@/data/site-config";
import { schedule } from "@/data/hours";
import type { Locale } from "@/i18n/config";
export function RestaurantJsonLd({ locale }: { locale: Locale }) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const time = (n: number) =>
    `${String(Math.floor(n / 60) % 24).padStart(2, "0")}:${String(n % 60).padStart(2, "0")}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Dogs N Buns",
    url: siteConfig.siteUrl,
    servesCuisine: "American",
    priceRange: "₩₩",
    hasMenu: `${siteConfig.siteUrl}/${locale}/#menu`,
    image: `${siteConfig.siteUrl}${foodImage("chili-cheese-dog-combo")}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "19 Anjeong Sunhwan-ro, Paengseong-eup",
      addressLocality: "Pyeongtaek-si",
      addressRegion: "Gyeonggi-do",
      addressCountry: "KR",
    },
    openingHoursSpecification: Object.entries(schedule).flatMap(
      ([day, hours]) =>
        hours
          ? [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: `https://schema.org/${days[Number(day)]}`,
                opens: time(hours.open),
                closes: time(hours.close),
              },
            ]
          : [],
    ),
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    ...(siteConfig.rating !== null
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: siteConfig.rating,
            bestRating: 5,
          },
        }
      : {}),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c"),
      }}
    />
  );
}
