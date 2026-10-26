import { Link } from "@/components/link";

import { Icon } from "@/components/icons";

type CtaBandProps = {
  title: string;
  text: string;
  buttonLabel: string;
  href: string;
};

export function CtaBand({ title, text, buttonLabel, href }: CtaBandProps) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container cta__inner">
        <div>
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="btn btn--dark" href={href}>
          {buttonLabel}
          <Icon name="arrow" strokeWidth={1.8} />
        </Link>
      </div>
    </section>
  );
}
