"use client";

import { usePathname } from "next/navigation";

import { Link } from "@/components/link";
import { copy } from "@/data/copy";
import { staysNavigation } from "@/data/navigation";

const normalizePath = (path: string) => path.replace(/\/$/, "") || "/";

export function StaysNav() {
  const t = copy;
  const pathname = usePathname();
  const currentPath = normalizePath(pathname);

  return (
    <div className="stays-bar">
      <div className="container stays-bar__inner">
        <Link className="stays-bar__label" href="/stays/">
          CORA STAYS
        </Link>
        <nav aria-label={t.staysNav.label}>
          <ul className="stays-bar__list">
            {staysNavigation.map((item) => {
              const active = currentPath === normalizePath(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
