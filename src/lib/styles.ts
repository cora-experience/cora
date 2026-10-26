import type { CSSProperties } from "react";

export function revealDelay(milliseconds: number): CSSProperties {
  return { "--delay": `${milliseconds}ms` } as CSSProperties;
}
