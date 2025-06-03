"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // You can use Heroicons, Lucide, or SVG

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Tech Stack", href: "#tech-vault" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`
        fixed top-4 left-1/2 z-50 w-[90%] sm:w-auto max-w-xl -translate-x-1/2
        rounded-full px-6 py-3 transition-all duration-300
        flex items-center justify-between
        ${scrolled ? "bg-black bg-opacity-30 backdrop-blur-sm shadow-lg" : "bg-transparent"}
      `}
    >
      {/* Mobile menu button */}
      <button
        className="sm:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Nav links (hidden on small screens unless toggled) */}
      <ul
        className={`
          flex-col sm:flex-row gap-4 sm:gap-8
          ${menuOpen ? "flex" : "hidden"} sm:flex
          absolute sm:static top-14 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0
          bg-black sm:bg-transparent bg-opacity-90 sm:bg-opacity-0 px-4 py-4 sm:p-0
          rounded-2xl sm:rounded-none shadow-md sm:shadow-none
          text-center sm:text-left
        `}
      >
        {navItems.map(({ label, href }) => {
          const isActive =
            typeof window !== "undefined" && window.location.hash === href;
          return (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`
                  text-base font-medium transition-colors duration-200
                  ${isActive ? "text-fuchsia-500" : "text-gray-300"}
                  hover:text-white
                `}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
