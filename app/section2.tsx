/* ---------- SECTION 2 (GRID, v2) ---------- */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  }),
};

export function SectionTwo() {
  return (
    <section
      id="portfolio"
      className="bg-[#060818] px-4 pb-28 pt-24 text-white lg:px-0"
    >
      <div className="mx-auto grid max-w-6xl auto-rows-[260px] gap-6 lg:grid-cols-3">
        {/* === 1 ▸ Exploratory R&D (2×2) === */}
        <motion.article
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative col-span-2 row-span-2 overflow-hidden rounded-3xl bg-[#11121d]"
        >
          <Image
            src="https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80"
            alt="Neon brain hologram"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <h3 className="relative z-10 max-w-sm p-6 text-2xl font-semibold leading-tight">
            Researching neural rendering &amp; immersive 3‑D UI workflows
          </h3>
        </motion.article>

        {/* === 2 ▸ Always‑on Collaboration === */}
        <motion.article
          custom={1}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#11121d] p-6"
        >
          <h3 className="text-xl font-semibold">
            Across‑time‑zone collaboration
          </h3>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            className="mx-auto"
          >
            <Image
              src="https://images.unsplash.com/photo-1502920917128-1aa500764b52?auto=format&fit=crop&w=300&q=60"
              alt="Global network"
              width={160}
              height={160}
              className="rounded-full opacity-80"
            />
          </motion.div>
        </motion.article>

        {/* === 3 ▸ Toolkit Tags === */}
        <motion.article
          custom={2}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4 overflow-hidden rounded-3xl bg-[#11121d] p-6"
        >
          <h4 className="text-sm uppercase tracking-widest text-gray-400">
            Core Stack
          </h4>

          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "TypeScript",
              "LangChain",
              "FastAPI",
              "PostgreSQL",
              "Docker",
            ].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl bg-[#1b1c29] px-3 py-1 text-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.article>

        {/* === 4 ▸ Mini Bio === */}
        <motion.article
          custom={3}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center rounded-3xl bg-[#11121d] p-6"
        >
          <p className="text-xl font-semibold leading-snug">
            Infinite curiosity, grounded in <span className="text-sky-400">clean code</span>.
          </p>
        </motion.article>

        {/* === 5 ▸ Call‑to‑Action (gradient) === */}
        <motion.article
          custom={4}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-tr from-fuchsia-600 via-indigo-600 to-purple-600 p-1"
        >
          <div className="flex flex-col items-center justify-center gap-6 rounded-[inherit] bg-[#0b0c14] p-8 text-center">
            <h3 className="text-xl font-semibold">
              Want to create the next big thing?
            </h3>

            <Link
              href="mailto:ansh@example.com"
              className="rounded-full border border-white/20 px-6 py-2 text-sm backdrop-blur hover:bg-white/10"
            >
              Let’s talk ideas →
            </Link>
          </div>
        </motion.article>

        {/* === 6 ▸ Code‑Meets‑Design (2 cols) === */}
        <motion.article
          custom={5}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative col-span-2 overflow-hidden rounded-3xl bg-[#11121d]"
        >
          <Image
            src="https://images.unsplash.com/photo-1526040652367-ac003a0475fe?auto=format&fit=crop&w=1200&q=80"
            alt="Code with aurora overlay"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/40 to-black/80" />
          <div className="relative z-10 flex h-full flex-col justify-end gap-2 p-6">
            <span className="text-xs uppercase tracking-wider text-gray-400">
              Spotlight
            </span>
            <h3 className="text-2xl font-semibold leading-tight">
              Bridging design &amp; engineering with real‑time GPU shaders
            </h3>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
