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
    name: "Genesis AI Assistant",
    blurb:
      "A next-gen AI helper powered by LangChain RAG flows. Frontend built with Next.js & TypeScript, backend in FastAPI. Instantly fetches and summarizes docs, all in one place.",
    live: "https://genesisaiassistant.vercel.app",
    repo: "https://github.com/AnshBhanushali/Genesis-AI-Assistant",
    tech: [
      { Icon: SiNextdotjs, color: "#000000" },
      { Icon: SiTypescript, color: "#3178c6" },
      { Icon: SiPython, color: "#3776ab" },
      { Icon: SiDocker, color: "#0db7ed" },
    ],
  },
  {
    name: "Decentralized Digital Wallet",
    blurb:
      "Ethereum light-wallet for ERC-20 tokens. Built with React + Solidity. Deploys on GitHub Pages, tests on Hardhat. Send/receive, check balances, all trustlessly.",
    repo: "https://github.com/AnshBhanushali/Decentralized-Digital-Wallet",
    tech: [
      { Icon: SiSolidity, color: "#363636" },
      { Icon: SiTypescript, color: "#3178c6" },
      { Icon: SiDocker, color: "#0db7ed" },
    ],
  },
  {
    name: "FinIntel",
    blurb:
      "AI-driven finance dashboard: scrapes market data, classifies trends, forecasts with OpenAI APIs, and visualizes via interactive charts.",
    repo: "https://github.com/AnshBhanushali/FinIntel",
    tech: [
      { Icon: SiPython, color: "#3776ab" },
      { Icon: SiPostgresql, color: "#336791" },
      { Icon: SiDocker, color: "#0db7ed" },
    ],
  },
  {
    name: "SnapSafari",
    blurb:
      "Real-time wildlife detector: captures camera feed, classifies species on the fly, and fetches curated Wikipedia info for each sighting.",
    repo: "https://github.com/AnshBhanushali/SnapSafari",
    tech: [
      { Icon: SiPython, color: "#3776ab" },
      { Icon: SiFirebase, color: "#ffca28" },
    ],
  },
  {
    name: "Chat Application + AI",
    blurb:
      "Next.js + WebSocket chat with GPT-3.5 Turbo integration. Enjoy real-time typing indicators, sentiment analysis tags, and a minimalist UI.",
    repo: "https://github.com/AnshBhanushali/ChatApplicationAI",
    tech: [
      { Icon: SiNextdotjs, color: "#000000" },
      { Icon: SiTypescript, color: "#3178c6" },
      { Icon: SiPython, color: "#3776ab" },
    ],
  },
  {
    name: "RealityCheck",
    blurb:
      "Python-powered rent/mortgage calculator with price-to-income heat-maps. Built with Pandas & Plotly for quick, interactive insights.",
    repo: "https://github.com/AnshBhanushali/RealityCheck",
    tech: [
      { Icon: SiPython, color: "#3776ab" },
      { Icon: SiPostgresql, color: "#336791" },
    ],
  },
];

/* ---------- animation variants ---------- */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
  hover: {
    scale: 1.03,
    y: -6,
    boxShadow: "0 0 20px rgba(191,45,255,0.6)",
  },
};

/* ---------- SectionFour component ---------- */
export default function SectionFour() {
  return (
    <section id="projects" className="bg-[#060818] py-32 px-4 lg:px-0">
      <h2 className="mb-14 text-center text-4xl font-extrabold text-white">
        A curated showcase of&nbsp;
        <span className="text-fuchsia-500">latest creations</span>
      </h2>

      <motion.div
        className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            custom={i}
            variants={cardVariants}
            whileHover="hover"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#1a1c23]/60 backdrop-blur-lg p-6 ring-1 ring-white/5 transition-all"
          >
            {/* Glow overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-30 bg-gradient-to-tr from-purple-600/40 via-pink-500/40 to-blue-400/40" />

            {/* Title & Description */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                {p.blurb}
              </p>
            </div>

            {/* Tech Icons */}
            <div className="relative z-10 mt-6 flex gap-4">
              {p.tech.map(({ Icon, color }, idx) => (
                <Icon
                  key={idx}
                  className={`h-6 w-6 text-[${color}] transition-transform duration-300 group-hover:scale-110`}
                  style={{ color }}
                />
              ))}
            </div>

            {/* Action Links */}
            <div className="relative z-10 mt-6 flex flex-wrap items-center gap-4 text-sm font-medium">
              {p.live && (
                <Link
                  href={p.live}
                  target="_blank"
                  className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-3 py-1 text-white transition-transform hover:scale-105"
                >
                  Live Site <HiOutlineExternalLink className="h-4 w-4" />
                </Link>
              )}

              <Link
                href={p.repo}
                target="_blank"
                className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 px-3 py-1 text-white transition-transform hover:scale-105"
              >
                GitHub <HiOutlineExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
