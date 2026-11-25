// Your Week in One Line — FINAL v2 (revised from draft v1)
// Draft v1 ran at 104 chars and failed the 1-100 gate, so this revision
// cuts the filler ("filed/collected/inbox calls it productive") and keeps
// only the concrete week plus one sharp turn at the end: the to-do list
// itself giving up and filing for next week.
// Writes one line, at most 100 characters, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Submitted thirty-four bounties, won zero dollars, and my to-do list filed for next week instead.";

// Self-check against the gate before writing: 1-100 chars, not blank.
if (line.length < 1 || line.length > 100 || !line.trim()) {
  throw new Error(`Entry line is ${line.length} chars; gate requires 1-100.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} chars to /output/entry.txt`);
console.log(line);
