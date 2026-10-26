import { mkdir, writeFile } from "node:fs/promises";

// GitHub Pages serves files through Jekyll unless this marker exists.
// Without it, folders starting with an underscore (such as _next) are ignored.
await mkdir("out", { recursive: true });
await writeFile("out/.nojekyll", "");
