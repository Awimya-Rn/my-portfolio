"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { siteConfig } from "@/config/site";
import TerminalWindow from "@/components/TerminalWindow";
import SectionWrapper from "@/components/SectionWrapper";

const ASCII_ART = `███╗   ███╗ ██████╗ ██╗  ██╗██╗  ██╗   ██╗██╗ █████╗ ███╗   ███╗
████╗ ████║██╔═══██╗██║ ██╔╝██║  ██║   ██║╚█║██╔══██╗████╗ ████║
██╔████╔██║██║   ██║█████╔╝ ███████║   ██║ ╚╝███████║██╔████╔██║
██║╚██╔╝██║██║   ██║██╔═██╗ ██╔══██║   ██║   ██╔══██║██║╚██╔╝██║
██║ ╚═╝ ██║╚██████╔╝██║  ██╗██║  ██║██╗██║   ██║  ██║██║ ╚═╝ ██║
╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝`;

const TYPING_NAME = "Mokh. Ilham Putra";

// ===== Entrance animation (plays once the Linux boot intro finishes) =====
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const stagger = (gap = 0.1, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE } },
};

const popSoft: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  show: {
    opacity: 0.8,
    scale: 1,
    transition: { type: "spring", stiffness: 500, damping: 18 },
  },
};

const popFull: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 500, damping: 18 },
  },
};

// Terminal-style "wipe" reveal for the ASCII banner
const wipe: Variants = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  show: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1, ease: "easeOut" },
  },
};

