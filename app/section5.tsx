// app/section5.tsx
"use client";

import {SiDocker, SiNextdotjs, SiPostgresql, SiPython, SiTensorflow } from "react-icons/si";
import { HiOutlineOfficeBuilding, HiOutlineCalendar } from "react-icons/hi";

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
  },
];

export default function SectionFive() {
  return (
    <section id="experience" className="bg-[#060818] py-32 px-4 lg:px-0">
      <h2 className="mb-14 text-center text-4xl font-extrabold text-white">
        My&nbsp;<span className="text-fuchsia-500">Work Experience</span>
      </h2>

      <div className="mx-auto max-w-6xl overflow-x-auto rounded-3xl bg-[#10111c] ring-1 ring-white/5">
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="bg-[#1b1c29]">
              <th className="w-1/3 px-6 py-4 text-left text-sm font-semibold text-gray-300">Role & Company</th>
              <th className="w-1/6 px-6 py-4 text-left text-sm font-semibold text-gray-300">Dates</th>
              <th className="w-1/2 px-6 py-4 text-left text-sm font-semibold text-gray-300">Technologies</th>
            </tr>
          </thead>
          <tbody>
            {experiences.map((exp, idx) => (
              <tr
                key={idx}
                className="group border-b border-gray-800 hover:bg-[#1f1f2b] transition duration-300"
              >
                <td className="px-6 py-5 align-top">
                  <div className="flex items-center gap-2">
                    <HiOutlineOfficeBuilding className="h-5 w-5 text-gray-400" />
                    <span className="font-semibold text-white">{exp.role}</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-400">{exp.company}</div>
                </td>
                <td className="px-6 py-5 align-top">
                  <div className="flex items-center gap-2">
                    <HiOutlineCalendar className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-300">{exp.dates}</span>
                  </div>
                </td>
                <td className="px-6 py-5 align-top">
                  <div className="flex flex-wrap gap-4">
                    {exp.tech.map((t, k) => {
                      const Icon = t.icon;
                      return (
                        <div
                          key={k}
                          className="flex items-center gap-2 rounded-md bg-[#1b1c29] px-3 py-2 transition hover:bg-[#2e2f3b] group-hover:shadow-[0_0_20px_rgba(200,0,255,0.25)]"
                        >
                          <Icon className="h-5 w-5" style={{ color: t.color }} />
                          <span className="text-sm text-gray-200">{t.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
