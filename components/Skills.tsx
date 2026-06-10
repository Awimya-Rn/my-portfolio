"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faMicrochip, faChartLine } from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "Python", color: "#3572A5", cat: "Language" },
  { name: "JavaScript", color: "#f1e05a", cat: "Language" },
  { name: "TypeScript", color: "#3178c6", cat: "Language" },
  { name: "PHP", color: "#4f5b93", cat: "Language" },
  { name: "Java", color: "#b07219", cat: "Language" },
  { name: "C#", color: "#178600", cat: "Language" },
  { name: "Scikit-learn", color: "#cba6f7", cat: "ML Framework" },
  { name: "TensorFlow", color: "#FF6F00", cat: "ML Framework" },
  { name: "Grafana", color: "#009393", cat: "Monitoring" },
  { name: "Pandas", color: "#89b4fa", cat: "Data Science" },
  { name: "NLP", color: "#94e2d5", cat: "Data Science" },
  { name: "MLflow", color: "#a6e3a1", cat: "MLOps" },
  { name: "Docker", color: "#fab387", cat: "DevOps" },
  { name: "PostgreSQL", color: "#336791", cat: "Database" },
  { name: "Node.js", color: "#68a063", cat: "Back-End" },
  { name: "Next.js", color: "#cdd6f4", cat: "Front-End" },
  { name: "Tailwind CSS", color: "#06b6d4", cat: "Front-End" },
  { name: "Bootstrap", color: "#563d7c", cat: "Front-End" },
  { name: "Unity", color: "#222C37", cat: "Game Dev" },
];

const topSkills = [
  { name: "AI", icon: faRobot, color: "#cba6f7" },
  { name: "TensorFlow", icon: faMicrochip, color: "#fab387" },
  { name: "MLflow", icon: faChartLine, color: "#a6e3a1" },
];

const certifications = [
  { name: "Belajar Fundamental Deep Learning", issuer: "Dicoding Indonesia", color: "#89b4fa", icon: "🎖️", link: "https://www.dicoding.com/certificates/N9ZONY5DRXG5" },
  { name: "Membangun Proyek Deep Learning Tingkat Mahir", issuer: "Dicoding Indonesia", color: "#cba6f7", icon: "🎖️", link: "https://www.dicoding.com/certificates/JMZVOJ563XN9" },
  { name: "Cloud Practitioner Essentials", issuer: "Dicoding × AWS", color: "#f9e2af", icon: "☁️", link: "https://www.dicoding.com/certificates/NVP7JL43VXR0" },
  { name: "Belajar Back-End dengan JavaScript", issuer: "Dicoding Indonesia", color: "#a6e3a1", icon: "🎖️", link: "https://www.dicoding.com/certificates/NVP7515KWXR0" },
  { name: "Membangun Sistem Machine Learning", issuer: "Dicoding Indonesia", color: "#94e2d5", icon: "🏆", link: "https://www.dicoding.com/certificates/EYX4KN166PDL" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "48px 16px", 
        background: "#0a0a0c",
        borderTop: "1px solid #1e1e2e",
        borderBottom: "1px solid #1e1e2e",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 32 }}>
          <p className="section-header"># 04 — skills & certs</p>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#cdd6f4", letterSpacing: "-0.02em" }}>
            <span style={{ color: "#f9e2af" }}>./</span>skills_and_certifications
          </h2>
        </div>

        <div
          className="skills-grid-container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr", 
            gap: 32,
            alignItems: "start"
          }}
        >
          <div>
            <div style={{ marginBottom: 32 }}>
              <p style={{ color: "#585b70", fontSize: "0.65rem", letterSpacing: "0.1em", marginBottom: 12 }}>
                # KEAHLIAN TERATAS
              </p>
              <div style={{ display: "flex", gap: 8, justifyContent: "space-between" }}>
                {topSkills.map(({ name, icon, color }) => (
                  <div
                    key={name}
                    style={{
                      flex: 1,
                      padding: "12px 8px", 
                      background: `${color}08`,
                      border: `1px solid ${color}25`,
                      borderRadius: 8,
                      textAlign: "center",
                      minWidth: 0,
                    }}
                  >
                    <div style={{ fontSize: "1.3rem", color, marginBottom: 6 }}><FontAwesomeIcon icon={icon} /></div>
                    <div style={{ color: "#cdd6f4", fontSize: "0.7rem", fontWeight: 700 }}>{name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p style={{ color: "#585b70", fontSize: "0.65rem", letterSpacing: "0.1em", marginBottom: 16 }}>
                # TECH STACK LIST
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {skills.map(({ name, color, cat }) => (
                  <div
                    key={name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 10px",
                      background: "#111116",
                      border: "1px solid #1e1e2e",
                      borderRadius: 6,
                    }}
                  >
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: color,
                        boxShadow: `0 0 6px ${color}`,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ color: "#cdd6f4", fontSize: "0.7rem", fontWeight: 500 }}>
                      {name}
                    </span>
                    <span
                      style={{
                        color: "#585b70",
                        fontSize: "0.55rem",
                        border: "1px solid #2a2a3d",
                        padding: "1px 4px",
                        borderRadius: 3,
                        background: "#0a0a0c",
                        marginLeft: 2,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {cat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p style={{ color: "#585b70", fontSize: "0.65rem", letterSpacing: "0.1em", marginBottom: 16 }}>
              # CERTIFICATIONS
            </p>

            <div
              className="terminal-chrome"
              style={{
                marginBottom: 20,
                background: "#111116",
                border: "1px solid #1e1e2e",
                borderRadius: 6,
                overflow: "hidden"
              }}
            >
              <div
                className="terminal-titlebar"
                style={{
                  background: "#181825",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  borderBottom: "1px solid #1e1e2e"
                }}
              >
                <div className="terminal-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#f38ba8" }} />
                <div className="terminal-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#f9e2af" }} />
                <div className="terminal-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#a6e3a1" }} />
                <span style={{ color: "#585b70", fontSize: "0.6rem", marginLeft: 4, fontFamily: "'JetBrains Mono', monospace" }}>
                  certs.json
                </span>
              </div>
              <div
                style={{
                  padding: 14,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  lineHeight: 1.7,
                  overflowX: "auto", 
                  whiteSpace: "nowrap"
                }}
              >
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
                <a
                  key={i}
                  href={cert.link}
                  target="_blank"
                  className="card"
                  style={{
                    padding: "12px",
                    background: "#111116",
                    border: "1px solid #1e1e2e",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    borderLeft: `3px solid ${cert.color}`,
                    minWidth: 0,
                    textDecoration: "none", 
                  }}
                >
                  <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{cert.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        color: "#cdd6f4",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        marginBottom: 3,
                      }}
                    >
                      {cert.name}
                    </div>
                    <div style={{ color: "#585b70", fontSize: "0.62rem" }}>{cert.issuer}</div>
                  </div>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: cert.color,
                      flexShrink: 0,
                      boxShadow: `0 0 6px ${cert.color}`,
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .skills-grid-container {
            grid-template-columns: 1.2fr 1fr !important;
            gap: 40px !important;
          }
          section {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}