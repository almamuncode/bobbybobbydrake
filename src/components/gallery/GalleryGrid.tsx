import { gallery } from "@/data/gallery";
import { foodImage } from "@/lib/assets";
import { Lightbox } from "./Lightbox";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
export function GalleryGrid({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <Lightbox
      images={gallery.map((g) => ({
        src: foodImage(g.image),
        alt: g.name[locale],
      }))}
      labels={{
        close: d.close,
        previous: d.previous,
        next: d.next,
        gallery: d.gallery,
      }}
    />
  );
}
