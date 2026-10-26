import type { Metadata } from "next";

import coraLiving from "@/assets/images/cora-living.jpg";
import { CoraSection } from "@/components/cora-section";
import { copy } from "@/data/copy";
import { createPageMetadata } from "@/lib/metadata";

export type BrandPageKey = "wears" | "living" | "projects";

const brandPaths: Record<BrandPageKey, string> = {
  wears: "/wears/",
  living: "/living/",
  projects: "/projects/",
};

export function brandMetadata(page: BrandPageKey): Metadata {
  const meta = copy.brand[page].meta;

  return createPageMetadata({
    title: meta.title,
    description: meta.description,
    path: brandPaths[page],
    absoluteTitle: true,
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

type BrandPageProps = {
  page: BrandPageKey;
};

export function BrandPage({ page }: BrandPageProps) {
  const brand = copy.brand;

  if (page === "living") {
    return (
      <CoraSection
        title={brand.living.title}
        subtitle={brand.living.subtitle}
        description={brand.living.description}
        image={coraLiving}
        alt={brand.living.alt}
      />
    );
  }

  if (page === "wears") {
    return (
      <CoraSection
        title={brand.wears.title}
        subtitle={brand.wears.subtitle}
        description={brand.wears.description}
        variant="dark"
      />
    );
  }

  return (
    <CoraSection
      title={brand.projects.title}
      subtitle={brand.projects.subtitle}
      description={brand.projects.description}
      variant="blank"
    />
  );
}
