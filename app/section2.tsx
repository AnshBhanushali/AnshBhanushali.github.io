/* ---------- SECTION 2 (GRID) ---------- */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  off: { opacity: 0, y: 30 },
  on: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export function SectionTwo() {
  return (
    <section id="portfolio" className="bg-[#060818] px-4 pb-24 pt-20 text-white">
      <div className="mx-auto grid max-w-6xl auto-rows-[250px] gap-6 lg:grid-cols-3">
        {/* === 1. Hologram cube (2×2) === */}
        <motion.div
          variants={fadeUp}
          initial="off"
          whileInView="on"
          viewport={{ once: true }}
          className="relative col-span-2 row-span-2 flex items-end overflow-hidden rounded-3xl bg-[#11121d]"
        >
          <Image
            src="/assets/cube-holo.png" // add this to /public/assets
            alt="Hologram cube"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <h3 className="relative z-10 p-6 text-2xl font-semibold leading-tight">
            Turning abstract concepts into immersive interfaces
          </h3>
        </motion.div>

        {/* === 2. Rotating neural net === */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="off"
          whileInView="on"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-[#11121d] p-6"
        >
          <h3 className="text-xl font-semibold">
            Globally synced communication
          </h3>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="pointer-events-none"
          >
            <Image
              src="/assets/neural-globe.png"
              alt="Neural globe"
              width={160}
              height={160}
              className="mx-auto opacity-80"
            />
          </motion.div>
        </motion.div>

        {/* === 3. Tech tags === */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="off"
          whileInView="on"
          viewport={{ once: true }}
          className="flex flex-col gap-4 overflow-hidden rounded-3xl bg-[#11121d] p-6"
        >
          <h4 className="text-gray-400">My current stack</h4>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "LangChain", "Python", "Docker"].map(
              (tag, i) => (
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
              ),
            )}
          </div>
        </motion.div>

        {/* === 4. Short bio === */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="off"
          whileInView="on"
          viewport={{ once: true }}
          className="flex items-center rounded-3xl bg-[#11121d] p-6"
        >
          <h3 className="text-2xl font-semibold">
            Relentless curiosity fuels my code.
          </h3>
        </motion.div>

        {/* === 5. Gradient CTA === */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="off"
          whileInView="on"
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-tr from-fuchsia-600 via-indigo-600 to-purple-600 p-1"
        >
          <div className="flex flex-col items-center justify-center gap-6 rounded-[inherit] bg-[#0b0c14] p-8 text-center">
            <h3 className="text-xl font-semibold">
              Have an idea? Let’s build it.
            </h3>
            <button
              onClick={() => navigator.clipboard.writeText("ansh@example.com")}
              className="rounded-full border border-white/20 px-6 py-2 text-sm backdrop-blur hover:bg-white/10"
            >
              📋 Copy email
            </button>
          </div>
        </motion.div>

        {/* === 6. Aurora code card (2 cols) === */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="off"
          whileInView="on"
          viewport={{ once: true }}
          className="relative col-span-2 overflow-hidden rounded-3xl bg-[#11121d]"
        >
          <Image
            src="/assets/aurora-code.png"
            alt="Aurora shader code"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/30 to-black/80" />
          <div className="relative z-10 flex h-full flex-col justify-end p-6">
            <span className="text-xs uppercase tracking-wider text-gray-400">
              Research Spotlight
            </span>
            <h3 className="text-2xl font-semibold leading-tight">
              Exploring real‑time GPU shaders to power next‑gen web visuals
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
