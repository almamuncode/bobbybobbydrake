import { UtensilsCrossed } from "lucide-react";
import { menu } from "@/data/menu";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuTabs } from "@/components/menu/MenuTabs";
import { MenuCategory } from "@/components/menu/MenuCategory";
import { NuggetComboPick } from "@/components/menu/NuggetComboPick";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
export function Menu({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <section
      id="menu"
      className="section-pad menu-section smoke-background border-t border-line bg-surface"
    >
      <Container>
        <div className="menu-intro">
          <SectionHeading
            icon={<UtensilsCrossed size={19} />}
            eyebrow={d.menuEyebrow}
            title={d.menuTitle}
            description={d.comboNote}
          />
          <p className="menu-count">{d.menuCount}</p>
        </div>
        <MenuTabs
          categories={menu.map((c) => ({ id: c.id, label: c.name[locale] }))}
          label={d.menu}
        />
        <div className="space-y-14 pt-10">
          {menu.map((c, i) => (
            <MenuCategory key={c.id} category={c} locale={locale} index={i} />
          ))}
        </div>
        <div className="mt-14">
          <NuggetComboPick locale={locale} />
        </div>
        <p className="mt-10 border-t border-line pt-6 text-center text-xs text-muted">
          {d.allergen}
        </p>
      </Container>
    </section>
  );
}
