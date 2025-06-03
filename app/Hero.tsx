"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* headline */}
      <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl md:leading-tight drop-shadow-xl">
        Engineering the&nbsp;
        <span className="text-sky-400">Future</span>&nbsp;of&nbsp;
        <span className="text-fuchsia-500">Intelligent Systems</span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg md:text-2xl text-gray-200">
        I design &amp; code immersive, AI-driven experiences that feel right in the metaverse.
      </p>

      <Link
        href="#projects"
        className="mt-12 inline-flex items-center gap-2 rounded-full border border-sky-400/70
                   px-10 py-4 font-semibold backdrop-blur-md transition-transform hover:scale-105"
      >
        Explore Portfolio
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 -rotate-45"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M13 5l6 7-6 7" />
        </svg>
      </Link>

      {/* page-scoped styles */}
      <style jsx>{`
        /* ===== GRID + GLOWS ===== */
        @keyframes glowShift {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        .hero {
          background:
            /* holographic grid */
            repeating-linear-gradient(
                0deg,
                transparent,
                transparent 38px,
                rgba(255, 255, 255, 0.035) 40px
              ),
            repeating-linear-gradient(
                90deg,
                transparent,
                transparent 38px,
                rgba(255, 255, 255, 0.035) 40px
              ),
            /* drifting glow blobs */
            radial-gradient(
                500px 500px at 20% 30%,
                rgba(0, 123, 255, 0.5),
                transparent 70%
              ),
            radial-gradient(
                600px 600px at 80% 70%,
                rgba(168, 85, 247, 0.45),
                transparent 70%
              ),
            radial-gradient(
                400px 400px at 70% 20%,
                rgba(0, 184, 255, 0.35),
                transparent 70%
              ),
            #060818; /* cosmic base */
          background-size:
            40px 40px, 40px 40px, /* grid */
            200% 200%, 200% 200%, 200% 200%, /* glows */
            auto;
          animation: glowShift 25s ease-in-out infinite;
        }

        /* soft bottom fade for transition into next section */
        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 60%,
            #000 100%
          );
          pointer-events: none;
          z-index: -1;
        }

        /* add tiny “scanning” lines every few seconds */
        @keyframes scan {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          30% {
            opacity: 0.25;
          }
          70% {
            opacity: 0.25;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        .hero::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 2px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: scan 6s linear infinite;
          z-index: -1;
        }
        .hero::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, #060818 100%);
            pointer-events: none;
            z-index: -1;
          }
        `}</style>
    </section>
  );
}
