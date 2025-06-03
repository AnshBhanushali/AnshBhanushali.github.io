// app/section2.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

/* scroll‑reveal */
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
  return (
    <section
      id="portfolio"
      /* on lg screens we drop the side padding so it lines up with hero */
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
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
              className="h-full w-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                alt="AR tablet mock‑up"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <h3 className="relative z-10 max-w-sm p-6 text-2xl font-semibold leading-tight">
                Building immersive 3‑D UIs with neural rendering
              </h3>
            </motion.div>
          </Tilt>
        </motion.article>

        {/* 2 ▸ Rotating globe */}
        <motion.article
          custom={1}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#11121d] ${hoverFX}`}
        >
          <h3 className="px-6 pt-6 text-xl font-semibold">
            Across‑time‑zone collaboration
          </h3>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
            className="relative mx-auto mb-6 aspect-square w-40 sm:w-48"
          >
            <Image
              src="https://images.unsplash.com/photo-1581090985944-5c411bd3a0e2?auto=format&fit=crop&w=500&q=80"
              alt="Digital globe"
              fill
              className="object-contain opacity-90"
            />
          </motion.div>
        </motion.article>

        {/* 3 ▸ Tech tags */}
        <motion.article
          custom={2}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`flex flex-col gap-4 overflow-hidden rounded-3xl bg-[#11121d] p-6 ${hoverFX}`}
        >
          <h4 className="text-xs uppercase tracking-widest text-gray-400">
            Core stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "TypeScript",
              "LangChain",
              "FastAPI",
              "PostgreSQL",
              "Docker",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-xl bg-[#1b1c29] px-3 py-1 text-sm transition hover:bg-sky-600/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.article>

        {/* 4 ▸ Mini bio */}
        <motion.article
          custom={3}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`flex items-center rounded-3xl bg-[#11121d] p-6 ${hoverFX}`}
        >
          <p className="text-xl font-medium leading-snug">
            Infinite curiosity, grounded in{" "}
            <span className="text-sky-400">clean code</span>.
          </p>
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
              href="mailto:ansh@example.com"
              className="rounded-full border border-white/20 px-6 py-2 text-sm backdrop-blur hover:bg-white/10"
            >
              Let’s talk&nbsp;→
            </Link>
          </div>
        </motion.article>

        {/* 6 ▸ Code + design merge (2 cols) */}
        <motion.article
          custom={5}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`relative col-span-2 overflow-hidden rounded-3xl bg-[#11121d] ${hoverFX}`}
        >
          <Image
            src="https://images.unsplash.com/photo-1543269664-7eef42226a56?auto=format&fit=crop&w=1200&q=80"
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
              Where design intuition meets real‑time GPU engineering
            </h3>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
