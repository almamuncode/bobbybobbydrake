import { Flame } from "lucide-react";
import type { MenuItem } from "@/types/menu";
import { menu, favoriteIds } from "@/data/menu";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
export function Favorites({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const items = menu.flatMap<MenuItem>((c) => c.items);
  return (
    <section
      id="favorites"
      className="section-pad favorites-section smoke-background"
    >
      <Container>
        <SectionHeading
          icon={<Flame size={19} />}
          eyebrow={d.start}
          title={d.favoritesShort}
          description={d.favoriteSub}
        />
        <div className="favorites-grid">
          {favoriteIds.map((id, i) => {
            const item = items.find((x) => x.id === id);
            return item ? (
              <MenuItemCard
                key={id}
                item={item}
                locale={locale}
                featured={[d.popular, d.seller, d.value][i]}
              />
            ) : null;
          })}
        </div>
      </Container>
    </section>
  );
}
