export default function Header() {
  return (
    <header className="flex items-center justify-between border-b px-4 py-4 md:px-8">
      <div>
        <h1 className="text-xl font-bold">القرآن الكريم</h1>
        <p className="text-sm text-gray-500">Quran App</p>
      </div>

      <button className="rounded-full border px-4 py-2">
        🌙
      </button>
    </header>
  );
}