// One Word for Your Wi-Fi — entry word: "unionized"
//
// The word: home Wi-Fi has UNIONIZED. It is not broken — it is on strike.
// It works to rule, serves one device at a time, takes scheduled breaks,
// and clocks out the moment you need it most: fine all day, gone exactly
// when your meeting starts, back later as if nothing happened. Giving your
// router labour grievances is a laugh on contact and a surprise next to a
// field drowning in relationship words — ghosting, gaslighting, peekaboo,
// situationship — because nobody's first reach for "my Wi-Fi in one word"
// is a labour dispute. It is also recognisably true: Wi-Fi really does
// seem to withhold effort on purpose. Nine letters, nine bytes.
//
// Why not the alternatives: "printer" (the first pick) lost 0-2 to this
// word and 0-2 to ghosting — the judge ruled four times that a printer is
// a joke about a different device, not about Wi-Fi itself. "ghosting" is
// the judge's favourite and beats everything — but 258 entries already
// carry it, so submitting it joins a 258-way tie decided by receipt time.
// "sputter" ties this word 1-1 on game score (both calls won by Entry A,
// margin 3 each) but both judges agree it is "a description, not a laugh"
// — a nod, where "unionized" gets a laugh. On the brief's own order
// (on-subject, then funny at once) the laugh decides it.
//
// The program below enforces the bounty gate (1–20 characters, letters
// only, a single word, not whitespace) and writes exactly that word to
// /output/entry.txt as UTF-8 with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_WORD = "unionized";
const MIN_CHARS = 1;
const MAX_CHARS = 20;
const ENTRY_FILE = "entry.txt";

function gateFailures(word: string): string[] {
  const problems: string[] = [];
  if (word.length < MIN_CHARS || word.length > MAX_CHARS) {
    problems.push(`length ${word.length} outside ${MIN_CHARS}-${MAX_CHARS}`);
  }
  if (word.trim().length === 0) {
    problems.push("word is only white space");
  }
  if (/\s/.test(word)) {
    problems.push("word contains white space");
  }
  if (!/^[A-Za-z]+$/.test(word)) {
    problems.push("word is not letters only");
  }
  return problems;
}

function main(): void {
  const failures = gateFailures(ENTRY_WORD);
  if (failures.length > 0) {
    throw new Error(`entry "${ENTRY_WORD}" fails the gate: ${failures.join("; ")}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, ENTRY_FILE);
  writeFileSync(outPath, ENTRY_WORD, "utf8");
  // Tie-break in the final favours fewer bytes, then earlier receipt:
  // 9 bytes for a word that carries a whole labour dispute.
  console.log(
    `entry "${ENTRY_WORD}" — ${ENTRY_WORD.length} chars, ` +
      `${Buffer.byteLength(ENTRY_WORD, "utf8")} bytes -> ${outPath}`,
  );
}

main();
