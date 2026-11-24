// This entry writes the answer for "An alien tourist reviews Earth" to the output directory as entry.txt.
// It writes a single-line review to the directory set by MAKEFUN_OUTPUT_DIR (falling back to /output).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const answer = 'Three stars: the water is wet, the traffic is loud, and the locals insist on calling a two-week wait an appointment.';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
