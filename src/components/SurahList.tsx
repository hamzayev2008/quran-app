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
          placeholder="Найти суру..."
          className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 pl-12 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
        />

        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
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
        <div className="mt-8 rounded-2xl bg-white p-8 text-center">
          <p className="text-gray-500">
            Сура не найдена
          </p>
        </div>
      )}
    </div>
  );
}