import { Camera } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { siteConfig } from "@/data/site-config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
export function Gallery({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <section id="photos" className="section-pad smoke-background">
      <Container>
        <SectionHeading
          icon={<Camera size={19} />}
          eyebrow="DOGS N BUNS"
          title={d.galleryTitle}
          description={d.gallerySub}
        />
        <GalleryGrid locale={locale} />
        {siteConfig.instagram && (
          <a
            className="button button-red mt-7"
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
          >
            {d.instagram}
          </a>
        )}
      </Container>
    </section>
  );
}
