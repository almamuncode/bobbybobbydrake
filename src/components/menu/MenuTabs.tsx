"use client";
import { CategoryIcon } from "./CategoryIcon";
import { useEffect, useState, useRef } from "react";
export function MenuTabs({
  categories,
  label,
}: {
  categories: { id: string; label: string }[];
  label: string;
}) {
  const [active, setActive] = useState(categories[0]?.id ?? "");
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-170px 0px -55% 0px", threshold: 0 },
    );
    categories.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [categories]);
  useEffect(() => {
    const el = nav.current?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (el && nav.current) {
      const parent = nav.current;
      parent.scrollTo({
        left:
          el.offsetLeft -
          parent.offsetLeft -
          parent.clientWidth / 2 +
          el.clientWidth / 2,
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    }
  }, [active]);
  return (
    <nav ref={nav} aria-label={label} className="menu-tabs">
      {categories.map((c) => (
        <a
          key={c.id}
          data-id={c.id}
          href={`#${c.id}`}
          onClick={() => setActive(c.id)}
          aria-current={active === c.id ? "location" : undefined}
        >
          <CategoryIcon id={c.id} size={16} />
          {c.label}
        </a>
      ))}
    </nav>
  );
}
