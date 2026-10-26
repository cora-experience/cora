import type { ReactNode } from "react";

import { Link } from "@/components/link";
import { copy } from "@/data/copy";

type PageHeadProps = {
  eyebrow: string;
  title: ReactNode;
  text: ReactNode;
  current: string;
};

export function PageHead({ eyebrow, title, text, current }: PageHeadProps) {
  return (
    <section className="page-head" aria-labelledby="page-title">
      <div className="container">
        <nav className="breadcrumb" aria-label={copy.pageHead.breadcrumb}>
          <Link href="/stays/">CORA STAYS</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{current}</span>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-head__title" id="page-title">
          {title}
        </h1>
        <p className="page-head__text">{text}</p>
      </div>
    </section>
  );
}
