import { copy } from "@/data/copy";

export function ContactMap() {
  const t = copy.contact.map;

  return (
    <div className="map-wrap reveal">
      <iframe
        title={t.title}
        src="https://www.openstreetmap.org/export/embed.html?bbox=14.735%2C40.663%2C14.795%2C40.692&layer=mapnik&marker=40.6782%2C14.7654"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p className="map-link">
        <a
          href="https://www.openstreetmap.org/?mlat=40.6782&mlon=14.7654#map=13/40.6782/14.7654"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.open}
        </a>{" "}
        · {t.location}
      </p>
    </div>
  );
}
