import Image from "next/image";
import { menu } from "@/data/menu";
import { foodImage } from "@/lib/assets";
import { formatKRW } from "@/lib/format";
import type { MenuItem } from "@/types/menu";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export function NuggetComboPick({ locale }: { locale: Locale }) {
  const item: MenuItem | undefined = menu
    .find((category) => category.id === "wings-nuggets")
    ?.items.find((menuItem) => menuItem.id === "10-nugget-combo");

  if (!item?.image) return null;

  const d = getDictionary(locale);

  return (
    <article className="combo-pick">
      <div className="combo-pick-photo relative aspect-[4/3] overflow-hidden md:aspect-auto">
        <Image
          src={foodImage(item.image)}
          alt={item.name[locale]}
          fill
          sizes="(max-width: 767px) 90vw, 50vw"
          className="food-photo object-cover"
        />
      </div>
      <div className="combo-pick-copy">
        <p className="eyebrow text-ember">{d.comboPick}</p>
        <h3 className="mt-3 font-display text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
          {item.name[locale]}
        </h3>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted md:text-base">
          {d.nuggetComboFeatureDescription}
        </p>
        <p className="mt-6 text-2xl font-black text-mustard">
          {formatKRW(item.price)}
        </p>
      </div>
    </article>
  );
}
