import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { FeatureCard } from "@/components/feature-card";
import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { StructureDetail } from "@/components/structure-detail";
import { copy } from "@/data/copy";
import { commonFeatures } from "@/data/features";
import { absoluteUrl } from "@/data/site";
import { structures } from "@/data/structures";
import { createPageMetadata } from "@/lib/metadata";

export function housesMetadata(): Metadata {
  const houses = copy.structures;

  return createPageMetadata({
    title: houses.meta.title,
    description: houses.meta.description,
    path: "/stays/strutture/",
    absoluteTitle: true,
    ogTitle: houses.meta.ogTitle,
    ogDescription: houses.meta.ogDescription,
  });
}

export function HousesPage() {
  const houses = copy.structures;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: houses.jsonLdName,
    itemListElement: structures.map((structure, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: structure.title,
      url: absoluteUrl(`/stays/strutture/#${structure.id}`),
    })),
  };

  return (
    <>
      <main id="contenuto">
        <PageHead
          eyebrow={houses.pageHead.eyebrow}
          title={houses.pageHead.title}
          text={houses.pageHead.text}
          current={houses.pageHead.current}
        />

        <section className="section">
          <div className="container">
            {structures.map((structure) => (
              <StructureDetail key={structure.id} structure={structure} />
            ))}
          </div>
        </section>

        <section
          className="section section--tinted"
          aria-labelledby="comuni-title"
        >
          <div className="container">
            <div className="section__head reveal">
              <div>
                <p className="eyebrow">{houses.common.eyebrow}</p>
                <h2 className="section__title" id="comuni-title">
                  {houses.common.titleLead} <em>{houses.common.titleEm}</em>
                </h2>
              </div>
            </div>
            <div className="features">
              {commonFeatures.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  delay={index * 70}
                />
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          title={houses.cta.title}
          text={houses.cta.text}
          buttonLabel={houses.cta.button}
          href="/stays/contatti/#richiesta"
        />
      </main>
      <JsonLd data={jsonLd} />
    </>
  );
}
