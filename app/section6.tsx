"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { HiOutlineMail, HiCheck } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";

/* ---------- helper card component ---------- */
function ContactCard({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}) {
  const [beam, setBeam] = useState(false);

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable={false}
      className="group h-64 w-full md:w-60 lg:w-72"
      onEnter={() => setBeam(true)}
      onLeave={() => setBeam(false)}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative flex h-full w-full cursor-pointer select-none flex-col items-center justify-center rounded-3xl bg-[#10111c] ring-1 ring-white/5 transition
                   hover:ring-fuchsia-600/40 hover:shadow-[0_0_30px_-6px_rgba(200,0,255,0.45)]"
        {...(href
          ? { as: "a", href, target: "_blank", rel: "noopener noreferrer" }
          : { onClick })}
      >
        {/* neon scan beam */}
        {beam && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "200%" }}
            transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.05),transparent_60%)]"
          />
        )}

        <div className="relative z-10 flex flex-col items-center gap-4">
          {children}
        </div>
      </motion.div>
    </Tilt>
  );
}

/* ---------- main section ---------- */
export default function SectionSix() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("ansh@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="bg-[#060818] py-32 px-4 text-white lg:px-0">
      <h2 className="mb-20 text-center text-4xl font-extrabold">
        My&nbsp;<span className="text-fuchsia-500">Contact</span>
      </h2>

      {/* contact cards */}
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-10">
        {/* LinkedIn */}
        <ContactCard href="https://linkedin.com/in/anshbhanushali">
          <SiLinkedin className="h-12 w-12 text-[#0a66c2]" />
          <span className="text-lg font-medium">LinkedIn</span>
        </ContactCard>

        {/* Email */}
        <ContactCard onClick={copyEmail}>
          {copied ? (
            <HiCheck className="h-12 w-12 text-emerald-400" />
          ) : (
            <HiOutlineMail className="h-12 w-12 text-gray-300" />
          )}
          <span className="text-lg font-medium">
            {copied ? "Copied!" : "Email"}
          </span>
        </ContactCard>

        {/* GitHub */}
        <ContactCard href="https://github.com/AnshBhanushali">
          <SiGithub className="h-12 w-12 text-gray-300" />
          <span className="text-lg font-medium">GitHub</span>
        </ContactCard>
      </div>

      {/* resume CTA */}
      <div className="mt-24 text-center">
        <h3 className="mb-4 text-3xl font-extrabold">
          Explore My Full&nbsp;
          <span className="text-fuchsia-500">Professional Story</span>
        </h3>
        <p className="mx-auto mb-10 max-w-2xl text-gray-300">
          Learn about my journey, skills, and experience. I’m always looking for
          new opportunities to innovate and grow.
        </p>

        <Link
          href="/Ansh_Bhanushali_Resume.pdf"
          download
          className="inline-block rounded-full bg-[#10111c] px-10 py-3 font-medium ring-1 ring-white/10 transition
                     hover:bg-fuchsia-600/20 hover:ring-fuchsia-500"
        >
          Download My Resume
        </Link>
      </div>
    </section>
  );
}
