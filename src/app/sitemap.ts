import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/data/site";

export const dynamic = "force-static";

const pages = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/stays/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/stays/strutture/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/stays/galleria/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/stays/contatti/", changeFrequency: "yearly", priority: 0.7 },
  { path: "/wears/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/living/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/projects/", changeFrequency: "monthly", priority: 0.5 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
