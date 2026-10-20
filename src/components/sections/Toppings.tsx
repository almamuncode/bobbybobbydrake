import { Layers3 } from "lucide-react";
import { toppings } from "@/data/menu";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
export function Toppings({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <section
      id="toppings"
      className="toppings-editorial smoke-background section-pad border-y border-line bg-canvas"
    >
      <Container>
        <SectionHeading
          icon={<Layers3 size={19} />}
          eyebrow={d.topEyebrow}
          title={d.topTitle}
          description={d.topSub}
        />
        <div className="grid items-start gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="top-guide">
            <p className="eyebrow">{d.step1}</p>
            <svg
              aria-label={
                locale === "en"
                  ? "Illustrated hotdog with toppings and mustard"
                  : "토핑과 머스터드를 올린 핫도그 일러스트"
              }
              role="img"
              viewBox="0 0 500 300"
              className="my-3 w-full -rotate-12"
            >
              <path
                d="M65 150Q65 65 160 65H355Q445 65 445 150Q445 235 355 235H160Q65 235 65 150"
                fill="var(--color-bun)"
                stroke="var(--color-charcoal)"
                strokeWidth="5"
              />
              <rect
                x="82"
                y="110"
                width="342"
                height="82"
                rx="41"
                fill="var(--color-red)"
                stroke="var(--color-charcoal)"
                strokeWidth="5"
              />
              <path
                d="M115 148Q140 110 165 150T215 150T265 150T315 150T365 150T405 150"
                fill="none"
                stroke="var(--color-mustard)"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <g fill="var(--color-cream)">
                <rect
                  x="145"
                  y="104"
                  width="14"
                  height="12"
                  transform="rotate(20 145 104)"
                />
                <rect x="245" y="174" width="14" height="12" />
                <rect x="335" y="104" width="14" height="12" />
              </g>
            </svg>
            <div className="flex justify-between gap-4">
              <span className="eyebrow">{d.step2}</span>
              <span className="eyebrow">{d.step3}</span>
            </div>
            <p className="mt-8 rounded-full border border-line px-4 py-3 text-center text-xs font-extrabold">
              {d.maxSauces}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {toppings.map((g, i) => (
              <div
                className={`rounded-2xl bg-surface p-5 ${i === 3 ? "sm:row-span-2" : ""}`}
                key={g.name.en}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="font-extrabold">{g.name[locale]}</h3>
                  <span className="shrink-0 text-[10px] font-bold text-accent">
                    {g.rule[locale]}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <span
                      className="rounded-lg border border-line px-2.5 py-2 text-xs"
                      key={t.en}
                    >
                      <span aria-hidden="true" className="mr-1 text-accent">
                        ✦
                      </span>
                      {t[locale]}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
