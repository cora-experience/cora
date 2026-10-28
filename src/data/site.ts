export const siteConfig = {
  name: "CORA",
  title: "CORA — Un mondo di possibilità",
  description:
    "CORA STAYS: case e camere a Salerno e nel Cilento. Portarotese e Leucosia, prenotazione diretta e il 15% di sconto dal sito.",
  shortDescription:
    "Due indirizzi tra Salerno e il Cilento: camere e una casa vacanza curate.",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://cora-experience.github.io/cora"
  ).replace(/\/$/, ""),
  email: "spaziocora@gmail.com",
  phone: "+39 333 739 0837",
  phoneHref: "+393337390837",
  whatsapp: "https://wa.me/393337390837",
  address: "Salerno",
} as const;

export const absoluteUrl = (path = "/") =>
  `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;

export const ogImage = {
  url: absoluteUrl("/og/costiera.jpg"),
  width: 1400,
  height: 818,
  alt: "La Costiera Amalfitana vista dal mare",
};
