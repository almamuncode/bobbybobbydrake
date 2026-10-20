import { GrillSmoke } from "@/components/ui/GrillSmoke";
import { UtensilsCrossed, Moon, Baby } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { foodImage } from "@/lib/assets";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
export function About({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <section className="about-editorial smoke-background border-y border-line bg-surface py-16 text-cream md:py-24">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div className="about-photo relative aspect-[4/3] overflow-hidden">
          <Image
            src={foodImage("honey-relish-dog-combo")}
            alt={
              locale === "en"
                ? "Golden hotdog buns with American-style hotdogs"
                : "노릇한 번에 담긴 아메리칸 스타일 핫도그"
            }
            fill
            sizes="(max-width:767px) 90vw, 45vw"
            className="food-photo object-cover"
          />
          <GrillSmoke className="card-smoke" />
        </div>
        <div>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[.18em]">
            {d.aboutEyebrow}
          </p>
          <h2 className="section-title whitespace-pre-line">{d.aboutTitle}</h2>
          <p className="mt-6 text-sm leading-7">{d.about}</p>
          <p lang="ko" className="mt-4 text-sm leading-6">
            캠프 험프리스 근처에서 즐기는 아메리칸 스타일 핫도그, 윙, 슬라이더,
            감자튀김.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[d.step1.split(" / ")[1], d.openLate, d.kids].map((x, i) => (
              <span key={x} className="about-chip">
                {i === 0 ? (
                  <UtensilsCrossed size={15} aria-hidden="true" />
                ) : i === 1 ? (
                  <Moon size={15} aria-hidden="true" />
                ) : (
                  <Baby size={15} aria-hidden="true" />
                )}
                {x}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
