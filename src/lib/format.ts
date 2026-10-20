export function formatKRW(value: number) {
  return `₩${new Intl.NumberFormat("en-US").format(value)}`;
}
