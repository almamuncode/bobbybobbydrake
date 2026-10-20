import { sliderPricing } from "@/data/menu";
import { formatKRW } from "@/lib/format";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
export function SliderPricing({ locale }: { locale: Locale }) {
  return (
    <div className="mb-7 overflow-hidden rounded-2xl border border-line bg-surface">
      <table className="w-full text-left">
        <caption className="p-4 text-left text-sm text-muted">
          {getDictionary(locale).slidersNote}
        </caption>
        <tbody>
          {sliderPricing.map((p) => (
            <tr key={p.name.en} className="border-t border-line">
              <th scope="row" className="p-4 text-sm font-bold">
                {p.name[locale]}
              </th>
              <td className="p-4 text-right font-extrabold">
                {formatKRW(p.price)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
