import Image from "next/image";
import { Link } from "@/components/link";
import type { StaticImageData } from "next/image";

import { revealDelay } from "@/lib/styles";

type CoraTileProps = {
  title: string;
  subtitle: string;
  href: string;
  image?: StaticImageData;
  alt?: string;
  variant?: "image" | "dark" | "blank";
  delay?: number;
  priority?: boolean;
};

export function CoraTile({
  title,
  subtitle,
  href,
  image,
  alt,
  variant = "image",
  delay = 0,
  priority = false,
}: CoraTileProps) {
  return (
    <Link
      className={`cora-tile cora-tile--${variant}`}
      href={href}
      style={revealDelay(delay)}
    >
      <div className="cora-tile__media">
        {image ? (
          <Image
            src={image}
            alt={alt ?? ""}
            sizes="(max-width: 720px) 45vw, 420px"
            priority={priority}
          />
        ) : null}
        {variant === "dark" ? (
          <span className="cora-tile__dark-mark" aria-hidden="true">
            CORA
          </span>
        ) : null}
        {variant === "blank" ? (
          <span className="cora-tile__blank" aria-hidden="true" />
        ) : null}
      </div>
      <h2 className="cora-tile__title">{title}</h2>
      <p className="cora-tile__subtitle">{subtitle}</p>
    </Link>
  );
}
