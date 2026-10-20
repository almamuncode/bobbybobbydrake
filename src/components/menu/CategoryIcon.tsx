import {
  UtensilsCrossed,
  Flame,
  Sandwich,
  CookingPot,
  Drumstick,
  Baby,
  CupSoda,
  type LucideIcon,
} from "lucide-react";
const icons: Record<string, LucideIcon> = {
  "build-your-own": UtensilsCrossed,
  "signature-dogs": Flame,
  sliders: Sandwich,
  fries: CookingPot,
  "wings-nuggets": Drumstick,
  kids: Baby,
  "drinks-extras": CupSoda,
};
export function CategoryIcon({ id, size = 22 }: { id: string; size?: number }) {
  const Icon = icons[id] ?? UtensilsCrossed;
  return <Icon size={size} strokeWidth={1.8} aria-hidden="true" />;
}
