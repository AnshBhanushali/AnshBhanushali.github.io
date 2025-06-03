// components/Header.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Once the user scrolls down > 20px, add a faint backdrop + blur
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Nav items (point to matching section IDs)
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
        fixed top-8 left-1/2 z-50 flex w-auto max-w-xl -translate-x-1/2
        rounded-full px-8 py-3 transition-all duration-300
        ${scrolled
          ? "bg-black bg-opacity-30 backdrop-blur-sm shadow-lg"
          : "bg-transparent"}
      `}
    >
      <ul className="flex items-center justify-center gap-8">
        {navItems.map(({ label, href }) => {
          // Mark as active if window.location.hash matches href
          const isActive =
            typeof window !== "undefined" && window.location.hash === href;
          return (
            <li key={href}>
              <Link
                href={href}
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
