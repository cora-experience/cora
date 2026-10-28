import type { Metadata } from "next";

import { CoraTile } from "@/components/cora-tile";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/components/link";
import { copy } from "@/data/copy";
import { staysNavigation } from "@/data/navigation";
import { absoluteUrl, siteConfig } from "@/data/site";
import { structures } from "@/data/structures";
import { createPageMetadata } from "@/lib/metadata";

export function homeMetadata(): Metadata {
  return createPageMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
    path: "/",
    absoluteTitle: true,
    ogTitle: copy.home.meta.ogTitle,
    ogDescription: copy.home.meta.ogDescription,
  });
}

export function HomePage() {
  const year = new Date().getFullYear();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CORA",
    description: siteConfig.description,
    url: absoluteUrl("/"),
    email: siteConfig.email,
  };

  return (
    <>
      <a className="skip-link" href="#contenuto">
        {copy.skipToContent}
      </a>
      <main className="cora-home" id="contenuto">
        <div className="cora-home__inner">
          <header className="cora-home__head">
            <h1 className="cora-wordmark">CORA</h1>
            <p className="cora-tagline">{copy.home.tagline}</p>
          </header>

          <div className="cora-rule" aria-hidden="true" />

          <div className="cora-grid">
            {structures.map((structure, index) => (
              <CoraTile
                key={structure.id}
                title={structure.title}
                subtitle={structure.cardMeta}
                href={`/stays/strutture/#${structure.id}`}
                image={structure.image}
                alt={structure.alt}
                delay={index * 80}
                priority={index === 0}
              />
            ))}
          </div>

          <footer className="cora-home__footer">
            <span>&copy; {year} CORA</span>
            <nav aria-label={copy.footer.explore}>
              <ul>
                {staysNavigation.slice(1).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </footer>
        </div>
      </main>
      <JsonLd data={jsonLd} />
    </>
  );
}
