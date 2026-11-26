import { writeFileSync, mkdirSync } from "node:fs";

const WORD = "Meetingsaurus";

// Gate guard: 1-30 characters, exactly one word, not whitespace-only.
// Fail hard before writing anything, so a bad word never becomes an entry.
if (
  WORD.length < 1 ||
  WORD.length > 30 ||
  WORD.trim().length === 0 ||
  /\s/.test(WORD)
) {
  throw new Error(`gate failed: word must be 1-30 chars, one word, got ${JSON.stringify(WORD)}`);
}

mkdirSync(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", { recursive: true });
writeFileSync(
  `${process.env.MAKEFUN_OUTPUT_DIR ?? "/output"}/entry.txt`,
  WORD,
  "utf8"
);
console.log(`saved ${WORD.length} characters to entry.txt`);
