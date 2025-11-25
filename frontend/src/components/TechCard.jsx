import { useRef } from "react";

export default function TechCard({ name }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8; // tilt limit
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      className="relative group rounded-xl p-[1px] transition-transform duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      ref={cardRef}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Animated neon border */}
      <div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-flow"
      />

      {/* Glossy glare */}
      <div
        className="
          absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40
          bg-gradient-to-br from-white/20 to-transparent
          pointer-events-none
          transition-opacity duration-300
        "
        style={{
          transform: "translateZ(30px)", // sits above content
        }}
      />

      {/* Card content */}
      <div
        className="relative z-10 bg-[#0c0c0f] rounded-xl p-6 flex items-center justify-center"
        style={{ transform: "translateZ(40px)" }}
      >
        <p className="text-white text-lg">{name}</p>
      </div>
    </div>
  );
}
