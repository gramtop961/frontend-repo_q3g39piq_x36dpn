import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_8px_30px_rgba(255,0,0,0.25)]"
            >
              Drive value. Keep it genuine.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-4 text-white/80 text-lg md:text-xl"
            >
              AutotechSpares connects you with certified pre‑owned cars and genuine spare parts. Performance you can trust, prices you’ll love.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#cars" className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium shadow-lg shadow-red-600/30">Browse Cars</a>
              <a href="#parts" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10">Shop Parts</a>
            </motion.div>

            <div className="mt-6 grid grid-cols-3 gap-6 text-white/80 text-sm">
              <div>
                <div className="text-2xl font-extrabold text-white">200+</div>
                Inspected cars
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white">5k+</div>
                Genuine parts
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white">24/7</div>
                Support
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            {/* Decorative road strip with looping car silhouettes */}
            <div className="relative h-64 w-full">
              {/* Road */}
              <div className="absolute inset-x-0 bottom-8 h-24 bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl border border-white/5 overflow-hidden">
                {/* Lane dashes */}
                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-1 bg-[repeating-linear-gradient(90deg,white_0,white_40px,transparent_40px,transparent_80px)] opacity-40" />
              </div>

              {/* Moving cars */}
              <div className="absolute inset-x-0 bottom-16 h-16">
                {[0,1,2].map((i) => (
                  <div key={i} className="absolute inset-0">
                    <div className="absolute left-[-20%] top-1/2 -translate-y-1/2 w-20 h-8">
                      <div className={`w-full h-full bg-gradient-to-r from-slate-300 to-slate-50 rounded-md shadow-[0_5px_20px_rgba(255,0,0,0.35)] animate-car ${i===1? 'animation-delay-1000' : i===2? 'animation-delay-2000':''}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
