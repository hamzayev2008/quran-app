"use client";

import { useState } from "react";
import SurahCard from "@/components/SurahCard";
import { surahs } from "@/data/surahs";

export default function SurahList() {
  const [query, setQuery] = useState("");

  const filteredSurahs = surahs.filter((surah) =>
    surah.name.ru.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Surani qidirish..."
          className="w-full rounded-2xl border border-border bg-surface px-5 py-4 pl-12 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15 text-foreground"
        />

        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-muted">
          🔎
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {filteredSurahs.map((surah) => (
          <SurahCard
            key={surah.number}
            surah={surah}
          />
        ))}
      </div>

      {filteredSurahs.length === 0 && (
        <div className="mt-8 rounded-2xl bg-surface p-8 text-center">
          <p className="text-muted">
            Сура не найдена
          </p>
        </div>
      )}
    </div>
  );
}