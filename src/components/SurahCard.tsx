"use client";

import Link from "next/link";
import { useAppLanguage } from "@/lib/use-app-language";
import type { Surah } from "@/data/surahs";

type SurahCardProps = {
  surah: Surah;
};

export default function SurahCard({ surah }: SurahCardProps) {
  const { language } = useAppLanguage();
  return (
    <Link
      href={`/quran/${surah.number}`}
      className="block rounded-2xl border border-border bg-surface p-5 text-foreground shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-md"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-soft font-semibold text-primary">
          {surah.number}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-semibold">
            {surah.name[language]}
          </h3>

          <p className="mt-1 text-sm text-muted">
            {surah.verses}{" "}
            {language === "uz"
              ? "oyat"
              : language === "ru"
                ? "аятов"
                : "verses"}
          </p>
        </div>

        <div
          dir="rtl"
          className="shrink-0 text-xl font-semibold text-primary"
        >
          {surah.nameArabic}
        </div>
      </div>
    </Link>
  );
}
