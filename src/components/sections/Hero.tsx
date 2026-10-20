import { GrillSmoke } from "@/components/ui/GrillSmoke";
import Image from "next/image";
import { ArrowUpRight, MapPin, Flame, Asterisk } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { OpenNowBadge } from "@/components/visit/OpenNowBadge";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { foodImage } from "@/lib/assets";
import { menu } from "@/data/menu";
export function Hero({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const signature = menu.find((category) => category.id === "signature-dogs")
    ?.items[0];
  return (
    <section className="hero hero-editorial smoke-background relative isolate overflow-hidden text-cream">
      <Container className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="hero-location-dot" aria-hidden="true" />
            {d.location}
          </p>
          <h1 className="hero-title">
            <span className="hero-headline">
              {d.hero1.split(" ").map((word, i) => (
                <span
                  className={`hero-word ${i > 0 ? "hero-word-accent" : ""}`}
                  key={word}
                >
                  {word}{" "}
                </span>
              ))}
            </span>
            <span className="hero-promise">{d.hero2}</span>
          </h1>
          <p className="hero-description">{d.heroSub}</p>
          <p lang="ko" className="hero-korean">
            평택 안정리 / 캠프 험프리스 근처 아메리칸 핫도그 전문점
          </p>
          <div className="hero-actions">
            <a href="#menu" className="button hero-primary">
              {d.viewMenu}
              <span className="button-arrow">
                <ArrowUpRight size={19} />
              </span>
            </a>
            <a href="#visit" className="hero-location-link">
              <MapPin size={16} aria-hidden="true" />
              {d.hoursLocation}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-status">
            <OpenNowBadge locale={locale} />
          </div>
        </div>
        <div className="hero-visual">
          <span className="hero-watermark" aria-hidden="true">
            DNB
          </span>
          <div className="hero-orbit" aria-hidden="true" />
          <div className="hero-food-panel">
            <Image
              src={foodImage("chili-cheese-dog-combo")}
              alt={
                locale === "en"
                  ? "Chili Cheese Dog with melted cheese, waffle fries and a canned drink"
                  : "녹인 치즈를 올린 칠리 치즈 도그와 와플 프라이, 캔 음료"
              }
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 70vw, 50vw"
              loading="eager"
              priority
              className="hero-image food-photo object-cover"
            />
            <GrillSmoke className="hero-smoke" />
          </div>
          <div className="hero-stamp" aria-hidden="true">
            <span className="hero-stamp-label">{d.builtFresh}</span>
            <span className="hero-stamp-icon">
              <Flame size={34} strokeWidth={2} />
            </span>
            <span className="hero-stamp-caption">{d.loadedLove}</span>
          </div>
          {signature && (
            <a href="#signature-dogs" className="hero-dish-note">
              <span className="dish-note-icon">
                <Flame size={23} aria-hidden="true" />
              </span>
              <span>
                <span className="dish-note-label">
                  {d.popular} / DNB Signature
                </span>
                <strong>{signature.name[locale]}</strong>
              </span>
              <ArrowUpRight
                size={22}
                className="ml-auto shrink-0"
                aria-hidden="true"
              />
            </a>
          )}
          <span className="hero-photo-caption">01 / DOGS N BUNS</span>
        </div>
      </Container>
      <div className="brand-ribbon" aria-hidden="true">
        <div className="brand-ribbon-inner">
          <span>{d.buildIt}</span>
          <Asterisk />
          <span>{d.topIt}</span>
          <Asterisk />
          <span>{d.loveIt}</span>
          <Asterisk />
          <span className="ribbon-location">CAMP HUMPHREYS · PYEONGTAEK</span>
          <Asterisk />
        </div>
      </div>
    </section>
  );
}
