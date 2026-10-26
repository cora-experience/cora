import type { Metadata } from "next";

import { ContactDetails } from "@/components/contact-details";
import { ContactForm } from "@/components/contact-form";
import { ContactMap } from "@/components/contact-map";
import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { copy } from "@/data/copy";
import { faqs } from "@/data/faqs";
import { createPageMetadata } from "@/lib/metadata";

export function contactMetadata(): Metadata {
  const contact = copy.contact;

  return createPageMetadata({
    title: contact.meta.title,
    description: contact.meta.description,
    path: "/stays/contatti/",
    absoluteTitle: true,
    ogTitle: contact.meta.ogTitle,
    ogDescription: contact.meta.ogDescription,
  });
}

export function ContactPage() {
  const contact = copy.contact;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <main id="contenuto">
        <PageHead
          eyebrow={contact.pageHead.eyebrow}
          title={contact.pageHead.title}
          text={contact.pageHead.text}
          current={contact.pageHead.current}
        />

        <section className="section">
          <div className="container">
            <div className="contact-layout">
              <ContactDetails />
              <ContactForm />
            </div>

            <ContactMap />
          </div>
        </section>

        <section
          className="section section--tinted"
          aria-labelledby="faq-title"
        >
          <div className="container">
            <div className="section__head reveal">
              <div>
                <p className="eyebrow">{contact.faq.eyebrow}</p>
                <h2 className="section__title" id="faq-title">
                  {contact.faq.title}
                </h2>
              </div>
            </div>

            <div className="faq reveal">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <JsonLd data={jsonLd} />
    </>
  );
}
