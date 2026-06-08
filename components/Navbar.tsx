"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 1000);

    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 60);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      clearInterval(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navItems = [
    { label: "~", href: "#hero" },
    { label: "about", href: "#about" },
    { label: "experience", href: "#experience" },
    { label: "projects", href: "#projects" },
    { label: "skills", href: "#skills" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(10, 10, 12, 0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1e1e2e" : "1px solid transparent",
        transition: "all 0.3s ease",
        padding: "14px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ display: "flex", gap: 5 }}>
          <div className="terminal-dot" style={{ width: 10, height: 10, borderRadius: "50%", background: "#f38ba8" }} />
          <div className="terminal-dot" style={{ width: 10, height: 10, borderRadius: "50%", background: "#f9e2af" }} />
          <div className="terminal-dot" style={{ width: 10, height: 10, borderRadius: "50%", background: "#a6e3a1" }} />
        </div>
        <span style={{ color: "#585b70", fontSize: "0.7rem", fontWeight: 600 }}>
          <span style={{ color: "#a6e3a1" }}>Rn</span>
          <span style={{ color: "#585b70" }}>@</span>
          <span style={{ color: "#89b4fa" }}>Awimya</span>
        </span>
      </div>

      <div className="desktop-nav" style={{ gap: 4 }}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            style={{
              color: "#cdd6f4",
              fontSize: "0.72rem",
              padding: "6px 12px",
              borderRadius: 4,
              textDecoration: "none",
              transition: "all 0.2s",
              letterSpacing: "0.05em",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.color = "#a6e3a1";
              el.style.background = "rgba(166,227,161,0.08)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.color = "#cdd6f4";
              el.style.background = "transparent";
            }}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ color: "#585b70", fontSize: "0.7rem" }}>
          <span style={{ color: "#cba6f7" }}>{time}</span>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "transparent",
            border: "none",
            color: isOpen ? "#f38ba8" : "#cdd6f4",
            fontSize: "1rem",
            cursor: "pointer",
            padding: 4,
            fontFamily: "inherit",
            display: "none", 
          }}
          aria-label="Toggle Menu"
        >
          {isOpen ? "[x]" : "[=]"}
        </button>
      </div>

      <div
        className="mobile-menu"
        style={{
          position: "absolute",
          top: "100%",
          left: 16,
          right: 16,
          background: "#111114",
          border: "1px solid #1e1e2e",
          borderRadius: 8,
          padding: 12,
          display: isOpen ? "flex" : "none",
          flexDirection: "column",
          gap: 6,
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
        }}
      >
        <div style={{ fontSize: "0.6rem", color: "#585b70", marginBottom: 4, borderBottom: "1px dashed #1e1e2e", paddingBottom: 4 }}>
          <span>❯ cat links.txt</span>
        </div>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsOpen(false)} 
            style={{
              color: "#cdd6f4",
              fontSize: "0.75rem",
              padding: "8px 12px",
              borderRadius: 4,
              textDecoration: "none",
              display: "block",
            }}
          >
            <span style={{ color: "#a6e3a1", marginRight: 8 }}>•</span>
            {item.label}
          </a>
        ))}
      </div>

      <style jsx>{`
        .desktop-nav {
          display: none;
        }
        .mobile-toggle {
          display: block !important;
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
          .mobile-toggle {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
          nav {
            padding: 12px 24px !important;
          }
        }
      `}</style>
    </nav>
  );
}