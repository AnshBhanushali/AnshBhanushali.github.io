// components/SectionThree.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CodeBracketIcon,
  CpuChipIcon,
  Squares2X2Icon,
  ServerStackIcon,
  CloudIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";

/* ---------- Type Definitions ---------- */
interface Skill {
  label: string;
  level: number;
}

interface Category {
  title: string;
  icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string; titleId?: string; } & React.RefAttributes<SVGSVGElement>>;
  short: string[];
  full: Skill[];
}

/* ---------- Data ---------- */
const categories: Category[] = [
  {
    title: "Programming Languages",
    icon: CodeBracketIcon,
    short: ["TypeScript", "Python", "C++", "+4"],
    full: [
      { label: "TypeScript", level: 0.95 },
      { label: "Python", level: 0.9 },
      { label: "C++", level: 0.8 },
      { label: "Java", level: 0.8 },
      { label: "Rust", level: 0.6 },
    ],
  },
  {
    title: "Engineering Concepts",
    icon: CpuChipIcon,
    short: ["DSA", "System Design", "Patterns"],
    full: [
      { label: "Data Structures", level: 0.95 },
      { label: "Algorithms", level: 0.9 },
      { label: "System Design", level: 0.85 },
      { label: "Design Patterns", level: 0.8 },
    ],
  },
  {
    title: "Frontend Toolkit",
    icon: Squares2X2Icon,
    short: ["Next.js", "Tailwind", "React"],
    full: [
      { label: "React", level: 0.93 },
      { label: "Next.js (App Router)", level: 0.9 },
      { label: "Tailwind CSS", level: 0.95 },
      { label: "Framer Motion", level: 0.85 },
      { label: "Three.js", level: 0.7 },
    ],
  },
  {
    title: "Backend & Serverless",
    icon: ServerStackIcon,
    short: ["FastAPI", "Node", "gRPC"],
    full: [
      { label: "FastAPI", level: 0.9 },
      { label: "Express / Node", level: 0.88 },
      { label: "gRPC", level: 0.7 },
      { label: "WebSockets", level: 0.8 },
    ],
  },
  {
    title: "Data & AI",
    icon: Cog6ToothIcon,
    short: ["LangChain", "Pandas", "LLMs"],
    full: [
      { label: "LangChain / RAG", level: 0.85 },
      { label: "scikit-learn", level: 0.8 },
      { label: "PyTorch", level: 0.75 },
      { label: "Vector DBs", level: 0.7 },
    ],
  },
  {
    title: "DevOps / Cloud",
    icon: CloudIcon,
    short: ["Docker", "Azure", "CI/CD"],
    full: [
      { label: "Docker", level: 0.88 },
      { label: "Kubernetes Basics", level: 0.6 },
      { label: "Azure & AWS", level: 0.7 },
      { label: "GitHub Actions", level: 0.8 },
    ],
  },
];

/* ---------- Animation Variants ---------- */
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const barVariants = {
  initial: { width: 0 },
  animate: (width: string) => ({
    width,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ---------- Child Component: TechCategoryCard ---------- */
interface TechCategoryCardProps {
  category: Category;
  isOpen: boolean;
  onToggle: () => void;
}

function TechCategoryCard({ category, isOpen, onToggle }: TechCategoryCardProps) {
  const Icon = category.icon;
  const contentId = `category-content-${category.title.replace(/\s+/g, '-')}`;

  return (
    <motion.div
      layout
      className={clsx(
        "rounded-3xl bg-[#10111c] p-6 overflow-hidden",
        "transition-shadow duration-300",
        isOpen
          ? "ring-2 ring-fuchsia-600/40 shadow-[0_0_28px_-6px_rgba(200,0,255,0.35)]"
          : "hover:ring-2 hover:ring-sky-500/40 hover:shadow-lg"
      )}
    >
      <motion.button
        onClick={onToggle}
        onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && onToggle()}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full text-left focus:outline-none"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <header className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1b1c29]">
            <Icon className="h-6 w-6 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-100">{category.title}</h3>
        </header>
      </motion.button>

      <AnimatePresence initial={false}>
        <motion.div
          id={contentId}
          key="content"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={listVariants}
          className="mt-6"
        >
          {isOpen ? (
            <motion.div className="space-y-4">
              {category.full.map((skill) => (
                <motion.div key={skill.label} variants={itemVariants}>
                  <div className="mb-1 flex justify-between text-sm font-medium text-gray-200">
                    <span>{skill.label}</span>
                    <span>{`${Math.round(skill.level * 100)}%`}</span>
                  </div>
                  <div className="h-2 w-full rounded bg-[#22232f]">
                    <motion.div
                      className="h-full rounded bg-fuchsia-500"
                      variants={barVariants}
                      initial="initial"
                      animate="animate"
                      custom={`${skill.level * 100}%`}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.ul className="flex flex-wrap gap-2">
              {category.short.map((tech) => (
                <motion.li
                  key={tech}
                  variants={itemVariants}
                  className="rounded-md bg-[#1b1c29] px-3 py-1 text-xs font-medium text-gray-300"
                >
                  {tech}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}


/* ---------- Main Component: SectionThree ---------- */
export default function SectionThree() {
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenCategory(prev => (prev === index ? null : index));
  };

  return (
    <section id="stack" className="bg-[#060818] py-28 px-4 text-white">
      <div className="mx-auto mb-14 max-w-6xl text-center">
        <h2 className="text-4xl font-extrabold">
          Tech <span className="text-fuchsia-500">Stack</span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
        {categories.map((category, index) => (
          <TechCategoryCard
            key={category.title}
            category={category}
            isOpen={openCategory === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
}