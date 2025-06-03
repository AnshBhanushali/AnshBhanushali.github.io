"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Html, Stars } from "@react-three/drei";
import { Suspense } from "react";

type Pin = {
  label: string;
  lat: number;   // in degrees
  lon: number;   // in degrees
  color?: string;
};

/* ----  add / edit your stack here  ---- */
const pins: Pin[] = [
  { label: "TypeScript", lat: 40, lon: -75, color: "#3178c6" },
  { label: "Python", lat: 30, lon: 10, color: "#3776ab" },
  { label: "Next.js", lat: -20, lon: 120, color: "#ffffff" },
  { label: "LangChain", lat: 10, lon: -140, color: "#8e44ad" },
  { label: "FastAPI", lat: -35, lon: -45, color: "#009688" },
  { label: "Docker", lat: 60, lon: 60, color: "#0db7ed" },
  { label: "Azure", lat: 0, lon: 0, color: "#0078d4" },
  { label: "PostgreSQL", lat: -10, lon: 80, color: "#336791" },
  // …add as many as you like
];

/* ---- helpers ---- */
const toCartesian = (lat: number, lon: number, radius = 1.01) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return [
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ];
};

export default function TechGlobe() {
  return (
    <section id="tech-globe" className="h-screen w-full bg-[#060818]">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
        {/* tiny stars in background */}
        <Stars radius={100} depth={50} count={10000} factor={4} fade />

        {/* softly glowing planet */}
        <Suspense fallback={null}>
          <Sphere args={[1, 64, 64]}>
            <meshStandardMaterial
              color="#0c1023"
              emissive="#15193a"
              emissiveIntensity={0.3}
              metalness={0.4}
              roughness={0.7}
            />
          </Sphere>
        </Suspense>

        {/* tech pins */}
        {pins.map((p) => {
          const [x, y, z] = toCartesian(p.lat, p.lon);
          return (
            <group key={p.label} position={[x, y, z]}>
              {/* pin glow */}
              <mesh>
                <sphereGeometry args={[0.015, 16, 16]} />
                <meshBasicMaterial color={p.color || "#f0f"} />
              </mesh>

              {/* floating label always faces camera */}
              <Html
                distanceFactor={8}
                wrapperClass="select-none"
                style={{
                  pointerEvents: "none",
                  transform: "translate(-50%,-120%)",
                  color: p.color || "#fff",
                  fontSize: "0.75rem",
                  whiteSpace: "nowrap",
                }}
              >
                {p.label}
              </Html>
            </group>
          );
        })}

        <ambientLight intensity={0.7} />
        <pointLight position={[5, 3, 5]} intensity={1.5} color="#92b7ff" />

        {/* user can spin / zoom */}
        <OrbitControls
          enablePan={false}
          minDistance={2}
          maxDistance={5}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>
    </section>
  );
}
