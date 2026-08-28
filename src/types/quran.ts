export type Language = "ru" | "uz" | "en";

export type QuranTranslation = {
  ru?: string;
  uz?: string;
  en?: string;
};

export type QuranVerse = {
  surah: number;
  verse: number;
  arabic: string;
  transliteration?: string;
  translation?: QuranTranslation;
};