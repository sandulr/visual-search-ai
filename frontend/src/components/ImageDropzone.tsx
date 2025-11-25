"use client";

import { useState } from "react";
import type { DragEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud } from "lucide-react";

export default function ImageDropZone({ onFile }: { onFile: (f: File) => void }) {
  const [preview, setPreview] = useState<string | null>(null);

  const [splitSc, setSplitSc] = useState(false);
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setPreview(imageURL);
    onFile(file);
    setSplitSc(true);
  };


  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const [animating, setAnimating] = useState(true);
  

  return (
    <div className="w-full flex justify-center mt-10">
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut", delay: 0.15 }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      layout={false}
      onAnimationComplete={() => setAnimating(false)}
      className={splitSc ? `
        w-full   flex-col items-center justify-center p-10 rounded-2xl border-2 border-dashed border-white/30 bg-white/10 shadow-lg cursor-pointer gap-8 hover:shadow-soft-glow transition relative
        
         grid grid-cols-1 md:grid-cols-2` : `w-full gap-8  relative flex-col items-center justify-center p-10 rounded-2xl border-2 border-dashed border-white/30 bg-white/10 shadow-lg cursor-pointer hover:shadow-soft-glow transition`}

      
    >

        <AnimatePresence>
          {preview && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex justify-center"
            >
              <img
                src={preview}
                alt="Uploaded"
                className="rounded-xl shadow-xl w-72 h-72 object-cover border border-white/20"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          key="dropzone"
          initial={{ opacity: 0, x: preview ? 50 : 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className={`
            flex flex-col items-center justify-center 
            rounded-2xl border-2 border-dashed 
            border-white/30 backdrop-blur-xl bg-white/10
            shadow-lg cursor-pointer 
            p-10 
            text-white transition-all duration-500
          `}
        >
          <div className="p-4 rounded-lg bg-[rgba(255,255,255,0.02)]">
              <UploadCloud />
            </div>
          <p className="text-lg text-white/80">
            {preview ? "Drop again to replace image" : "Drop Your Image Here"}
          </p>
        </motion.div>

    </motion.div>
    
    </div>

  );
}
