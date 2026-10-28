export type NavItem = {
  href: string;
  label: string;
};

export const navigation: NavItem[] = [
  { href: "/stays/", label: "CORA STAYS" },
];

export const staysNavigation: NavItem[] = [
  { href: "/stays/", label: "Panoramica" },
  { href: "/stays/strutture/", label: "Strutture" },
  { href: "/stays/galleria/", label: "Galleria" },
  { href: "/stays/contatti/", label: "Contatti" },
];
