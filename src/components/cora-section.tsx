import Image from "next/image";
import { Link } from "@/components/link";
import type { StaticImageData } from "next/image";

import { Icon } from "@/components/icons";
import { copy } from "@/data/copy";
import { siteConfig } from "@/data/site";

type CoraSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  image?: StaticImageData;
  alt?: string;
  variant?: "image" | "dark" | "blank";
};

export function CoraSection({
  title,
  subtitle,
  description,
  image,
  alt,
  variant = "image",
}: CoraSectionProps) {
  const t = copy;

  return (
    <main className="cora-section" id="contenuto">
      <section className="cora-section__hero" aria-labelledby="section-title">
        <div className="container cora-section__grid">
          <div className={`cora-section__media cora-section__media--${variant}`}>
            {image ? (
              <Image
                src={image}
                alt={alt ?? ""}
                sizes="(max-width: 860px) 100vw, 50vw"
                priority
              />
            ) : null}
            {variant === "dark" ? (
              <span className="cora-section__dark-mark" aria-hidden="true">
                CORA
              </span>
            ) : null}
            {variant === "blank" ? (
              <span className="cora-section__blank" aria-hidden="true" />
            ) : null}
          </div>

          <div className="cora-section__body">
            <p className="eyebrow">{t.brand.comingSoon}</p>
            <h1 className="cora-section__title" id="section-title">
              {title}
            </h1>
            <p className="cora-section__subtitle">{subtitle}</p>
            <p className="cora-section__text">{description}</p>
            <div className="cora-section__actions">
              <Link className="btn btn--primary" href="/">
                {t.brand.back}
                <Icon name="arrow" strokeWidth={1.8} />
              </Link>
              <a className="link-arrow" href={`mailto:${siteConfig.email}`}>
                {t.brand.write}
                <Icon name="arrow" strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
