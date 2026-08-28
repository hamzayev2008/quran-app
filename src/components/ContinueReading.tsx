export default function ContinueReading() {
  return (
    <section className="mt-8 rounded-3xl bg-emerald-900 p-6 text-white shadow-lg">
      <p className="text-sm text-emerald-200">
        Продолжить чтение
      </p>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">
            سورة البقرة
          </h3>

          <p className="mt-1 text-emerald-200">
            Аль-Бакара • Аят 25
          </p>
        </div>

        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl text-emerald-900 shadow">
          ▶
        </button>
      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-emerald-800">
        <div className="h-full w-[35%] rounded-full bg-white" />
      </div>

      <p className="mt-2 text-right text-sm text-emerald-200">
        35%
      </p>
    </section>
  );
}