"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function LanguageToggle() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      className="text-[0.7rem] px-2 py-1 border border-ctp-surface0 rounded cursor-pointer font-mono hover:border-ctp-blue/50 transition-colors"
      aria-label={t.toggleLanguage}
      title={t.toggleLanguage}
    >
      <span className={lang === "en" ? "text-ctp-blue font-bold" : "text-ctp-overlay0"}>
        EN
      </span>
      <span className="text-ctp-overlay0">/</span>
      <span className={lang === "id" ? "text-ctp-blue font-bold" : "text-ctp-overlay0"}>
        ID
      </span>
    </button>
  );
}
