
"use client";
import { motion } from "framer-motion";

const steps = [
  { title: "Upload", desc: "Drop an image to start the visual search." },
  { title: "Analyze", desc: "Our model converts the image into feature embeddings." },
  { title: "Retrieve", desc: "Closest matches are returned using vector similarity." },
];

export default function HowItWorks() {
  return (
    <section id="howitworks" className="mt-12 mb-12">
      <div className="text-center">
        <h3 className="text-xl font-semibold">How it works</h3>
        <p className="text-slate-400 mt-2">A simple three-step flow that demonstrates deep visual similarity search.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            className="p-6 rounded-xl bg-[rgba(255,255,255,0.02)] border border-white/6"
          >
            <div className="text-2xl font-semibold text-white">{s.title}</div>
            <div className="text-slate-400 mt-2 text-sm">{s.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
