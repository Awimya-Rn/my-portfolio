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
        padding: "40px 16px 24px", 
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: 32 }}>
        <p className="section-header"># 05 — contact</p>
        <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#cdd6f4", letterSpacing: "-0.02em" }}>
          <span style={{ color: "#f38ba8" }}>./</span>get_in_touch
        </h2>
      </div>

      <div className="terminal-chrome" style={{ marginBottom: 40, maxWidth: 700, width: "100%" }}>
        <div className="terminal-titlebar">
          <div className="terminal-dot" style={{ background: "#f38ba8" }} />
          <div className="terminal-dot" style={{ background: "#f9e2af" }} />
          <div className="terminal-dot" style={{ background: "#a6e3a1" }} />
          <span style={{ color: "#585b70", fontSize: "0.65rem", marginLeft: 8 }}>
            bash — contact.sh
          </span>
        </div>

        <div style={{ padding: "20px 16px", fontFamily: "'JetBrains Mono', monospace" }}>
          <div style={{ fontSize: "0.68rem", color: "#6c7086", lineHeight: 1.6, marginBottom: 20 }}>
            <span style={{ color: "#a6e3a1" }}>❯ </span>
            <span style={{ color: "#585b70", wordBreak: "break-word" }}>
              echo &quot;Looking for internships, collaborations, or just a good chat about ML!&quot;
            </span>
            <br />
            <span style={{ color: "#cdd6f4", display: "block", marginTop: 4, wordBreak: "break-word" }}>
              Looking for internships, collaborations, or just a good chat about ML!
            </span>
          </div>

          {contacts.map((c, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <div
                style={{
                  fontSize: "0.6rem",
                  color: "#585b70",
                  marginBottom: 6,
                  overflowX: "auto",
                  whiteSpace: "nowrap",
                  paddingBottom: 2
                }}
              >
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
                  padding: "10px 12px", 
                  background: "#111114",
                  border: `1px solid ${c.color}25`,
                  borderRadius: 6,
                  textDecoration: "none",
                  transition: "all 0.2s",
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
                <span style={{ fontSize: "1.1rem", flexShrink: 0, color: c.color, display: "flex", alignItems: "center" }}>
                  <FontAwesomeIcon icon={c.icon} />
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: "#585b70", fontSize: "0.58rem", marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {c.label}
                  </div>
                  <div
                    style={{
                      color: c.color,
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap" 
                    }}
                  >
                    {c.value}
                  </div>
                </div>
                <span style={{ color: "#585b70", fontSize: "0.7rem", paddingLeft: 4 }}>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div
        className="footer-bottom-bar"
        style={{
          borderTop: "1px solid #1e1e2e",
          paddingTop: 20,
          display: "flex",
          flexDirection: "column", 
          alignItems: "center",
          textAlign: "center",
          gap: 16,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.65rem",
          color: "#585b70",
        }}
      >
        <div style={{ lineHeight: 1.6 }}>
          <span style={{ color: "#a6e3a1" }}>Rn</span>
          <span>@</span>
          <span style={{ color: "#89b4fa" }}>Awimya</span>
          <span> ~ </span>
          <span style={{ color: "#f9e2af" }}>Mokh. Ilham </span>
          <span style={{ display: "inline-block" }}> — Built with ☕</span>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
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
                fontSize: "1.1rem",
                padding: "4px" 
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = c.color)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#585b70")}
              title={c.label}
            >
              <FontAwesomeIcon icon={c.icon} />
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 576px) {
          footer {
            padding: 80px 24px 40px !important;
          }
          .footer-bottom-bar {
            flex-direction: row !important;
            justify-content: space-between !important;
            text-align: left !important;
          }
        }
      `}</style>
    </footer>
  );
}