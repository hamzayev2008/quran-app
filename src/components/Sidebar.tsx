const navigation = [
  {
    icon: "🏠",
    label: "Bosh sahifa",
  },
  {
    icon: "📖",
    label: "Qur'on",
  },
  {
    icon: "📚",
    label: "Tafsir",
  },
  {
    icon: "🤖",
    label: "Quran AI",
  },
  {
    icon: "🔖",
    label: "Xatcho'plar",
  },
  {
    icon: "⚙️",
    label: "Sozlamalar",
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden min-h-[calc(100vh-73px)] w-64 shrink-0 border-r border-border bg-surface p-5 md:block">
      <nav className="space-y-2">
        {navigation.map((item, index) => (
          <button
            key={item.label}
            type="button"
            className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left font-medium transition ${
              index === 0
                ? "bg-primary text-white dark:text-[#071c18]"
                : "text-foreground hover:bg-surface-soft"
            }`}
          >
            <span className="text-xl">
              {item.icon}
            </span>

            <span>
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      <div className="mt-8 rounded-3xl border border-border bg-surface-soft p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
          Quran App
        </p>

        <p className="mt-3 text-sm leading-6 text-foreground">
          Qur&apos;onni o&apos;qing, tinglang va o&apos;rganing.
        </p>
      </div>
    </aside>
  );
}