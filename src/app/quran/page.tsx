
"use client";

import SurahList from "@/components/SurahList";
import { useAppLanguage } from "@/lib/use-app-language";

const translations = {
  uz: {
    title: "Qur'on",
    description: "Qur'oni Karimning barcha 114 surasi",
  },
  ru: {
    title: "Коран",
    description: "Все 114 сур Священного Корана",
  },
  en: {
    title: "Quran",
    description: "All 114 chapters of the Holy Quran",
  },
};

export default function QuranPage() {
  const { language } = useAppLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground md:px-8">
      <div className="mx-auto max-w-5xl">
        <div>
          <p
            dir="rtl"
            className="text-right text-xl font-medium text-primary"
          >
            القرآن الكريم
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            {t.title}
          </h1>

          <p className="mt-2 text-muted">
            {t.description}
          </p>
        </div>

        <div className="mt-8">
          <SurahList />
        </div>
      </div>
    </main>
  );
}
