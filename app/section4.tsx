/* components/SectionFour.tsx */
"use client";

import {
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiDocker,
  SiSolidity,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";
import Link from "next/link";

/* ---------- project list ---------- */
const projects = [
  {
    name: "Genesis AI Assistant",
    blurb:
      "Multi‑agent, RAG‑powered assistant with Next.js frontend, FastAPI backend, & LangChain orchestration.",
    live: "https://genesisaiassistant.vercel.app",
    repo: "https://github.com/AnshBhanushali/Genesis-AI-Assistant",
    tech: [SiNextdotjs, SiTypescript, SiPython, SiDocker],
  },
  {
    name: "Decentralized Digital Wallet",
    blurb:
      "Ethereum light‑wallet with ERC‑20 transfers & React + Solidity stack. Uses Ethers.js & Hardhat.",
    repo: "https://github.com/AnshBhanushali/Decentralized-Digital-Wallet",
    tech: [SiSolidity, SiTypescript, SiDocker],
  },
  {
    name: "FinIntel",
    blurb:
      "Agent‑based finance dashboard that scrapes, classifies, and forecasts market data with OpenAI APIs.",
    repo: "https://github.com/AnshBhanushali/FinIntel",
    tech: [SiPython, SiPostgresql, SiDocker],
  },
  {
    name: "SnapSafari",
    blurb:
      "Camera & image‑classification app that identifies wildlife in real‑time and fetches Wikipedia snippets.",
    repo: "https://github.com/AnshBhanushali/SnapSafari",
    tech: [SiPython, SiFirebase],
  },
  {
    name: "Chat Application + AI",
    blurb:
      "WebSocket chat with GPT‑3.5 Turbo integration, real‑time typing indicators, and sentiment tags.",
    repo: "https://github.com/AnshBhanushali/ChatApplicationAI",
    tech: [SiNextdotjs, SiTypescript, SiPython],
  },
  {
    name: "RealityCheck",
    blurb:
      "Mortgage & rent calculator with price‑to‑income heat‑maps (Python, Pandas, Plotly).",
    repo: "https://github.com/AnshBhanushali/RealityCheck",
    tech: [SiPython, SiPostgresql],
  },
];

/* ---------- fade‑in variant ---------- */
const card = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  }),
};

export default function SectionFour() {
  return (
    <section id="projects" className="bg-[#060818] py-32 px-4 lg:px-0">
      <h2 className="mb-14 text-center text-4xl font-extrabold text-white">
        A small selection of&nbsp;
        <span className="text-fuchsia-500">recent projects</span>
      </h2>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            custom={i}
            variants={card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl bg-[#10111c] p-6 ring-1 ring-white/5 transition
                       hover:ring-fuchsia-600/40 hover:shadow-[0_0_30px_-6px_rgba(200,0,255,0.35)]"
          >
            {/* soft conic glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-20 [background:conic-gradient(at_top_left,#0ea5e9_0,transparent_30%),conic-gradient(at_bottom_right,#d946ef_0,transparent_30%)]" />

            <h3 className="relative z-10 text-lg font-semibold text-white">{p.name}</h3>
            <p className="relative z-10 mt-3 text-sm leading-relaxed text-gray-300">
              {p.blurb}
            </p>

            {/* tech icons */}
            <div className="relative z-10 mt-6 flex gap-2">
              {p.tech.map((Icon, idx) => (
                <Icon key={idx} className="h-5 w-5 text-gray-400" />
              ))}
            </div>

            {/* links */}
            <div className="relative z-10 mt-6 flex flex-wrap items-center gap-4 text-sm font-medium">
              {p.live && (
                <Link
                  href={p.live}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-white/80 hover:text-sky-400"
                >
                  Live&nbsp;Site <HiOutlineExternalLink />
                </Link>
              )}

              <Link
                href={p.repo}
                target="_blank"
                className="inline-flex items-center gap-1 text-white/80 hover:text-sky-400"
              >
                GitHub <HiOutlineExternalLink />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
