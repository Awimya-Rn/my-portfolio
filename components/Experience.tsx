"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// icon otak, piala, mentoring, member
import {faBrain, faChalkboardTeacher, faUsers, faRobot} from '@fortawesome/free-solid-svg-icons';

const experiences = [
  {
    title: "AI Engineer",
    org: "Coding Camp powered by DBS Foundation",
    period: "Februari 2026 – Present",
    duration: "4 bulan",
    type: "Cohort",
    color: "#89b4fa",
    icon: faRobot,
    tags: ["AI Engineering", "Machine Learning", "Deep Learning"],
    desc: "Selected as part of the AI Engineer cohort in Coding Camp 2026 powered by DBS Foundation, focusing on advanced AI engineering skills and real-world application development.",
  },
  {
    title: "Machine Learning Cohort",
    org: "Asah led by Dicoding × Accenture",
    period: "Agustus 2025 – Januari 2026",
    duration: "6 bulan",
    type: "Cohort",
    color: "#cba6f7",
    icon: faBrain,
    tags: ["Python", "Machine Learning", "Scikit-learn", "NLP", "Pandas", "TensorFlow"],
    desc: "Built unsupervised learning (Clustering) models to segment and discover hidden patterns in datasets. Developed end-to-end Sentiment Analysis projects using NLP techniques. Proficient in data preprocessing, feature engineering, and model evaluation. Graduated with Distinction.",
    achievement: "Distinction Graduation",
  },
  {
    title: "Mentor Beta Testing",
    org: "Workshop Riset Informatika",
    period: "September 2025 – Oktober 2025",
    duration: "2 bulan",
    type: "Mentor",
    color: "#a6e3a1",
    icon: faChalkboardTeacher,
    tags: ["Java", "OOP", "Mentoring", "Back-End", "PHP", "Laravel"],
    location: "Kota Malang, Jawa Timur",
    desc: "Actively guided mentees in understanding informatics fundamentals. Provided Java and OOP concepts to prepare mentees for academic challenges. Shared practical tips and tricks to hone programming logic and problem-solving skills.",
  },
  {
    title: "Member",
    org: "Workshop Riset Informatika",
    period: "September 2024 – Oktober 2025",
    duration: "1 tahun 2 bulan",
    type: "Member",
    color: "#f9e2af",
    icon: faUsers,
    tags: ["Java", "OOP", "PHP", "SQL", "Back-End"],
    location: "Kota Malang, Jawa Timur",
    desc: "Deepened understanding of Java and OOP concepts as a strong foundation for informatics studies. Learned fundamentals of back-end development using PHP for server logic and SQL for database management.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "80px 24px",
        background: "#0a0a0c",
        borderTop: "1px solid #1e1e2e",
        borderBottom: "1px solid #1e1e2e",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <p className="section-header"># 02 — experience</p>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#cdd6f4", letterSpacing: "-0.02em" }}>
            <span style={{ color: "#cba6f7" }}>./</span>work_experience
          </h2>
        </div>

        {/* Terminal-style header */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.72rem",
            color: "#585b70",
            marginBottom: 32,
          }}
        >
          <span style={{ color: "#a6e3a1" }}>❯ </span>
          <span style={{ color: "#cdd6f4" }}>cat ~/experience.log | sort -r | head -10</span>
        </div>

        <div style={{ position: "relative", paddingLeft: 28 }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: 8,
              top: 0,
              bottom: 0,
              width: 1,
              background: "linear-gradient(to bottom, #f9e2af, #89b4fa, rgba(30,30,46,0))",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {experiences.map((exp, i) => (
              
              <div
                key={i}
                style={{ position: "relative", animationDelay: `${i * 0.1}s` }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: -24,
                    top: 20,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: exp.color,
                    border: `2px solid #0a0a0c`,
                    boxShadow: `0 0 10px ${exp.color}60`,
                  }}
                />

                <div
                  className="card"
                  style={{ padding: 24, borderLeft: `2px solid ${exp.color}30` }}
                >
                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: 8,
                      marginBottom: 12,
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <span style={{ fontSize: "1.2rem" }}>
                          <FontAwesomeIcon icon={exp.icon} />
                        </span>
                        <h3 style={{ color: exp.color, fontSize: "0.95rem", fontWeight: 700 }}>
                          {exp.title}
                        </h3>
                        <span
                          style={{
                            background: `${exp.color}15`,
                            border: `1px solid ${exp.color}30`,
                            color: exp.color,
                            fontSize: "0.6rem",
                            padding: "2px 8px",
                            borderRadius: 4,
                            letterSpacing: "0.1em",
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <p style={{ color: "#a6adc8", fontSize: "0.78rem" }}>{exp.org}</p>
                      {exp.location && (
                        <p style={{ color: "#585b70", fontSize: "0.68rem", marginTop: 2 }}>
                          📍 {exp.location}
                        </p>
                      )}
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ color: "#6c7086", fontSize: "0.68rem" }}>{exp.period}</div>
                      <div
                        style={{
                          color: "#585b70",
                          fontSize: "0.65rem",
                          background: "#1e1e2e",
                          padding: "2px 8px",
                          borderRadius: 4,
                          marginTop: 4,
                          display: "inline-block",
                        }}
                      >
                        {exp.duration}
                      </div>
                    </div>
                  </div>

                  {/* Achievement badge */}
                  {exp.achievement && (
                    <div
                      style={{
                        display: "inline-block",
                        background: "rgba(249,226,175,0.1)",
                        border: "1px solid rgba(249,226,175,0.3)",
                        color: "#f9e2af",
                        fontSize: "0.7rem",
                        padding: "4px 12px",
                        borderRadius: 4,
                        marginBottom: 12,
                      }}
                    >
                      {exp.achievement}
                    </div>
                  )}

                  {/* Description */}
                  <p
                    style={{
                      color: "#6c7086",
                      fontSize: "0.73rem",
                      lineHeight: 1.8,
                      marginBottom: 14,
                    }}
                  >
                    {exp.desc}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: "#1e1e2e",
                          color: "#a6adc8",
                          fontSize: "0.65rem",
                          padding: "3px 10px",
                          borderRadius: 4,
                          border: "1px solid #2a2a3d",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
