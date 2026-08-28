import { notFound } from "next/navigation";
import VerseCard from "@/components/VerseCard";
import { getSurahWithVerses } from "@/lib/quran";
import LanguageSelector from "@/components/LanguageSelector";

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

    const { surah, verses, arabicVerses } = data;

  return (
    <main className="min-h-screen bg-[#f8f6ef] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-4xl">

        <div className="rounded-3xl bg-emerald-900 p-8 text-center text-white">
          <p className="text-4xl" dir="rtl">
            {surah.nameArabic}
          </p>

          <h1 className="mt-4 text-3xl font-bold">
            {surah.name.ru}
          </h1>

          <p className="mt-2 text-emerald-200">
            {surah.verses} аятов
          </p>

          <button className="mt-6 rounded-full bg-white px-6 py-3 font-semibold text-emerald-900 transition hover:bg-emerald-50">
            ▶ Слушать
          </button>
        </div>

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