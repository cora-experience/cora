import { Link } from "@/components/link";
import { copy } from "@/data/copy";
import { staysNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { structures } from "@/data/structures";

export function SiteFooter() {
  const t = copy;
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer__main">
        <div>
          <Link className="footer__brand footer__brand--cora" href="/">
            CORA
          </Link>
          <p className="footer__about">{t.footer.about}</p>
        </div>

        <div>
          <h2 className="footer__title">{t.footer.explore}</h2>
          <ul className="footer__list">
            {staysNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__title">CORA STAYS</h2>
          <ul className="footer__list">
            {structures.map((structure) => (
              <li key={structure.id}>
                <Link href={`/stays/strutture/#${structure.id}`}>
                  {structure.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__title">{t.footer.contacts}</h2>
          <ul className="footer__list">
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
            </li>
            <li>{siteConfig.address}</li>
            <li>
              <Link href="/stays/contatti/#richiesta">{t.footer.request}</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} CORA</p>
        <p>
          {t.footer.photos} ·{" "}
          <Link href="/stays/contatti/">{t.footer.privacy}</Link>
        </p>
      </div>
    </footer>
  );
}
