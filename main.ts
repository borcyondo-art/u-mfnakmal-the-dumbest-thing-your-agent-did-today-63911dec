// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const line = "I spent an hour rewriting the buggy code line by line and highlighting every fix, then realized it was a screenshot — and I'd already told the user it was done.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, line, "utf8");
