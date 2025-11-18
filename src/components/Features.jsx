import { BadgeCheck, Wrench, ShieldCheck, Gauge, Leaf } from "lucide-react";

export default function Features(){
  const features = [
    {
      icon: <BadgeCheck className="text-emerald-400" size={22} />,
      title: 'Certified Pre‑Owned',
      desc: 'Every car passes a 150‑point inspection with full service history.'
    },
    {
      icon: <Wrench className="text-sky-400" size={22} />,
      title: 'Genuine Parts',
      desc: 'OEM and premium aftermarket parts sourced from trusted suppliers.'
    },
    {
      icon: <ShieldCheck className="text-red-400" size={22} />,
      title: 'Warranty & Support',
      desc: 'Optional extended warranties and round‑the‑clock assistance.'
    },
    {
      icon: <Gauge className="text-amber-400" size={22} />,
      title: 'Performance First',
      desc: 'Tuned, tested, and ready for the road — without the new‑car price.'
    },
    {
      icon: <Leaf className="text-lime-400" size={22} />,
      title: 'Sustainability',
      desc: 'Reuse. Refurbish. Drive greener with parts that last longer.'
    }
  ];

  return (
    <section id="unique" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Why drivers choose AutotechSpares</h2>
        <p className="text-white/70 text-center mt-3 max-w-2xl mx-auto">We blend precision engineering with fair pricing and a concierge‑style experience.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/7 transition">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center">{f.icon}</div>
                <div>
                  <div className="text-white font-semibold">{f.title}</div>
                  <div className="text-white/70 text-sm mt-1">{f.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
