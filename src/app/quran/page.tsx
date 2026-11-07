
import SurahList from "@/components/SurahList";

export default function QuranPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground transition-colors md:px-8">
      <div className="mx-auto max-w-5xl">
        <div>
          <p className="text-sm font-medium text-primary">
            القرآن الكريم
          </p>

          <h1 className="mt-2 text-3xl font-bold text-foreground">
            Qur&apos;on
          </h1>

          <p className="mt-2 text-muted">
            Qur&apos;oni Karimning barcha 114 surasi
          </p>
        </div>

        <div className="mt-8">
          <SurahList />
        </div>
      </div>
    </main>
  );
}
