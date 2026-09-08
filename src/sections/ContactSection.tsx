"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import SectionWrapper from "@/components/SectionWrapper";
import TerminalWindow from "@/components/TerminalWindow";
import { Mail, Send, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";

const socialItems = [
  {
    icon: Mail,
    label: "Email",
    href: siteConfig.socialLinks.email,
    color: "text-ctp-red",
    hoverBg: "hover:bg-ctp-red/10",
    borderColor: "border-ctp-red/20",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    href: siteConfig.socialLinks.github,
    color: "text-ctp-text",
    hoverBg: "hover:bg-ctp-text/10",
    borderColor: "border-ctp-text/20",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: siteConfig.socialLinks.linkedin,
    color: "text-ctp-blue",
    hoverBg: "hover:bg-ctp-blue/10",
    borderColor: "border-ctp-blue/20",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: siteConfig.socialLinks.instagram,
    color: "text-ctp-mauve",
    hoverBg: "hover:bg-ctp-mauve/10",
    borderColor: "border-ctp-mauve/20",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage(data.message);
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error);
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please try again.");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputClasses =
    "w-full bg-ctp-crust/80 border border-ctp-surface0 rounded-lg px-3 py-2.5 text-ctp-text text-[0.75rem] font-mono placeholder:text-ctp-overlay0/50 focus:outline-none focus:border-ctp-blue/50 focus:ring-1 focus:ring-ctp-blue/20 transition-colors";

  return (
    <SectionWrapper
      id="contact"
      index={5}
      className="py-16 md:py-20 px-4 max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="mb-8">
        <p className="text-ctp-overlay0 text-[0.7rem] font-mono tracking-widest uppercase mb-1">
          # 05 — contact
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-ctp-text tracking-tight">
          <span className="text-ctp-red">./</span>reach_out
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TerminalWindow title="bash — send_message.sh">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="text-[0.65rem] text-ctp-overlay0 mb-2">
                <span className="text-ctp-green">❯ </span>
                <span className="text-ctp-text">./send_message.sh</span>
              </div>

              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="absolute -left-[9999px] opacity-0 h-0 w-0"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div>
                <label className="text-ctp-blue text-[0.65rem] font-mono block mb-1">
                  name:
                </label>
                <input
                  type="text"
                  required
                  minLength={2}
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="text-ctp-green text-[0.65rem] font-mono block mb-1">
                  email:
                </label>
                <input
                  type="email"
                  required
                  maxLength={200}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="text-ctp-yellow text-[0.65rem] font-mono block mb-1">
                  subject:
                </label>
                <input
                  type="text"
                  maxLength={200}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="What's this about?"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="text-ctp-mauve text-[0.65rem] font-mono block mb-1">
                  message:
                </label>
                <textarea
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-ctp-blue/15 border border-ctp-blue/30 text-ctp-blue text-[0.75rem] font-mono py-2.5 rounded-lg hover:bg-ctp-blue/25 transition-colors disabled:opacity-50"
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-3.5 h-3.5" />
                )}
                {status === "loading" ? "Sending..." : "$ send_message"}
              </button>

              {status === "success" && (
                <p className="text-ctp-green text-[0.7rem] font-mono text-center">
                  ✓ {statusMessage}
                </p>
              )}
              {status === "error" && (
                <p className="text-ctp-red text-[0.7rem] font-mono text-center">
                  ✗ {statusMessage}
                </p>
              )}
            </form>
          </TerminalWindow>
        </motion.div>

        {/* Social Links */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-ctp-overlay0 text-[0.65rem] font-mono mb-1"
          >
            <span className="text-ctp-green">❯ </span>
            <span className="text-ctp-text">cat ~/socials.txt</span>
          </motion.div>

          {socialItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-lg bg-ctp-mantle/80 border border-ctp-surface0 ${item.borderColor} ${item.hoverBg} hover:border-ctp-surface1 transition-all group`}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-lg bg-ctp-crust/60 border border-ctp-surface0 ${item.color} group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-ctp-overlay0 text-[0.6rem] tracking-widest uppercase">
                    {item.label}
                  </div>
                  <div className={`${item.color} text-[0.78rem] font-semibold font-mono`}>
                    {item.href.replace("mailto:", "").replace("https://", "")}
                  </div>
                </div>
              </motion.a>
            );
          })}

          {/* Footer-like signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-4 p-4 rounded-lg border border-dashed border-ctp-surface0 text-center"
          >
            <p className="text-ctp-overlay0 text-[0.65rem] font-mono">
              Built with{" "}
              <span className="text-ctp-red">♥</span> using{" "}
              <span className="text-ctp-text">Next.js</span>,{" "}
              <span className="text-ctp-blue">TypeScript</span> &{" "}
              <span className="text-ctp-teal">Tailwind CSS</span>
            </p>
            <p className="text-ctp-overlay0/60 text-[0.55rem] font-mono mt-1">
              © 2026 Mokhammad Ilham Putra Wijaya
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
