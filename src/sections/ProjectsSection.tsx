"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import SectionWrapper from "@/components/SectionWrapper";
import { ExternalLink, X } from "lucide-react";

const colorMap: Record<string, string> = {
  blue: "border-ctp-blue/30",
  mauve: "border-ctp-mauve/30",
  green: "border-ctp-green/30",
  red: "border-ctp-red/30",
};

const colorTextMap: Record<string, string> = {
  blue: "text-ctp-blue",
  mauve: "text-ctp-mauve",
  green: "text-ctp-green",
  red: "text-ctp-red",
};

interface Project {
  title: string;
  description: string;
  image: string;
  status: string;
  tags: string[];
  liveUrl: string;
  color: string;
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { projects } = siteConfig;

  return (
    <SectionWrapper
      id="projects"
      index={3}
      className="py-16 md:py-20 px-4 max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="mb-8">
        <p className="text-ctp-overlay0 text-[0.7rem] font-mono tracking-widest uppercase mb-1">
          # 03 — projects
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-ctp-text tracking-tight">
          <span className="text-ctp-blue">~/</span>repositories
        </h2>
        <div className="font-mono text-[0.68rem] text-ctp-overlay0 mt-3 overflow-x-auto whitespace-nowrap pb-1">
          <span className="text-ctp-green">❯ </span>
          <span className="text-ctp-text">ls -la ~/projects/ </span>
          <span className="text-ctp-overlay0">| grep -v &apos;^d&apos;</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className={`text-left rounded-lg bg-ctp-mantle/80 border border-ctp-surface0 ${colorMap[project.color]} border-t-2 overflow-hidden hover:border-ctp-surface1 transition-all hover:shadow-lg hover:shadow-black/20 group cursor-pointer`}
          >
            {/* Thumbnail */}
            <div className="w-full h-36 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-lg text-ctp-overlay0 flex-shrink-0">
                    ~
                  </span>
                  <h3
                    className={`${colorTextMap[project.color]} text-[0.85rem] font-bold font-mono truncate`}
                  >
                    {project.title}
                  </h3>
                </div>
                <span className="bg-ctp-green/8 border border-ctp-green/20 text-ctp-green text-[0.58rem] px-2 py-0.5 rounded-full tracking-wide flex-shrink-0">
                  ● {project.status}
                </span>
              </div>

              <p className="text-ctp-subtext0 text-[0.72rem] leading-relaxed line-clamp-2">
                {project.description}
              </p>

              <div className="flex gap-1.5 flex-wrap">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="bg-ctp-surface0 text-ctp-subtext0 text-[0.6rem] px-2 py-0.5 rounded border border-ctp-surface1 font-mono"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-ctp-overlay0 text-[0.6rem] px-1 py-0.5">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-ctp-mantle border border-ctp-surface0 rounded-xl shadow-2xl"
            >
              {/* Modal title bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-ctp-surface0 sticky top-0 bg-ctp-crust/95 backdrop-blur-md z-10 rounded-t-xl">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-2.5 h-2.5 rounded-full bg-ctp-red hover:brightness-110 transition"
                    />
                    <div className="w-2.5 h-2.5 rounded-full bg-ctp-yellow" />
                    <div className="w-2.5 h-2.5 rounded-full bg-ctp-green" />
                  </div>
                  <span className="text-ctp-overlay0 text-[0.65rem] font-mono ml-1">
                    project — {selectedProject.title.toLowerCase()}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-ctp-overlay0 hover:text-ctp-text transition-colors p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal content */}
              <div>
                {/* Image */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 md:h-56 object-cover"
                />

                <div className="p-6">
                  <h3
                    className={`${colorTextMap[selectedProject.color]} text-lg font-bold font-mono mb-3`}
                  >
                    {selectedProject.title}
                  </h3>

                  <p className="text-ctp-subtext0 text-sm leading-relaxed mb-5">
                    {selectedProject.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mb-5">
                    <h4 className="text-ctp-overlay0 text-[0.65rem] font-mono tracking-widest uppercase mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex gap-2 flex-wrap">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-ctp-surface0 text-ctp-text text-[0.7rem] px-3 py-1 rounded border border-ctp-surface1 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-ctp-blue/15 text-ctp-blue text-[0.78rem] font-bold rounded-lg border border-ctp-blue/30 hover:bg-ctp-blue/25 transition-all font-mono shadow-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        $ visit project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
