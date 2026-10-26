import Image from "next/image";

import { Link } from "@/components/link";
import { homeGalleryItems } from "@/data/gallery";
import { revealDelay } from "@/lib/styles";

export function HomeGallery() {
  return (
    <div className="gallery-grid">
      {homeGalleryItems.map((item, index) => (
        <Link
          key={item.id}
          className="gallery__item reveal"
          href="/stays/galleria/"
          style={revealDelay((index % 3) * 60)}
        >
          <Image
            src={item.image}
            alt={item.alt}
            sizes="(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 33vw"
          />
          <span className="gallery__caption">{item.caption}</span>
        </Link>
      ))}
    </div>
  );
}
