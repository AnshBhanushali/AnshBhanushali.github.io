// app/section5.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineOfficeBuilding, HiOutlineCalendar } from "react-icons/hi";
import {
  SiDocker,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiTensorflow,
} from "react-icons/si";

/* ---------- EXPERIENCE DATA ---------- */
const experiences = [
  {
    role: "Software Engineer – Generative AI & Cloud",
    company: "Siemens Digital Industries",
    dates: "Aug 2024 – Present",
    tech: [
     
      { icon: SiNextdotjs, color: "#000000", label: "Next.js" },
      { icon: SiPython, color: "#3776AB", label: "Python" },
      { icon: SiDocker, color: "#0DB7ED", label: "Docker" },
      { icon: SiTensorflow, color: "#FF6F00", label: "TensorFlow" },
      { icon: SiPostgresql, color: "#336791", label: "PostgreSQL" },
    ],
    details: [
      "Architected Retrieval-Augmented Generation (RAG) pipelines to surface industrial knowledge in real time. Leveraged AWS ECS/Fargate to containerize and deploy microservices for GenAI inference, achieving <strong>80 ms</strong> average response time.",
      "Built a Next.js frontend dashboard to visualize model outputs and cloud metrics. Optimized Python/TensorFlow model serving to reduce latency by <strong>25 %</strong> under heavy load.",
      "Implemented CI/CD flows with GitLab CI, containerized all services with Docker, and integrated automated testing, increasing release cadence to <strong>bi-weekly</strong>."
    ],
  },
  {
    role: "Research Assistant – Voice Modulation R&D",
    company: "Dr. Novak Lab",
    dates: "Apr 2024 – Jan 2025",
    tech: [
      { icon: SiPython, color: "#3776AB", label: "Python" },
      { icon: SiNextdotjs, color: "#000000", label: "Next.js" },
      { icon: SiTensorflow, color: "#FF6F00", label: "TensorFlow" },
      { icon: SiDocker, color: "#0DB7ED", label: "Docker" },
      { icon: SiPostgresql, color: "#336791", label: "PostgreSQL" },
    ],
    details: [
      "Developed a GAN-based voice modulation model in TensorFlow to transform speaker characteristics while preserving intelligibility. Achieved <strong>+20 dB</strong> noise reduction and <strong>95 %</strong> speaker recognition accuracy on test set.",
      "Created a Next.js visualization dashboard to display spectrograms, loss curves, and live audio demos. Containerized full training pipeline with Docker and orchestrated experiments via Python scripts, logging metrics to PostgreSQL.",
      "Collaborated with a multidisciplinary team to integrate real-time inference into research prototypes, demonstrating <strong>30 %</strong> lower computational overhead compared to baseline models."
    ],
  },
  {
    role: "Software Developer – ML & AI",
    company: "CEAS Innovation Lab",
    dates: "Aug 2023 – Dec 2023",
    tech: [
      { icon: SiPython, color: "#3776AB", label: "Python" },
      { icon: SiNextdotjs, color: "#000000", label: "Next.js" },
      { icon: SiDocker, color: "#0DB7ED", label: "Docker" },
      { icon: SiPostgresql, color: "#336791", label: "PostgreSQL" },
     
    ],
    details: [
      "Led the design and implementation of an internal asset-tracking dashboard using Next.js and TypeScript. Integrated AWS S3 for media storage, PostgreSQL for relational data, and Docker for local development reproducibility.",
      "Instrumented Python-based ML monitoring pipelines to track model performance metrics and database query latency, reducing response time by <strong>35 %</strong> through optimized indexing and caching strategies.",
      "Deployed all services to AWS ECS with Terraform provisioning. Established automated test suites and CI/CD workflows, cutting deployment time by <strong>50 %</strong>."
    ],
  },
];

/* ---------- CARD VARIANTS ---------- */
const cardVariants = {
  hover: { scale: 1.02, boxShadow: "0 0 20px rgba(200,0,255,0.4)" },
  initial: { scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" },
};

export default function SectionFive() {
  return (
    <section id="experience" className="bg-[#060818] py-32 px-4 lg:px-0">
      <h2 className="mb-14 text-center text-4xl font-extrabold text-white">
        My&nbsp;<span className="text-fuchsia-500">Work Experience</span>
      </h2>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial="initial"
            whileHover="hover"
            variants={cardVariants}
            className="group flex flex-col justify-between rounded-3xl bg-[#10111c] p-6 transition"
          >
            {/* HEADER */}
            <div>
              <div className="flex items-center gap-2">
                <HiOutlineOfficeBuilding className="h-6 w-6 text-gray-400" />
                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm text-gray-400">
                <HiOutlineCalendar className="h-5 w-5" />
                <span>{exp.company}</span>
              </div>
              <div className="mt-1 px-2 py-1 rounded-md bg-[#1b1c29] text-xs font-medium text-gray-300 inline-block">
                {exp.dates}
              </div>
            </div>

            {/* TECH ICONS */}
            <div className="mt-6 flex flex-wrap gap-3">
              {exp.tech.map((t, i) => {
                const Icon = t.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-md bg-[#1b1c29] px-3 py-2 transition group-hover:bg-[#2e2f3b]"
                  >
                    <Icon className="h-5 w-5" style={{ color: t.color }} />
                    <span className="text-sm text-gray-200">{t.label}</span>
                  </div>
                );
              })}
            </div>

            {/* DETAILS */}
            <div className="mt-6 overflow-hidden text-sm text-gray-300">
              {exp.details.map((line, i) => (
                <p key={i} className="mb-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: line }} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
