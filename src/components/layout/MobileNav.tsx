"use client";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
export function MobileNav({
  links,
  label,
  closeLabel,
}: {
  links: { id: string; label: string }[];
  label: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
      if (e.key === "Tab") {
        const items = [
          button.current,
          ...Array.from(
            panel.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
          ),
        ].filter(
          (el): el is HTMLButtonElement | HTMLAnchorElement => el !== null,
        );
        const first = items[0],
          last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);
  return (
    <div className="md:hidden">
      <button
        ref={button}
        className="icon-button"
        aria-label={open ? closeLabel : label}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <div
          ref={panel}
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full border-t border-line bg-canvas p-5 shadow-xl"
        >
          {links.map((link) => (
            <a
              className="block rounded-lg p-3 font-bold"
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setOpen(false);
                button.current?.focus();
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
