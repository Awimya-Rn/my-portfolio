"use client";

import { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({
  title = "bash",
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div
      className={`rounded-lg border border-ctp-surface0 bg-ctp-mantle/90 backdrop-blur-sm overflow-hidden ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-ctp-surface0 bg-ctp-crust/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-ctp-red" />
          <div className="w-2.5 h-2.5 rounded-full bg-ctp-yellow" />
          <div className="w-2.5 h-2.5 rounded-full bg-ctp-green" />
        </div>
        <span className="text-ctp-overlay0 text-[0.65rem] ml-1 font-mono">
          {title}
        </span>
      </div>
      {/* Content */}
      <div className="p-4 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  );
}
