import { z } from "zod";

import { copy } from "@/data/copy";

type BookingMessages = typeof copy.contact.form.validation;

export function createBookingSchema(messages: BookingMessages) {
  return z
    .object({
      nome: z
        .string()
        .trim()
        .min(2, messages.nameMin)
        .max(120, messages.nameMax),
      email: z
        .string()
        .trim()
        .email(messages.emailInvalid)
        .max(180, messages.emailMax),
      telefono: z.string().trim().max(40, messages.phoneMax).optional(),
      struttura: z.string().trim().max(120).optional(),
      arrivo: z.string().trim().optional(),
      partenza: z.string().trim().optional(),
      ospiti: z.string().trim().max(10).optional(),
      messaggio: z
        .string()
        .trim()
        .min(10, messages.messageMin)
        .max(3000, messages.messageMax),
      privacy: z.boolean().refine(Boolean, {
        message: messages.privacy,
      }),
    })
    .refine(
      (data) => !data.arrivo || !data.partenza || data.partenza > data.arrivo,
      {
        path: ["partenza"],
        message: messages.dates,
      },
    );
}

export type BookingValues = z.infer<ReturnType<typeof createBookingSchema>>;

export type BookingField = keyof BookingValues;

export const bookingDefaults: BookingValues = {
  nome: "",
  email: "",
  telefono: "",
  struttura: "",
  arrivo: "",
  partenza: "",
  ospiti: "2",
  messaggio: "",
  privacy: false,
};
