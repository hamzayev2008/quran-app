const actions = [
  {
    icon: "📖",
    title: "Коран",
    description: "114 сур",
  },
  {
    icon: "🎧",
    title: "Аудио",
    description: "Слушать суры",
  },
  {
    icon: "🤖",
    title: "Quran AI",
    description: "Задать вопрос",
  },
  {
    icon: "⭐",
    title: "Избранное",
    description: "Сохранённые аяты",
  },
];

export default function QuickActions() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-gray-900">
        Быстрый доступ
      </h2>

      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        {actions.map((action) => (
          <button
            key={action.title}
            className="rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-3xl">
              {action.icon}
            </div>

            <h3 className="mt-4 font-semibold text-gray-900">
              {action.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {action.description}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}