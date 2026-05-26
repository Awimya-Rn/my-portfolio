"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const contacts = [
  {
    label: "Email",
    value: "mokhamm20@gmail.com",
    href: "mailto:mokhamm20@gmail.com",
    icon: faEnvelope,
    color: "#f38ba8",
    cmd: "mail -s 'Hello' mokhamm20@gmail.com",
  },
  {
    label: "Instagram",
    value: "@mokhlhm",
    href: "https://instagram.com/mokhlhm",
    icon: faInstagram,
    color: "#cba6f7",
    cmd: "open instagram.com/mokhlhm",
  },
  {
    label: "LinkedIn",
    value: "Mokhammad Ilham Putra W",
    href: "https://linkedin.com/in/hamm-ez",
    icon: faLinkedin,
    color: "#89b4fa",
    cmd: "curl linkedin.com/in/hamm-ez",
  },
  {
    label: "GitHub",
    value: "@Awimya-Rn",
    href: "https://github.com/Awimya-Rn",
    icon: faGithub,
    color: "#a6e3a1",
    cmd: "git clone github.com/Awimya-Rn",
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        padding: "80px 24px 40px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: 48 }}>
        <p className="section-header"># 05 — contact</p>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#cdd6f4", letterSpacing: "-0.02em" }}>
          <span style={{ color: "#f38ba8" }}>./</span>get_in_touch
        </h2>
      </div>

      {/* Terminal contact block */}
      <div className="terminal-chrome" style={{ marginBottom: 48, maxWidth: 700 }}>
        <div className="terminal-titlebar">
          <div className="terminal-dot" style={{ background: "#f38ba8" }} />
          <div className="terminal-dot" style={{ background: "#f9e2af" }} />
          <div className="terminal-dot" style={{ background: "#a6e3a1" }} />
          <span style={{ color: "#585b70", fontSize: "0.65rem", marginLeft: 8 }}>
            bash — contact.sh
          </span>
        </div>
        <div style={{ padding: 24, fontFamily: "'JetBrains Mono', monospace" }}>
          <div style={{ fontSize: "0.7rem", color: "#6c7086", lineHeight: 1.8, marginBottom: 20 }}>
            <span style={{ color: "#a6e3a1" }}>❯ </span>
            <span style={{ color: "#585b70" }}>echo &quot;Looking for internships, collaborations, or just a good chat about ML!&quot;</span>
            <br />
            <span style={{ color: "#cdd6f4" }}>Looking for internships, collaborations, or just a good chat about ML!</span>
          </div>

          {contacts.map((c, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <div style={{ fontSize: "0.65rem", color: "#585b70", marginBottom: 4 }}>
                <span style={{ color: "#a6e3a1" }}>❯ </span>
                <span style={{ color: "#6c7086" }}>{c.cmd}</span>
              </div>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 12px",
                  background: "#111114",
                  border: `1px solid ${c.color}25`,
                  borderRadius: 6,
                  textDecoration: "none",
                  transition: "all 0.2s",
                  marginBottom: 2,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${c.color}60`;
                  el.style.background = `${c.color}08`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${c.color}25`;
                  el.style.background = "#111114";
                }}
              >
                <span style={{ fontSize: "1rem", flexShrink: 0, color: c.color }}><FontAwesomeIcon icon={c.icon}/></span>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#585b70", fontSize: "0.6rem", marginBottom: 1 }}>{c.label}</div>
                  <div style={{ color: c.color, fontSize: "0.75rem", fontWeight: 600 }}>{c.value}</div>
                </div>
                <span style={{ color: "#585b70", fontSize: "0.65rem" }}>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid #1e1e2e",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.65rem",
          color: "#585b70",
        }}
      >
        <div>
          <span style={{ color: "#a6e3a1" }}>Rn</span>
          <span>@</span>
          <span style={{ color: "#89b4fa" }}>Awimya</span>
          <span> ~ </span>
          <span style={{ color: "#f9e2af" }}>Mokh. Ilham </span>
          <span> — Built with ☕</span>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#585b70",
                textDecoration: "none",
                transition: "color 0.2s",
                fontSize: "1rem",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = c.color)}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#585b70")}
              title={c.label}
            >
              <FontAwesomeIcon icon={c.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
