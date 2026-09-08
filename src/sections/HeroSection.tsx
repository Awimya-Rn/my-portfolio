"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  const { personal, heroBackground } = siteConfig;
  const nf = personal.neofetch;

  const neofetchEntries: { label: string; value: string; color: string }[] = [
    { label: "OS", value: nf.os, color: "text-ctp-blue" },
    { label: "Shell", value: nf.shell, color: "text-ctp-green" },
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
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(17,17,27,0.78), rgba(17,17,27,0.78)), url('${heroBackground}')`,
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,30,46,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30,30,46,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Radial accent */}
      <div className="absolute top-[10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(203,166,247,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full px-4 pt-20 pb-10 relative z-10">
        {/* ASCII Art Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="overflow-x-auto overflow-y-hidden mb-6"
        >
          <pre className="text-ctp-yellow text-[clamp(0.25rem,1.2vw,0.55rem)] leading-tight opacity-60 tracking-wide font-mono">
            {ASCII_ART}
          </pre>
        </motion.div>

        {/* 2-Column Grid: Left (Headline & Buttons) | Right (Neofetch Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (Headline + Details + Buttons) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="flex items-baseline gap-1.5 mb-2 text-[0.7rem] text-ctp-overlay0">
              <span className="text-ctp-green">{personal.aliasUser}</span>
              <span>@</span>
              <span className="text-ctp-blue">{personal.aliasHost}</span>
              <span className="text-ctp-mauve">~</span>
              <span className="text-ctp-yellow">$</span>
              <span className="text-ctp-text">whoami</span>
            </div>

            <h1 className="text-[clamp(1.4rem,5vw,2.3rem)] font-bold text-ctp-text font-mono tracking-tight leading-tight mb-4 min-h-[1.3em]">
              {typedText}
              <span
                className={`inline-block w-2 h-[1em] bg-ctp-yellow ml-1 align-middle transition-opacity ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              />
            </h1>

            {/* Taglines */}
            <div className="border-l-2 border-ctp-yellow pl-3 mb-6">
              {personal.taglines.map((line, i) => (
                <p key={i} className="text-ctp-subtext0 text-[0.72rem] leading-relaxed">
                  {line}
                </p>
              ))}
            </div>

            {/* Palette */}
            <div className="flex gap-1 mb-6">
              {paletteColors.map((c, i) => (
                <div key={i} className={`w-5 h-5 rounded-sm ${c} opacity-80`} />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-2.5 flex-wrap">
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
              <a
                href={personal.cvPath}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2.5 border border-ctp-yellow text-ctp-yellow text-[0.7rem] rounded font-mono tracking-wide hover:bg-ctp-yellow/10 transition-all"
              >
                $ download cv
              </a>
            </div>
          </motion.div>

          {/* Right Column (Neofetch Card Side-by-Side) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="lg:col-span-5 w-full"
          >
            <TerminalWindow title="neofetch — Rn@Awimya">
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                {/* Profile Image */}
                <img
                  src={personal.profileImage}
                  alt="Profile"
                  className="w-[110px] h-auto object-cover rounded-lg flex-shrink-0"
                />
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="text-[0.7rem] mb-1">
                    <span className="text-ctp-green">{personal.aliasUser}</span>
                    <span className="text-ctp-overlay0">@</span>
                    <span className="text-ctp-blue">{personal.aliasHost}</span>
                  </div>
                  <div className="border-b border-ctp-surface0 mb-1.5" />
                  <div className="text-[0.62rem] leading-relaxed space-y-0.5">
                    {neofetchEntries.map((entry) => (
                      <div key={entry.label} className="break-words">
                        <span className={entry.color}>{entry.label}</span>
                        <span className="text-ctp-overlay0">: </span>
                        <span className="text-ctp-text">{entry.value}</span>
                      </div>
                    ))}
                    {/* Mini palette */}
                    <div className="flex gap-0.5 mt-2">
                      {paletteColors.map((c, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-sm ${c}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
