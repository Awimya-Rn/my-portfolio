"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

type Line = {
  kind: "kernel" | "ok" | "plain" | "prompt";
  text: string;
};

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export default function BootScreen() {
  const [lines, setLines] = useState<Line[]>([]);
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const doneRef = useRef(false);
  const finishTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const user = siteConfig.personal.aliasUser;
  const host = siteConfig.personal.aliasHost;
  const hostLower = host.toLowerCase();

  useEffect(() => {
    const root = document.documentElement;

    // Already seen this session (or reduced motion): nothing to play.
    if (root.getAttribute("data-boot") !== "running") {
      setVisible(false);
      return;
    }

    let cancelled = false;

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      cancelled = true;
      try {
        sessionStorage.setItem("booted", "1");
      } catch {
        // ignore - boot will simply replay next visit
      }
      setFading(true);
      // Start the home animation while the boot screen is fading out
      window.dispatchEvent(new Event("boot:done"));
      finishTimer.current = setTimeout(() => {
        root.setAttribute("data-boot", "done");
        setVisible(false);
      }, 550);
    };

    const push = (line: Line) => setLines((prev) => [...prev, line]);
    const appendToLast = (ch: string) =>
      setLines((prev) =>
        prev.length === 0
          ? prev
          : [
              ...prev.slice(0, -1),
              { ...prev[prev.length - 1], text: prev[prev.length - 1].text + ch },
            ],
      );

    const typeOut = async (str: string, speed: number) => {
      for (const ch of str) {
        if (cancelled) return;
        appendToLast(ch);
        await sleep(speed);
      }
    };

    const kernel = [
      "[    0.000000] Linux version 6.8.0-awimya (rn@awimya) (gcc 13.2.0) #1 SMP PREEMPT_DYNAMIC",
      "[    0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz-6.8.0-awimya root=/dev/nvme0n1p2 ro quiet splash",
      "[    0.084213] smpboot: CPU0: AI Engineer / ML Enthusiast @ 4.20GHz",
      "[    0.211907] PCI: Using configuration type 1 for base access",
      "[    0.402331] NET: Registered PF_INET protocol family",
      "[    0.611420] EXT4-fs (nvme0n1p2): mounted filesystem with ordered data mode",
    ];

    const services = [
      "Reached target Local File Systems.",
      "Started Network Manager.",
      "Started Python 3 runtime.",
      "Loaded kernel module: tensorflow.ko",
      `Mounted /home/${user.toLowerCase()}/projects.`,
      "Started portfolio.service - Web Portfolio Daemon.",
      "Reached target Graphical Interface.",
    ];

    const run = async () => {
      setLines([]);
      await sleep(250);

      for (const text of kernel) {
        if (cancelled) return;
        push({ kind: "kernel", text });
        await sleep(90);
      }
      await sleep(150);

      for (const text of services) {
        if (cancelled) return;
        push({ kind: "ok", text });
        await sleep(120);
      }

      if (cancelled) return;
      await sleep(250);
      push({ kind: "plain", text: "" });
      push({ kind: "plain", text: `${host} OS 1.0 LTS tty1` });
      push({ kind: "plain", text: "" });
      await sleep(300);

      if (cancelled) return;
      push({ kind: "plain", text: `${hostLower} login: ` });
      await typeOut(user.toLowerCase(), 110);
      await sleep(250);

      if (cancelled) return;
      push({ kind: "plain", text: "Password: " });
      await typeOut("********", 70);
      await sleep(350);

      if (cancelled) return;
      push({
        kind: "plain",
        text: `Last login: ${new Date().toDateString()} on tty1`,
      });
      await sleep(250);

      if (cancelled) return;
      push({ kind: "prompt", text: "" });
      await typeOut("./start_portfolio.sh", 50);
      await sleep(350);

      if (cancelled) return;
      push({ kind: "plain", text: "Starting graphical session..." });
      await sleep(600);

      finish();
    };

    run();

    const onSkip = () => finish();
    window.addEventListener("keydown", onSkip);

    return () => {
      cancelled = true;
      window.removeEventListener("keydown", onSkip);
      if (finishTimer.current) clearTimeout(finishTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <div
      className="boot-screen fixed inset-0 z-[10000] cursor-pointer select-none overflow-hidden bg-[#08080d] font-mono text-[0.72rem] leading-[1.55] text-[#cdd6f4] sm:text-[0.8rem]"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 0.5s ease",
        textShadow: "0 0 6px rgba(166,227,161,0.18)",
      }}
      onClick={() => {
        // click-to-skip is handled by the keydown listener's finish();
        // dispatching a key event keeps a single code path.
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
      }}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="mx-auto flex h-full max-w-5xl flex-col justify-end px-4 pb-10 pt-6">
        {lines.map((line, i) => {
          const isLast = i === lines.length - 1;
          return (
            <div key={i} className="whitespace-pre-wrap break-words">
              {line.kind === "ok" && (
                <>
                  <span className="text-[#a6e3a1]">[  OK  ]</span> {line.text}
                </>
              )}
              {line.kind === "kernel" && (
                <span className="text-[#9399b2]">{line.text}</span>
              )}
              {line.kind === "plain" && <>{line.text}</>}
              {line.kind === "prompt" && (
                <>
                  <span className="font-bold text-[#a6e3a1]">
                    {user.toLowerCase()}@{hostLower}
                  </span>
                  <span>:</span>
                  <span className="font-bold text-[#89b4fa]">~</span>
                  <span>$ </span>
                  {line.text}
                </>
              )}
              {isLast && (
                <span
                  className="ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[0.15em] bg-[#cdd6f4]"
                  style={{ animation: "blink 1s steps(1) infinite" }}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="pointer-events-none absolute bottom-3 right-4 text-[0.65rem] text-[#6c7086]">
        [ click or press any key to skip ]
      </div>
    </div>
  );
}
