import type { Language } from "@/types/quran";

export const languages: {
  code: Language;
  label: string;
  flag: string;
}[] = [
  {
    code: "ru",
    label: "Русский",
    flag: "🇷🇺",
  },
  {
    code: "uz",
    label: "O'zbek",
    flag: "🇺🇿",
  },
  {
    code: "en",
    label: "English",
    flag: "🇬🇧",
  },
];