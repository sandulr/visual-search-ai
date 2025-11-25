// components/ParticleBackground.tsx
"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticleBackground() {
  const init = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Particles
        id="tsparticles"
        init={init}
        options={{
          fpsLimit: 30,
          fullScreen: { enable: false },
          particles: {
            number: { value: 30, density: { enable: true, area: 800 } },
            color: { value: ["#60a5fa", "#7c3aed", "#06b6d4"] },
            opacity: { value: 0.08 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.5, direction: "none" },
            links: { enable: true, distance: 150, color: "#44475a", opacity: 0.03, width: 1 },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
