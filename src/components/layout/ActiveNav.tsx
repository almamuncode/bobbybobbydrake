"use client";
import { useEffect, useState } from "react";
export function ActiveNav({
  links,
  label,
}: {
  links: { id: string; label: string }[];
  label: string;
}) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-15% 0px -65% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [links]);
  return (
    <nav aria-label={label} className="hidden items-center gap-7 md:flex">
      {links.map((l) => (
        <a
          key={l.id}
          href={`#${l.id}`}
          className="nav-link"
          aria-current={active === l.id ? "location" : undefined}
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}
