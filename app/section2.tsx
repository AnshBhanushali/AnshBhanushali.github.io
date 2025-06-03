// app/section2.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

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

  // Tech stack array (split so each appears in its own box)
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
    <section
      id="portfolio"
      className="bg-[#060818] pb-32 pt-24 text-white px-4 lg:px-0"
    >
      <div className="mx-auto grid max-w-6xl auto-rows-[260px] gap-6 lg:grid-cols-3">
        {/* 1 ▸ Immersive R&D (2×2) */}
        <motion.article
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`relative col-span-2 row-span-2 overflow-hidden rounded-3xl bg-[#11121d] ${hoverFX}`}
        >
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} className="h-full w-full">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
              className="h-full w-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                alt="AR tablet mock-up"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <h3 className="relative z-10 max-w-sm p-6 text-2xl font-semibold leading-tight">
                Building immersive 3-D UIs with neural rendering
              </h3>
            </motion.div>
          </Tilt>
        </motion.article>

        {/* 2 ▸ Rotating globe + timezone */}
        <motion.article
          custom={1}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#11121d] ${hoverFX}`}
        >
          <div className="px-6 pt-6">
            <h3 className="text-xl font-semibold">
              Across-time-zone collaboration
            </h3>
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

        {/* 3 ▸ Tech-stack card (styled like the screenshot) */}
        <motion.article
          custom={2}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`flex overflow-hidden rounded-3xl bg-[#11121d] ${hoverFX}`}
        >
          {/* Left side: heading/text */}
          <div className="flex-1 flex flex-col justify-center px-6">
            <p className="text-sm text-gray-400">I constantly try to improve</p>
            <h3 className="mt-2 text-3xl font-bold leading-snug">
              My tech stack
            </h3>
          </div>

          {/* Right side: grid of tech tags */}
          <div className="flex-1 grid grid-cols-2 gap-x-4 gap-y-3 p-6">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="flex items-center justify-center rounded-lg border border-gray-600 px-4 py-2 text-center text-sm font-medium transition hover:border-sky-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.article>

        {/* 4 ▸ Enhanced “Infinite curiosity” bio */}
        <motion.article
          custom={3}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`relative flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#11121d] to-[#1e1f2a] p-6 ${hoverFX}`}
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

        {/* 5 ▸ CTA */}
        <motion.article
          custom={4}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-fuchsia-600 via-indigo-600 to-cyan-500 p-1 hover:shadow-[0_0_28px_-6px_rgba(0,182,255,0.55)] transition"
        >
          <div className="flex flex-col items-center justify-center gap-6 rounded-[inherit] bg-[#0b0c14] p-8 text-center">
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

        {/* 6 ▸ Code + design merge (2 cols) */}
        <motion.article
          custom={5}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`relative col-span-2 overflow-hidden rounded-3xl bg-[#11121d] ${hoverFX}`}
        >
          <Image
            src="/ai.png"
            alt="Workspace with code & design"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/45 to-black/90" />
          <div className="relative z-10 flex h-full flex-col justify-end gap-2 p-6">
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
