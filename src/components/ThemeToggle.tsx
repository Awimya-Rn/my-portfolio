"use client";

export default function ThemeToggle() {
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
      aria-label="Toggle light/dark mode"
      title="Toggle light/dark mode"
    >
      <span className="theme-icon-dark">[☾]</span>
      <span className="theme-icon-light">[☀]</span>
    </button>
  );
}
