"use client";

import Link from "next/link";
import { useAppLanguage } from "@/lib/use-app-language";

type FeatureType =
  | "quran"
  | "tafsir"
  | "ai"
  | "bookmark"
  | "settings";

const features: {
  type: FeatureType;
  title: string;
  subtitle: string;
  href: string;
  light: string;
  dark: string;
}[] = [
  {
    type: "quran",
    title: "Qur'on",
    subtitle: "O'qish va tinglash",
    href: "/quran",
    light: "bg-[#e6f6ed] border-[#d5eadf] text-[#075c3d]",
    dark: "dark:bg-[#003f30] dark:border-[#087451] dark:text-white",
  },
  {
    type: "tafsir",
    title: "Tafsir",
    subtitle: "Oyatlarni tushuntirish",
    href: "/tafsir",
    light: "bg-[#fff0df] border-[#f2dfc9] text-[#603615]",
    dark: "dark:bg-[#35331a] dark:border-[#766a2a] dark:text-white",
  },
  {
    type: "ai",
    title: "Quran AI",
    subtitle: "Savollaringizga javob",
    href: "/quran-ai",
    light: "bg-[#eee7ff] border-[#ddd3fb] text-[#5220a5]",
    dark: "dark:bg-[#25273d] dark:border-[#575c83] dark:text-white",
  },
  {
    type: "bookmark",
    title: "Xatcho'plar",
    subtitle: "Saqlanganlar",
    href: "/bookmarks",
    light: "bg-[#ffe6ed] border-[#f4ccd8] text-[#7c2136]",
    dark: "dark:bg-[#3a202c] dark:border-[#805062] dark:text-white",
  },
  {
    type: "settings",
    title: "Sozlamalar",
    subtitle: "Til, mavzu va boshqa",
    href: "/settings",
    light: "bg-[#e6f4fb] border-[#cee5ef] text-[#164f58]",
    dark: "dark:bg-[#10393a] dark:border-[#377071] dark:text-white",
  },
];

