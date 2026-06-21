"use client";
import { useEffect, useState } from "react";

const ASCII_ART = `███╗   ███╗ ██████╗ ██╗  ██╗██╗  ██╗   ██╗██╗ █████╗ ███╗   ███╗
████╗ ████║██╔═══██╗██║ ██╔╝██║  ██║   ██║╚█║██╔══██╗████╗ ████║
██╔████╔██║██║   ██║█████╔╝ ███████║   ██║ ╚╝███████║██╔████╔██║
██║╚██╔╝██║██║   ██║██╔═██╗ ██╔══██║   ██║   ██╔══██║██║╚██╔╝██║
██║ ╚═╝ ██║╚██████╔╝██║  ██╗██║  ██║██╗██║   ██║  ██║██║ ╚═╝ ██║
╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝`;

const NEOFETCH = [
  { label: "OS", value: "Windows 11 & Arch Linux x86_64", color: "#89b4fa" },
  { label: "Shell", value: "zsh 5.9", color: "#a6e3a1" },
  { label: "Role", value: "AI Engineer / ML Enthusiast", color: "#f38ba8" },
  { label: "Location", value: "Madiun, Jawa Timur, ID", color: "#cba6f7" },
  { label: "Status", value: "Available for opportunities", color: "#f9e2af" },
  { label: "College", value: "Malang State Polytechnic", color: "#cdd6f4" },
  { label: "GPA", value: "3.80 / 4.00", color: "#94e2d5" },
  { label: "Projects", value: "4 ", color: "#a6e3a1" },
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
        padding: "80px 16px 40px", 
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0a0a0c",
        backgroundImage: `linear-gradient(rgba(20, 20, 25, 0.75), rgba(20, 20, 25, 0.75)), url('https://images2.alphacoders.com/987/thumb-1920-987174.jpg')`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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

      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(203,166,247,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="hero-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr", 
          gap: 32,
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ width: "100%" }}>
          <div style={{ width: "100%", overflowX: "auto", overflowY: "hidden", marginBottom: 20 }}>
            <pre
              style={{
                color: "#f9e2af",
                fontSize: "clamp(0.28rem, 1.2vw, 0.55rem)", 
                lineHeight: 1.2,
                opacity: 0.6,
                letterSpacing: "0.05em",
                fontFamily: "monospace",
                margin: 0,
              }}
            >
              {ASCII_ART}
            </pre>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 6,
              marginBottom: 8,
              fontSize: "0.7rem",
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

          <h1
            style={{
              fontSize: "clamp(1.4rem, 6vw, 2.2rem)", 
              fontWeight: 700,
              color: "#cdd6f4",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: 16,
              minHeight: "1.4em",
            }}
          >
            {typed}
            {showCursor && (
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: "1em",
                  background: "#f9e2af",
                  marginLeft: 4,
                  verticalAlign: "middle",
                }}
              />
            )}
          </h1>

          <p
            style={{
              fontSize: "0.72rem",
              color: "#a6adc8",
              lineHeight: 1.7,
              marginBottom: 24,
              borderLeft: "2px solid #f9e2af",
              paddingLeft: 12,
              margin: "0 0 24px 0",
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

          <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
            {COLORS.map((c) => (
              <div
                key={c}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 3,
                  background: c,
                  opacity: 0.8,
                }}
              />
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { label: "$ view projects", href: "#projects", accent: "#a6e3a1" },
              { label: "$ contact me", href: "#contact", accent: "#89b4fa" },
            ].map(({ label, href, accent }) => (
              <a
                key={label}
                href={href}
                style={{
                  display: "inline-block",
                  padding: "10px 18px", 
                  border: `1px solid ${accent}`,
                  color: accent,
                  fontSize: "0.7rem",
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

        <div
          className="terminal-chrome"
          style={{
            maxWidth: "100%",
            width: "100%",
            margin: "0 auto"
          }}
        >
          <div className="terminal-titlebar">
            <div className="terminal-dot" style={{ background: "#f38ba8" }} />
            <div className="terminal-dot" style={{ background: "#f9e2af" }} />
            <div className="terminal-dot" style={{ background: "#a6e3a1" }} />
            <span style={{ color: "#585b70", fontSize: "0.65rem", marginLeft: 8 }}>
              neofetch — Rn@Awimya
            </span>
          </div>

          <div
            className="neofetch-content"
            style={{
              padding: 16,
              display: "flex",
              flexDirection: "row", 
              gap: 16,
              alignItems: "flex-start"
            }}
          >
            <img
              src="/hero.png"
              alt="Profile"
              style={{
                width: 130,
                height: "auto",
                objectFit: "cover",
                borderRadius: 8,
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1, minWidth: 0, fontFamily: "'JetBrains Mono', monospace" }}>
              <div style={{ fontSize: "0.7rem", marginBottom: 4 }}>
                <span style={{ color: "#a6e3a1" }}>Rn</span>
                <span style={{ color: "#585b70" }}>@</span>
                <span style={{ color: "#89b4fa" }}>Awimya</span>
              </div>
              <div
                style={{
                  borderBottom: "1px solid #1e1e2e",
                  marginBottom: 6,
                }}
              />
              <div style={{ fontSize: "0.62rem", lineHeight: 1.5 }}>
                {NEOFETCH.map(({ label, value, color }) => (
                  <div key={label} style={{ marginBottom: 2, wordBreak: "break-word" }}>
                    <span style={{ color }}>{label}</span>
                    <span style={{ color: "#585b70" }}>: </span>
                    <span style={{ color: "#cdd6f4" }}>{value}</span>
                  </div>
                ))}

                <div style={{ marginTop: 8, display: "flex", gap: 3, flexWrap: "wrap" }}>
                  {COLORS.map((c) => (
                    <div
                      key={c}
                      style={{
                        width: 12,
                        height: 12,
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

      <style jsx>{`
        @media (min-width: 768px) {
          #hero {
            padding: 80px 24px 40px !important;
          }
          .hero-grid {
            grid-template-columns: 1.2fr 1fr !important;
            gap: 40px !important;
          }
          .neofetch-content {
            padding: 20px !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}