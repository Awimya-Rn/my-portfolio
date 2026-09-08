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
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
