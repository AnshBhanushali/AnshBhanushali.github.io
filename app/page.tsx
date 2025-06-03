// app/page.tsx

import Hero from "./Hero";
import { SectionTwo } from "./section2";

export const metadata = {
  title: "Ansh Bhanushali | Metaverse-Ready Engineer",
  description: "Building AI-powered products for the next generation of the web.",
};

export default function Page() {
  return (
    <main className="text-white">
      {/* ===== META HERO ===== */}
      <Hero />

      {/* ===== SECTION TWO (Grid Section) ===== */}
      <SectionTwo />

      {/* …more sections can go here */}
    </main>
  );
}
