"use client";
import { useState, useEffect } from "react";
import { schedule } from "@/data/hours";
import { clockTime, seoulParts } from "@/lib/open-now";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
export function HoursTable({ locale }: { locale: Locale }) {
  const [day, setDay] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setDay(seoulParts(new Date()).day);
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);
  const d = getDictionary(locale);
  const days =
    locale === "en"
      ? [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ]
      : ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  return (
    <table className="w-full text-left text-xs">
      <tbody>
        {[1, 2, 3, 4, 5, 6, 0].map((i) => {
          const hours = schedule[i];
          return (
            <tr
              className={day === i ? "bg-mustard/20" : "border-b border-line"}
              key={i}
            >
              <th scope="row" className="rounded-l-lg px-3 py-3 font-semibold">
                {days[i]}
                {day === i && (
                  <span className="ml-2 text-[9px] font-extrabold text-accent">
                    {d.today}
                  </span>
                )}
              </th>
              <td className="rounded-r-lg px-3 py-3 text-right">
                {hours
                  ? `${clockTime(hours.open, locale)} – ${i === 0 ? (locale === "en" ? "Mon " : "월 ") : ""}${clockTime(hours.close % 1440, locale)}`
                  : d.closed}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
