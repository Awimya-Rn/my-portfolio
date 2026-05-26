"use client";

const projects = [
  {
    name: "Predictive Maintenance",
    desc: "A comprehensive solution designed to monitor, analyze, and predict industrial machine conditions in real-time and equipped with AI Copilot powered by Google Gemini.",
    tags: ["React", "Vite", "TypeScript", "Node.js", "Hapi.js", "Python", "Scikit-learn", "LightGBM", "Joblib", "Pandas", "PostgreSQL"],
    color: "#89b4fa",
    lang: "#3572A5",
    langName: "Python",
    stars: 0,
    status: "completed",
    icon: "/",
  },
  {
    name: "Web Laboratory for Applied Informatics",
    desc: "A website for Project Base Learning assignments using native PHP that displays information about the Applied Informatics lab..",
    tags: ["PHP", "CSS", "HTML", "PostgreSQL", "JavaScript"],
    color: "#cba6f7",
    lang: "#4f5d95",
    langName: "PHP",
    stars: 0,
    status: "completed",
    icon: "/",
  },
  {
    name: "Magicaffeine",
    desc: "You were a coffee-loving barista in your previous life, but now you've been thrown into a fantasy world.",
    tags: ["C#", "Unity", ".NET"],
    color: "#a6e3a1",
    lang: "#178600",
    langName: "C#",
    stars: 0,
    status: "completed",
    icon: "/",
  },
  {
    name: "Comming Soon",
    desc: ".",
    tags: [],
    color: "#f9e2af",
    lang: "#ffffff",
    langName: "/",
    stars: "-",
    status: "wip",
    icon: "/",
  },
  {
    name: "Comming Soon",
    desc: ".",
    tags: [],
    color: "#f9e2af",
    lang: "#ffffff",
    langName: "/",
    stars: "-",
    status: "wip",
    icon: "/",
  },
  {
    name: "Comming Soon",
    desc: ".",
    tags: [],
    color: "#f9e2af",
    lang: "#ffffff",
    langName: "/",
    stars: "-",
    status: "wip",
    icon: "/",
  },
];

const statusMap: Record<string, { label: string; color: string }> = {
  completed: { label: "completed", color: "#a6e3a1" },
  active: { label: "active", color: "#89b4fa" },
  wip: { label: "wip", color: "#f9e2af" },
};

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ marginBottom: 48 }}>
        <p className="section-header"># 03 — projects</p>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#cdd6f4", letterSpacing: "-0.02em" }}>
          <span style={{ color: "#89b4fa" }}>~/</span>repositories
        </h2>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#585b70", marginTop: 12 }}>
          <span style={{ color: "#a6e3a1" }}>❯ </span>
          <span style={{ color: "#cdd6f4" }}>ls -la ~/projects/ </span>
          <span style={{ color: "#585b70" }}>| grep -v &apos;^d&apos;</span>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 20,
        }}
      >
        {projects.map((proj, i) => (
          <div
            key={i}
            className="card"
            style={{
              padding: 24,
              borderTop: `2px solid ${proj.color}40`,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              cursor: "pointer",
            }}
          >
            {/* Repo header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: "1.2rem" }}>{proj.icon}</span>
                <div>
                  <h3
                    style={{
                      color: proj.color,
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {proj.name}
                  </h3>
                </div>
              </div>
              <span
                style={{
                  background: `${statusMap[proj.status].color}15`,
                  border: `1px solid ${statusMap[proj.status].color}30`,
                  color: statusMap[proj.status].color,
                  fontSize: "0.6rem",
                  padding: "2px 8px",
                  borderRadius: 20,
                  letterSpacing: "0.1em",
                  flexShrink: 0,
                }}
              >
                ● {statusMap[proj.status].label}
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                color: "#6c7086",
                fontSize: "0.72rem",
                lineHeight: 1.7,
                flexGrow: 1,
              }}
            >
              {proj.desc}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#1e1e2e",
                    color: "#a6adc8",
                    fontSize: "0.6rem",
                    padding: "2px 8px",
                    borderRadius: 4,
                    border: "1px solid #2a2a3d",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 8,
                borderTop: "1px solid #1e1e2e",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: proj.lang,
                    display: "inline-block",
                  }}
                />
                <span style={{ color: "#6c7086", fontSize: "0.65rem" }}>{proj.langName}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#585b70", fontSize: "0.65rem" }}>
                <span>⭐</span>
                <span>{proj.stars}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
