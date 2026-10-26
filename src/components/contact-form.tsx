"use client";

import { useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";

import { Icon } from "@/components/icons";
import { copy } from "@/data/copy";
import { siteConfig } from "@/data/site";
import {
  bookingDefaults,
  createBookingSchema,
  type BookingField,
  type BookingValues,
} from "@/lib/validation";
import { revealDelay } from "@/lib/styles";

type FormStatus = {
  type: "success" | "error";
  message: string;
};

const focusOrder: BookingField[] = [
  "nome",
  "email",
  "partenza",
  "messaggio",
  "privacy",
];

const fill = (template: string, values: Record<string, string>) =>
  template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);

export function ContactForm() {
  const t = copy.contact.form;
  const bookingSchema = useMemo(
    () => createBookingSchema(t.validation),
    [t.validation],
  );
  const [values, setValues] = useState<BookingValues>(bookingDefaults);
  const [errors, setErrors] = useState<
    Partial<Record<BookingField, string>>
  >({});
  const [status, setStatus] = useState<FormStatus | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const siteValues = { email: siteConfig.email, phone: siteConfig.phone };

  const update = (field: BookingField, value: string | boolean) => {
    setValues((previous) => ({ ...previous, [field]: value } as BookingValues));
    setErrors((previous) => {
      if (!previous[field]) return previous;
      const next = { ...previous };
      delete next[field];
      return next;
    });
    if (status?.type === "error") setStatus(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = bookingSchema.safeParse(values);

    if (!result.success) {
      const nextErrors: Partial<Record<BookingField, string>> = {};

      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (
          typeof field === "string" &&
          field in values &&
          !nextErrors[field as BookingField]
        ) {
          nextErrors[field as BookingField] = issue.message;
        }
      }

      setErrors(nextErrors);
      setStatus({
        type: "error",
        message: t.error,
      });

      const firstInvalid = focusOrder.find((field) => nextErrors[field]);
      if (firstInvalid) {
        const element = formRef.current?.elements.namedItem(firstInvalid);
        if (element instanceof HTMLElement) element.focus();
      }
      return;
    }

    const data = result.data;
    const details = [
      `${t.mailLabels.name}: ${data.nome}`,
      `${t.mailLabels.email}: ${data.email}`,
      data.telefono ? `${t.mailLabels.phone}: ${data.telefono}` : "",
      data.struttura ? `${t.mailLabels.structure}: ${data.struttura}` : "",
      data.arrivo ? `${t.mailLabels.arrival}: ${data.arrivo}` : "",
      data.partenza ? `${t.mailLabels.departure}: ${data.partenza}` : "",
      data.ospiti ? `${t.mailLabels.guests}: ${data.ospiti}` : "",
      "",
      data.messaggio,
    ].filter((line) => line !== "");

    const subject = data.struttura
      ? fill(t.mailSubjectStructure, { structure: data.struttura })
      : t.mailSubject;
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(details.join("\n"))}`;

    setErrors({});
    setStatus({
      type: "success",
      message: fill(t.success, siteValues),
    });
    window.location.assign(mailto);
  };

  const requiredNoteParts = t.requiredNote.split("*");

  return (
    <div className="form-card reveal" id="richiesta" style={revealDelay(80)}>
      <h2>{t.title}</h2>
      <p>
        {requiredNoteParts[0]}
        <span style={{ color: "var(--sea)" }}>*</span>
        {requiredNoteParts[1]}
      </p>

      <form ref={formRef} id="richiesta-form" noValidate onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="nome">
              {t.name} <span className="req">*</span>
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              autoComplete="name"
              required
              value={values.nome}
              aria-invalid={errors.nome ? true : undefined}
              aria-describedby="nome-error"
              onChange={(event) => update("nome", event.target.value)}
            />
            <span className="field__error" id="nome-error" role="alert">
              {errors.nome}
            </span>
          </div>

          <div className="field">
            <label htmlFor="email">
              {t.email} <span className="req">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              value={values.email}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby="email-error"
              onChange={(event) => update("email", event.target.value)}
            />
            <span className="field__error" id="email-error" role="alert">
              {errors.email}
            </span>
          </div>

          <div className="field">
            <label htmlFor="telefono">{t.phone}</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              autoComplete="tel"
              inputMode="tel"
              value={values.telefono}
              onChange={(event) => update("telefono", event.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="struttura">{t.structure}</label>
            <select
              id="struttura"
              name="struttura"
              value={values.struttura}
              onChange={(event) => update("struttura", event.target.value)}
            >
              <option value="">{t.noPreference}</option>
              {t.structureOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="arrivo">{t.arrival}</label>
            <input
              type="date"
              id="arrivo"
              name="arrivo"
              value={values.arrivo}
              onChange={(event) => update("arrivo", event.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="partenza">{t.departure}</label>
            <input
              type="date"
              id="partenza"
              name="partenza"
              value={values.partenza}
              aria-invalid={errors.partenza ? true : undefined}
              aria-describedby="partenza-error"
              onChange={(event) => update("partenza", event.target.value)}
            />
            <span className="field__error" id="partenza-error" role="alert">
              {errors.partenza}
            </span>
          </div>

          <div className="field field--full">
            <label htmlFor="ospiti">{t.guests}</label>
            <select
              id="ospiti"
              name="ospiti"
              value={values.ospiti}
              onChange={(event) => update("ospiti", event.target.value)}
            >
              {t.guestOptions.map((option, index) => (
                <option
                  key={option}
                  value={index < t.guestOptions.length - 1 ? `${index + 1}` : "6+"}
                >
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="field field--full">
            <label htmlFor="messaggio">
              {t.message} <span className="req">*</span>
            </label>
            <textarea
              id="messaggio"
              name="messaggio"
              required
              value={values.messaggio}
              aria-invalid={errors.messaggio ? true : undefined}
              aria-describedby="messaggio-error"
              placeholder={t.messagePlaceholder}
              onChange={(event) => update("messaggio", event.target.value)}
            />
            <span className="field__error" id="messaggio-error" role="alert">
              {errors.messaggio}
            </span>
          </div>

          <div className="field field--full">
            <label className="checkbox" htmlFor="privacy">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                required
                checked={values.privacy}
                aria-invalid={errors.privacy ? true : undefined}
                aria-describedby="privacy-error"
                onChange={(event) => update("privacy", event.target.checked)}
              />
              <span>
                {t.privacy} <span className="req">*</span>
              </span>
            </label>
            <span className="field__error" id="privacy-error" role="alert">
              {errors.privacy}
            </span>
          </div>

          <div className="field field--full">
            <button className="btn btn--primary btn--wide" type="submit">
              {t.submit}
              <Icon name="arrow" strokeWidth={1.8} />
            </button>
            <p className="form-note">{fill(t.note, siteValues)}</p>
            <p
              className={`form-status${
                status ? ` form-status--${status.type} is-visible` : ""
              }`}
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {status?.message}
            </p>
            <noscript>
              <p className="form-note">
                {t.noscript.split("{email}")[0]}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                {t.noscript.split("{email}")[1]?.split("{phone}")[0]}
                {siteConfig.phone}
                {t.noscript.split("{phone}")[1]}
              </p>
            </noscript>
          </div>
        </div>
      </form>
    </div>
  );
}
