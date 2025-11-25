"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DemoCarousel({ slides }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % slides.length);
  const prev = () => setIndex((index - 1 + slides.length) % slides.length);

  return (
    <div className="w-full max-w-4xl mx-auto py-16 relative">
      <div className="overflow-hidden relative rounded-xl bg-[#0d0d11] p-6 border border-white/10 shadow-xl">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <img
              src={slides[index].src}
              className="w-full rounded-lg shadow-lg"
            />

            <h3 className="text-xl font-semibold text-white mt-6">
              {slides[index].title}
            </h3>

            <p className="text-white/70 mt-2">
              {slides[index].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prev}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
        >
          <ChevronLeft className="text-white" size={22} />
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
        >
          <ChevronRight className="text-white" size={22} />
        </button>

        
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full cursor-pointer transition 
                ${i === index ? "bg-gradient-to-r from-pink-500 to-cyan-400" : "bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
