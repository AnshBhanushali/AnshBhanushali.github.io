"use client";

import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#10111c] text-gray-400 py-8">
      <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-6 md:flex-row md:justify-between">
        {/* Left: branding */}
        <div className="text-center md:text-left">
          <span className="text-white font-semibold text-lg">Ansh Bhanushali</span>
          <p className="mt-1 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Center: quick links */}
        <nav className="flex gap-6">
          <Link href="#projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="#experience" className="hover:text-white transition">
            Experience
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>

        {/* Right: social icons */}
        <div className="flex gap-4">
          <Link
            href="https://github.com/AnshBhanushali"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <SiGithub className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/anshbhanushali"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <SiLinkedin className="h-6 w-6 text-[#0a66c2]" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
