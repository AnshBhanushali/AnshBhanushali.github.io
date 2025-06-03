// app/section2.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineCode } from "react-icons/hi";

/* scroll-reveal */
const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  }),
};

/* hover neon rim */
const hoverFX =
  "hover:before:opacity-100 before:pointer-events-none before:absolute before:inset-0 \
   before:rounded-3xl before:ring-1 before:ring-sky-500/40 before:opacity-0 \
   hover:shadow-[0_0_28px_-6px_rgba(0,192,255,0.45)] transition";

export function SectionTwo() {
  // Determine local UTC offset for display
  const offset = new Date().getTimezoneOffset() / -60;
  const formattedOffset =
    (offset >= 0 ? "+" : "-") + String(Math.abs(offset)).padStart(2, "0") + ":00";

  // Tech stack array
  const techStack = [
    "MERN",
    "React",
    "Flask",
    "Next.js",
    "FastAPI",
    "Node.js",
    "Express",
    "MongoDB",
    "TypeScript",
    "Docker",
    "Kubernetes",
    "GraphQL",
  ];

  return (
    <section id="portfolio" className="bg-[#060818] pb-32 pt-24 text-white px-4 lg:px-0">
      <div className="mx-auto grid max-w-6xl auto-rows-[260px] gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* 1 ▸ About Me (spans full width and 2 rows on lg) */}
        <motion.article
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`
            flex flex-col lg:flex-row
            col-span-1 row-span-1
            lg:col-span-3 lg:row-span-2
            overflow-hidden
            rounded-3xl
            bg-[#11121d]
            ${hoverFX}
          `}
        >
          {/* Left side: Overview text */}
          <div className="flex-1 p-6 lg:pr-12 lg:pl-8 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold leading-snug mb-4">About Me</h3>

            <p className="text-sm text-gray-300 mb-2">
              Hi, I’m <span className="text-sky-400 font-medium">Ansh Bhanushali</span>. I’m a junior at the University of Cincinnati pursuing Computer Science with a minor in Finance. Ever since I wrote my first algorithm in high school, I’ve been captivated by how AI powered software can address real world challenges.
            </p>

            <p className="text-sm text-gray-300 mb-2">
              At <span className="text-indigo-400 font-medium">Siemens</span> I interned on a team building GenAI solutions on Azure. I helped develop automated workflows that processed large datasets with machine learning models and deployed them on Azure Kubernetes Service. Working alongside data scientists and software engineers taught me how to design scalable web services and leverage Azure Cognitive Services for real time analytics.
            </p>

            <p className="text-sm text-gray-300 mb-2">
              As a  <span className="text-indigo-400 font-medium">research assistant</span> I assisted with research on voice modulation for assistive technologies. My role involves implementing signal processing pipelines that use Python and PyTorch to adapt speech output dynamically. Our prototype won a best poster award at the CEAS symposium, and I continue refining algorithms that make synthetic voices sound more natural.
            </p>

            <p className="text-sm text-gray-300 mb-2">
              Beyond internships and research, I mentor first year engineering students in CEAS lab coding sessions. I organize weekly “AI and Engineering” meetups to demonstrate building full stack applications with FastAPI and React. Hands on collaboration drives my belief that learning by doing accelerates mastery.
            </p>

            <p className="text-sm text-gray-300">
              When I’m not coding or in lab, I’m exploring the latest AI papers or shooting hoops with friends. I also enjoy hiking on the Little Miami Scenic Trail. My goal is to build intelligent systems that feel seamless and empowering so people can focus on creative problem solving instead of fighting with technology.
            </p>
          </div>

          {/* Right side: Your photo (vertically centered) */}
          <div className="relative flex-1 w-full h-0 lg:h-auto lg:w-auto lg:max-w-xs self-center">
            <Image
              src="/myphoto.jpeg"
              alt="Ansh Bhanushali"
              width={400}
              height={400}
              className="object-cover rounded-tr-3xl rounded-br-3xl lg:rounded-tl-none lg:rounded-bl-none lg:rounded-br-3xl"
            />
          </div>
        </motion.article>

        {/* 2 ▸ Rotating globe + timezone (row 3, col 1 on lg) */}
        <motion.article
          custom={1}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`
            relative
            col-span-1 row-span-1
            lg:col-span-1 lg:row-start-3 lg:col-start-1
            overflow-hidden
            rounded-3xl
            bg-[#11121d]
            ${hoverFX}
            flex flex-col justify-between
          `}
        >
          <div className="px-6 pt-6">
            <h3 className="text-xl font-semibold">Across-time-zone collaboration</h3>
            <p className="mt-2 text-sm text-gray-300">
              🌐 Collaborate 24/7 — no matter the clock
            </p>
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
            className="relative mx-auto mb-4 h-40 w-40 rounded-full overflow-hidden"
          >
            <Image
              src="/myglobe.png"
              alt="Digital globe"
              fill
              className="object-cover opacity-90"
            />
          </motion.div>

          <div className="px-6 pb-6">
            <span className="inline-flex items-center gap-1 text-xs text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Current UTC Offset: {formattedOffset}
            </span>
          </div>
        </motion.article>

        {/* 3 ▸ My Tech Stack (revamped, badges wrap side by side) */}
        <motion.article
  custom={2}
  variants={reveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className={`
    flex flex-col
    col-span-1 row-span-1
    lg:col-span-1 lg:row-start-3 lg:col-start-2
    overflow-hidden
    rounded-3xl
    bg-gradient-to-br from-[#1f2028] to-[#11121d]
    ${hoverFX}
  `}
>
  {/* Left side: Icon + heading */}
  <div className="flex-1 flex flex-col justify-center px-6 py-4">
    <div className="flex items-center gap-2">
      <HiOutlineCode className="h-6 w-6 text-sky-400" />
      <h3 className="text-3xl font-bold leading-snug">My Tech Stack</h3>
    </div>
    <p className="mt-2 text-sm text-gray-400">
      These are the tools I love working with every day.
    </p>
  </div>

  {/* Right side: 3-4 column grid with purple-glow badges */}
  <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 px-6 py-4 gap-3">
    {techStack.map((tech) => (
      <span
        key={tech}
        className="
          flex items-center justify-center
          rounded-full border border-gray-600
          bg-gray-800 px-4 py-1 text-xs font-medium text-gray-200
          transition
          hover:border-purple-500 hover:bg-purple-700 hover:text-white
          hover:shadow-[0_0_8px_rgba(171,0,255,0.7)]
        "
      >
        {tech}
      </span>
    ))}
  </div>
</motion.article>


        {/* 4 ▸ Enhanced “Infinite curiosity” bio (row 3, col 3 on lg) */}
        <motion.article
          custom={3}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`
            relative
            col-span-1 row-span-1
            lg:col-span-1 lg:row-start-3 lg:col-start-3
            overflow-hidden
            rounded-3xl
            bg-gradient-to-br from-[#11121d] to-[#1e1f2a]
            ${hoverFX}
            flex items-center justify-center
            px-6 py-4
          `}
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="text-center"
          >
            <h3 className="bg-gradient-to-r from-sky-400 via-violet-400 to-indigo-400 bg-clip-text text-2xl font-bold text-transparent">
              Fueling innovation with boundless curiosity
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Grounded in elegant solutions and clean code—never settling for “just enough.”
            </p>
            <div className="mt-4 inline-flex items-center justify-center gap-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 animate-pulse text-violet-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V5a1 1 0 10-2 0v2a1 1 0 001 1h2a1 1 0 100-2h-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs italic">Driven by curiosity</span>
            </div>
          </motion.div>
        </motion.article>

        {/* 5 ▸ CTA (row 4, col 1 on lg) */}
        <motion.article
          custom={4}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`
            col-span-1 row-span-1
            lg:col-span-1 lg:row-start-4 lg:col-start-1
            overflow-hidden
            rounded-3xl
            bg-gradient-to-br from-fuchsia-600 via-indigo-600 to-cyan-500
            ${hoverFX}
            flex items-center justify-center
            px-6 py-4
          `}
        >
          <div className="flex flex-col items-center justify-center gap-6 bg-[#0b0c14] p-6 rounded-[inherit] text-center">
            <h3 className="text-lg font-semibold md:text-xl">
              Ready to build something visionary?
            </h3>
            <Link
              href="mailto:bhanusad@mail.uc.edu"
              className="rounded-full border border-white/20 px-6 py-2 text-sm backdrop-blur hover:bg-white/10"
            >
              Let’s talk →
            </Link>
          </div>
        </motion.article>

        {/* 6 ▸ Code + design merge (row 4, cols 2–3 on lg) */}
        <motion.article
          custom={5}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`
            relative
            col-span-1 row-span-1
            lg:col-span-2 lg:row-start-4 lg:col-start-2
            overflow-hidden
            rounded-3xl
            bg-[#11121d]
            ${hoverFX}
            flex items-end justify-end
          `}
        >
          <Image
            src="/ai.png"
            alt="Workspace with code & design"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/45 to-black/90" />
          <div className="relative z-10 flex w-full flex-col justify-end gap-2 p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Spotlight
            </span>
            <h3 className="text-2xl font-semibold leading-tight">
              Where design intuition meets real-time GPU engineering
            </h3>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
