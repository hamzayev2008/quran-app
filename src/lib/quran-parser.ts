import fs from "fs";
import path from "path";

export type QuranVerse = {
  surah: number;
  verse: number;
  arabic: string;
};

export function loadQuranArabic(): QuranVerse[] {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "quran",
    "quran-uthmani.txt"
  );

  const file = fs.readFileSync(filePath, "utf8");

  const lines = file
    .split(/\r?\n/)
    .filter((line) => line.trim() !== "");

  return lines.map((line) => {
    const parts = line.split("|");

    const surah = Number(parts[0]);
    const verse = Number(parts[1]);
    const arabic = parts.slice(2).join("|").trim();

    return {
      surah,
      verse,
      arabic,
    };
  });
}