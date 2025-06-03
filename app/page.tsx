import Hero from "./Hero";
import Link from "next/link"; // if you need Link elsewhere

export const metadata = {
  title: "Ansh Bhanushali | Metaverse-Ready Engineer",
  description:
    "Building AI-powered products for the next generation of the web.",
};

export default function Home() {
  return (
    <main className="text-white">
      {/* ===== META HERO ===== */}
      <Hero />

      {/* ==== add other sections below ==== */}
    </main>
  );
}
