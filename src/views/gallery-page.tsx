import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { Gallery } from "@/components/gallery";
import { PageHead } from "@/components/page-head";
import { copy } from "@/data/copy";
import { createPageMetadata } from "@/lib/metadata";

export function galleryMetadata(): Metadata {
  const gallery = copy.gallery;

  return createPageMetadata({
    title: gallery.meta.title,
    description: gallery.meta.description,
    path: "/stays/galleria/",
    absoluteTitle: true,
    ogTitle: gallery.meta.ogTitle,
    ogDescription: gallery.meta.ogDescription,
  });
}

export function GalleryPage() {
  const gallery = copy.gallery;

  return (
    <main id="contenuto">
      <PageHead
        eyebrow={gallery.pageHead.eyebrow}
        title={gallery.pageHead.title}
        text={gallery.pageHead.text}
        current={gallery.pageHead.current}
      />

      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>

      <CtaBand
        title={gallery.cta.title}
        text={gallery.cta.text}
        buttonLabel={gallery.cta.button}
        href="/stays/contatti/#richiesta"
      />
    </main>
  );
}
