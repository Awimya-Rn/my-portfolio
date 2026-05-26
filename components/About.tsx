"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLocationDot, faRobot, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const lines = [
    { prompt: "cat ~/about.txt", isCommand: true },
    { text: " " },
    {
      text: "I am a fourth semester undergraduate student of the D4 Informatics",
    },
    { text: "Engineering program at Malang State Polytechnic, driven by a strong" },
    { text: "ambition to grow and excel in the field of technology." },
    { text: " " },
    {
      text: "Currently enrolled in Asah by Dicoding — focus: Machine Learning,",
    },
    { text: "strengthening my analytical and problem-solving skills." },
    { text: " " },
    { text: "Actively expanding expertise in:" },
    { text: "  → Back-End Development (JavaScript & Python)", color: "#89b4fa" },
    { text: "  → Machine Learning & AI Systems", color: "#cba6f7" },
    { text: "  → Data-driven problem solving", color: "#a6e3a1" },
    { text: " " },
    {
      text: "Passionate about building efficient, reliable systems and applying",
    },
    { text: "logical, data-driven approaches to create impactful solutions." },
  ];

  return (
    <section
      id="about"
      style={{
        padding: "80px 24px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: 40 }}>
        <p className="section-header"># 01 — about</p>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#cdd6f4",
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#a6e3a1" }}>./</span>about_me
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          alignItems: "start",
        }}
      >
        {/* Terminal display */}
        <div className="terminal-chrome">
          <div className="terminal-titlebar">
            <div className="terminal-dot" style={{ background: "#f38ba8" }} />
            <div className="terminal-dot" style={{ background: "#f9e2af" }} />
            <div className="terminal-dot" style={{ background: "#a6e3a1" }} />
            <span style={{ color: "#585b70", fontSize: "0.65rem", marginLeft: 8 }}>
              bash — about.txt
            </span>
          </div>
          <div style={{ padding: 20, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", lineHeight: 1.8 }}>
            {lines.map((line, i) =>
              "isCommand" in line && line.isCommand ? (
                <div key={i} style={{ marginBottom: 4 }}>
                  <span style={{ color: "#a6e3a1" }}>❯ </span>
                  <span style={{ color: "#cdd6f4" }}>{line.prompt}</span>
                </div>
              ) : (
                <div key={i} style={{ color: line.color || "#a6adc8" }}>
                  {line.text}
                </div>
              )
            )}
            <div style={{ marginTop: 8 }}>
              <span style={{ color: "#a6e3a1" }}>❯ </span>
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: "1em",
                  background: "#cba6f7",
                  verticalAlign: "middle",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </div>
          </div>
        </div>

        {/* Stats & Info cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            {
              label: "education",
              value: "D4 Informatics Engineering",
              sub: "Malang State Polytechnic • Semester 4",
              color: "#89b4fa",
              icon: faGraduationCap,
            },
            {
              label: "location",
              value: "Madiun, Jawa Timur",
              sub: "Indonesia 🇮🇩",
              color: "#f9e2af",
              icon: faLocationDot,
            },
            {
              label: "focus",
              value: "Machine Learning & AI Engineering",
              sub: "Back-End Dev • Python • JavaScript",
              color: "#cba6f7",
              icon: faRobot,
            },
            {
              label: "status",
              value: "Open to opportunities",
              sub: "Internship / Project Collaboration",
              color: "#a6e3a1",
              icon: faCheckCircle,
            },
          ].map(({ label, value, sub, color, icon }) => (
            <div
              key={label}
              className="card"
              style={{ padding: "16px 20px", display: "flex", gap: 16, alignItems: "center" }}
            >
              <div
                style={{
                  fontSize: "1.4rem",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${color}10`,
                  borderRadius: 8,
                  border: `1px solid ${color}20`,
                  flexShrink: 0,
                }}
              >
                <FontAwesomeIcon icon={icon}/>
              </div>
              <div>
                <div
                  style={{
                    color: "#585b70",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 2,
                  }}
                >
                  {label}
                </div>
                <div style={{ color: color, fontSize: "0.8rem", fontWeight: 600, marginBottom: 2 }}>
                  {value}
                </div>
                <div style={{ color: "#6c7086", fontSize: "0.68rem" }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
