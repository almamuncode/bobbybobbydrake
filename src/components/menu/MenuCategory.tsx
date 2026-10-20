import { CategoryIcon } from "./CategoryIcon";
import type { MenuCategory as Category } from "@/types/menu";
import type { Locale } from "@/i18n/config";
import { MenuItemCard } from "./MenuItemCard";
import { SliderPricing } from "./SliderPricing";
export function MenuCategory({
  category,
  locale,
  index,
}: {
  category: Category;
  locale: Locale;
  index: number;
}) {
  return (
    <div id={category.id} className="menu-category">
      <div className="mb-6 flex items-center gap-4">
        <span className="category-icon">
          <CategoryIcon id={category.id} />
        </span>
        <span className="category-number">0{index + 1}</span>
        <h3 className="font-display text-2xl uppercase md:text-3xl">
          {category.name[locale]}
        </h3>
        <div className="h-px grow bg-line" />
      </div>
      {category.id === "sliders" && <SliderPricing locale={locale} />}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            locale={locale}
            signature={category.id === "signature-dogs"}
          />
        ))}
      </div>
    </div>
  );
}
