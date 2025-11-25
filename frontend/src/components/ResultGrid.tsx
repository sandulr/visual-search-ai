import { motion } from "framer-motion";

export default function ResultGrid({ items, visible }: { items: any[], visible: boolean }) {

  if (!visible) {
    console.log('not visible');
    return null;
  }

  if (!items || items.length === 0) {
    return <div className="text-slate-400">No results yet — upload an image to start.</div>;
  }
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {items.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-xl border border-white/20 cursor-pointer"
        >
          <img src={img.thumbnail_url} className="w-full object-cover" />
          <div className="mt-2 flex justify-between items-center">
            <div className="text-sm" style={{margin: "0.5rem"}}>{img.meta ? img.meta : 'Image'}</div>
            <div className="text-xs text-slate-400" style={{margin: "0.5rem"}}>{(img.similarity * 10).toFixed(1)}%</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
