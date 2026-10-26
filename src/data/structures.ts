import type { StaticImageData } from "next/image";

import leucosiaScale from "@/assets/images/leucosia-scale.jpg";
import portaroteseCamera from "@/assets/images/portarotese-camera.jpg";

export type Structure = {
  id: string;
  index: string;
  title: string;
  eyebrow: string;
  text: string;
  amenities: string[];
  image: StaticImageData;
  alt: string;
  tag: string;
  cardMeta: string;
  cardText: string;
};

type StructureId = "portarotese" | "leucosia";

type StructureContent = Omit<Structure, "image"> & { id: StructureId };

const structureImages: Record<StructureId, StaticImageData> = {
  portarotese: portaroteseCamera,
  leucosia: leucosiaScale,
};

const structureContent: StructureContent[] = [
  {
    id: "portarotese",
    index: "01",
    title: "Portarotese",
    eyebrow: "Salerno · 3 camere",
    text: "Nel cuore di Salerno, a due passi dal lungomare e dal centro storico. Tre camere luminose — Porta del Mare, Portarotese e Portanova — con bagno privato, aria condizionata e, in due casi, un balcone per l'aria della sera. La base giusta per girare la città a piedi.",
    amenities: [
      "Bagno privato",
      "Balcone",
      "Aria condizionata",
      "Wi-Fi gratuito",
      "TV a schermo piatto",
      "Set tè e caffè",
    ],
    alt: "Camera con letto matrimoniale e testiera blu a Portarotese, Salerno",
    tag: "Salerno centro",
    cardMeta: "Salerno · 3 camere",
    cardText:
      "Tre camere luminose tra il lungomare e il centro storico, con bagno privato e, in due camere, il balcone. La base giusta per girare Salerno a piedi.",
  },
  {
    id: "leucosia",
    index: "02",
    title: "Leucosia",
    eyebrow: "Santa Maria di Castellabate · Cilento",
    text: "Una casa vacanza nel cuore di Santa Maria di Castellabate, tra vicoli bianchi e il blu del Cilento. Gli spazi sono quelli di una casa vera: cucina, stanze da vivere e angoli all'ombra. Per chi cerca il mare, ma anche il tempo di non fare niente.",
    amenities: [
      "Casa intera",
      "Cucina",
      "Spazi esterni",
      "Wi-Fi gratuito",
      "A pochi passi dal mare",
      "Centro di Castellabate",
    ],
    alt: "Scalinata esterna con piante e fiori a Santa Maria di Castellabate",
    tag: "Cilento",
    cardMeta: "Santa Maria di Castellabate",
    cardText:
      "Una casa vacanza nel Cilento, per chi cerca mare, vicoli bianchi e il tempo che rallenta. Il sud che ti fa sentire a casa.",
  },
];

export const structures: Structure[] = structureContent.map((structure) => ({
  ...structure,
  image: structureImages[structure.id],
}));

export const structureById = (id: string) =>
  structures.find((structure) => structure.id === id);
