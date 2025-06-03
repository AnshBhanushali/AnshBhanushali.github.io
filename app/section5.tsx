// app/section5.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import {

  SiDocker,

  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiTensorflow,
} from "react-icons/si";

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
    title: "Software Engineer – Generative AI & Cloud",
    company: "Siemens Digital Industries",
    dates: "Aug 2024 – Present",
    summary: [
      "Architected a RAG-powered knowledge service on Azure Kubernetes Service using LangChain and Azure OpenAI for industrial troubleshooting.",
      "Developed Next.js dashboard with real-time inference from a PyTorch GPT-based model hosted on AWS SageMaker endpoints.",
      "Containerized microservices with Docker; configured CI/CD pipelines in GitHub Actions for automated model retraining on new telemetry data.",
      "Implemented enterprise-grade security: OAuth2 authentication, Azure Key Vault for secrets, and Azure Functions for serverless event processing.",
    ],
    tech: [
      SiNextdotjs,
      SiPython,
      SiDocker,
      SiTensorflow,
      SiPostgresql,
    ],
  },
  {
    title: "Research Assistant – Voice Modulation R&D",
    company: "Dr. Novak Lab",
    dates: "Apr 2024 – Jan 2025",
    summary: [
      "Designed a real-time neural voice-modulation pipeline in PyTorch, achieving sub-50 ms latency on CPU for live audio streams.",
      "Integrated a GAN-based vocal-tract synthesis model into a React/Next.js UI for on-the-fly pitch shifting and timbre control.",
      "Built a Flask API serving TensorFlow Lite quantized models; optimized INT8 inference for mobile devices.",
      "Automated data labeling workflows with Python scripts on AWS S3; used Weights & Biases for training dashboard and hyperparameter tracking.",
    ],
    tech: [SiPython, SiNextdotjs, SiTensorflow, SiDocker],
  },
  {
    title: "Software Developer – ML & AI",
    company: "CEAS Innovation Lab",
    dates: "Aug 2023 – Dec 2023",
    summary: [
      "Led development of a FastAPI microservice for real-time anomaly detection using scikit-learn on sensor data.",
      "Containerized ML pipelines with Docker; deployed on Azure Container Instances and scheduled retraining via Azure DevOps.",
      "Built a Next.js frontend to visualize time-series metrics with Plotly; implemented WebSocket streams for live monitoring.",
      "Designed PostgreSQL schema for telemetry storage; integrated Grafana for dashboarding and alerting on critical KPIs.",
    ],
    tech: [SiPython, SiNextdotjs, SiDocker, SiPostgresql],
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
        My&nbsp;<span className="text-fuchsia-500">Work Experience</span>
      </h2>

      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        {jobs.map((j, i) => {
          const isOpen = openIdx === i;
          return (
            <motion.article
              key={j.company + j.title}
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
                  <span className="font-semibold text-white">{j.title}</span>
                  <span className="text-sm text-gray-400">{j.company}</span>
                </div>
                <HiChevronDown
                  className={`h-6 w-6 shrink-0 text-gray-400 transition-transform ${
                    isOpen ? "rotate-180 text-fuchsia-500" : ""
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
                    <p className="mb-2 text-xs text-gray-400">{j.dates}</p>
                    <ul className="mb-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
                      {j.summary.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {j.tech.map((Icon, k) => (
                        <Icon key={k} className="h-5 w-5 text-gray-400 hover:text-white transition" />
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
