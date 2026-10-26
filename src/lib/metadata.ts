import type { Metadata } from "next";

import { absoluteUrl, ogImage, siteConfig } from "@/data/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  ogTitle?: string;
  ogDescription?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  ogTitle,
  ogDescription,
}: PageMetadataOptions): Metadata {
  const socialTitle = ogTitle ?? title;
  const socialDescription = ogDescription ?? description;
  const canonical = absoluteUrl(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "it_IT",
      siteName: siteConfig.name,
      title: socialTitle,
      description: socialDescription,
      url: canonical,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [ogImage.url],
    },
  };
}
