import { MapPin, ArrowUpRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HoursTable } from "@/components/visit/HoursTable";
import { CopyAddressButton } from "@/components/visit/CopyAddressButton";
import { OpenNowBadge } from "@/components/visit/OpenNowBadge";
import { siteConfig } from "@/data/site-config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
export function Visit({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <section id="visit" className="section-pad visit-editorial smoke-background">
      <Container>
        <SectionHeading
          icon={<MapPin size={19} />}
          eyebrow={d.visitSub}
          title={d.visitTitle}
        />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <iframe
              className="h-80 w-full rounded-2xl border border-line bg-raised"
              title={
                locale === "en"
                  ? "Dogs N Buns location in Anjeong-ri"
                  : "Dogs N Buns 안정리 위치"
              }
              src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.addressKo)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="mt-7 flex gap-3">
              <MapPin className="shrink-0 text-accent" size={22} />
              <div>
                <h3 className="eyebrow mb-3">{d.find}</h3>
                <p className="font-bold" lang="ko">
                  {siteConfig.addressKo}
                </p>
                <p
                  className="mt-2 max-w-md text-sm leading-6 text-muted"
                  lang="en"
                >
                  {siteConfig.addressEn}
                </p>
              </div>
            </div>
            <div className="mt-5">
              <CopyAddressButton
                address={siteConfig.addressKo}
                label={d.copy}
                copied={d.copied}
                error={d.copyFail}
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {siteConfig.maps.map((map) => (
                <a
                  key={map.name}
                  href={map.url}
                  target="_blank"
                  rel="noreferrer"
                  className="map-link"
                >
                  {d.mapOpen} {map.name}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
            {siteConfig.phone && (
              <a
                className="button button-red mt-4"
                href={`tel:${siteConfig.phone}`}
              >
                <Phone size={16} />
                {d.call} {siteConfig.phone}
              </a>
            )}
          </div>
          <div className="self-start rounded-2xl border border-line bg-surface p-5 md:p-7">
            <h3 className="eyebrow mb-5">{d.hours}</h3>
            <div className="mb-5">
              <OpenNowBadge locale={locale} />
            </div>
            <HoursTable locale={locale} />
            <p className="mt-4 text-[10px] text-muted">
              {locale === "en"
                ? "All hours in Korea Standard Time (Asia/Seoul). Closing times are the following morning."
                : "한국 표준시 기준입니다. 마감 시간은 다음 날 새벽입니다."}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
