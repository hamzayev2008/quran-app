
"use client";

import { languages } from "@/lib/language";
import { useAppLanguage } from "@/lib/use-app-language";
import type { Language } from "@/types/quran";

type Props = {
  variant?: "compact" | "tabs";
};

export default function LanguageSelector({
  variant = "tabs",
}: Props) {
  const { language, setLanguage } = useAppLanguage();

  if (variant === "compact") {
    return (
      <select
        aria-label="Tilni tanlash"
        value={language}
        onChange={(event) =>
          setLanguage(event.target.value as Language)
        }
        className="hidden h-12 rounded-xl border border-border bg-surface px-3 text-sm font-semibold text-foreground outline-none focus:border-primary md:block"
      >
        {languages.map((item) => (
          <option key={item.code} value={item.code}>
            {item.flag} {item.code.toUpperCase()}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 rounded-2xl border border-border bg-surface-soft p-2">
      {languages.map((item) => {
        const active = language === item.code;

        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLanguage(item.code)}
            aria-pressed={active}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
              active
                ? "bg-surface text-primary shadow-sm"
                : "text-muted hover:bg-surface"
            }`}
          >
            {item.flag} {item.label}
          </button>
        );
      })}
    </div>
  );
}
