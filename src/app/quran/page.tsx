import SurahList from "@/components/SurahList";

export default function QuranPage() {
  return (
    <main className="min-h-screen bg-[#f8f6ef] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div>
          <p className="text-sm font-medium text-emerald-700">
            القرآن الكريم
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Коран
          </h1>

          <p className="mt-2 text-gray-600">
            Все суры Священного Корана
          </p>
        </div>

        <div className="mt-8">
        <SurahList />
        </div>
      </div>
    </main>
  );
}