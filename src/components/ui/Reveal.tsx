"use client";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          node.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    node.classList.add("reveal-ready");
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref}>{children}</div>;
}
