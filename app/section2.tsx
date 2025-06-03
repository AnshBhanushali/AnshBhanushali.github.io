/* ----------  SECTION 2  ---------- */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function SectionTwo() {
  /* helper for quick fade‑in + lift */
  const cardVariant = {
    off: { opacity: 0, y: 20 },
    on: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="mx-auto mb-24 mt-32 max-w-6xl px-4">
      <div
        /* 3‑col grid on ≥LG, stacks on mobile */
        className="grid auto-rows-[250px] gap-6 lg:grid-cols-3"
      >
        {/* ----- 1. Big laptop card (span 2×2) ----- */}
        <motion.div
          variants={cardVariant}
          initial="off"
          whileInView="on"
          viewport={{ once: true }}
          className="relative col-span-2 row-span-2 overflow-hidden rounded-3xl bg-[#11121d] p-6 lg:p-8"
        >
          {/* floating laptop */}
          <motion.div
            className="absolute inset-0"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          >
            {/* swap for your own image */}
            <Image
              src="/laptop.png"
              alt="Laptop mock‑up"
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>

          {/* dim overlay so text pops */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10" />

          <h3 className="relative z-10 mt-auto max-w-sm text-xl font-semibold leading-tight">
            Actively seeking opportunities to innovate and excel in a dynamic
            tech environment
          </h3>
        </motion.div>

        {/* ----- 2. Time‑zone / globe card ----- */}
        <motion.div
          custom={1}
          variants={cardVariant}
          initial="off"
          whileInView="on"
          viewport={{ once: true }}
          className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#11121d] p-6"
        >
          <h3 className="text-xl font-semibold">
            I’m very flexible with time‑zone communications
          </h3>

          {/* rotating globe */}
          <motion.div
            className="mx-auto"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          >
            {/* swap for your own globe image */}
            <Image
              src="/globe.png"
              alt="Digital globe"
              width={160}
              height={160}
              className="opacity-80"
            />
          </motion.div>
        </motion.div>

        {/* ----- 3. Tech‑stack tags ----- */}
        <motion.div
          custom={2}
          variants={cardVariant}
          initial="off"
          whileInView="on"
          viewport={{ once: true }}
          className="flex flex-col gap-4 overflow-hidden rounded-3xl bg-[#11121d] p-6"
        >
          <h4 className="text-gray-400">My tech stack</h4>

          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "LangChain",
              "Python",
              "Node.js",
              "MAUI",
              "Tableau",
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
        </motion.div>

        {/* ----- 4. Short bio card ----- */}
        <motion.div
          custom={3}
          variants={cardVariant}
          initial="off"
          whileInView="on"
          viewport={{ once: true }}
          className="flex items-center rounded-3xl bg-[#11121d] p-6"
        >
          <h3 className="text-2xl font-semibold">
            Tech enthusiast with a passion for development.
          </h3>
        </motion.div>

        {/* ----- 5. Gradient CTA card ----- */}
        <motion.div
          custom={4}
          variants={cardVariant}
          initial="off"
          whileInView="on"
          viewport={{ once: true }}
          /* fancy gradient border */
          className="rounded-3xl bg-gradient-to-tr from-fuchsia-600 via-indigo-600 to-purple-600 p-1"
        >
          <div className="flex flex-col items-center justify-center gap-6 rounded-[inherit] bg-[#0b0c14] p-8 text-center">
            <h3 className="text-xl font-semibold">
              Do you want to start a project together?
            </h3>

            <button
              onClick={() => navigator.clipboard.writeText("ansh@example.com")}
              className="rounded-full border border-white/20 px-6 py-2 text-sm backdrop-blur hover:bg-white/10"
            >
              📋 Copy my email address
            </button>
          </div>
        </motion.div>

        {/* ----- 6. LLM / Gen‑AI insight card (spans 2 cols) ----- */}
        <motion.div
          custom={5}
          variants={cardVariant}
          initial="off"
          whileInView="on"
          viewport={{ once: true }}
          className="relative col-span-2 overflow-hidden rounded-3xl bg-[#11121d]"
        >
          {/* dimmed code background */}
          <Image
            src="/code-bg.png"
            alt="Code background"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/80" />

          <div className="relative z-10 h-full p-6 flex flex-col justify-end gap-2">
            <span className="text-xs uppercase tracking-wider text-gray-400">
              The Inside Scoop
            </span>
            <h3 className="text-2xl font-semibold leading-tight">
              Passionate about understanding the transformative power of LLMs
              and Generative AI
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
