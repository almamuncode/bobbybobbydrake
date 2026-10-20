import { Flame, Star, Baby } from "lucide-react";
import { GrillSmoke } from "@/components/ui/GrillSmoke";
import Image from "next/image";
import { foodImage } from "@/lib/assets";
import { formatKRW } from "@/lib/format";
import { wingFlavors, comboUpgrade } from "@/data/menu";
import type { MenuItem } from "@/types/menu";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Badge } from "./Badge";
export function MenuItemCard({
  item,
  locale,
  signature = false,
  featured,
}: {
  item: MenuItem;
  locale: Locale;
  signature?: boolean;
  featured?: string;
}) {
  const d = getDictionary(locale);
  const description =
    featured && item.favoriteDescription
      ? item.favoriteDescription
      : item.description;
  const Heading = featured ? "h3" : "h4";
  return (
    <article
      className={
        item.image
          ? `food-card group ${featured ? "featured-card" : ""}`
          : "text-card"
      }
    >
      {item.image && (
        <div className="food-photo-frame relative aspect-[4/3] overflow-hidden bg-raised">
          <Image
            src={foodImage(item.image)}
            alt={`${item.name[locale]} — ${description[locale]}`}
            fill
            sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 30vw"
            className="food-photo object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {featured && <GrillSmoke className="card-smoke" />}
          {featured && item.price > 0 && (
            <span className="price-tag featured-price">
              {formatKRW(item.price)}
            </span>
          )}
          {featured && (
            <span className="favorite-ribbon absolute left-4 top-4 rounded bg-red px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white">
              <Star size={12} fill="currentColor" aria-hidden="true" />{" "}
              {featured}
            </span>
          )}
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <Heading className="text-lg font-extrabold leading-snug">
            {item.name[locale]}
          </Heading>
          {!featured && item.price > 0 && (
            <span className="price-tag">
              {item.supplement ? "+" : ""}
              {formatKRW(item.price)}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {description[locale]}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.spicy && (
            <Badge>
              <Flame size={12} aria-hidden="true" /> {d.spicy}
            </Badge>
          )}
          {item.popular && !featured && (
            <Badge>
              <Star size={12} aria-hidden="true" /> {d.popular}
            </Badge>
          )}
          {item.kids && (
            <Badge>
              <Baby size={12} aria-hidden="true" /> {d.kids}
            </Badge>
          )}
          {signature && (
            <Badge>
              {d.combo} +{formatKRW(comboUpgrade)}
            </Badge>
          )}
        </div>
        {item.flavors && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {wingFlavors.map((f) => (
              <span className="flavor-chip" key={f.en}>
                {f[locale]}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