function FeatureIcon({
  type,
}: {
  type: FeatureType;
}) {
  if (type === "quran") {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-9 w-9"
      >
        <path
          d="M3 7c5-2 9-.7 13 3v17c-4-3.7-8-5-13-3V7Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M29 7c-5-2-9-.7-13 3v17c4-3.7 8-5 13-3V7Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "tafsir") {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-8 w-8"
      >
        <path
          d="M7 3h14l4 4v22H7V3Z"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <path
          d="M20 3v6h5M11 14h10M11 19h8"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "ai") {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-8 w-8"
      >
        <rect
          x="3"
          y="5"
          width="26"
          height="20"
          rx="5"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <path
          d="m10 25-4 4v-6"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <circle cx="11" cy="15" r="1.4" fill="currentColor" />
        <circle cx="16" cy="15" r="1.4" fill="currentColor" />
        <circle cx="21" cy="15" r="1.4" fill="currentColor" />
      </svg>
    );
  }

  if (type === "bookmark") {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-8 w-8"
      >
        <path
          d="M8 3h16v26l-8-5-8 5V3Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className="h-9 w-9"
    >
      <circle
        cx="16"
        cy="16"
        r="5"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path
        d="M27 16c0-1-.1-1.7-.3-2.5l3-2.2-3-5.1-3.5 1.5a12 12 0 0 0-4-2.3L18.6 1h-5.2l-.6 4.4a12 12 0 0 0-4 2.3L5.3 6.2l-3 5.1 3 2.2A11 11 0 0 0 5 16c0 .9.1 1.7.3 2.5l-3 2.2 3 5.1 3.5-1.5a12 12 0 0 0 4 2.3l.6 4.4h5.2l.6-4.4a12 12 0 0 0 4-2.3l3.5 1.5 3-5.1-3-2.2c.2-.8.3-1.6.3-2.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

const homeTranslations = {
  uz: {
    greeting: "Assalomu alaykum va rohmatullohi va barakatuh",
    searchPlaceholder: "Sura, oyat yoki mavzuni qidiring...",
    searchButton: "Qidirish",

    cards: {
      quran: {
        title: "Qur'on",
        subtitle: "O'qish va tinglash",
      },
      tafsir: {
        title: "Tafsir",
        subtitle: "Oyatlarni tushuntirish",
      },
      ai: {
        title: "Quran AI",
        subtitle: "Savollaringizga javob",
      },
      bookmark: {
        title: "Xatcho'plar",
        subtitle: "Saqlanganlar",
      },
      settings: {
        title: "Sozlamalar",
        subtitle: "Til, mavzu va boshqa",
      },
    },
  },

  ru: {
    greeting: "Мир вам, милость Аллаха и Его благословение",
    searchPlaceholder: "Поиск суры, аята или темы...",
    searchButton: "Поиск",

    cards: {
      quran: {
        title: "Коран",
        subtitle: "Чтение и прослушивание",
      },
      tafsir: {
        title: "Тафсир",
        subtitle: "Толкование аятов",
      },
      ai: {
        title: "Quran AI",
        subtitle: "Ответы на ваши вопросы",
      },
      bookmark: {
        title: "Закладки",
        subtitle: "Сохранённое",
      },
      settings: {
        title: "Настройки",
        subtitle: "Язык, тема и другое",
      },
    },
  },

  en: {
    greeting: "Peace be upon you, and Allah's mercy and blessings",
    searchPlaceholder: "Search surah, verse or topic...",
    searchButton: "Search",

    cards: {
      quran: {
        title: "Quran",
        subtitle: "Read and listen",
      },
      tafsir: {
        title: "Tafsir",
        subtitle: "Explanation of verses",
      },
      ai: {
        title: "Quran AI",
        subtitle: "Answers to your questions",
      },
      bookmark: {
        title: "Bookmarks",
        subtitle: "Saved items",
      },
      settings: {
        title: "Settings",
        subtitle: "Language, theme and more",
      },
    },
  },
};

export default function Home() {
  const { language } = useAppLanguage();
  const t = homeTranslations[language];

  return (
    <div className="min-h-screen bg-[#fdfcf8] text-[#12342b] dark:bg-[#062e28] dark:text-[#f5ead0]">
      
      <main className="relative mx-auto flex min-h-[calc(100dvh-92px)] max-w-[1536px] flex-col overflow-hidden bg-[#fcfbf7] dark:bg-[#062f29]">

{/* Светлый фон */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat dark:hidden"
  style={{
    backgroundImage: "url('/quran-light-bg.png')",
  }}
/>

{/* Тёмный фон */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 hidden bg-cover bg-center bg-no-repeat dark:block"
  style={{
    backgroundImage: "url('/quran-dark-bg.png')",
  }}
/>
        {/* HERO CONTENT */}
        <section className="relative z-10 mx-auto flex w-full max-w-[1120px] flex-1 flex-col items-center px-6 pb-6 pt-8 text-center md:pt-9">
          <h1
            dir="rtl"
            className="font-serif text-[36px] font-semibold leading-[1.45] text-[#075c3d] md:text-[44px] dark:text-[#f2cb86]"
          >
            السلام عليكم ورحمة الله وبركاته
          </h1>

          <p className="mt-1 font-serif text-[20px] text-[#346956] md:text-[23px] dark:text-[#f3e6c9]">
            {t.greeting}
          </p>

          {/* Ornament */}
          <div className="mt-3 flex items-center gap-4 text-[#799a8a] dark:text-[#e4bf78]">
            <span className="h-px w-16 bg-current opacity-60" />
            <span className="text-2xl">۞</span>
            <span className="h-px w-16 bg-current opacity-60" />
          </div>

          {/* Search */}
          <div className="mt-60 flex h-[48px] w-full max-w-[660px] items-center rounded-full border border-[#d6ddd8] bg-white/95 p-1.5 pl-5 shadow-[0_5px_12px_rgba(0,0,0,0.10)] dark:border-[#41655b] dark:bg-[#092e29]/90">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6 shrink-0 text-[#0b6548] dark:text-white"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="m16 16 5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <input
              type="search"
              placeholder={t.searchPlaceholder}
              className="min-w-0 flex-1 bg-transparent px-4 text-[14px] text-[#273a35] outline-none placeholder:text-[#5e6b67] dark:text-white dark:placeholder:text-[#d6dfdc]"
            />

            <button
              type="button"
              className="h-full rounded-full bg-[#087355] px-8 text-[14px] font-semibold text-white dark:bg-[#f2cf8c] dark:text-[#15251f]"
            >
              {t.searchButton}
            </button>
          </div>
        </section>

        {/* CARDS */}
        <section className="relative z-10 mx-auto grid max-w-[1330px] grid-cols-1 gap-4 px-7 pb-6 pt-3 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className={`flex min-h-[74px] items-center gap-4 rounded-xl border px-5 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${feature.light} ${feature.dark}`}
            >
              <div className="shrink-0">
                <FeatureIcon type={feature.type} />
              </div>

              <div className="min-w-0 flex-1 text-left">
                <h2 className="text-[16px] font-bold">
                  {t.cards[feature.type].title}
                </h2>

                <p className="mt-0.5 truncate text-[13px] opacity-85">
                  {t.cards[feature.type].subtitle}
                </p>
              </div>

              <span className="text-2xl font-light">
                ›
              </span>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}