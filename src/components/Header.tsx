"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type User = {
  sub: string;
  email?: string;
  name?: string;
};

type IconName =
  | "home"
  | "quran"
  | "tafsir"
  | "ai"
  | "bookmark"
  | "settings"
  | "user"
  | "logout";

const navigation: {
  label: string;
  href: string;
  icon: IconName;
}[] = [
  {
    label: "Bosh sahifa",
    href: "/",
    icon: "home",
  },
  {
    label: "Qur'on",
    href: "/quran",
    icon: "quran",
  },
  {
    label: "Tafsir",
    href: "/tafsir",
    icon: "tafsir",
  },
  {
    label: "Quran AI",
    href: "/quran-ai",
    icon: "ai",
  },
  {
    label: "Xatcho'plar",
    href: "/bookmarks",
    icon: "bookmark",
  },
  {
    label: "Sozlamalar",
    href: "/settings",
    icon: "settings",
  },
];

function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  if (name === "home") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M3.5 10.5 12 3l8.5 7.5"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 9.5V21h5v-6h3v6h5V9.5"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "quran") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M3.5 5.5c3.6-1.2 6.3-.3 8.5 1.9v12c-2.2-2.2-4.9-3.1-8.5-1.9v-12Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M20.5 5.5c-3.6-1.2-6.3-.3-8.5 1.9v12c2.2-2.2 4.9-3.1 8.5-1.9v-12Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "tafsir") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M6 3.5h10l2 2V21H6V3.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M15 3.5V7h3M9 11h6M9 14.5h5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "ai") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M5 5.5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-8l-4 3v-3H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="11" r="1" fill="currentColor" />
        <circle cx="12" cy="11" r="1" fill="currentColor" />
        <circle cx="16" cy="11" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (name === "bookmark") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M6 3.5h12v17L12 17l-6 3.5v-17Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "settings") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a8 8 0 0 0-1.7-1L14.5 3h-5l-.4 3.1a8 8 0 0 0-1.7 1l-2.4-1-2 3.4L5.1 11a7 7 0 0 0 0 2L3 14.5l2 3.4 2.4-1a8 8 0 0 0 1.7 1l.4 3.1h5l.4-3.1a8 8 0 0 0 1.7-1l2.4 1 2-3.4-2.1-1.5c.1-.3.1-.7.1-1Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "user") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
      >
        <circle
          cx="12"
          cy="8"
          r="3.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M5 20c.8-4 3-6 7-6s6.2 2 7 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M10 5H5v14h5M14 8l4 4-4 4M18 12H9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Logo() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-12 w-12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13 50V27c0-7 5-11 11-14 4-2 7-6 8-10 1 4 4 8 8 10 6 3 11 7 11 14v23"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      <path
        d="M20 45V28c0-5 4-8 12-12 8 4 12 7 12 12v17"
        stroke="currentColor"
        strokeWidth="2.4"
      />

      <path
        d="M9 48c9-2 16 0 23 5 7-5 14-7 23-5v7c-9-2-16 0-23 5-7-5-14-7-23-5v-7Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      <path
        d="M32 53v7"
        stroke="currentColor"
        strokeWidth="2.2"
      />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const menuRef = useRef<HTMLDivElement>(null);

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const shouldUseDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle(
      "dark",
      shouldUseDark
    );
  }, []);

  useEffect(() => {
    async function loadUser() {
      try {
        const response = await fetch("/api/auth/me", {
          cache: "no-store",
        });

        if (!response.ok) {
          setUser(null);
          return;
        }

        const data = await response.json();

        if (data.authenticated && data.user) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  useEffect(() => {
    function closeMenu(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  function toggleTheme() {
    const root = document.documentElement;

    const nextDark =
      !root.classList.contains("dark");

    root.classList.toggle("dark", nextDark);

    localStorage.setItem(
      "theme",
      nextDark ? "dark" : "light"
    );
  }

  async function logout() {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    setUser(null);
    setMenuOpen(false);

    router.push("/");
    router.refresh();
  }

  function initial() {
    return (
      user?.name?.charAt(0) ||
      user?.email?.charAt(0) ||
      "U"
    ).toUpperCase();
  }

  return (
    <header className="relative z-50 border-b border-[#e5e8e4] bg-[#fffefa] dark:border-[#1d4941] dark:bg-[#062d27]">
      <div className="mx-auto flex h-[92px] max-w-[1536px] items-center px-6 lg:px-14">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 text-[#075c3d] dark:text-[#f2d08c]"
        >
          <Logo />

          <div className="hidden md:block">
            <div
              dir="rtl"
              className="text-[24px] font-semibold leading-none"
            >
              القرآن الكريم
            </div>

            <div className="mt-1 text-[16px] font-medium">
              Quran App
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="mx-auto hidden h-full items-center gap-6 lg:flex xl:gap-10">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex h-full min-w-[70px] flex-col items-center justify-center gap-2 text-sm ${
                  active
                    ? "font-semibold text-[#075c3d] dark:text-[#f2d08c]"
                    : "text-[#172c2b] hover:text-[#075c3d] dark:text-[#edf4ef] dark:hover:text-[#f2d08c]"
                }`}
              >
                <Icon
                  name={item.icon}
                  className="h-[27px] w-[27px]"
                />

                <span>{item.label}</span>

                {active && (
                  <span className="absolute bottom-0 h-[3px] w-full max-w-[84px] rounded-full bg-[#087348] dark:bg-[#f2ca7c]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Controls */}
        <div className="ml-auto flex items-center gap-4">
          <button
            type="button"
            className="hidden h-12 items-center gap-2 rounded-xl border border-[#e2e5e2] bg-white px-4 text-sm font-medium text-[#122725] shadow-sm md:flex dark:border-[#285149] dark:bg-[#082f29] dark:text-white"
          >
            <span className="text-lg">🇺🇿</span>
            <span>UZ</span>
            <span>⌄</span>
          </button>

          {!loading && (
            <>
              {user ? (
                <div
                  ref={menuRef}
                  className="relative"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setMenuOpen((value) => !value)
                    }
                    className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#0d744f] bg-[#004c34] text-xl font-medium text-white dark:border-[#078458] dark:bg-[#006741]"
                  >
                    {initial()}
                  </button>

                  {menuOpen && (
                    <div className="absolute right-[-64px] top-[62px] w-[235px] rounded-xl border border-[#e0e2df] bg-white p-3 text-[#151f1d] shadow-xl dark:border-[#285149] dark:bg-[#082e29] dark:text-white">
                      {user.email && (
                        <div className="truncate border-b border-border px-2 pb-3 text-sm">
                          {user.email}
                        </div>
                      )}

                      <div className="py-2">
                        <Link
                          href="/profile"
                          onClick={() =>
                            setMenuOpen(false)
                          }
                          className="flex items-center gap-4 rounded-lg px-2 py-3 hover:bg-black/5 dark:hover:bg-white/5"
                        >
                          <Icon
                            name="user"
                            className="h-5 w-5"
                          />
                          Profilim
                        </Link>

                        <Link
                          href="/bookmarks"
                          onClick={() =>
                            setMenuOpen(false)
                          }
                          className="flex items-center gap-4 rounded-lg px-2 py-3 hover:bg-black/5 dark:hover:bg-white/5"
                        >
                          <Icon
                            name="bookmark"
                            className="h-5 w-5"
                          />
                          Xatcho&apos;plarim
                        </Link>

                        <Link
                          href="/settings"
                          onClick={() =>
                            setMenuOpen(false)
                          }
                          className="flex items-center gap-4 rounded-lg px-2 py-3 hover:bg-black/5 dark:hover:bg-white/5"
                        >
                          <Icon
                            name="settings"
                            className="h-5 w-5"
                          />
                          Sozlamalar
                        </Link>
                      </div>

                      <div className="border-t border-border pt-2">
                        <button
                          type="button"
                          onClick={logout}
                          className="flex w-full items-center gap-4 rounded-lg px-2 py-3 text-left hover:bg-black/5 dark:hover:bg-white/5"
                        >
                          <Icon
                            name="logout"
                            className="h-5 w-5"
                          />
                          Chiqish
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href="/api/auth/login"
                  className="rounded-xl bg-[#075c3d] px-5 py-3 text-sm font-semibold text-white"
                >
                  Kirish
                </a>
              )}
            </>
          )}

          {/* Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#e5e5e1] bg-white text-[27px] shadow-[0_5px_16px_rgba(0,0,0,0.08)] dark:border-[#b98c48] dark:bg-[#092f29]"
            aria-label="Mavzuni o'zgartirish"
          >
            <span className="dark:hidden">
              ☀️
            </span>

            <span className="hidden dark:inline">
              🌙
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}