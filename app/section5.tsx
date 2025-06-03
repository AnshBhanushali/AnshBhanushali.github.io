// app/section5.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import {
  SiPython,
  SiNextdotjs,
  SiDocker,
  SiTensorflow,
  SiPostgresql,
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
    title: "Research Assistant – Software R&D",
    company: "Dr. Novak Lab",
    dates: "Apr 2024 – Jan 2025",
    summary: [
      "Developed a PyTorch-based real-time voice-modulation network, reducing latency to < 50 ms for on-device inference.",
      "Built a React/Next.js dashboard with WebSocket streams for live audio-feature visualization.",
      "Implemented TensorFlow Lite vocal-tract synthesis pipeline for mobile-friendly deployment.",
      "Automated CI/CD with GitHub Actions and Docker containers to manage nightly model training runs.",
    ],
    tech: [SiPython, SiNextdotjs, SiTensorflow, SiDocker],
  },
  {
    title: "Software Developer – ML & AI",
    company: "CEAS Innovation Lab",
    dates: "Aug 2023 – Dec 2023",
    summary: [
      "Engineered FastAPI microservices for predictive-maintenance, leveraging scikit-learn on telemetry data.",
      "Containerized anomaly-detection models with Docker and deployed on Azure Kubernetes Service (AKS).",
      "Ingested real-time sensor streams via Kafka; visualized live failure probabilities in Plotly dashboards.",
      "Orchestrated ETL pipelines using Apache Airflow; secured REST endpoints with JWT authentication.",
    ],
    tech: [SiPython, SiDocker, SiPostgresql ],
  },
  {
    title: "Software Engineer – Industrial IoT",
    company: "Siemens Digital Industries",
    dates: "Aug 2024 – Present",
    summary: [
      "Leading AWS serverless development: authored Lambda functions for real-time anomaly detection (PyTorch + SageMaker).",
      "Built Next.js/Tailwind UI to display live equipment metrics over MQTT and WebSocket.",
      "Containerized inference services with Docker; orchestrated on ECS Fargate for scalable ML deployment.",
      "Implemented CI/CD pipelines via GitHub Actions; enforced end-to-end encryption using AWS KMS.",
    ],
    tech: [SiPython, SiNextdotjs, SiDocker],
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
