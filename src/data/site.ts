export const siteConfig = {
  name: "CORA",
  title: "CORA — A World of Possibilities",
  description:
    "CORA è un mondo di possibilità: ospitalità, moda, lifestyle e nuovi progetti. Scopri CORA STAYS, CORA WEARS, CORA LIVING e CORA PROJECTS.",
  shortDescription:
    "A world of possibilities: hospitality, fashion, lifestyle and new ventures.",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://cora-experience.github.io/cora"
  ).replace(/\/$/, ""),
  email: "spaziocora@gmail.com",
  phone: "+39 333 739 0837",
  phoneHref: "+393337390837",
  whatsapp: "https://wa.me/393337390837",
  address: "Salerno",
  legal: {
    cf: "RMNGNN90B08H703U",
    rea: "SA 515460",
  },
} as const;

export const socials = [
  {
    label: "Instagram Portarotese",
    handle: "@roomshub_portarotese",
    href: "https://www.instagram.com/roomshub_portarotese/",
  },
  {
    label: "Instagram Leucosia",
    handle: "@roomshub_leucosia",
    href: "https://www.instagram.com/roomshub_leucosia/",
  },
] as const;

export const absoluteUrl = (path = "/") =>
  `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;

export const ogImage = {
  url: absoluteUrl("/og/costiera.jpg"),
  width: 1400,
  height: 818,
  alt: "La Costiera Amalfitana vista dal mare",
};
