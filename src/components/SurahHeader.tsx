
"use client";

import type { Surah } from "@/data/surahs";
import { useAppLanguage } from "@/lib/use-app-language";

type Props = {
  surah: Surah;
};

const translations = {
  uz: { verses: "oyat", listen: "Tinglash" },
  ru: { verses: "аятов", listen: "Слушать" },
  en: { verses: "verses", listen: "Listen" },
};

export default function SurahHeader({ surah }: Props) {
  const { language } = useAppLanguage();
  const t = translations[language];

  return (
    <div className="rounded-3xl bg-[#075c3d] p-8 text-center text-white dark:border dark:border-[#31594b] dark:bg-[#0d2923]">
      <p dir="rtl" className="text-4xl">
        {surah.nameArabic}
      </p>

      <h1 className="mt-4 text-3xl font-bold">
        {surah.name[language]}
      </h1>

      <p className="mt-2 text-emerald-100 dark:text-[#e5c88c]">
        {surah.verses} {t.verses}
      </p>

      <button
        type="button"
        disabled
        className="mt-6 cursor-not-allowed rounded-full bg-white px-6 py-3 font-semibold text-[#075c3d] opacity-70"
      >
        ▶ {t.listen}
      </button>
    </div>
  );
}
