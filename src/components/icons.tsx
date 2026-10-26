import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "arrow"
  | "location"
  | "home"
  | "clock"
  | "hub"
  | "wifi"
  | "ac"
  | "coffee"
  | "document"
  | "mail"
  | "phone"
  | "instagram"
  | "close"
  | "chevron-left"
  | "chevron-right";

const icons: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />,
  location: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  home: (
    <>
      <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 10.5V20h13v-9.5" strokeLinejoin="round" />
      <path d="M10 20v-5h4v5" strokeLinejoin="round" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v4l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  hub: (
    <>
      <path d="M12 20s6-4.4 6-9a6 6 0 1 0-12 0c0 4.6 6 9 6 9z" strokeLinejoin="round" />
      <path d="M12 13.5V8" strokeLinecap="round" />
      <path d="M9.5 10.5 12 8l2.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 12a7 7 0 0 1 14 0" strokeLinecap="round" />
      <rect x="3" y="12" width="4" height="7" rx="2" />
      <rect x="17" y="12" width="4" height="7" rx="2" />
    </>
  ),
  ac: <path d="M12 3v18M5 8h10a4 4 0 0 1 0 8H5" strokeLinecap="round" strokeLinejoin="round" />,
  coffee: (
    <>
      <path d="M4 8h13a3 3 0 0 1 3 3v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z" strokeLinejoin="round" />
      <path d="M4 12h16" strokeLinecap="round" />
      <path d="M7 18v2M17 18v2" strokeLinecap="round" />
    </>
  ),
  document: (
    <>
      <path d="M4 19V6a2 2 0 0 1 2-2h9l5 5v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" strokeLinejoin="round" />
      <path d="M15 4v5h5" strokeLinejoin="round" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  phone: (
    <path
      d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3A2.5 2.5 0 0 1 17.5 19C10.6 18.6 5.4 13.4 5 6.5A2.5 2.5 0 0 1 6.5 3z"
      strokeLinejoin="round"
    />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />,
  "chevron-left": <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />,
  "chevron-right": <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />,
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {icons[name]}
    </svg>
  );
}
