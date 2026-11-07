
"use client";

import { useSyncExternalStore } from "react";
import type { Language } from "@/types/quran";

const STORAGE_KEY = "quran-app-language";
const CHANGE_EVENT = "quran-language-change";

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Language {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved === "uz" || saved === "ru" || saved === "en") {
    return saved;
  }

  return "uz";
}

function getServerSnapshot(): Language {
  return "uz";
}

export function useAppLanguage() {
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  function setLanguage(next: Language) {
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  return { language, setLanguage };
}
