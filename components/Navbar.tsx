"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => { clearInterval(id); window.removeEventListener("scroll", onScroll); };
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
        // buat agar ketika discroll sampai halaman hero hilang, navbar jadi transparan
        background: "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1e1e2e" : "1px solid transparent",
        transition: "all 0.3s ease",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {/* Left: window controls + hostname */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", gap: 6 }}>
          <div className="terminal-dot" style={{ background: "#f38ba8" }} />
          <div className="terminal-dot" style={{ background: "#f9e2af" }} />
          <div className="terminal-dot" style={{ background: "#a6e3a1" }} />
        </div>
        <span style={{ color: "#585b70", fontSize: "0.7rem" }}>
          <span style={{ color: "#a6e3a1" }}>Rn</span>
          <span style={{ color: "#585b70" }}>@</span>
          <span style={{ color: "#89b4fa" }}>Awimya</span>
          <span style={{ color: "#585b70" }}> ~ </span>
        </span>
      </div>

      {/* Center: nav links */}
      <div style={{ display: "flex", gap: 4 }}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            style={{
              color: "#cdd6f4",
              fontSize: "0.72rem",
              padding: "4px 10px",
              borderRadius: 4,
              textDecoration: "none",
              transition: "all 0.2s",
              letterSpacing: "0.05em",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = "#a6e3a1";
              (e.target as HTMLElement).style.background = "rgba(166,227,161,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = "#cdd6f4";
              (e.target as HTMLElement).style.background = "transparent";
            }}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Right: clock */}
      <div style={{ color: "#585b70", fontSize: "0.7rem" }}>
        <span style={{ color: "#cba6f7" }}>{time}</span>
      </div>
    </nav>
  );
}
