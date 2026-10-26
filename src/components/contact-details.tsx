import { Icon } from "@/components/icons";
import { copy } from "@/data/copy";
import { siteConfig, socials } from "@/data/site";

export function ContactDetails() {
  const t = copy.contact.details;

  return (
    <div className="reveal">
      <h2 className="section__title section__title--sm">{t.title}</h2>
      <p className="section__lead" style={{ marginTop: "0.8rem" }}>
        {t.lead}
      </p>

      <ul className="contact-list">
        <li>
          <span className="contact-list__icon" aria-hidden="true">
            <Icon name="mail" strokeWidth={1.6} />
          </span>
          <div>
            <span className="contact-list__label">{t.email}</span>
            <span className="contact-list__value">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </span>
          </div>
        </li>
        <li>
          <span className="contact-list__icon" aria-hidden="true">
            <Icon name="phone" strokeWidth={1.6} />
          </span>
          <div>
            <span className="contact-list__label">{t.phone}</span>
            <span className="contact-list__value">
              <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
              <br />
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.whatsapp}
              </a>
            </span>
          </div>
        </li>
        <li>
          <span className="contact-list__icon" aria-hidden="true">
            <Icon name="location" strokeWidth={1.6} />
          </span>
          <div>
            <span className="contact-list__label">{t.where}</span>
            <span className="contact-list__value">
              {t.address[0]}
              <br />
              {t.address[1]}
            </span>
          </div>
        </li>
        <li>
          <span className="contact-list__icon" aria-hidden="true">
            <Icon name="clock" strokeWidth={1.6} />
          </span>
          <div>
            <span className="contact-list__label">{t.hours}</span>
            <span className="contact-list__value">
              {t.hoursLines[0]}
              <br />
              {t.hoursLines[1]}
            </span>
          </div>
        </li>
      </ul>

      <div className="socials" aria-label={t.socials}>
        {socials.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <Icon name="instagram" strokeWidth={1.6} />
          </a>
        ))}
        <a href={`mailto:${siteConfig.email}`} aria-label={t.writeEmail}>
          <Icon name="mail" strokeWidth={1.6} />
        </a>
      </div>
    </div>
  );
}
