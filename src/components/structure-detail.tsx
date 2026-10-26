import Image from "next/image";

import { Link } from "@/components/link";
import { copy } from "@/data/copy";
import type { Structure } from "@/data/structures";
import { revealDelay } from "@/lib/styles";

type StructureDetailProps = {
  structure: Structure;
};

export function StructureDetail({ structure }: StructureDetailProps) {
  const titleId = `${structure.id}-title`;

  return (
    <article
      className="structure"
      id={structure.id}
      aria-labelledby={titleId}
    >
      <div className="structure__media reveal">
        <Image
          src={structure.image}
          alt={structure.alt}
          sizes="(max-width: 960px) 100vw, 50vw"
        />
        <span className="structure__index">{structure.index}</span>
      </div>
      <div className="structure__body reveal" style={revealDelay(80)}>
        <p className="eyebrow">{structure.eyebrow}</p>
        <h2 className="structure__title" id={titleId}>
          {structure.title}
        </h2>
        <p className="structure__text">{structure.text}</p>
        <ul className="amenities">
          {structure.amenities.map((amenity) => (
            <li key={amenity}>{amenity}</li>
          ))}
        </ul>
        <div className="structure__foot">
          <p className="structure__price">
            <strong>−15%</strong> {copy.structureDetail.discount}
          </p>
          <Link className="btn btn--primary" href="/stays/contatti/#richiesta">
            {copy.structureDetail.ask}
          </Link>
          <Link className="link-arrow" href="/stays/galleria/">
            {copy.structureDetail.photos}
          </Link>
        </div>
      </div>
    </article>
  );
}
