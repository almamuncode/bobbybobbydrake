import type { WeeklySchedule } from "@/data/hours";
export function seoulParts(now: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Seoul",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const get = (key: string) => parts.find((p) => p.type === key)?.value ?? "";
  return {
    day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(
      get("weekday"),
    ),
    minute: Number(get("hour")) * 60 + Number(get("minute")),
  };
}
export type OpenStatus = {
  isOpen: boolean;
  closingSoon: boolean;
  key: "open" | "closed" | "closingSoon";
  day: number;
  time: number;
};
export function getOpenStatus(now: Date, schedule: WeeklySchedule): OpenStatus {
  const { day, minute } = seoulParts(now);
  const previous = schedule[(day + 6) % 7];
  const today = schedule[day];
  const active =
    previous && minute < previous.close - 1440
      ? { hours: previous, remaining: previous.close - 1440 - minute }
      : today && minute >= today.open && minute < today.close
        ? { hours: today, remaining: today.close - minute }
        : null;
  if (active)
    return {
      isOpen: true,
      closingSoon: active.remaining <= 60,
      key: active.remaining <= 60 ? "closingSoon" : "open",
      day,
      time: active.hours.close % 1440,
    };
  for (let offset = 0; offset <= 7; offset++) {
    const next = schedule[(day + offset) % 7];
    if (next && (offset > 0 || minute < next.open))
      return {
        isOpen: false,
        closingSoon: false,
        key: "closed",
        day: (day + offset) % 7,
        time: next.open,
      };
  }
  return { isOpen: false, closingSoon: false, key: "closed", day, time: 0 };
}
export function clockTime(minutes: number, locale: "en" | "ko") {
  const h = Math.floor(minutes / 60);
  return locale === "ko"
    ? `${h < 12 ? "오전" : "오후"} ${h % 12 || 12}:${String(minutes % 60).padStart(2, "0")}`
    : `${h % 12 || 12}:${String(minutes % 60).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
}
