import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background texture */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(600px_400px_at_10%_10%,rgba(255,0,0,0.08),transparent)]" />

      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <CTA />

      <footer className="relative py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <div>© {new Date().getFullYear()} AutotechSpares. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>

      {/* Keyframes for the car loop animation */}
      <style>{`
        @keyframes moveCar {
          0% { transform: translateX(-20vw); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateX(120vw); opacity: 0.9; }
        }
        .animate-car { animation: moveCar 6s linear infinite; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  )
}

export default App
