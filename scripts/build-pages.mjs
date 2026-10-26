import { spawnSync } from "node:child_process";
import { rmSync } from "node:fs";
import { join } from "node:path";

/**
 * Build statica pronta per GitHub Pages (project page).
 *
 * GitHub Pages serve il repository su https://cora-experience.github.io/cora/,
 * quindi gli asset devono essere generati con il basePath: senza di esso
 * l'HTML punta a `/_next/...` e a `/stays/`, che su Pages non esistono
 * (risultato: sito senza CSS e senza immagini).
 *
 * Questo script imposta i valori corretti, ripulisce `out/` e sincronizza
 * la build nella root del repository.
 */
export const DEFAULT_BASE_PATH = "/cora";
export const DEFAULT_SITE_URL = "https://cora-experience.github.io/cora";

process.env.NEXT_PUBLIC_BASE_PATH ??= DEFAULT_BASE_PATH;
process.env.NEXT_PUBLIC_SITE_URL ??= DEFAULT_SITE_URL;

const run = (args) => {
  const result = spawnSync(process.execPath, args, {
    stdio: "inherit",
    env: process.env,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
};

rmSync(join(process.cwd(), "out"), { recursive: true, force: true });

console.log(
  `Build per GitHub Pages — basePath: ${process.env.NEXT_PUBLIC_BASE_PATH}, URL: ${process.env.NEXT_PUBLIC_SITE_URL}`,
);

run([join(process.cwd(), "node_modules", "next", "dist", "bin", "next"), "build"]);
run([join(process.cwd(), "scripts", "postbuild.mjs")]);
run([join(process.cwd(), "scripts", "sync-pages.mjs")]);
