"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import SectionWrapper from "@/components/SectionWrapper";
import { Hash, Award, ChevronDown } from "lucide-react";

type SkillCategory = keyof typeof siteConfig.skills;

const categoryOrder: SkillCategory[] = [
  "languages",
  "mlDataScience",
  "devTools",
  "frameworks",
  "databases",
];

const categoryIcons: Record<string, string> = {
  languages: "💻",
  mlDataScience: "🧠",
  devTools: "🔧",
  frameworks: "⚡",
  databases: "🗄️",
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("languages");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { skills, certifications } = siteConfig;

  const activeSkills = skills[activeCategory];

  return (
    <SectionWrapper
      id="skills"
      index={4}
      className="py-16 md:py-20 px-4 bg-ctp-crust border-y border-ctp-surface0"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-ctp-overlay0 text-[0.7rem] font-mono tracking-widest uppercase mb-1">
            # 04 — skills
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-ctp-text tracking-tight">
            <span className="text-ctp-teal">./</span>tech_stack
          </h2>
        </div>

        {/* Discord-inspired layout */}
        <div className="rounded-xl border border-ctp-surface0 overflow-hidden bg-ctp-mantle/50">
          {/* Server header */}
          <div className="px-4 py-3 border-b border-ctp-surface0 bg-ctp-crust/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ctp-mauve to-ctp-blue flex items-center justify-center text-[0.7rem] font-bold text-ctp-crust">
                IL
              </div>
              <div>
                <div className="text-ctp-text text-[0.8rem] font-semibold">
                  Ilham&apos;s Tech Stack
                </div>
                <div className="text-ctp-green text-[0.55rem] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-ctp-green inline-block" />
                  Online — {Object.values(skills).reduce((acc, cat) => acc + cat.items.length, 0)} skills loaded
                </div>
              </div>
            </div>

            {/* Mobile dropdown toggle */}
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="md:hidden text-ctp-overlay0 hover:text-ctp-text transition-colors flex items-center gap-1 text-[0.7rem]"
            >
              <Hash className="w-3.5 h-3.5" />
              {activeSkills.label.replace("# ", "")}
              <ChevronDown className={`w-3 h-3 transition-transform ${mobileSidebarOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Mobile category tabs */}
          <AnimatePresence>
            {mobileSidebarOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden border-b border-ctp-surface0 bg-ctp-crust/50"
              >
                <div className="p-2 flex flex-col gap-0.5">
                  {categoryOrder.map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setActiveCategory(key);
                        setMobileSidebarOpen(false);
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded text-left text-[0.72rem] font-mono transition-colors ${
                        activeCategory === key
                          ? "text-ctp-text bg-ctp-surface0/60"
                          : "text-ctp-overlay0 hover:text-ctp-text hover:bg-ctp-surface0/30"
                      }`}
                    >
                      <Hash className="w-3.5 h-3.5 flex-shrink-0 opacity-60" />
                      {skills[key].label.replace("# ", "")}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex min-h-[400px]">
            {/* Sidebar (desktop) */}
            <div className="hidden md:block w-56 border-r border-ctp-surface0 bg-ctp-crust/40 p-2 flex-shrink-0">
              <div className="text-ctp-overlay0 text-[0.6rem] uppercase tracking-widest px-2 py-1.5 font-semibold">
                Skill Channels
              </div>
              {categoryOrder.map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`w-full flex items-center gap-2 px-2.5 py-2 rounded text-left text-[0.75rem] font-mono transition-all ${
                    activeCategory === key
                      ? "text-ctp-text bg-ctp-surface0/70 font-semibold"
                      : "text-ctp-overlay0 hover:text-ctp-text hover:bg-ctp-surface0/30"
                  }`}
                >
                  <Hash className="w-4 h-4 flex-shrink-0 opacity-60" />
                  <span>{skills[key].label.replace("# ", "")}</span>
                  <span className="ml-auto text-[0.55rem] text-ctp-overlay0 bg-ctp-surface0 px-1.5 py-0.5 rounded-full">
                    {skills[key].items.length}
                  </span>
                </button>
              ))}

              {/* Certifications link */}
              <div className="mt-4 pt-3 border-t border-ctp-surface0">
                <div className="text-ctp-overlay0 text-[0.6rem] uppercase tracking-widest px-2 py-1.5 font-semibold">
                  Achievements
                </div>
                <div className="flex items-center gap-2 px-2.5 py-2 text-ctp-yellow text-[0.75rem] font-mono">
                  <Award className="w-4 h-4 opacity-80" />
                  <span>certifications</span>
                  <span className="ml-auto text-[0.55rem] text-ctp-overlay0 bg-ctp-surface0 px-1.5 py-0.5 rounded-full">
                    {certifications.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="flex-1 p-4 md:p-6">
              {/* Channel header */}
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-ctp-surface0">
                <Hash className="w-5 h-5 text-ctp-overlay0" />
                <span className="text-ctp-text font-semibold text-[0.85rem]">
                  {activeSkills.label.replace("# ", "")}
                </span>
                <span className="text-ctp-overlay0 text-[0.6rem]">
                  {categoryIcons[activeCategory]}{" "}
                  {activeSkills.items.length} technologies
                </span>
              </div>

              {/* Skills grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
                >
                  {activeSkills.items.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-ctp-crust/60 border border-ctp-surface0 hover:border-ctp-surface1 hover:bg-ctp-surface0/40 transition-all group cursor-default"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-7 h-7 object-contain flex-shrink-0 group-hover:scale-110 transition-transform"
                      />
                      <span className="text-ctp-text text-[0.75rem] font-mono truncate">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Certifications preview */}
              <div className="mt-8 pt-6 border-t border-ctp-surface0">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-ctp-yellow" />
                  <span className="text-ctp-text text-[0.8rem] font-semibold">
                    Certifications
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {certifications.map((cert, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-ctp-crust/60 border border-ctp-surface0 hover:border-ctp-yellow/20 transition-colors"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-10 h-10 object-contain flex-shrink-0 rounded"
                      />
                      <div className="min-w-0">
                        <div className="text-ctp-text text-[0.72rem] font-semibold truncate">
                          {cert.title}
                        </div>
                        <div className="text-ctp-overlay0 text-[0.6rem] truncate">
                          {cert.issuer}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
