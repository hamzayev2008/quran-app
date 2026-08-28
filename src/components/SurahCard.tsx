import type { Surah } from "@/data/surahs";

type SurahCardProps = {
  surah: Surah;
};

export default function SurahCard({ surah }: SurahCardProps) {
  return (
    <button className="w-full rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 font-semibold text-emerald-800">
          {surah.number}
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">
            {surah.name.ru}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {surah.verses} аятов
          </p>
        </div>

        <div className="text-xl font-semibold" dir="rtl">
          {surah.nameArabic}
        </div>
      </div>
    </button>
  );
}