"use client";
import { useEffect, useState } from "react";

const ASCII_ART = `██████╗ ███╗   ██╗           █████╗ ██╗    ██╗██╗███╗   ███╗██╗   ██╗ █████╗ 
██╔══██╗████╗  ██║          ██╔══██╗██║    ██║██║████╗ ████║╚██╗ ██╔╝██╔══██╗
██████╔╝██╔██╗ ██║ ███████║ ███████║██║ █╗ ██║██║██╔████╔██║ ╚████╔╝ ███████║
██╔══██╗██║╚██╗██║ ╚══════╝ ██╔══██║██║███╗██║██║██║╚██╔╝██║  ╚██╔╝  ██╔══██║
██║  ██║██║ ╚████║          ██║  ██║╚███╔███╔╝██║██║ ╚═╝ ██║   ██║   ██║  ██║
╚═╝  ╚═╝╚═╝  ╚═══╝          ╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝╚═╝     ╚═╝   ╚═╝   ╚═╝  ╚═╝`;

const NEOFETCH = [
  { label: "OS", value: "Windows 11 & Arch Linux x86_64", color: "#89b4fa" },
  { label: "Shell", value: "zsh 5.9", color: "#a6e3a1" },
  { label: "Role", value: "AI Engineer / ML Enthusiast", color: "#f38ba8" },
  { label: "Location", value: "Madiun, Jawa Timur, ID", color: "#cba6f7" },
  { label: "Status", value: "Available for opportunities", color: "#f9e2af" },
  { label: "College", value: "Malang State Polytechnic", color: "#cdd6f4" },
];

