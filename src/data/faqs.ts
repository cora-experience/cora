export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Come funziona la prenotazione?",
    answer:
      "Ci scrivi le date e la struttura che preferisci. Ti confermiamo la disponibilità con il prezzo totale e il 15% di sconto riservato a chi prenota dal sito. Le condizioni di pagamento arrivano insieme alla proposta, in modo chiaro.",
  },
  {
    question: "La colazione è inclusa?",
    answer:
      "Dipende dalla struttura: in alcune case la colazione si serve in terrazza, negli appartamenti trovi la cucina attrezzata e il set per tè e caffè. Ti confermiamo tutto nella proposta, senza sorprese.",
  },
  {
    question: "Dove posso parcheggiare?",
    answer:
      "In centro a Salerno si parcheggia nelle vicinanze a pagamento; per le altre case ti indichiamo la soluzione più comoda in base alla struttura e al periodo. Chiedicelo al momento della richiesta.",
  },
  {
    question: "Posso spostarmi tra le strutture?",
    answer:
      "Volentieri: è proprio l'idea dell'hub. Se una casa è piena o vuoi dividere il soggiorno tra città e mare, organizziamo noi la seconda prenotazione e ti diamo tutti i riferimenti.",
  },
  {
    question: "Come funzionano cancellazioni, animali e bambini?",
    answer:
      "Le condizioni dipendono dalla struttura e dal periodo: te le indichiamo per iscritto prima della conferma. Per bambini, culle e animali scrivici due righe e verifichiamo insieme la casa più adatta.",
  },
];
