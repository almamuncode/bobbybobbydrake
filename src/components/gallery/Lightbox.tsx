"use client";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
export function Lightbox({
  images,
  labels,
}: {
  images: { src: string; alt: string }[];
  labels: { close: string; previous: string; next: string; gallery: string };
}) {
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const touch = useRef<number | null>(null);
  const move = useCallback(
    (offset: number) =>
      setIndex((i) =>
        i === null ? null : (i + offset + images.length) % images.length,
      ),
    [images.length],
  );
  const close = useCallback(() => {
    dialog.current?.close();
    setIndex(null);
    lastFocus.current?.focus();
  }, []);
  useEffect(() => {
    if (index === null) return;
    const node = dialog.current;
    if (!node) return;
    if (!node.open) node.showModal();
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "Tab") {
        const list = Array.from(
          node.querySelectorAll<HTMLButtonElement>("button"),
        );
        const first = list[0],
          last = list[list.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    node.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = before;
      node.removeEventListener("keydown", handler);
    };
  }, [index, close, move]);
  const current = index === null ? null : images[index];
  return (
    <>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <button
            key={img.alt}
            className="group relative overflow-hidden rounded-2xl bg-charcoal text-left"
            onClick={(e) => {
              lastFocus.current = e.currentTarget;
              setIndex(i);
            }}
            aria-label={`${labels.gallery}: ${img.alt}`}
          >
            <span className="relative block aspect-[4/3]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width:639px) 90vw, (max-width:1023px) 45vw, 30vw"
                className="food-photo object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </span>
            <span className="gallery-caption">
              {img.alt}
              <Expand size={15} />
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-modal="true"
        aria-label={labels.gallery}
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onTouchStart={(e) => {
          touch.current = e.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          const end = e.changedTouches[0]?.clientX;
          if (
            touch.current !== null &&
            end !== undefined &&
            Math.abs(touch.current - end) > 45
          )
            move(touch.current > end ? 1 : -1);
          touch.current = null;
        }}
      >
        {current && (
          <div className="relative mx-auto w-full max-w-5xl">
            <button
              autoFocus
              className="lightbox-close icon-button"
              aria-label={labels.close}
              onClick={close}
            >
              <X />
            </button>
            <div className="relative aspect-[4/3] max-h-[75vh]">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-3 p-4 text-cream">
              <button
                className="icon-button"
                aria-label={labels.previous}
                onClick={() => move(-1)}
              >
                <ChevronLeft />
              </button>
              <p className="text-center text-sm" aria-live="polite">
                {current.alt} · {(index ?? 0) + 1}/{images.length}
              </p>
              <button
                className="icon-button"
                aria-label={labels.next}
                onClick={() => move(1)}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
