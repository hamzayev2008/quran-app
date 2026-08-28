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
    label: "AI",
  },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white px-2 py-2 md:hidden">
      <div className="flex items-center justify-around">
        {navigation.map((item) => (
          <button
            key={item.label}
            className="flex min-w-16 flex-col items-center gap-1 rounded-xl px-2 py-2 text-gray-500 transition hover:text-emerald-800"
          >
            <span className="text-xl">
              {item.icon}
            </span>

            <span className="text-xs">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}