"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
export default function ThemeToggle() {
  const { t } = useLanguage();

  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage unavailable (private mode etc.) - theme still applies for this visit
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="text-ctp-text text-sm hover:text-ctp-blue transition-colors px-2 py-1 border border-ctp-surface0 rounded cursor-pointer font-mono"
      aria-label={t.toggleTheme}
      title={t.toggleTheme}
    >
      <span className="theme-icon-dark">[☾]</span>
      <span className="theme-icon-light">[☀]</span>
    </button>
  );
}
