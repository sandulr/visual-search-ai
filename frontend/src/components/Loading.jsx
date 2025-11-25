export default function FuturisticLoader() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-ping opacity-60"></div>
        <div className="absolute inset-3 rounded-full border-4 border-purple-500 animate-spin-slow"></div>
        <div className="absolute inset-6 rounded-full border-4 border-pink-400 animate-spin-reverse-slow"></div>
      </div>
      <p className="text-cyan-300 mt-6 tracking-widest text-sm">
        ANALYZING IMAGE...
      </p>
    </div>
  );
}
