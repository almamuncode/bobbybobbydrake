export type LocalizedString = { en: string; ko: string };
export type MenuItem = {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  price: number;
  supplement?: boolean;
  favoriteDescription?: LocalizedString;
  image?: string;
  spicy?: boolean;
  popular?: boolean;
  kids?: boolean;
  flavors?: boolean;
};
export type MenuCategory = {
  id: string;
  name: LocalizedString;
  items: MenuItem[];
};