const cardIn: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.97 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASE,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const paletteColors = [
  "bg-ctp-text",
  "bg-ctp-yellow",
  "bg-ctp-mauve",
  "bg-ctp-red",
  "bg-ctp-blue",
  "bg-ctp-teal",
];

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  // false while the boot intro is playing, true once the home may animate in
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (document.documentElement.getAttribute("data-boot") === "running") {
      const onDone = () => setReady(true);
      window.addEventListener("boot:done", onDone, { once: true });
      return () => window.removeEventListener("boot:done", onDone);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < TYPING_NAME.length) {
        setTypedText(TYPING_NAME.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [ready]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  const { personal, heroBackground } = siteConfig;
  const nf = personal.neofetch;

  const neofetchEntries: { label: string; value: string; color: string }[] = [
    { label: "OS", value: nf.os, color: "text-ctp-blue" },
    { label: "Role", value: nf.role, color: "text-ctp-red" },
    { label: "Location", value: nf.location, color: "text-ctp-mauve" },
    { label: "Status", value: nf.status, color: "text-ctp-yellow" },
    { label: "College", value: nf.college, color: "text-ctp-text" },
    { label: "GPA", value: nf.gpa, color: "text-ctp-teal" },
    { label: "Projects", value: nf.projects, color: "text-ctp-green" },
  ];

  return (
    <SectionWrapper
      id="hero"
      index={0}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(var(--hero-overlay), var(--hero-overlay)), url('${heroBackground}')`,
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
        transition={{ duration: 1.4, ease: EASE }}
      />
      {/* Grid overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--hero-grid) 1px, transparent 1px), linear-gradient(90deg, var(--hero-grid) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 0.3 : 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      {/* Radial accent */}
      <div className="absolute top-[10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(203,166,247,0.06)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto w-full px-4 pt-20 pb-10 relative z-10"
        variants={stagger(0.18, 0.1)}
        initial="hidden"
        animate={ready ? "show" : "hidden"}
      >
        {/* ASCII Art Banner */}
        <motion.div
          variants={wipe}
          className="overflow-x-auto overflow-y-hidden mb-6"
        >
          <pre className="text-ctp-yellow text-[clamp(0.25rem,1.2vw,0.55rem)] leading-tight opacity-60 tracking-wide font-mono">
            {ASCII_ART}
          </pre>
        </motion.div>

        {/* 2-Column Grid: Left (Headline & Buttons) | Right (Neofetch Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (Headline + Details + Buttons) */}
          <motion.div variants={stagger(0.12)} className="lg:col-span-7">
            <motion.div
              variants={fadeLeft}
              className="flex items-baseline gap-1.5 mb-2 text-[0.7rem] text-ctp-overlay0"
            >
              <span className="text-ctp-green">{personal.aliasUser}</span>
              <span>@</span>
              <span className="text-ctp-blue">{personal.aliasHost}</span>
              <span className="text-ctp-mauve">~</span>
              <span className="text-ctp-yellow">$</span>
              <span className="text-ctp-text">whoami</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[clamp(1.4rem,5vw,2.3rem)] font-bold text-ctp-text font-mono tracking-tight leading-tight mb-4 min-h-[1.3em]"
            >
              {typedText}
              <span
                className={`inline-block w-2 h-[1em] bg-ctp-yellow ml-1 align-middle transition-opacity ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              />
            </motion.h1>

            {/* Taglines */}
            <motion.div
              variants={stagger(0.12)}
              className="border-l-2 border-ctp-yellow pl-3 mb-6"
            >
              {personal.taglines.map((line, i) => (
                <motion.p
                  key={i}
                  variants={fadeLeft}
                  className="text-ctp-subtext0 text-[0.72rem] leading-relaxed"
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>

            {/* Palette */}
            <motion.div variants={stagger(0.06)} className="flex gap-1 mb-6">
              {paletteColors.map((c, i) => (
                <motion.div
                  key={i}
                  variants={popSoft}
                  className={`w-5 h-5 rounded-sm ${c}`}
                />
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={stagger(0.1)} className="flex gap-2.5 flex-wrap">
              <motion.div variants={fadeUp}>
                <button
                  onClick={() => {
                    const el = document.getElementById("projects");
                    if (el) {
                      const navbarHeight = 70;
                      const pos = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                      window.scrollTo({ top: pos, behavior: "smooth" });
                    }
                  }}
                  className="inline-block px-4 py-2.5 border border-ctp-green text-ctp-green text-[0.7rem] rounded font-mono tracking-wide hover:bg-ctp-green/10 transition-all cursor-pointer"
                >
                  $ view projects
                </button>
              </motion.div>
              <motion.div variants={fadeUp}>
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) {
                      const navbarHeight = 70;
                      const pos = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                      window.scrollTo({ top: pos, behavior: "smooth" });
                    }
                  }}
                  className="inline-block px-4 py-2.5 border border-ctp-blue text-ctp-blue text-[0.7rem] rounded font-mono tracking-wide hover:bg-ctp-blue/10 transition-all cursor-pointer"
                >
                  $ contact me
                </button>
              </motion.div>
              <motion.div variants={fadeUp}>
                <a
                  href={personal.cvPath}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2.5 border border-ctp-red text-ctp-red text-[0.7rem] rounded font-mono tracking-wide hover:bg-ctp-red/10 transition-all"
                >
                  $ download cv
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column (Neofetch Card Side-by-Side) */}
          <motion.div variants={cardIn} className="lg:col-span-5 w-full">
            <TerminalWindow title="neofetch — Rn@Awimya">
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                {/* Profile Image */}
                <motion.img
                  variants={popFull}
                  src={personal.profileImage}
                  alt="Profile"
                  className="w-[110px] h-auto object-cover rounded-lg flex-shrink-0"
                />
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <motion.div variants={fadeLeft} className="text-[0.7rem] mb-1">
                    <span className="text-ctp-green">{personal.aliasUser}</span>
                    <span className="text-ctp-overlay0">@</span>
                    <span className="text-ctp-blue">{personal.aliasHost}</span>
                  </motion.div>
                  <div className="border-b border-ctp-surface0 mb-1.5" />
                  <div className="text-[0.62rem] leading-relaxed space-y-0.5">
                    {neofetchEntries.map((entry) => (
                      <motion.div
                        key={entry.label}
                        variants={fadeLeft}
                        className="break-words"
                      >
                        <span className={entry.color}>{entry.label}</span>
                        <span className="text-ctp-overlay0">: </span>
                        <span className="text-ctp-text">{entry.value}</span>
                      </motion.div>
                    ))}
                    {/* Mini palette */}
                    <motion.div
                      variants={stagger(0.05)}
                      className="flex gap-0.5 mt-2"
                    >
                      {paletteColors.map((c, i) => (
                        <motion.div
                          key={i}
                          variants={popFull}
                          className={`w-3 h-3 rounded-sm ${c}`}
                        />
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
