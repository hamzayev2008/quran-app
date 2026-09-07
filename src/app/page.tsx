import Link from "next/link";
import Header from "@/components/Header";

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
    subtitle: "Oyatlarga tushuntirish",
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
    subtitle: "Til, tema va boshqa",
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

function Lantern({
  className,
}: {
  className: string;
}) {
  return (
    <svg
      viewBox="0 0 60 110"
      className={className}
      fill="none"
    >
      <path
        d="M30 0v22"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d="M21 24h18l5 11-3 42H19l-3-42 5-11Z"
        fill="currentColor"
        opacity=".78"
      />

      <path
        d="M23 34h14v33H23z"
        fill="#fff4cf"
        opacity=".65"
      />

      <path
        d="M25 78h10l-5 10-5-10Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Mosque() {
  return (
    <svg
      viewBox="0 0 900 320"
      className="h-full w-full"
      preserveAspectRatio="xMidYMax meet"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Ground */}
      <rect x="0" y="270" width="900" height="50" />

      {/* Left minaret */}
      <rect x="95" y="110" width="22" height="160" rx="6" />
      <path d="M89 112h34l-17-28-17 28Z" />
      <rect x="101" y="82" width="10" height="18" rx="4" />

      {/* Small left tower */}
      <rect x="155" y="145" width="18" height="125" rx="6" />
      <path d="M149 147h30l-15-22-15 22Z" />

      {/* Main central mosque base */}
      <rect x="235" y="188" width="300" height="82" rx="6" />

      {/* Main dome */}
      <path d="M300 188c0-62 46-103 85-103s85 41 85 103H300Z" />

      {/* Left central dome */}
      <path d="M245 188c0-40 30-68 57-68s57 28 57 68H245Z" />

      {/* Right central dome */}
      <path d="M411 188c0-40 30-68 57-68s57 28 57 68H411Z" />

      {/* Door arch */}
      <path d="M365 270v-54c0-21 16-37 35-37s35 16 35 37v54h-70Z" />

      {/* Windows */}
      <rect x="285" y="214" width="22" height="32" rx="11" />
      <rect x="493" y="214" width="22" height="32" rx="11" />
      <rect x="252" y="214" width="16" height="26" rx="8" />
      <rect x="532" y="214" width="16" height="26" rx="8" />

      {/* Right minarets */}
      <rect x="590" y="118" width="24" height="152" rx="6" />
      <path d="M583 120h38l-19-29-19 29Z" />
      <rect x="598" y="90" width="9" height="17" rx="4" />

      <rect x="666" y="98" width="26" height="172" rx="7" />
      <path d="M658 100h42l-21-31-21 31Z" />
      <rect x="674" y="67" width="10" height="20" rx="4" />

      {/* Far right small domes */}
      <rect x="730" y="210" width="110" height="60" rx="5" />
      <path d="M735 210c8-34 36-55 50-55 14 0 42 21 50 55H735Z" />
      <path d="M770 210c5-23 19-37 30-37s25 14 30 37H770Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfcf8] text-[#12342b] dark:bg-[#062e28] dark:text-[#f5ead0]">
      <Header />
      
      <main className="relative mx-auto min-h-[calc(100vh-92px)] max-w-[1536px] overflow-hidden bg-[#fcfbf7] dark:bg-[#062f29]">
        {/* Main background gradients */}
        <div className="pointer-events-none absolute inset-0">
          {/* light mode */}
          <div
            className="absolute inset-0 dark:hidden"
            style={{
              background:
                "linear-gradient(180deg, #fffdfa 0%, #f7f4ec 45%, #f1ede2 100%)",
            }}
          />

          {/* dark mode */}
          <div
            className="absolute inset-0 hidden dark:block"
            style={{
              background:
                "linear-gradient(180deg, #052b25 0%, #06352e 38%, #04231e 100%)",
            }}
          />

          {/* soft top glow */}
          <div className="absolute left-1/2 top-[-80px] h-[240px] w-[520px] -translate-x-1/2 rounded-full bg-white/60 blur-3xl dark:bg-[#0f5a46]/25" />

          {/* right glow */}
          <div className="absolute right-[6%] top-[120px] h-[260px] w-[260px] rounded-full bg-[#dce9db]/70 blur-3xl dark:bg-[#0d5c47]/25" />

          {/* left glow */}
          <div className="absolute left-[10%] top-[120px] h-[220px] w-[220px] rounded-full bg-[#f4e6c8]/35 blur-3xl dark:bg-[#c79b46]/10" />
        </div>

        {/* Side islamic pattern */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[78px] opacity-40 dark:hidden"
          style={{
            backgroundImage:
              "linear-gradient(45deg, transparent 44%, #dde4db 45%, #dde4db 55%, transparent 56%), linear-gradient(-45deg, transparent 44%, #dde4db 45%, #dde4db 55%, transparent 56%)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-[78px] opacity-40 dark:hidden"
          style={{
            backgroundImage:
              "linear-gradient(45deg, transparent 44%, #dde4db 45%, #dde4db 55%, transparent 56%), linear-gradient(-45deg, transparent 44%, #dde4db 45%, #dde4db 55%, transparent 56%)",
            backgroundSize: "28px 28px",
          }}
        />

        <div
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-[78px] opacity-25 dark:block"
          style={{
            backgroundImage:
              "linear-gradient(45deg, transparent 44%, #1c5a4b 45%, #1c5a4b 55%, transparent 56%), linear-gradient(-45deg, transparent 44%, #1c5a4b 45%, #1c5a4b 55%, transparent 56%)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[78px] opacity-25 dark:block"
          style={{
            backgroundImage:
              "linear-gradient(45deg, transparent 44%, #1c5a4b 45%, #1c5a4b 55%, transparent 56%), linear-gradient(-45deg, transparent 44%, #1c5a4b 45%, #1c5a4b 55%, transparent 56%)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Decorative arch at top-left */}
        <div className="pointer-events-none absolute -left-[55px] -top-[110px] h-[360px] w-[360px] rounded-full border border-[#ddd9cc] opacity-80 dark:border-[#3d6055]" />
        <div className="pointer-events-none absolute left-[35px] top-[30px] h-[210px] w-[210px] rounded-full border border-[#e8e3d8] opacity-60 dark:border-[#28483f]" />

        {/* Mosque silhouette - better placement */}
        <div className="pointer-events-none absolute bottom-[122px] left-[88px] h-[235px] w-[650px] text-[#d8ddd7] opacity-90 dark:text-[#031d19] dark:opacity-95">
          <Mosque />
        </div>

        {/* Foreground mist / hills */}
        <div className="pointer-events-none absolute bottom-[78px] left-[30px] h-[120px] w-[42%] rounded-[50%] bg-white/55 blur-2xl dark:bg-[#08241f]/85" />
        <div className="pointer-events-none absolute bottom-[70px] left-[28%] h-[120px] w-[35%] rounded-[50%] bg-[#eef1eb]/85 blur-2xl dark:bg-[#0a2a24]/80" />
        <div className="pointer-events-none absolute bottom-[70px] right-[5%] h-[140px] w-[36%] rounded-[50%] bg-[#ecefe9]/90 blur-2xl dark:bg-[#0a342d]/70" />

        {/* subtle bird silhouettes */}
        <div className="pointer-events-none absolute right-[16%] top-[145px] text-[#c9cec7] dark:text-[#31544a]">
          <div className="text-2xl tracking-[10px]">︵ ︵ ︵</div>
        </div>

        {/* Lanterns */}
        <div className="pointer-events-none absolute left-[145px] top-[18px] text-[#c89f5a] drop-shadow-[0_0_18px_rgba(241,208,132,0.25)] dark:text-[#d9aa56]">
          <Lantern className="h-[118px] w-[64px]" />
        </div>

        <div className="pointer-events-none absolute left-[196px] top-[86px] text-[#c89f5a] opacity-85 drop-shadow-[0_0_14px_rgba(241,208,132,0.22)] dark:text-[#d9aa56]">
          <Lantern className="h-[82px] w-[46px]" />
        </div>

        {/* stars in dark mode */}
        <div className="pointer-events-none absolute inset-0 hidden dark:block">
          <span className="absolute left-[20%] top-[135px] text-[#c89f43]">
            ✦
          </span>
          <span className="absolute left-[64%] top-[110px] text-[#c89f43]">
            ✦
          </span>
          <span className="absolute left-[72%] top-[180px] text-[#c89f43]">
            ✦
          </span>
          <span className="absolute left-[78%] top-[125px] text-[#9cc7b3]">
            ·
          </span>
        </div>

        {/* HERO CONTENT */}
        <section className="relative z-10 mx-auto flex max-w-[1120px] flex-col items-center px-6 pb-6 pt-10 text-center md:pt-10">
          <h1
            dir="rtl"
            className="font-serif text-[36px] font-semibold leading-[1.45] text-[#075c3d] md:text-[44px] dark:text-[#f2cb86]"
          >
            السلام عليكم ورحمة الله وبركاته
          </h1>

          <p className="mt-1 font-serif text-[20px] text-[#346956] md:text-[23px] dark:text-[#f3e6c9]">
            Assalomu alaykum va rohmatullohi va barakatuh
          </p>

          {/* Ornament */}
          <div className="mt-3 flex items-center gap-4 text-[#799a8a] dark:text-[#e4bf78]">
            <span className="h-px w-16 bg-current opacity-60" />
            <span className="text-2xl">۞</span>
            <span className="h-px w-16 bg-current opacity-60" />
          </div>

          {/* Verse */}
          <p
            dir="rtl"
            className="mt-2 text-[25px] leading-relaxed text-[#174c3c] md:text-[29px] dark:text-[#f6ead2]"
          >
            «اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ»
          </p>

          <p className="mt-0 text-[15px] text-[#315d50] md:text-[16px] dark:text-[#e8e4d8]">
            “O&apos;qig&apos;in Robbingizning nomi bilan, U yaratgandir.”
          </p>

          <p className="mt-1 text-[14px] text-[#315d50] dark:text-[#e8e4d8]">
            (Alaq, 96:1)
          </p>

          {/* Search */}
          <div className="mt-3 flex h-[48px] w-full max-w-[660px] items-center rounded-full border border-[#d6ddd8] bg-white/95 p-1.5 pl-5 shadow-[0_5px_12px_rgba(0,0,0,0.10)] dark:border-[#41655b] dark:bg-[#092e29]/90">
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
              placeholder="Sura, oyat yoki mavzuni qidiring..."
              className="min-w-0 flex-1 bg-transparent px-4 text-[14px] text-[#273a35] outline-none placeholder:text-[#5e6b67] dark:text-white dark:placeholder:text-[#d6dfdc]"
            />

            <button
              type="button"
              className="h-full rounded-full bg-[#087355] px-8 text-[14px] font-semibold text-white dark:bg-[#f2cf8c] dark:text-[#15251f]"
            >
              Qidirish
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
                  {feature.title}
                </h2>

                <p className="mt-0.5 truncate text-[13px] opacity-85">
                  {feature.subtitle}
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