"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import { SiNextdotjs, SiTypescript, SiPython, SiDocker, SiSolidity, SiPostgresql, SiFirebase} from "react-icons/si";

/* ---------- DATA ---------- */
type Job = {
  title: string;
  company: string;
  dates: string;
  summary: string[];
  tech: (typeof SiPython)[];
};

const jobs: Job[] = [
  {
    title: "Research Assistant – Software R&D",
    company: "Siemens Digital Industries",
    dates: "Aug 2024 – Present",
    summary: [
      "Prototyped a physics‑based simulation engine for industrial digital twins (C++ / Python).",
      "Built CI/CD pipeline in GitLab CI; containerised workloads with Docker & Helm.",
      "Optimised finite‑element algorithms → 20 % faster ℹ️ throughput on test rigs.",
    ],
    tech: [SiPython, SiDocker],
  },
  {
    title: "Software Developer",
    company: "CEAS Innovation Lab",
    dates: "Jan 2023 – Aug 2024",
    summary: [
      "Led development of an internal asset‑tracking dashboard in Next.js + TypeScript.",
      "Integrated Azure AD SSO & RBAC; reduced on‑boarding time for 200+ lab members.",
      "Instrumented PostgreSQL + Grafana monitoring; cut query latency 35 %.",
    ],
    tech: [SiNextdotjs, SiTypescript, SiPostgresql],
  },
];

/* ---------- CARD VARIANTS ---------- */
const container = {
  compact: { height: 70 },
  open: {
    height: "auto",
    transition: { when: "beforeChildren", staggerChildren: 0.05 },
  },
};

const fadeIn = { hidden: { opacity: 0, y: 4 }, visible: { opacity: 1, y: 0 } };

export default function SectionFive() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // first card open by default

  return (
    <section id="experience" className="bg-[#060818] py-32 px-4 text-white lg:px-0">
      <h2 className="mb-14 text-center text-4xl font-extrabold">
        My&nbsp;<span className="text-fuchsia-500">Work Experience</span>
      </h2>

      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        {jobs.map((j, i) => {
          const isOpen = openIdx === i;
          return (
            <motion.article
              key={j.title}
              initial="compact"
              animate={isOpen ? "open" : "compact"}
              variants={container}
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className={`group relative overflow-hidden rounded-3xl bg-[#10111c] ring-1 ring-white/5 transition 
                         hover:ring-fuchsia-600/40 hover:shadow-[0_0_25px_-6px_rgba(200,0,255,0.4)] cursor-pointer`}
            >
              {/* HEADER */}
              <header className="flex h-[70px] items-center justify-between px-6">
                <div className="flex flex-col">
                  <span className="font-semibold">{j.title}</span>
                  <span className="text-sm text-gray-400">{j.company}</span>
                </div>
                <HiChevronDown
                  className={`h-6 w-6 shrink-0 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </header>

              {/* BODY (collapsible) */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="body"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="px-6 pb-6"
                  >
                    <p className="mb-1 text-xs text-gray-400">{j.dates}</p>
                    <ul className="mb-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
                      {j.summary.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {j.tech.map((Icon, k) => (
                        <Icon key={k} className="h-5 w-5 text-gray-400" />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
