import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Car({ className = '', color = '#374151', headlight = '#FFD6A5' }) {
  return (
    <svg viewBox="0 0 120 48" className={className} aria-hidden>
      {/* Body */}
      <g>
        <path d="M8 28 C12 16, 26 12, 44 12 H70 C86 12, 100 18, 110 26 L114 30 C116 32, 116 36, 114 38 C112 40, 108 40, 106 38 L102 34 H18 L14 38 C12 40, 8 40, 6 38 C4 36, 4 32, 6 30 L8 28 Z" fill={color} />
        {/* Windows */}
        <path d="M44 16 H70 C84 16, 96 21, 102 28 H28 C32 22, 38 16, 44 16 Z" fill="#E5E7EB"/>
        {/* Wheels */}
        <circle cx="34" cy="38" r="6" fill="#111827" />
        <circle cx="86" cy="38" r="6" fill="#111827" />
        <circle cx="34" cy="38" r="3" fill="#6B7280" />
        <circle cx="86" cy="38" r="3" fill="#6B7280" />
        {/* Headlight */}
        <circle cx="115" cy="30" r="3" fill={headlight} />
        <path d="M112 29 L118 31" stroke={headlight} strokeWidth="2" opacity="0.6" />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-white">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Light overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-28">
          <div className="grid md:grid-cols-2 items-center gap-10">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900"
              >
                Drive value. Keep it genuine.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="mt-4 text-slate-700 text-lg md:text-xl"
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
                <a href="#parts" className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-200">Shop Parts</a>
              </motion.div>

              <div className="mt-6 grid grid-cols-3 gap-6 text-slate-700 text-sm">
                <div>
                  <div className="text-2xl font-extrabold text-slate-900">200+</div>
                  Inspected cars
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900">5k+</div>
                  Genuine parts
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900">24/7</div>
                  Support
                </div>
              </div>
            </div>
            <div className="hidden md:block" />
          </div>
        </div>
      </div>

      {/* Full-width road with natural motion */}
      <div className="relative z-10 w-full">
        <div className="absolute inset-x-0 bottom-0">
          {/* Road */}
          <div className="relative w-full h-36 md:h-44 bg-gray-200">
            {/* Asphalt texture */}
            <div className="absolute inset-0 opacity-60" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.04) 0, rgba(0,0,0,0.04) 10px, transparent 10px, transparent 20px)'
            }} />
            {/* Lane divider */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.9)_0,rgba(255,255,255,0.9)_60px,transparent_60px,transparent_120px)]" />

            {/* Cars - three lanes with varied speeds */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              {/* Lane 1 (near) */}
              <motion.div className="absolute bottom-4 h-14" style={{ left: '-20%' }} animate={{ x: ['-20%', '120%'] }} transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}>
                <Car className="w-32 h-14 drop-shadow-[0_8px_24px_rgba(239,68,68,0.35)]" color="#334155" />
              </motion.div>
              {/* Lane 2 (middle) */}
              <motion.div className="absolute bottom-12 h-12" style={{ left: '-30%' }} animate={{ x: ['-30%', '120%'] }} transition={{ duration: 9, repeat: Infinity, ease: 'linear', delay: 1.2 }}>
                <Car className="w-28 h-12 opacity-90" color="#475569" />
              </motion.div>
              {/* Lane 3 (far) */}
              <motion.div className="absolute bottom-20 h-10" style={{ left: '-40%' }} animate={{ x: ['-40%', '120%'] }} transition={{ duration: 11, repeat: Infinity, ease: 'linear', delay: 2.1 }}>
                <Car className="w-24 h-10 opacity-80" color="#64748B" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
