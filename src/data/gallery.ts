import type { StaticImageData } from "next/image";

import colazioneLetto from "@/assets/images/colazione-letto.jpg";
import coraColazioneTerrazza from "@/assets/images/cora-colazione-terrazza.jpg";
import coraLiving from "@/assets/images/cora-living.jpg";
import costiera from "@/assets/images/costiera.jpg";
import leucosiaScale from "@/assets/images/leucosia-scale.jpg";
import portaroteseCamera from "@/assets/images/portarotese-camera.jpg";

export type GalleryCategory =
  | "camere"
  | "esterni"
  | "colazione"
  | "appartamenti";

export type GalleryFilter = "tutte" | GalleryCategory;

export type GalleryItem = {
  id: string;
  image: StaticImageData;
  alt: string;
  caption: string;
  lightboxCaption: string;
  category: GalleryCategory;
};

type GalleryItemId =
  | "colazione-terrazza"
  | "portarotese-camera"
  | "colazione-tavola"
  | "costiera"
  | "colazione-letto"
  | "leucosia-scale";

type GalleryItemContent = Omit<GalleryItem, "image"> & { id: GalleryItemId };

const galleryImages: Record<GalleryItemId, StaticImageData> = {
  "colazione-terrazza": coraColazioneTerrazza,
  "portarotese-camera": portaroteseCamera,
  "colazione-tavola": coraLiving,
  costiera: costiera,
  "colazione-letto": colazioneLetto,
  "leucosia-scale": leucosiaScale,
};

export const galleryFilters: { value: GalleryFilter; label: string }[] = [
  { value: "tutte", label: "Tutte" },
  { value: "camere", label: "Camere" },
  { value: "esterni", label: "Esterni" },
  { value: "colazione", label: "Colazione" },
  { value: "appartamenti", label: "Appartamenti" },
];

const itemContent: GalleryItemContent[] = [
  {
    id: "colazione-terrazza",
    alt: "Tavolo apparecchiato per la colazione su una terrazza vista mare",
    caption: "Colazione in terrazza",
    lightboxCaption: "La colazione in terrazza, con il mare davanti",
    category: "colazione",
  },
  {
    id: "portarotese-camera",
    alt: "Camera con letto matrimoniale e testiera blu a Portarotese, Salerno",
    caption: "Portarotese, Salerno",
    lightboxCaption: "Una delle camere di Portarotese, nel centro di Salerno",
    category: "camere",
  },
  {
    id: "colazione-tavola",
    alt: "Tavolo con cornetti, succhi e caffè vista mare",
    caption: "La tavola del mattino",
    lightboxCaption: "La tavola del mattino: cornetti, succhi e caffè",
    category: "colazione",
  },
  {
    id: "costiera",
    alt: "Vista sul mare della Costiera Amalfitana",
    caption: "La Costiera",
    lightboxCaption: "La costa della Campania vista dal mare",
    category: "esterni",
  },
  {
    id: "colazione-letto",
    alt: "Vassoio della colazione sul letto con petali di rosa",
    caption: "Colazione a letto",
    lightboxCaption: "La colazione servita in camera, con i petali di rosa",
    category: "colazione",
  },
  {
    id: "leucosia-scale",
    alt: "Scalinata esterna con piante e fiori a Santa Maria di Castellabate",
    caption: "Leucosia, Cilento",
    lightboxCaption:
      "Le scale fiorite di Leucosia, a Santa Maria di Castellabate",
    category: "esterni",
  },
];

export const galleryItems: GalleryItem[] = itemContent.map((item) => ({
  ...item,
  image: galleryImages[item.id],
}));

const homeGalleryIds: GalleryItemId[] = [
  "portarotese-camera",
  "colazione-terrazza",
  "costiera",
  "colazione-letto",
  "colazione-tavola",
  "leucosia-scale",
];

export const homeGalleryItems: GalleryItem[] = homeGalleryIds
  .map((id) => galleryItems.find((item) => item.id === id))
  .filter((item): item is GalleryItem => Boolean(item));

export const galleryItemById = (id: string) =>
  galleryItems.find((item) => item.id === id);
