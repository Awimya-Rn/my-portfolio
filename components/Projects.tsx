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
    icon: "Rn@",
    image: "https://i.ibb.co.com/rf7PQNMX/image.png", 
  },
  {
    name: "Web Laboratory for Applied Informatics",
    desc: "A website for Project Base Learning assignments using native PHP that displays information about the Applied Informatics lab.",
    tags: ["PHP", "CSS", "HTML", "PostgreSQL", "JavaScript"],
    color: "#cba6f7",
    lang: "#4f5d95",
    langName: "PHP",
    stars: 0,
    status: "completed",
    icon: "Rn@",
    image: "https://i.ibb.co.com/v4kLTFJ1/Screenshot-2026-06-08-205415.png",
  },
  {
    name: "Magicaffeine",
    desc: "You were a coffee-loving barista in your previous life, but now you've been thrown into a fantasy world.",
    tags: ["C#", "Unity", ".NET"],
    color: "#bcaaa4",
    lang: "#178600",
    langName: "C#",
    stars: 0,
    status: "completed",
    icon: "Rn@",
    image: "https://img.itch.zone/aW1hZ2UvMzc2MDU1Ny8yMjQ4MTM4My5wbmc=/794x1000/7n7tW%2B.png",
  },
  {
    name: "Water Quality Control [Aqua Monitoring]",
    desc: "This project was selected because it provides a crucial solution that transforms passive water data into a dynamic environmental monitoring instrument.",
    tags: ["React", "TypeScript", "Node.js", "Express.js", "Tailwindcss","Python", "PostgreSQL"],
    color: "#a6e3a1",
    lang: "#F37626",
    langName: "Jupyter Notebook",
    stars: "-",
    status: "completed",
    icon: "Rn@",
    image: "https://i.ibb.co.com/Sw5q0Bh0/Screenshot-2026-05-31-212613.png",
  },
  {
    name: "Comming Soon",
    desc: "Exciting new repository under development.",
    tags: ["WIP"],
    color: "#f9e2af",
    lang: "#585b70",
    langName: "None",
    stars: "-",
    status: "wip",
    icon: "/.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/071/344/857/large/error-pixel-art-glitch-animation-with-distorted-text-digital-screen-effect-video.jpg",
  },
  {
    name: "Comming Soon",
    desc: "Exciting new repository under development.",
    tags: ["WIP"],
    color: "#f9e2af",
    lang: "#585b70",
    langName: "None",
    stars: "-",
    status: "wip",
    icon: "/.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/071/344/857/large/error-pixel-art-glitch-animation-with-distorted-text-digital-screen-effect-video.jpg",
  },
];

const statusMap: Record<string, { label: string; color: string }> = {
  completed: { label: "completed", color: "#a6e3a1" },
  active: { label: "active", color: "#89b4fa" },
  wip: { label: "wip", color: "#f9e2af" },
};

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "48px 16px",
        maxWidth: 1100,
        margin: "0 auto"
      }}
    >
      <div style={{ marginBottom: 32 }}>
        <p className="section-header"># 03 — projects</p>
        <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#cdd6f4", letterSpacing: "-0.02em" }}>
          <span style={{ color: "#89b4fa" }}>~/</span>repositories
        </h2>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.68rem",
            color: "#585b70",
            marginTop: 12,
            overflowX: "auto",
            whiteSpace: "nowrap",
            paddingBottom: 4
          }}
        >
          <span style={{ color: "#a6e3a1" }}>❯ </span>
          <span style={{ color: "#cdd6f4" }}>ls -la ~/projects/ </span>
          <span style={{ color: "#585b70" }}>| grep -v &apos;^d&apos;</span>
        </div>
      </div>

      <div
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 16,
        }}
      >
        {projects.map((proj, i) => (
          <div
            key={i}
            className="card"
            style={{
              padding: 0,
              borderTop: `2px solid ${proj.color}40`,
              background: "#111114",
              borderRadius: 6,
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              minWidth: 0,
              overflow: "hidden" 
            }}
          >
            {/* Bagian Gambar */}
            {proj.image && (
              <div style={{ width: "100%", height: "140px", overflow: "hidden", position: "relative" }}>
                <img
                  src={proj.image}
                  alt={proj.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.85,
                    transition: "opacity 0.3s ease"
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "0.85")}
                />
              </div>
            )}

            <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12, flexGrow: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                  <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{proj.icon}</span>
                  <div style={{ minWidth: 0 }}>
                    <h3
                      style={{
                        color: proj.color,
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        fontFamily: "'JetBrains Mono', monospace",
                        margin: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {proj.name}
                    </h3>
                  </div>
                </div>
                <span
                  style={{
                    background: `${statusMap[proj.status].color}12`,
                    border: `1px solid ${statusMap[proj.status].color}25`,
                    color: statusMap[proj.status].color,
                    fontSize: "0.58rem",
                    padding: "3px 8px",
                    borderRadius: 20,
                    letterSpacing: "0.05em",
                    flexShrink: 0,
                  }}
                >
                  ● {statusMap[proj.status].label}
                </span>
              </div>

              <p
                style={{
                  color: "#a6adc8",
                  fontSize: "0.72rem",
                  lineHeight: 1.6,
                  flexGrow: 1,
                  margin: 0,
                }}
              >
                {proj.desc}
              </p>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "#1e1e2e",
                      color: "#a6adc8",
                      fontSize: "0.58rem",
                      padding: "3px 8px",
                      borderRadius: 4,
                      border: "1px solid #2a2a3d",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: 10,
                  borderTop: "1px solid #1e1e2e",
                  marginTop: 4,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: proj.lang,
                      display: "inline-block",
                    }}
                  />
                  <span style={{ color: "#6c7086", fontSize: "0.62rem", fontFamily: "'JetBrains Mono', monospace" }}>
                    {proj.langName}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#585b70", fontSize: "0.62rem" }}>
                  <span>⭐</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>{proj.stars}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (min-width: 576px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)) !important;
            gap: 20px !important;
          }
          section {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}