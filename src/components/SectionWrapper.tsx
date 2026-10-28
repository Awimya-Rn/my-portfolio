"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  index: number;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  index,
}: SectionWrapperProps) {
  // Hero (index 0) keeps its own image background & layout.
  // Other sections alternate: dark (crust) <-> slightly lighter black.
  const isHero = index === 0;
  const tone =
    index % 2 === 1
      ? "bg-ctp-crust"
      : "bg-section-alt border-y border-ctp-surface0/40";

  return (
    <motion.section
      id={id}
      initial={index === 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{
        duration: 0.5,
        delay: index === 0 ? 0 : 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={isHero ? className : `w-full ${tone}`}
    >
      {isHero ? children : <div className={className}>{children}</div>}
    </motion.section>
  );
}

