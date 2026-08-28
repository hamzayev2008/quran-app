type VerseCardProps = {
  number: number;
  arabic: string;
  transliteration?: string;
  translation?: string;
};

export default function VerseCard({
  number,
  arabic,
  transliteration,
  translation,
}: VerseCardProps) {
  return (
    <article className="border-b border-gray-200 py-8 last:border-b-0">
      <div className="flex items-start gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-semibold text-emerald-800">
          {number}
        </div>

        <div className="min-w-0 flex-1">
          <p
            dir="rtl"
            className="text-right text-3xl leading-[2.2] text-gray-900 md:text-4xl"
          >
            {arabic}
          </p>

          {transliteration && (
            <p className="mt-5 text-lg leading-8 text-emerald-800">
              {transliteration}
            </p>
          )}

          {translation && (
            <div className="mt-5 rounded-2xl bg-gray-50 p-4">
              <p className="text-base leading-7 text-gray-700">
                {translation}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}