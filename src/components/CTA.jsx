export default function CTA(){
  return (
    <section id="contact" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden">
          <div className="relative p-10 md:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(244,63,94,0.12),transparent)]" />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Book a test drive or find the right part</h3>
                <p className="text-slate-600 mt-3">Tell us what you need and our specialists will call you back within 15 minutes.</p>
              </div>
              <form className="grid sm:grid-cols-3 gap-3">
                <input placeholder="Your name" className="px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 outline-none focus:border-rose-400/80"/>
                <input placeholder="Phone number" className="px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 outline-none focus:border-rose-400/80"/>
                <button className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-black text-white font-medium">Request Callback</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
