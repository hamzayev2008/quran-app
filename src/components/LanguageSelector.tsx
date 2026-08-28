"use client";

import { useState } from "react";
import { languages } from "@/lib/language";
import type { Language } from "@/types/quran";

type LanguageSelectorProps = {
  value?: Language;
  onChange?: (language: Language) => void;
};

export default function LanguageSelector({
  value = "ru",
  onChange,
}: LanguageSelectorProps) {
  const [language, setLanguage] = useState<Language>(value);

  function handleChange(newLanguage: Language) {
    setLanguage(newLanguage);
    onChange?.(newLanguage);
  }

  return (
    <div className="flex flex-wrap gap-2 rounded-2xl bg-gray-100 p-2">
      {languages.map((item) => {
        const active = language === item.code;

        return (
          <button
            key={item.code}
            onClick={() => handleChange(item.code)}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
              active
                ? "bg-white text-emerald-800 shadow-sm"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {item.flag} {item.label}
          </button>
        );
      })}
    </div>
  );
}