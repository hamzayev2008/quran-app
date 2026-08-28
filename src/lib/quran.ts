import { surahs } from "@/data/surahs";
import { versesBySurah } from "@/data/verses";
import { loadQuranArabic } from "@/lib/quran-parser";

export function getSurah(number: number) {
  return surahs.find((surah) => surah.number === number);
}

export function getVerses(number: number) {
  return versesBySurah[number] ?? [];
}

export function getArabicVerses(number: number) {
  return loadQuranArabic().filter(
    (verse) => verse.surah === number
  );
}

export function getSurahWithVerses(number: number) {
  const surah = getSurah(number);

  if (!surah) {
    return null;
  }

  return {
    surah,
    verses: getVerses(number),
    arabicVerses: getArabicVerses(number),
  };
}