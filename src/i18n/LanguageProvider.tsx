"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { SiteConfig } from "@/config/site";
import { getContent, ui, type Lang, type UiStrings } from "@/i18n/translations";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  /** UI labels in the current language */
  t: UiStrings;
  /** Site content (bio, experience, projects...) in the current language */
  content: SiteConfig;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with "en" so the server and first client render match;
  // the saved / browser language is applied right after mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    let initial: Lang = "en";
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "id") {
        initial = saved;
      } else if (navigator.language?.toLowerCase().startsWith("id")) {
        initial = "id";
      }
    } catch {
      // storage unavailable - fall back to English
    }
    setLangState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem("lang", next);
    } catch {
      // ignore - choice just won't persist
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "id" : "en");
  }, [lang, setLang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang,
      t: ui[lang],
      content: getContent(lang),
    }),
    [lang, setLang, toggleLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return ctx;
}
