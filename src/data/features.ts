export type FeatureIcon =
  | "location"
  | "home"
  | "clock"
  | "hub"
  | "wifi"
  | "ac"
  | "coffee"
  | "document";

export type Feature = {
  title: string;
  text: string;
  icon: FeatureIcon;
};

export const homeFeatures: Feature[] = [
  {
    icon: "location",
    title: "Posizione, prima di tutto",
    text: "Salerno a piedi, il Cilento per rallentare. Ogni casa è scelta per dove ti porta.",
  },
  {
    icon: "home",
    title: "Case curate",
    text: "Biancheria fresca, letti comodi, aria condizionata e Wi-Fi. Le cose che servono, senza riempire le stanze di cose inutili.",
  },
  {
    icon: "clock",
    title: "Consigli veri",
    text: "Dove mangiare, quale spiaggia scegliere, come muoversi senza traffico. Ti diciamo le cose che diremmo a un amico.",
  },
  {
    icon: "hub",
    title: "Una rete, non un gruppo",
    text: "Due indirizzi indipendenti che si passano gli ospiti: prenoti da uno e ti accogliamo in entrambi.",
  },
];

export const commonFeatures: Feature[] = [
  {
    icon: "wifi",
    title: "Wi-Fi e spazi comuni",
    text: "Connessione in tutta la casa e almeno un angolo dove leggere, lavorare o non fare niente.",
  },
  {
    icon: "ac",
    title: "Aria condizionata",
    text: "In tutte le camere, per dormire bene anche nelle notti più calde dell'estate.",
  },
  {
    icon: "coffee",
    title: "Set tè e caffè",
    text: "Un piccolo rito per iniziare la giornata, in camera o davanti alla finestra.",
  },
  {
    icon: "document",
    title: "Prenotazione diretta",
    text: "Nessun intermediario: ci scrivi, ti rispondiamo e prenotando dal sito risparmi il 15%.",
  },
];
