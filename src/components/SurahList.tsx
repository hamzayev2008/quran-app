
"use client";

import { useState } from "react";
import SurahCard from "@/components/SurahCard";
import { surahs } from "@/data/surahs";
import { useAppLanguage } from "@/lib/use-app-language";

function normalizeText(text: string): string {
  return text
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[\u0300-\u036f\u064B-\u065F\u0670]/g, "")
    .replace(/[ʻʼ‘’`´]/g, "'")
    .replace(/ё/g, "е")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const translations = {
  uz: {
    placeholder: "Sura nomi yoki raqamini kiriting...",
    notFound: "Sura topilmadi",
    results: "Ta sura topildi",
  },
  ru: {
    placeholder: "Введите название или номер суры...",
    notFound: "Сура не найдена",
    results: "Найдено сур:",
  },
  en: {
    placeholder: "Enter a surah name or number...",
    notFound: "Surah not found",
    results: "Surahs found:",
  },
};

export default function SurahList() {
  const [query, setQuery] = useState("");
  const { language } = useAppLanguage();

  const t = translations[language];

  const normalizedQuery = normalizeText(query);

  const filteredSurahs = surahs.filter((surah) => {
    const searchableNames = [
      surah.name.uz,
      surah.name.ru,
      surah.name.en,
      surah.nameArabic,
      String(surah.number),
    ];

    return searchableNames.some((name) =>
      normalizeText(name).includes(normalizedQuery)
    );
  });

  return (
    <div>
      {/* SEARCH */}
      <div className="relative">
        <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-muted">
          🔎
        </span>

        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t.placeholder}
          aria-label={t.placeholder}
          className="w-full rounded-2xl border border-border bg-surface px-5 py-4 pl-12 text-foreground outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/15"
        />
      </div>

      {/* RESULTS COUNT */}
      {normalizedQuery && (
        <p className="mt-4 text-sm text-muted">
          {language === "uz"
            ? `${filteredSurahs.length} ${t.results}`
            : language === "ru"
              ? `${t.results} ${filteredSurahs.length}`
              : `${t.results} ${filteredSurahs.length}`}
        </p>
      )}

      {/* SURAHS */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {filteredSurahs.map((surah) => (
          <SurahCard
            key={surah.number}
            surah={surah}
          />
        ))}
      </div>

      {/* EMPTY RESULTS */}
      {filteredSurahs.length === 0 && (
        <div className="mt-8 rounded-2xl border border-border bg-surface p-8 text-center">
          <p className="text-muted">
            {t.notFound}
          </p>
        </div>
      )}
    </div>
  );
}
