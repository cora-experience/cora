"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Icon } from "@/components/icons";
import { copy } from "@/data/copy";
import {
  galleryFilters,
  galleryItems,
  type GalleryFilter,
} from "@/data/gallery";
import { revealDelay } from "@/lib/styles";

export function Gallery() {
  const [filter, setFilter] = useState<GalleryFilter>("tutte");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const visibleItems =
    filter === "tutte"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const isOpen = openIndex !== null;
  const currentItem =
    openIndex !== null ? visibleItems[openIndex] : undefined;

  const close = () => setOpenIndex(null);

  const step = (direction: -1 | 1) => {
    setOpenIndex((index) => {
      if (index === null || visibleItems.length === 0) return index;
      return (index + direction + visibleItems.length) % visibleItems.length;
    });
  };

  useEffect(() => {
    if (!isOpen) return;

    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
      if (lastFocusedRef.current?.isConnected) {
        lastFocusedRef.current.focus();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpenIndex(null);
        return;
      }

      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        const direction = event.key === "ArrowLeft" ? -1 : 1;
        setOpenIndex((index) => {
          if (index === null || visibleItems.length === 0) return index;
          return (
            (index + direction + visibleItems.length) % visibleItems.length
          );
        });
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, visibleItems.length]);

  const changeFilter = (value: GalleryFilter) => {
    setFilter(value);
    setOpenIndex(null);
  };

  return (
    <>
      <div
        className="filters reveal"
        role="group"
        aria-label={copy.gallery.ui.filterLabel}
      >
        {galleryFilters.map((item) => (
          <button
            key={item.value}
            className="filter"
            type="button"
            aria-pressed={filter === item.value}
            onClick={() => changeFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {visibleItems.map((item, index) => (
          <a
            key={item.id}
            className="gallery__item reveal"
            href={item.image.src}
            style={revealDelay((index % 3) * 60)}
            onClick={(event) => {
              event.preventDefault();
              setOpenIndex(index);
            }}
            onKeyDown={(event) => {
              if (event.key === " ") {
                event.preventDefault();
                setOpenIndex(index);
              }
            }}
          >
            <Image
              src={item.image}
              alt={item.alt}
              sizes="(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 33vw"
            />
            <span className="gallery__caption">{item.caption}</span>
          </a>
        ))}
      </div>

      <div
        ref={dialogRef}
        className={`lightbox${isOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal={isOpen}
        aria-label={copy.gallery.ui.dialogLabel}
        aria-hidden={!isOpen}
      >
        <div className="lightbox__bar">
          <span className="lightbox__counter" aria-live="polite">
            {openIndex !== null ? openIndex + 1 : 0} / {visibleItems.length}
          </span>
          <button
            ref={closeRef}
            className="lightbox__close"
            type="button"
            aria-label={copy.gallery.ui.close}
            onClick={close}
          >
            <Icon name="close" strokeWidth={1.8} />
          </button>
        </div>

        <div
          className="lightbox__stage"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <button
            className="lightbox__nav lightbox__nav--prev"
            type="button"
            aria-label={copy.gallery.ui.previous}
            onClick={() => step(-1)}
          >
            <Icon name="chevron-left" strokeWidth={1.8} />
          </button>
          {currentItem ? (
            <Image
              className="lightbox__img"
              src={currentItem.image}
              alt={currentItem.alt}
              sizes="100vw"
            />
          ) : null}
          <button
            className="lightbox__nav lightbox__nav--next"
            type="button"
            aria-label={copy.gallery.ui.next}
            onClick={() => step(1)}
          >
            <Icon name="chevron-right" strokeWidth={1.8} />
          </button>
        </div>

        <p className="lightbox__caption" aria-live="polite">
          {currentItem?.lightboxCaption}
        </p>
      </div>
    </>
  );
}
