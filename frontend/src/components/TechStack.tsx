// components/TechStack.tsx
"use client";
import { Code, Cpu, Cloud } from "lucide-react";
import TechCard from "./TechCard";

const stack = [
  { title: "Python", icon: <Code size={18}/> },
  { title: "FastAPI", icon: <Cloud size={18}/> },
  { title: "Next.js", icon: <Code size={18}/> },
  { title: "Deep Embeddings", icon: <Cpu size={18}/> },
];

export default function TechStack() {
  return (
    <div className="w-full py-20 bg-black">
  <h2 className="text-center text-3xl font-semibold text-white mb-12">
    Tech & Tools
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
    {stack.map((tech) => (
      <TechCard key={tech.title} name={tech.title} />
    ))}
  </div>
</div>

  );
}
