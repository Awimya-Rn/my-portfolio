"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faMicrochip, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from 'react';

const skills = [
  { name: "Python", level: 88, color: "#3572A5", cat: "Language" },
  { name: "Scikit-learn", level: 85, color: "#cba6f7", cat: "ML Framework" },
  { name: "Pandas", level: 82, color: "#89b4fa", cat: "Data" },
  { name: "TensorFlow", level: 80, color: "#FF6F00", cat: "ML Framework" },
  { name: "NLP", level: 75, color: "#94e2d5", cat: "AI" },
  { name: "PostgreSQL", level: 73, color: "#336791", cat: "Database" },
  { name: "MLflow", level: 70, color: "#a6e3a1", cat: "MLOps" },
  { name: "JavaScript", level: 70, color: "#f1e05a", cat: "Language" },
  { name: "Node.js", level: 68, color: "#68a063", cat: "Back-End" },
  { name: "Next.js", level: 65, color: "#cdd6f4", cat: "Front-End" },
  { name: "Java", level: 50, color: "#b07219", cat: "Language" },
  { name: "Docker", level: 20, color: "#fab387", cat: "DevOps" },
];

const topSkills = [
  { name: "AI", icon: faRobot, color: "#cba6f7" },
  { name: "TensorFlow", icon: faMicrochip, color: "#fab387" },
  { name: "MLflow", icon: faChartLine, color: "#a6e3a1" },
];

const certifications = [
  { name: "Belajar Dasar AI", issuer: "Dicoding Indonesia", color: "#89b4fa", icon: "🎖️" },
  { name: "Algorithm & Data Structures with Python", issuer: "Dicoding Indonesia", color: "#cba6f7", icon: "🎖️" },
  { name: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)", issuer: "Dicoding × AWS", color: "#f9e2af", icon: "☁️" },
  { name: "Belajar Dasar Pemrograman Web", issuer: "Dicoding Indonesia", color: "#a6e3a1", icon: "🎖️" },
  { name: "Membangun Sistem Machine Learning", issuer: "Dicoding Indonesia", color: "#94e2d5", icon: "🏆" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "80px 24px",
        background: "#0a0a0c",
        borderTop: "1px solid #1e1e2e",
        borderBottom: "1px solid #1e1e2e",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <p className="section-header"># 04 — skills & certs</p>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#cdd6f4", letterSpacing: "-0.02em" }}>
            <span style={{ color: "#f9e2af" }}>./</span>skills_and_certifications
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, alignItems: "start" }}>
          {/* Left: Skills */}
          <div>
            {/* Top skills featured */}
            <div style={{ marginBottom: 28 }}>
              <p style={{ color: "#585b70", fontSize: "0.65rem", letterSpacing: "0.1em", marginBottom: 12 }}>
                # KEAHLIAN TERATAS
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {topSkills.map(({ name, icon, color }) => (
                  <div
                    key={name}
                    style={{
                      flex: 1,
                      padding: "14px",
                      background: `${color}08`,
                      border: `1px solid ${color}25`,
                      borderRadius: 8,
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "1.5rem", marginBottom: 6 }}><FontAwesomeIcon icon={icon} /></div>
                    <div style={{ color, fontSize: "0.75rem", fontWeight: 700 }}>{name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill bars */}
            <div>
              <p style={{ color: "#585b70", fontSize: "0.65rem", letterSpacing: "0.1em", marginBottom: 16 }}>
                # TECH STACK — htop style
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {skills.map(({ name, level, color, cat }) => (
                  <div key={name}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 4,
                        fontSize: "0.65rem",
                      }}
                    >
                      <span style={{ color: "#a6adc8" }}>
                        {name}{" "}
                        <span
                          style={{
                            color: "#585b70",
                            fontSize: "0.58rem",
                            border: "1px solid #2a2a3d",
                            padding: "1px 5px",
                            borderRadius: 3,
                          }}
                        >
                          {cat}
                        </span>
                      </span>
                      <span style={{ color }}>{level}%</span>
                    </div>
                    <div
                      style={{
                        height: 5,
                        background: "#1e1e2e",
                        borderRadius: 3,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${level}%`,
                          background: `linear-gradient(to right, ${color}80, ${color})`,
                          borderRadius: 3,
                          transition: "width 1s ease",
                          boxShadow: `0 0 8px ${color}40`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Certifications */}
          <div>
            <p style={{ color: "#585b70", fontSize: "0.65rem", letterSpacing: "0.1em", marginBottom: 16 }}>
              # CERTIFICATIONS
            </p>
            <div className="terminal-chrome" style={{ marginBottom: 20 }}>
              <div className="terminal-titlebar">
                <div className="terminal-dot" style={{ background: "#f38ba8" }} />
                <div className="terminal-dot" style={{ background: "#f9e2af" }} />
                <div className="terminal-dot" style={{ background: "#a6e3a1" }} />
                <span style={{ color: "#585b70", fontSize: "0.65rem", marginLeft: 8 }}>
                  certs.json
                </span>
              </div>
              <div style={{ padding: 16, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", lineHeight: 1.8 }}>
                <div style={{ color: "#585b70" }}>{"{"}</div>
                <div style={{ paddingLeft: 12, color: "#6c7086" }}>&quot;certifications&quot;: [</div>
                {certifications.map((cert, i) => (
                  <div key={i} style={{ paddingLeft: 24, color: cert.color }}>
                    &quot;{cert.name}&quot;{i < certifications.length - 1 ? "," : ""}
                  </div>
                ))}
                <div style={{ paddingLeft: 12, color: "#6c7086" }}>]</div>
                <div style={{ color: "#585b70" }}>{"}"}</div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="card"
                  style={{
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    borderLeft: `2px solid ${cert.color}50`,
                  }}
                >
                  <span style={{ fontSize: "1rem", flexShrink: 0 }}>{cert.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        color: "#cdd6f4",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        marginBottom: 2,
                      }}
                    >
                      {cert.name}
                    </div>
                    <div style={{ color: "#585b70", fontSize: "0.62rem" }}>{cert.issuer}</div>
                  </div>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: cert.color,
                      flexShrink: 0,
                      boxShadow: `0 0 6px ${cert.color}`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
