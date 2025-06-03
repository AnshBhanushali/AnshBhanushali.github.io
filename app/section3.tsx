"use client";

import { Suspense, useState, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, Stars } from "@react-three/drei";
import * as THREE from "three";

/* ----------------  DATA  ---------------- */
type Pin = { label: string; lat: number; lon: number; color?: string };

const pins: Pin[] = [
  // 15 pins, 3 latitude bands
  { label: "TypeScript", lat: 60, lon:   0, color: "#3178c6" },
  { label: "Python",     lat: 60, lon:  72, color: "#3776ab" },
  { label: "Next.js",    lat: 60, lon: 144, color: "#ffffff" },
  { label: "LangChain",  lat: 60, lon: 216, color: "#8e44ad" },
  { label: "FastAPI",    lat: 60, lon: 288, color: "#009688" },

  { label: "Docker",     lat:  0, lon:   0, color: "#0db7ed" },
  { label: "Azure",      lat:  0, lon:  72, color: "#0078d4" },
  { label: "PostgreSQL", lat:  0, lon: 144, color: "#336791" },
  { label: "Node.js",    lat:  0, lon: 216, color: "#339933" },
  { label: "GraphQL",    lat:  0, lon: 288, color: "#e535ab" },

  { label: "TensorFlow", lat: -60, lon:   0, color: "#FF6F00" },
  { label: "Rust",       lat: -60, lon:  72, color: "#DEA584" },
  { label: "Kubernetes", lat: -60, lon: 144, color: "#326ce5" },
  { label: "Redis",      lat: -60, lon: 216, color: "#DC382D" },
  { label: "GitHub",     lat: -60, lon: 288, color: "#181717" },
];

/* ----------------  HELPERS  ---------------- */
const toXYZ = (lat: number, lon: number, r = 1.02) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return [
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  ];
};

/* ----------------  ATMOSPHERE  ---------------- */
function Atmosphere() {
  return (
    <mesh scale={1.05}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshBasicMaterial
        color="#5b21b6"
        transparent
        opacity={0.15}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

/* ----------------  EARTH   ---------------- */
function Earth({ active, setActive }: { active: string | null; setActive: (l: string | null) => void }) {
  const [colorMap, bumpMap] = useLoader(THREE.TextureLoader, [
    "/earth1.jpg",
    "/earth_bump.jpg",
  ]);

  /* continuous spin */
  const earthRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (earthRef.current) earthRef.current.rotation.y = clock.getElapsedTime() * 0.04;
  });

  return (
    <>
      {/* planet */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={colorMap}
          bumpMap={bumpMap}
          bumpScale={0.05}
          metalness={0.1}
          roughness={0.9}
        />
      </mesh>

      {/* latitude rings for sci‑fi vibe */}
      {[60, 0, -60].map((lat) => {
        const ring = new THREE.EllipseCurve(0, 0, Math.cos(lat * Math.PI / 180), Math.cos(lat * Math.PI / 180), 0, 2 * Math.PI);
        const pts = ring.getSpacedPoints(128).map((p) => new THREE.Vector3(p.x, Math.sin(lat * Math.PI / 180), p.y));
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        return (
          <line key={lat} geometry={geo}>
            <lineBasicMaterial color="#1e40af" linewidth={1} transparent opacity={0.25} />
          </line>
        );
      })}

      {/* pins */}
      {pins.map((p) => {
        const [x, y, z] = toXYZ(p.lat, p.lon);
        const isActive = active === p.label;
        return (
          <group key={p.label} position={[x, y, z]}>
            <mesh
              scale={isActive ? 0.05 : 0.035}
              onClick={() => setActive(isActive ? null : p.label)}
            >
              <sphereGeometry args={[1, 16, 16]} />
              <meshStandardMaterial
                color={isActive ? "#f0f" : p.color}
                emissive={isActive ? "#f0f" : p.color}
                emissiveIntensity={isActive ? 1 : 0.35}
              />
            </mesh>
            <Html distanceFactor={8}>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: isActive ? "#f0f" : p.color,
                  fontWeight: isActive ? 700 : 400,
                  textShadow: "0 0 6px rgba(0,0,0,0.65)",
                  pointerEvents: "none",
                }}
              >
                {p.label}
              </span>
            </Html>
          </group>
        );
      })}
    </>
  );
}

/* ----------------  MAIN SECTION  ---------------- */
export default function SectionThree() {
  const [active, setActive] = useState<string | null>(null);

  /* auto‑rotate pause logic handled by OrbitControls' built‑in damping */
  return (
    <section id="tech-vault" className="relative h-screen w-full bg-[#060818]">
      {/* Fixed holographic heading */}
      <h2 className="pointer-events-none absolute left-1/2 top-10 z-10 -translate-x-1/2 whitespace-nowrap text-4xl font-extrabold tracking-wide text-white md:text-5xl">
        <span className="animate-pulse text-fuchsia-500">Tech Vault</span>
      </h2>

      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 45 }}>
        {/* starfield */}
        <Stars radius={90} depth={40} count={8000} factor={4} fade />

        {/* lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 2, 5]} intensity={1.2} color="#9ab6ff" />

        {/* atmosphere */}
        <Atmosphere />

        {/* planet & pins */}
        <Suspense fallback={null}>
          <Earth active={active} setActive={setActive} />
        </Suspense>

        {/* rotation only, no pan/zoom */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate
          autoRotate
          autoRotateSpeed={0.25}
          dampingFactor={0.05}
        />
      </Canvas>
    </section>
  );
}
