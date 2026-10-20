import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
export function Reviews({ locale }: { locale: Locale }) {
  if (!siteConfig.reviews.length && siteConfig.rating === null) return null;
  return (
    <section className="section-pad">
      <Container>
        <h2 className="section-title">{getDictionary(locale).reviews}</h2>
        {siteConfig.rating !== null && (
          <p className="mt-4">★ {siteConfig.rating}/5</p>
        )}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {siteConfig.reviews.map((r, i) => (
            <blockquote className="food-card p-6" key={i}>
              <p>{r.text}</p>
              <cite className="mt-4 block">{r.name}</cite>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
