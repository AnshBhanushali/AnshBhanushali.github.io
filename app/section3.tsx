// app/section3.tsx
"use client";

import { useEffect, useRef, useState } from "react";

const TECH_LABELS = [
  "TypeScript",
  "Python",
  "Next.js",
  "LangChain",
  "FastAPI",
  "Docker",
  "Azure",
  "PostgreSQL",
  "Node.js",
  "GraphQL",
  "TensorFlow",
  "Rust",
  "Kubernetes",
  "Redis",
  "GitHub",
];

/**
 * Place N points evenly on a sphere’s surface using the Fibonacci sphere algorithm.
 * Returns an array of { x, y, z } each in [−1, +1].
 */
function fibonacciSphere(samples: number) {
  const points: { x: number; y: number; z: number }[] = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  for (let i = 0; i < samples; i++) {
    const t = i / (samples - 1);
    const inclination = Math.acos(1 - 2 * t);
    const azimuth = 2 * Math.PI * i / goldenRatio;
    const x = Math.sin(inclination) * Math.cos(azimuth);
    const y = Math.sin(inclination) * Math.sin(azimuth);
    const z = Math.cos(inclination);
    points.push({ x, y, z });
  }
  return points;
}

export default function TagCloudSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [sphereRotation, setSphereRotation] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);

  // Compute 3D positions for each tech label
  const positions = fibonacciSphere(TECH_LABELS.length);

  // Convert a 3D point (x,y,z) to CSS 3D transform strings
  function pointToTransform({ x, y, z }: { x: number; y: number; z: number }) {
    // radius of sphere in px
    const R = 200;
    const translateX = x * R;
    const translateY = y * R;
    const translateZ = z * R;
    return `translate3d(${translateX}px, ${translateY}px, ${translateZ}px)`;
  }

  // Handle auto‐rotation: each frame, increment sphereRotation unless paused
  useEffect(() => {
    let frameId: number;
    const animate = () => {
      if (!isDragging && autoRotate) {
        setSphereRotation((prev) => ({
          x: prev.x + 0.002, // rotation around Y ‐ axis
          y: prev.y + 0.001, // slight tilt around X
        }));
      }
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isDragging, autoRotate]);

  // Mouse event handlers to let user click‐drag to rotate manually
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let dragging = false;

    const onMouseDown = (e: MouseEvent) => {
      dragging = true;
      setIsDragging(true);
      setAutoRotate(false);
      setLastMousePos({ x: e.clientX, y: e.clientY });
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastMousePos.x;
      const dy = e.clientY - lastMousePos.y;
      setLastMousePos({ x: e.clientX, y: e.clientY });
      setSphereRotation((prev) => ({
        x: prev.x + dx * 0.005,
        y: prev.y + dy * 0.005,
      }));
    };

    const onMouseUp = () => {
      dragging = false;
      setIsDragging(false);
      setAutoRotate(true);
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Also pause when pointer leaves, and resume on re‐enter
    container.addEventListener("mouseenter", () => setAutoRotate(true));
    container.addEventListener("mouseleave", () => setAutoRotate(false));

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mouseenter", () => setAutoRotate(true));
      container.removeEventListener("mouseleave", () => setAutoRotate(false));
    };
  }, [lastMousePos]);

  return (
    <section className="flex h-screen w-full items-center justify-center bg-[#060818]">
      <div
        ref={containerRef}
        className="relative h-[450px] w-[450px] perspective-1000"
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `rotateX(${sphereRotation.y}rad) rotateY(${sphereRotation.x}rad)`,
            transformStyle: "preserve-3d",
            width: "100%",
            height: "100%",
          }}
        >
          {positions.map((pt, idx) => (
            <div
              key={TECH_LABELS[idx]}
              ref={(el) => (tagsRef.current[idx] = el!)}
              className={`absolute top-1/2 left-1/2 whitespace-nowrap cursor-pointer select-none px-2 py-1 rounded-md text-sm font-semibold
                transition duration-200
                ${
                  /* Active highlight on hover */
                  ""
                }`}
              style={{
                transform: pointToTransform(pt),
                color: "#ffffff",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              onMouseEnter={() => setSphereRotation((r) => r) /* pause tilt */}
              onMouseLeave={() => setAutoRotate(true)}
            >
              {TECH_LABELS[idx]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
