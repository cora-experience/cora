# CORA

Sito editoriale di **CORA — A World of Possibilities**: ospitalità, moda, lifestyle e nuovi progetti.

- **CORA STAYS** — l'esperienza Rooms Hub, con strutture, galleria e contatti.
- **CORA WEARS** — moda, in arrivo.
- **CORA LIVING** — oggetti e spazi, in arrivo.
- **CORA PROJECTS** — nuove imprese, in arrivo.

## Stack

- Next.js 16 (App Router, static export)
- React 19 + TypeScript
- CSS custom properties e CSS Modules di progetto
- Font Jost + Inter tramite `next/font/google`
- Validazione form con Zod

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri `http://localhost:3000`.

## Verifica completa

```bash
npm run check
```

Esegue lint, typecheck e build statica. L'output viene generato in `out/`.

## Deploy su GitHub Pages

Il sito è pubblicato come project page:

- URL: `https://cora-experience.github.io/cora/`
- `NEXT_PUBLIC_BASE_PATH=/cora`
- `NEXT_PUBLIC_SITE_URL=https://cora-experience.github.io/cora`

GitHub Pages pubblica il **branch `main` dalla root del repository**. Per questo la build statica viene copiata nella root: `index.html`, `_next/`, `stays/`, `wears/`, `living/`, `projects/`, `404.html`, `.nojekyll`, ecc.

Per aggiornare il sito pubblicato:

```bash
npm run pages
```

Lo script `scripts/build-pages.mjs` imposta automaticamente `NEXT_PUBLIC_BASE_PATH=/cora` e `NEXT_PUBLIC_SITE_URL=https://cora-experience.github.io/cora`, esegue la build, crea `.nojekyll` e sincronizza `out/` nella root tramite `scripts/sync-pages.mjs`. Poi committa e pusha anche i file generati nella root.

Il basePath è indispensabile: senza, l'HTML pubblicato punta a `/_next/...` invece che a `/cora/_next/...` e il sito resta senza CSS e immagini. Per questo `sync-pages.mjs` rifiuta di pubblicare una build senza il prefisso corretto.

Il workflow `.github/workflows/ci.yml` esegue lint, typecheck e build a ogni push. La pubblicazione resta affidata a GitHub Pages dal branch `main`.

Se il repository o il dominio cambiano, aggiorna i valori predefiniti in `scripts/build-pages.mjs`. Se cambia solo il dominio, aggiorna anche il fallback di `siteConfig.url` in `src/data/site.ts`.

## Build manuale per GitHub Pages

```bash
npm run pages
```

Per pubblicare su un dominio root (senza `/cora/`) puoi forzare `NEXT_PUBLIC_BASE_PATH=""` prima del comando.

Il file `.nojekyll` viene creato automaticamente dal post-build e copiato nella root.

## Struttura

```text
src/app/(portal)/page.tsx     Home CORA con le quattro tile
src/app/(site)/stays/         CORA STAYS (Rooms Hub)
src/app/(site)/wears/         CORA WEARS
src/app/(site)/living/        CORA LIVING
src/app/(site)/projects/      CORA PROJECTS
src/components/               Header, footer, tile, sezioni, form, galleria
src/data/                     Contenuti, navigazione e configurazione
src/app/cora.css              Livello editoriale CORA
src/app/globals.css           Design system e componenti condivisi
```
