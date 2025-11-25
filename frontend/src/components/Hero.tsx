// components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "./ParticleBackground";
import NeonGlowBlob from "./NeonGlowBlob";

import DemoCarousel from "@/components/DemoCarousel";


import HeadToHow from "./HeadToHow";




const demoScreens = [
  {
    title: "Step 1: Upload Your Image",
    description: "Choose any image and drop it into the search area to begin.",
    src: "/demo/1.png"
  },
  {
    title: "Step 2: AI Feature Extraction",
    description: "Our model analyzes the visual features instantly.",
    src: "/demo/2.png"
  },
  {
    title: "Step 3: Similarity Search",
    description: "We match your image with millions of features.",
    src: "/demo/3.png"
  },
  {
    title: "Step 4: Results Delivered",
    description: "View similar images ranked by visual similarity.",
    src: "/demo/5.png"
  }
];



export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* LEFT: text */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-[#60a5fa] via-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent">
              Experience intelligent visual search
            </span>
          </h1>

          <p className="mt-4 text-slate-300 max-w-xl">
            An AI-powered visual search platform that finds visually similar images using deep feature embeddings. Fast, explainable, and production-ready.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link href="/search" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#6d28d9] to-[#06b6d4] text-white font-medium shadow-ai transform hover:scale-[1.02] transition">
              Start Visual Search
            </Link>

            <HeadToHow />
            
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="text-xs bg-white/5 px-3 py-1 rounded-full text-slate-200">Deep embeddings</span>
            <span className="text-xs bg-white/5 px-3 py-1 rounded-full text-slate-200">Cosine similarity</span>
            <span className="text-xs bg-white/5 px-3 py-1 rounded-full text-slate-200">FastAPI + Next.js</span>
          </div>
        </motion.div>

        {/* RIGHT: scanner mock card */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <DemoCarousel slides={demoScreens} />
        </motion.div>
      </div>
    </section>
  );
}
