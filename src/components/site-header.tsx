"use client";

import { Link } from "@/components/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { copy } from "@/data/copy";
import { navigation } from "@/data/navigation";

const normalizePath = (path: string) => path.replace(/\/$/, "") || "/";

export function SiteHeader() {
  const t = copy;
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const currentPath = normalizePath(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPopState = () => setMenuOpen(false);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);

    return () => {
      if (menuOpen) document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const desktopQuery = window.matchMedia("(min-width: 861px)");
    const onViewportChange = () => {
      if (desktopQuery.matches) setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktopQuery.addEventListener("change", onViewportChange);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktopQuery.removeEventListener("change", onViewportChange);
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? " is-scrolled" : ""}`}
    >
      <div className="container header__inner">
        <Link
          className="brand brand--cora"
          href="/"
          onClick={() => setMenuOpen(false)}
          aria-label={t.header.home}
        >
          <span className="brand__wordmark">CORA</span>
        </Link>

        <nav
          className={`nav${menuOpen ? " is-open" : ""}`}
          id="menu-principale"
          aria-label={t.header.mainNav}
        >
          <ul className="nav__list">
            {navigation.map((item) => {
              const active =
                currentPath === normalizePath(item.href) ||
                (item.href === "/stays/" && currentPath.startsWith("/stays"));

              return (
                <li key={item.href}>
                  <Link
                    className="nav__link"
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            className="btn btn--primary nav__cta"
            href="/stays/contatti/#richiesta"
            onClick={() => setMenuOpen(false)}
          >
            {t.header.book}
          </Link>
        </nav>

        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="menu-principale"
          aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle__bars" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
