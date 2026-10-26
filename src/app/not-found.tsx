import type { Metadata } from "next";
import { Link } from "@/components/link";

import { Icon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Pagina non trovata",
  description:
    "La pagina che cerchi non esiste o è stata spostata. Torna alla home di CORA.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <a className="skip-link" href="#contenuto">
        Vai al contenuto principale
      </a>
      <SiteHeader />
      <main id="contenuto">
        <section className="page-head" aria-labelledby="page-title">
          <div className="container">
            <p className="eyebrow">Errore 404</p>
            <h1 className="page-head__title" id="page-title">
              Questa pagina non è qui.
            </h1>
            <p className="page-head__text">
              Forse il link è cambiato o la pagina è stata spostata. Puoi
              tornare alla home oppure dare un&apos;occhiata alle nostre case.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" href="/">
                Torna a CORA
                <Icon name="arrow" strokeWidth={1.8} />
              </Link>
              <Link className="btn btn--ghost" href="/stays/strutture/">
                Scopri CORA STAYS
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
