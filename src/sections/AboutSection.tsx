"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import TerminalWindow from "@/components/TerminalWindow";
import SectionWrapper from "@/components/SectionWrapper";
import {
  GraduationCap,
  MapPin,
  Bot,
  CircleCheck,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  MapPin,
  Bot,
  CircleCheck,
};

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  blue: {
    text: "text-ctp-blue",
    bg: "bg-ctp-blue/5",
    border: "border-ctp-blue/15",
  },
  yellow: {
    text: "text-ctp-yellow",
    bg: "bg-ctp-yellow/5",
    border: "border-ctp-yellow/15",
  },
  mauve: {
    text: "text-ctp-mauve",
    bg: "bg-ctp-mauve/5",
    border: "border-ctp-mauve/15",
  },
  green: {
    text: "text-ctp-green",
    bg: "bg-ctp-green/5",
    border: "border-ctp-green/15",
  },
};

const expertiseColors: Record<string, string> = {
  blue: "text-ctp-blue",
  mauve: "text-ctp-mauve",
  green: "text-ctp-green",
};

export default function AboutSection() {
  const { about } = siteConfig;

  return (
    <SectionWrapper
      id="about"
      index={1}
      className="py-16 md:py-20 px-4 max-w-6xl mx-auto"
    >
      {/* Section header */}
      <div className="mb-8">
        <p className="text-ctp-overlay0 text-[0.7rem] font-mono tracking-widest uppercase mb-1">
          # 01 — about
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-ctp-text tracking-tight">
          <span className="text-ctp-green">./</span>about_me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Terminal bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TerminalWindow title="bash — about.txt">
            <div className="text-[0.7rem] leading-relaxed">
              <div className="mb-1">
                <span className="text-ctp-green">❯ </span>
                <span className="text-ctp-text">cat ~/about.txt</span>
              </div>
              <div className="text-ctp-subtext0 whitespace-pre-wrap mt-3">
                {about.bio}
              </div>
              {about.expertise.map((item, i) => (
                <div
                  key={i}
                  className={`${expertiseColors[item.color]} whitespace-pre-wrap`}
                >
                  {"  "}→ {item.text}
                </div>
              ))}
              <div className="text-ctp-subtext0 whitespace-pre-wrap mt-3">
                {about.bioClosing}
              </div>
              <div className="mt-3">
                <span className="text-ctp-green">❯ </span>
                <span className="inline-block w-2 h-[1em] bg-ctp-mauve align-middle animate-pulse" />
              </div>
            </div>
          </TerminalWindow>
        </motion.div>

        {/* Info Cards */}
        <div className="flex flex-col gap-3">
          {about.cards.map((card, i) => {
            const Icon = iconMap[card.icon];
            const colors = colorMap[card.color];
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-3.5 p-3.5 rounded-lg bg-ctp-mantle/80 border border-ctp-surface0 hover:border-ctp-surface1 transition-colors"
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-lg ${colors.bg} border ${colors.border} flex-shrink-0`}
                >
                  {Icon && <Icon className={`w-5 h-5 ${colors.text}`} />}
                </div>
                <div>
                  <div className="text-ctp-overlay0 text-[0.6rem] tracking-widest uppercase mb-0.5">
                    {card.label}
                  </div>
                  <div className={`${colors.text} text-[0.78rem] font-semibold`}>
                    {card.title}
                  </div>
                  <div className="text-ctp-overlay0 text-[0.65rem]">
                    {card.subtitle}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
