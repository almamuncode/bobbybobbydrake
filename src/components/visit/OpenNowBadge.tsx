"use client";
import { useEffect, useState } from "react";
import { getOpenStatus, clockTime, type OpenStatus } from "@/lib/open-now";
import { schedule } from "@/data/hours";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
export function OpenNowBadge({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<OpenStatus | null>(null);
  useEffect(() => {
    const update = () => setStatus(getOpenStatus(new Date(), schedule));
    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);
  const d = getDictionary(locale);
  const days =
    locale === "en"
      ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      : ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <div className="status-badge" aria-live="polite">
      <span className={status?.isOpen ? "status-dot open-dot" : "status-dot"} />
      {status ? (
        status.isOpen ? (
          `${d[status.key]} · ${d.until} ${clockTime(status.time, locale)}`
        ) : (
          `${d.closed} · ${d.opens} ${days[status.day]} ${clockTime(status.time, locale)}`
        )
      ) : (
        <span className="inline-block h-4 w-48 animate-pulse rounded bg-line" />
      )}
    </div>
  );
}
