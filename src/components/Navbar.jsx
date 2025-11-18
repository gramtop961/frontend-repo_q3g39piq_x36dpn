import { Menu, ShoppingCart, Phone, Car, Wrench } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg shadow-rose-300/30">
            <Car className="text-white" size={22} />
          </div>
          <div>
            <div className="text-slate-900 font-extrabold text-xl tracking-tight">AutotechSpares</div>
            <div className="text-xs text-slate-500 -mt-1">Pre‑owned cars • Genuine parts</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#cars" className="text-slate-600 hover:text-slate-900 transition">Cars</a>
          <a href="#parts" className="text-slate-600 hover:text-slate-900 transition flex items-center gap-1"><Wrench size={16}/> Parts</a>
          <a href="#unique" className="text-slate-600 hover:text-slate-900 transition">What’s Unique</a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900 transition flex items-center gap-1"><Phone size={16}/> Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-black text-white transition">
            <ShoppingCart size={18}/> Cart
          </button>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
