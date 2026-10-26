import type { Metadata } from "next";
import Image from "next/image";

import portaroteseCamera from "@/assets/images/portarotese-camera.jpg";
import { CtaBand } from "@/components/cta-band";
import { FeatureCard } from "@/components/feature-card";
import { HomeGallery } from "@/components/home-gallery";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/components/link";
import { StructureCard } from "@/components/structure-card";
import { copy } from "@/data/copy";
import { homeFeatures } from "@/data/features";
import { absoluteUrl, ogImage, siteConfig, socials } from "@/data/site";
import { structures } from "@/data/structures";
import { createPageMetadata } from "@/lib/metadata";
import { revealDelay } from "@/lib/styles";

export function staysMetadata(): Metadata {
  const stays = copy.stays;

  return createPageMetadata({
    title: stays.meta.title,
    description: stays.meta.description,
    path: "/stays/",
    absoluteTitle: true,
    ogTitle: stays.meta.ogTitle,
    ogDescription: stays.meta.ogDescription,
  });
}

export function StaysPage() {
  const stays = copy.stays;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "CORA STAYS",
    description: stays.jsonLdDescription,
    url: absoluteUrl("/stays/"),
    image: ogImage.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salerno",
      addressRegion: "Campania",
      addressCountry: "IT",
    },
    sameAs: socials.map((social) => social.href),
  };

  return (
    <>
      <main id="contenuto">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__panel">
            <p className="hero__wordmark">
              CORA <span>STAYS</span>
            </p>
            <p className="eyebrow">{stays.hero.eyebrow}</p>
            <h1 className="hero__title" id="hero-title">
              {stays.hero.titleLead}
              <br />
              <em>{stays.hero.titleEm}</em>
            </h1>
            <p className="hero__text">{stays.hero.text}</p>
            <div className="hero__actions">
              <Link className="btn btn--primary" href="/stays/strutture/">
                {stays.hero.primary}
                <Icon name="arrow" strokeWidth={1.8} />
              </Link>
              <Link className="btn btn--ghost" href="/stays/contatti/">
                {stays.hero.secondary}
              </Link>
            </div>
            <ul className="hero__points">
              {stays.hero.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="hero__photo">
            <Image
              src={portaroteseCamera}
              alt={stays.hero.imageAlt}
              sizes="(max-width: 960px) 100vw, 50vw"
              priority
            />
            <p className="hero__badge">
              <span>{stays.hero.badgePlace}</span>
              {stays.hero.badgeArea}
            </p>
          </div>
        </section>

        <section className="stats" aria-label={stays.statsLabel}>
          <div className="container">
            <div className="stats__grid">
              {stays.stats.map((stat) => (
                <div className="stats__item" key={stat.label}>
                  <span className="stats__value">{stat.value}</span>
                  <span className="stats__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="strutture-title">
          <div className="container">
            <div className="section__head reveal">
              <div>
                <p className="eyebrow">{stays.houses.eyebrow}</p>
                <h2 className="section__title" id="strutture-title">
                  {stays.houses.titleLead} <em>{stays.houses.titleEm}</em>
                </h2>
                <p className="section__lead">{stays.houses.lead}</p>
              </div>
              <Link className="link-arrow" href="/stays/strutture/">
                {stays.houses.link}
                <Icon name="arrow" strokeWidth={1.8} />
              </Link>
            </div>

            <div className="cards">
              {structures.map((structure, index) => (
                <StructureCard
                  key={structure.id}
                  structure={structure}
                  delay={(index % 3) * 60}
                />
              ))}

              <article
                className="card card--cta reveal"
                style={revealDelay(120)}
              >
                <div className="card__body">
                  <p className="eyebrow">{stays.houses.ctaEyebrow}</p>
                  <h3 className="card__title">{stays.houses.ctaTitle}</h3>
                  <p className="card__text">{stays.houses.ctaText}</p>
                  <Link className="btn btn--light" href="/stays/contatti/">
                    {stays.houses.ctaButton}
                    <Icon name="arrow" strokeWidth={1.8} />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          className="section section--tinted"
          aria-labelledby="perche-title"
        >
          <div className="container">
            <div className="section__head reveal">
              <div>
                <p className="eyebrow">{stays.why.eyebrow}</p>
                <h2 className="section__title" id="perche-title">
                  {stays.why.titleLead} <em>{stays.why.titleEm}</em>
                </h2>
              </div>
            </div>

            <div className="features">
              {homeFeatures.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  delay={index * 70}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="quote-band" aria-label={stays.quote.label}>
          <div className="container container--narrow">
            <blockquote className="reveal">
              <p>{stays.quote.text}</p>
              <footer>{stays.quote.footer}</footer>
            </blockquote>
          </div>
        </section>

        <section className="section" aria-labelledby="galleria-title">
          <div className="container">
            <div className="section__head reveal">
              <div>
                <p className="eyebrow">{stays.gallery.eyebrow}</p>
                <h2 className="section__title" id="galleria-title">
                  {stays.gallery.titleLead} <em>{stays.gallery.titleEm}</em>
                </h2>
                <p className="section__lead">{stays.gallery.lead}</p>
              </div>
              <Link className="link-arrow" href="/stays/galleria/">
                {stays.gallery.link}
                <Icon name="arrow" strokeWidth={1.8} />
              </Link>
            </div>

            <HomeGallery />
          </div>
        </section>

        <CtaBand
          title={stays.cta.title}
          text={stays.cta.text}
          buttonLabel={stays.cta.button}
          href="/stays/contatti/#richiesta"
        />
      </main>
      <JsonLd data={jsonLd} />
    </>
  );
}
