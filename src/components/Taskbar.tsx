"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

const navItems = [
  { id: "hero", label: "~", index: 1 },
  { id: "about", label: "about", index: 2 },
  { id: "experience", label: "experience", index: 3 },
  { id: "projects", label: "projects", index: 4 },
  { id: "skills", label: "skills", index: 5 },
  { id: "contact", label: "contact", index: 6 },
];

export default function Taskbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [switchingNotice, setSwitchingNotice] = useState<{
    from: string;
    to: string;
    indexTo: number;
  } | null>(null);

  const noticeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom smooth scroll with easing animation
  const scrollToSection = (targetId: string, indexTo: number) => {
    if (targetId === activeSection) return;

    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    const fromLabel = navItems.find((n) => n.id === activeSection)?.label || "~";
    const toLabel = navItems.find((n) => n.id === targetId)?.label || targetId;

    // Show Workspace Switch Notification
    setSwitchingNotice({ from: fromLabel, to: toLabel, indexTo });
    if (noticeTimerRef.current) clearTimeout(noticeTimerRef.current);
    noticeTimerRef.current = setTimeout(() => {
      setSwitchingNotice(null);
    }, 2200);

    setMobileOpen(false);

    // Calculate position with offset for fixed taskbar
    const navbarHeight = 70;
    const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // ms
    let start: number | null = null;

    // Custom cubic easing function for liquid-smooth scroll
    const easeInOutCubic = (t: number): number =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * easeProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        setActiveSection(targetId);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${
          scrolled
            ? "bg-ctp-crust/85 backdrop-blur-md border-b border-ctp-surface0 shadow-lg shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left: traffic lights + alias */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-ctp-red" />
              <div className="w-2.5 h-2.5 rounded-full bg-ctp-yellow" />
              <div className="w-2.5 h-2.5 rounded-full bg-ctp-green" />
            </div>
            <span className="text-[0.7rem] font-semibold">
              <span className="text-ctp-green">
                {siteConfig.personal.aliasUser}
              </span>
              <span className="text-ctp-overlay0">@</span>
              <span className="text-ctp-blue">
                {siteConfig.personal.aliasHost}
              </span>
            </span>
          </div>

          {/* Center: desktop nav as workspace buttons */}
          <div className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id, item.index)}
                className={`relative px-3 py-1.5 text-[0.72rem] rounded transition-all duration-200 tracking-wide font-mono cursor-pointer ${
                  activeSection === item.id
                    ? "text-ctp-crust font-bold"
                    : "text-ctp-text hover:text-ctp-blue hover:bg-ctp-surface0/50"
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeWorkspace"
                    className="absolute inset-0 bg-ctp-blue rounded shadow-[0_0_12px_rgba(137,180,250,0.4)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">
                  {activeSection === item.id && (
                    <span className="text-ctp-crust mr-1">[{item.index}]</span>
                  )}
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Right: mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-ctp-text text-sm hover:text-ctp-blue transition-colors px-2 py-1 border border-ctp-surface0 rounded"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? "[×]" : "[≡]"}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-4 right-4 bg-ctp-mantle/95 backdrop-blur-md border border-ctp-surface0 rounded-lg p-3 shadow-2xl"
            >
              <div className="text-[0.6rem] text-ctp-overlay0 mb-2 pb-2 border-b border-dashed border-ctp-surface0">
                ❯ cat links.txt
              </div>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id, item.index)}
                  className={`w-full text-left px-3 py-2 rounded text-[0.75rem] transition-colors font-mono flex items-center justify-between ${
                    activeSection === item.id
                      ? "text-ctp-blue bg-ctp-surface0/60 font-semibold"
                      : "text-ctp-text hover:bg-ctp-surface0/30"
                  }`}
                >
                  <span>
                    <span className="text-ctp-green mr-2">•</span>
                    {item.label}
                  </span>
                  <span className="text-[0.6rem] text-ctp-overlay0">
                    ws-{item.index}
                  </span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Linux Workspace Switch Notification Toast */}
      <AnimatePresence>
        {switchingNotice && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="fixed bottom-6 right-6 z-50 pointer-events-none"
          >
            <div className="bg-ctp-mantle/90 backdrop-blur-md border border-ctp-blue/40 text-ctp-text px-4 py-2.5 rounded-lg shadow-[0_0_20px_rgba(137,180,250,0.25)] flex items-center gap-3 font-mono text-[0.7rem]">
              <span className="w-2 h-2 rounded-full bg-ctp-green animate-ping" />
              <div>
                <span className="text-ctp-blue font-bold">
                  [WORKSPACE {switchingNotice.indexTo}]
                </span>{" "}
                <span className="text-ctp-subtext0">
                  {switchingNotice.from} ➜{" "}
                  <span className="text-ctp-green font-semibold">
                    {switchingNotice.to}
                  </span>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
