"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import SectionWrapper from "@/components/SectionWrapper";
import { Bot, Brain, Users, UserCheck } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot,
  Brain,
  Users,
  UserCheck,
};

const colorMap: Record<string, { text: string; border: string; glow: string; badge: string }> = {
  blue: {
    text: "text-ctp-blue",
    border: "border-ctp-blue/20",
    glow: "shadow-[0_0_8px_rgba(137,180,250,0.4)]",
    badge: "bg-ctp-blue/10 border-ctp-blue/25 text-ctp-blue",
  },
  mauve: {
    text: "text-ctp-mauve",
    border: "border-ctp-mauve/20",
    glow: "shadow-[0_0_8px_rgba(203,166,247,0.4)]",
    badge: "bg-ctp-mauve/10 border-ctp-mauve/25 text-ctp-mauve",
  },
  green: {
    text: "text-ctp-green",
    border: "border-ctp-green/20",
    glow: "shadow-[0_0_8px_rgba(166,227,161,0.4)]",
    badge: "bg-ctp-green/10 border-ctp-green/25 text-ctp-green",
  },
  yellow: {
    text: "text-ctp-yellow",
    border: "border-ctp-yellow/20",
    glow: "shadow-[0_0_8px_rgba(249,226,175,0.4)]",
    badge: "bg-ctp-yellow/10 border-ctp-yellow/25 text-ctp-yellow",
  },
};

export default function ExperienceSection() {
  const { experiences } = siteConfig;

  return (
    <SectionWrapper
      id="experience"
      index={2}
      className="py-16 md:py-20 px-4 bg-ctp-crust border-y border-ctp-surface0"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-ctp-overlay0 text-[0.7rem] font-mono tracking-widest uppercase mb-1">
            # 02 — experience
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-ctp-text tracking-tight">
            <span className="text-ctp-mauve">./</span>work_experience
          </h2>
        </div>

        {/* Terminal command */}
        <div className="font-mono text-[0.65rem] text-ctp-overlay0 mb-6 overflow-x-auto whitespace-nowrap pb-1">
          <span className="text-ctp-green">❯ </span>
          <span className="text-ctp-text">
            cat ~/experience.log | sort -r | head -10
          </span>
        </div>

        {/* Timeline */}
        <div className="relative pl-5">
          {/* Gradient line */}
          <div className="absolute left-1 top-0 bottom-0 w-px bg-gradient-to-b from-ctp-yellow via-ctp-blue to-transparent" />

          <div className="flex flex-col gap-6">
            {experiences.map((exp, i) => {
              const colors = colorMap[exp.color];
              const Icon = iconMap[exp.icon];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-5 top-5 w-2.5 h-2.5 rounded-full bg-ctp-${exp.color} border-2 border-ctp-crust ${colors.glow}`}
                    style={{
                      backgroundColor: `var(--ctp-${exp.color})`,
                    }}
                  />

                  <div
                    className={`p-4 rounded-lg bg-ctp-mantle/80 border border-ctp-surface0 ${colors.border} border-l-2 hover:border-ctp-surface1 transition-colors`}
                  >
                    {/* Card header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          {Icon && (
                            <Icon className={`w-4 h-4 ${colors.text}`} />
                          )}
                          <h3
                            className={`${colors.text} text-[0.85rem] font-bold`}
                          >
                            {exp.title}
                          </h3>
                          <span
                            className={`text-[0.55rem] px-1.5 py-0.5 rounded border ${colors.badge}`}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-ctp-subtext0 text-[0.75rem]">
                          {exp.organization}
                        </p>
                        {exp.location && (
                          <p className="text-ctp-overlay0 text-[0.65rem] mt-0.5">
                            📍 {exp.location}
                          </p>
                        )}
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-ctp-overlay0 text-[0.65rem]">
                          {exp.startDate} – {exp.endDate}
                        </div>
                        <span className="inline-block text-ctp-overlay0 text-[0.6rem] bg-ctp-surface0 px-1.5 py-0.5 rounded mt-1">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Badge */}
                    {exp.badge && (
                      <div className="inline-block bg-ctp-yellow/10 border border-ctp-yellow/25 text-ctp-yellow text-[0.65rem] px-2.5 py-1 rounded mb-3">
                        {exp.badge}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-ctp-overlay0 text-[0.7rem] leading-relaxed mb-3">
                      {exp.description}
                    </p>

                    {/* Tags */}
                    <div className="flex gap-1.5 flex-wrap">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-ctp-surface0 text-ctp-subtext0 text-[0.6rem] px-2 py-0.5 rounded border border-ctp-surface1 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
