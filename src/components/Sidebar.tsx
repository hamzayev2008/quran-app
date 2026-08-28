const navigation = [
  {
    icon: "🏠",
    label: "Главная",
  },
  {
    icon: "📖",
    label: "Коран",
  },
  {
    icon: "🎧",
    label: "Аудио",
  },
  {
    icon: "⭐",
    label: "Избранное",
  },
  {
    icon: "🤖",
    label: "Quran AI",
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-gray-200 bg-white p-5 md:block">
      <nav className="space-y-2">
        {navigation.map((item) => (
          <button
            key={item.label}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-800"
          >
            <span className="text-xl">
              {item.icon}
            </span>

            <span className="font-medium">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
}