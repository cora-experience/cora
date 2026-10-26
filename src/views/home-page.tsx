import type { Metadata } from "next";

import coraLiving from "@/assets/images/cora-living.jpg";
import portaroteseCamera from "@/assets/images/portarotese-camera.jpg";
import { CoraTile } from "@/components/cora-tile";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/components/link";
import { copy } from "@/data/copy";
import { absoluteUrl, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export function homeMetadata(): Metadata {
  return createPageMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
    path: "/",
    absoluteTitle: true,
    ogTitle: copy.home.meta.ogTitle,
    ogDescription: siteConfig.shortDescription,
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
            <CoraTile
              title="CORA STAYS"
              subtitle="Hospitality"
              href="/stays/"
              image={portaroteseCamera}
              alt={copy.home.tiles.staysAlt}
              delay={0}
              priority
            />
            <CoraTile
              title="CORA WEARS"
              subtitle="Fashion"
              href="/wears/"
              variant="dark"
              delay={80}
            />
            <CoraTile
              title="CORA LIVING"
              subtitle="Lifestyle"
              href="/living/"
              image={coraLiving}
              alt={copy.home.tiles.livingAlt}
              delay={160}
            />
            <CoraTile
              title="CORA PROJECTS"
              subtitle="New ventures"
              href="/projects/"
              variant="blank"
              delay={240}
            />
          </div>

          <footer className="cora-home__footer">
            <span>&copy; {year} CORA</span>
            <Link href="/stays/contatti/">{copy.home.contact}</Link>
          </footer>
        </div>
      </main>
      <JsonLd data={jsonLd} />
    </>
  );
}