const COLORS = ["#cdd6f4", "#f9e2af", "#cba6f7", "#f38ba8", "#89b4fa", "#94e2d5"];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const fullText = "Mokh. Ilham Putra";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(id);
      }
    }, 60);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setShowCursor((p) => !p), 500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 24px 40px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0a0a0c",
        backgroundImage: `linear-gradient(rgba(20, 20, 25, 0.6), rgba(20, 20, 25, 0.6)), url('https://images.alphacoders.com/935/thumb-1920-935892.png')`,
        backgroundSize:"cover"
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(30,30,46,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(30,30,46,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* Glow orb */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(203,166,247,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(137,180,250,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Left: Main info */}
        <div style={{ animation: "fadeInUp 0.8s ease forwards" }}>
          {/* ASCII art */}
          <pre
            style={{
              color: "#f9e2af",
              fontSize: "0.55rem",
              lineHeight: 1.2,
              marginBottom: 24,
              opacity: 0.7,
              letterSpacing: "0.05em",
              fontFamily: "monospace",
            }}
          >
            {ASCII_ART}
          </pre>

          {/* Prompt line */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 8,
              marginBottom: 8,
              fontSize: "0.75rem",
              color: "#585b70",
            }}
          >
            <span style={{ color: "#a6e3a1" }}>Rn</span>
            <span>@</span>
            <span style={{ color: "#89b4fa" }}>Awimya</span>
            <span style={{ color: "#cba6f7" }}>~</span>
            <span style={{ color: "#f9e2af" }}>$</span>
            <span style={{ color: "#cdd6f4" }}>whoami</span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#cdd6f4",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: 16,
              minHeight: "2.4em",
            }}
          >
            {typed}
            {showCursor && (
              <span
                style={{
                  display: "inline-block",
                  width: 10,
                  height: "1.1em",
                  background: "#f9e2af",
                  marginLeft: 3,
                  verticalAlign: "middle",
                }}
              />
            )}
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: "0.75rem",
              color: "#cdd6f4",
              lineHeight: 1.8,
              marginBottom: 24,
              borderLeft: "2px solid #f9e2af",
              paddingLeft: 12,
            }}
          >
            Informatics Engineering Student at Malang State Polytechnic
            <br />
            Machine Learning &amp; AI Enthusiast
            <br />
            AI Engineer Cohort at Coding Camp 2026
            <br />
            Distinction Graduation — ML Cohort at Asah × Accenture 2025
          </p>

          {/* Color palette */}
          <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
            {COLORS.map((c) => (
              <div
                key={c}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 3,
                  background: c,
                  opacity: 0.8,
                }}
              />
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              { label: "$ view projects", href: "#projects", accent: "#a6e3a1" },
              { label: "$ contact me", href: "#contact", accent: "#89b4fa" },
            ].map(({ label, href, accent }) => (
              <a
                key={label}
                href={href}
                style={{
                  display: "inline-block",
                  padding: "8px 18px",
                  border: `1px solid ${accent}`,
                  color: accent,
                  fontSize: "0.72rem",
                  borderRadius: 4,
                  textDecoration: "none",
                  fontFamily: "'JetBrains Mono', monospace",
                  transition: "all 0.2s",
                  letterSpacing: "0.05em",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = `${accent}15`;
                  el.style.boxShadow = `0 0 16px ${accent}30`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "transparent";
                  el.style.boxShadow = "none";
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Neofetch terminal */}
        <div className="terminal-chrome float-anim" style={{ maxWidth: 480 }}>
          <div className="terminal-titlebar">
            <div className="terminal-dot" style={{ background: "#f38ba8" }} />
            <div className="terminal-dot" style={{ background: "#f9e2af" }} />
            <div className="terminal-dot" style={{ background: "#a6e3a1" }} />
            <span style={{ color: "#585b70", fontSize: "0.65rem", marginLeft: 8 }}>
              neofetch — Rn@Awimya
            </span>
          </div>
          <div style={{ padding: 20, display: "flex", gap: 20 }}>
            {/* ASCII avatar */}
            <pre
              style={{
                color: "#f9e2af",
                fontSize: "0.5rem",
                lineHeight: 1.15,
                flexShrink: 0,
                opacity: 0.8,
              }}
            >
{`⠀⠀⠀⠀⢷⠀⢠⢣⡏
⠀⠀⠀⠀⢘⣷⢸⣾⣇⣶⣦⣄
⠀⠀⠀⠀⠀⣿⣿⣿⣹⣿⣿⣷⣿⣆⣀⣀
⠀⠀⠀⠀⠀⢼⡇⣿⣿⣽⣶⣶⣯⣭⣷⣶⣿⣿⣶
⠀⠀⠀⠀⠀⠸⠣⢿⣿⣿⣿⣿⡿⣛⣭⣭⣭⡙⠁
⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⠿⠿⠿⢯⡛
⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣾⣿⡿⡷⢿⡄
⠀⠀⠀⠀⠀⠀⠀⡔⣺⣿⣿⣽⡿⣿⣿⣿⣟⡳⠦
⠀⠀⠀⠀⠀⠀⢠⣭⣾⣿⠃⣿⡇⣿⣿⡷⢾⣭⡓
⠀⠀⠀⠀⠀⠀⣾⣿⡿⠷⣿⣿⡇⣿⣿⣟⣻⠶⣭
⠀⠀⠀⠀⠀⠀⣋⣵⣞⣭⣮⢿⣧⣝⣛⡛⠿⢿⣦
⠀⣀⣀⣠⣶⣿⣿⣿⣿⡿⠟⣼⣿⡿⣟⣿⡇⠀⠙
⡼⣿⣿⣿⢟⣿⣿⣿⣷⡿⠿⣿⣿⣿⣿⣿
⠀⠀⠉⠁⠀⢉⣭⣭⣽⣯⣿⣿⢿⣫⣮⣅⣀
⠀⠀⠀⠀⢀⣿⣟⣽⣿⣿⣿⣿⣾⣿⣿⣯⡛⠻⢷⣶⣤⣄⡀
⠀⠀⠀⢀⡞⣾⣿⣿⣿⣿⡟⣿⣿⣽⣿⣿⡿⠀⠀⠀⠈⠙⠛⠿⣶⣤⣄⡀
⠀⠀⠀⣾⣸⣿⣿⣷⣿⣿⢧⣿⣿⣿⣿⣿⣷⠁⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⢷⣦
⠀⠀⠀⡿⣛⣛⣛⣛⣿⣿⣸⣿⣿⣿⣻⣿⣿⠆
⠀⠀⢸⡇⣿⣿⣿⣿⣿⡏⣿⣿⣿⣿⣿⣿⣿⡇
⠀⠀⠀⢰⣶⣶⣶⣾⣿⢃⣿⣿⣿⣿⣯⣿⣭⠁`}
            </pre>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.72rem", marginBottom: 6 }}>
                <span style={{ color: "#a6e3a1" }}>Rn</span>
                <span style={{ color: "#585b70" }}>@</span>
                <span style={{ color: "#89b4fa" }}>Awimya</span>
              </div>
              <div
                style={{
                  borderBottom: "1px solid #1e1e2e",
                  marginBottom: 8,
                }}
              />
              <div className="neofetch-box">
                {NEOFETCH.map(({ label, value, color }) => (
                  <div key={label} style={{ marginBottom: 3 }}>
                    <span style={{ color }}>{label}</span>
                    <span style={{ color: "#585b70" }}>: </span>
                    <span style={{ color: "#cdd6f4" }}>{value}</span>
                  </div>
                ))}
                <div style={{ marginTop: 10, display: "flex", gap: 4, flexWrap: "wrap" }}>
                  {COLORS.map((c) => (
                    <div
                      key={c}
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: 2,
                        background: c,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
