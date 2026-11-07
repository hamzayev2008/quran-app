import { notFound } from "next/navigation";
import VerseCard from "@/components/VerseCard";
import { getSurahWithVerses } from "@/lib/quran";
import LanguageSelector from "@/components/LanguageSelector";
import SurahHeader from "@/components/SurahHeader";

type SurahPageProps = {
  params: Promise<{
    number: string;
  }>;
};

export default async function SurahPage({
  params,
}: SurahPageProps) {
  const { number } = await params;

  const surahNumber = Number(number);

    const data = getSurahWithVerses(surahNumber);

    if (!data) {
    notFound();
    }

    const { surah, arabicVerses } = data;

  return (
    <main className="min-h-screen bg-[#f8f6ef] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-4xl">

        <SurahHeader surah={surah} />

        <div className="mt-6">
            <LanguageSelector />
        </div>

        <section className="mt-6 rounded-3xl bg-white px-5 shadow-sm md:px-8">
        {arabicVerses.length > 0 ? (
            arabicVerses.map((verse) => (
            <VerseCard
                key={`${verse.surah}-${verse.verse}`}
                number={verse.verse}
                arabic={verse.arabic}
            />
            ))
        ) : (
            <div className="py-12 text-center text-gray-500">
            Аяты этой суры пока не загружены.
            </div>
        )}
        </section>

      </div>
    </main>
  );
}