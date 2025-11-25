
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const demoImages = Array.from({ length: 8 }).map((_, i) => `/collection/${i + 1}.jpg`);

export default function LiveDemoMock() {
  return (
    <section className="mt-8 mb-12">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-xl font-semibold">Live demo (preview)</h4>
          <p className="text-slate-400 text-sm">Quick preview of the image collection (click Start Visual Search to try live).</p>
        </div>
        <Link href="/search" className="text-sm text-slate-300 underline">Open Demo</Link>
      </div>

      <motion.div className="mt-4 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {demoImages.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.06 }} className="rounded-md overflow-hidden bg-[rgba(255,255,255,0.02)] h-28">

            <img src={s} alt={`demo-${i}`} className="w-full h-full object-cover cursor-pointer"/>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
