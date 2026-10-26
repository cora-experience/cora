import Image from "next/image";

import { Icon } from "@/components/icons";
import { Link } from "@/components/link";
import { copy } from "@/data/copy";
import type { Structure } from "@/data/structures";
import { revealDelay } from "@/lib/styles";

type StructureCardProps = {
  structure: Structure;
  delay?: number;
};

export function StructureCard({ structure, delay }: StructureCardProps) {
  return (
    <article className="card reveal" style={delay ? revealDelay(delay) : undefined}>
      <div className="card__media">
        <Image
          src={structure.image}
          alt={structure.alt}
          sizes="(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 33vw"
        />
        <span className="card__tag">{structure.tag}</span>
      </div>
      <div className="card__body">
        <p className="card__meta">
          <Icon name="location" strokeWidth={1.7} />
          {structure.cardMeta}
        </p>
        <h3 className="card__title">{structure.title}</h3>
        <p className="card__text">{structure.cardText}</p>
        <div className="card__foot">
          <p className="card__price">
            <strong>−15%</strong> {copy.structureCard.discount}
          </p>
          <Link
            className="link-arrow"
            href={`/stays/strutture/#${structure.id}`}
          >
            {copy.structureCard.details}
            <Icon name="arrow" strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </article>
  );
}
