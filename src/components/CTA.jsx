export default function CTA(){
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
          <div className="relative p-10 md:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(255,0,0,0.15),transparent)]" />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">Book a test drive or find the right part</h3>
                <p className="text-white/70 mt-3">Tell us what you need and our specialists will call you back within 15 minutes.</p>
              </div>
              <form className="grid sm:grid-cols-3 gap-3">
                <input placeholder="Your name" className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 outline-none focus:border-red-500/50"/>
                <input placeholder="Phone number" className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 outline-none focus:border-red-500/50"/>
                <button className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium shadow-lg shadow-red-600/30">Request Callback</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
