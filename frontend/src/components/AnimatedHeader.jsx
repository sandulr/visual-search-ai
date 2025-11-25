"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedHeader({ onLineComplete }) {
  const text = "Similar Matching Images";
  const [typingComplete, setTypingComplete] = useState(false);
  


  return (
    <div className="w-full flex flex-col items-center text-center mb-10">
      
      <motion.h2
        className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
      >
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: text.length * 0.08,
            ease: "linear",
            onComplete: () => setTypingComplete(true)
            
          }}
          // cursor ON / OFF toggle
          className={`overflow-hidden whitespace-nowrap inline-block pr-1
            ${typingComplete ? "border-r-0" : "border-r-2 border-blue-400"}
          `}
        >
          {text}
        </motion.span>
      </motion.h2>

      {typingComplete && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            onComplete: () => onLineComplete && onLineComplete(),
          }}
          className="mt-3 h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"
        />
      )}
      
    </div>
  );
}
