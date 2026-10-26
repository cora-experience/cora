import NextLink from "next/link";
import type { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof NextLink>;

/**
 * Next's static export emits RSC payload files with a segment-cache path that
 * GitHub Pages cannot resolve, producing 404s on hover/viewport prefetch.
 * The site is small enough that full-page navigation is instant; disable
 * prefetch to keep the production network log clean.
 */
export function Link({ prefetch = false, ...props }: LinkProps) {
  return <NextLink prefetch={prefetch} {...props} />;
}
