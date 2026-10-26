import { Icon } from "@/components/icons";
import type { Feature } from "@/data/features";
import { revealDelay } from "@/lib/styles";

type FeatureCardProps = {
  feature: Feature;
  delay?: number;
};

export function FeatureCard({ feature, delay }: FeatureCardProps) {
  return (
    <article className="feature reveal" style={delay ? revealDelay(delay) : undefined}>
      <span className="feature__icon" aria-hidden="true">
        <Icon name={feature.icon} strokeWidth={1.6} />
      </span>
      <h3>{feature.title}</h3>
      <p>{feature.text}</p>
    </article>
  );
}
