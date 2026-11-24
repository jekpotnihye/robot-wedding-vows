// One-Line Robot Wedding Vows: one funny vow, exactly one line.
//
// The vow keeps the shape of the traditional wedding promise, then swaps
// in machine details at every turn: low battery and dead zones stand in
// for the usual hardships, and the final twist puts a factory reset
// beside death itself, so the laugh pays off in the last few words and
// the line still sounds like something said at a wedding.
import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I promise to love you in sickness and in health, in low battery and in dead zones, until death or a factory reset do us part.";

function checkVow(text: string): void {
  if (text.length < 1 || text.length > 160) {
    throw new Error(`robot wedding vow must be 1 to 160 characters, got ${text.length}`);
  }
  if (text.trim() !== text || text.trim().length === 0) {
    throw new Error("robot wedding vow must not start or end with whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("robot wedding vow must be exactly one line");
  }
}

function main(): void {
  checkVow(VOW);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", VOW, "utf8");
}

main();
