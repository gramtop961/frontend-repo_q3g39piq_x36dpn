import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Subtle background accents */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(600px_400px_at_10%_10%,rgba(244,63,94,0.06),transparent)]" />

      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <CTA />

      <footer className="relative py-10 border-t border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
          <div>© {new Date().getFullYear()} AutotechSpares. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
