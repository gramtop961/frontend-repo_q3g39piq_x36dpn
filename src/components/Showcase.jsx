import { Car, Wrench, Star } from "lucide-react";

const cars = [
  { name: 'Audi A4 S-Line 2.0T', price: '$18,900', km: '52,300 km', year: 2019, badge: 'Certified' },
  { name: 'BMW 3 Series 320i', price: '$21,500', km: '48,100 km', year: 2020, badge: 'Hot' },
  { name: 'Toyota Corolla Altis', price: '$11,200', km: '63,700 km', year: 2018, badge: 'Great Value' },
];

const parts = [
  { name: 'Brembo Brake Kit (Front)', price: '$329', compat: 'Multiple models' },
  { name: 'Bosch Spark Plugs (4)', price: '$49', compat: 'Most 4‑cyl engines' },
  { name: 'K&N Performance Filter', price: '$69', compat: 'Universal' },
];

function Card({title, subtitle, price, pill}){
  return (
    <div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition">
      <div className="flex items-center justify-between">
        <div className="text-slate-900 font-semibold">{title}</div>
        {pill && (<span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-rose-100 text-rose-700 border border-rose-200">{pill}</span>)}
      </div>
      <div className="text-slate-600 text-sm mt-1">{subtitle}</div>
      <div className="mt-5 flex items-center justify-between">
        <div className="text-slate-900 text-xl font-bold">{price}</div>
        <button className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-black text-white text-sm">View Details</button>
      </div>
    </div>
  );
}

export default function Showcase(){
  return (
    <section id="cars" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 flex items-center gap-2"><Car size={24}/> Featured Cars</h3>
            <p className="text-slate-600 mt-2">Fully inspected, professionally detailed, ready to go.</p>
          </div>
          <a href="#" className="text-sm text-rose-600 hover:text-rose-500">Explore all</a>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cars.map((c, i) => (
            <Card key={i} title={`${c.year} · ${c.name}`} subtitle={`${c.km}`} price={c.price} pill={c.badge} />
          ))}
        </div>

        <div id="parts" className="mt-16 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 flex items-center gap-2"><Wrench size={24}/> Popular Parts</h3>
            <p className="text-slate-600 mt-2">Genuine components to keep your ride sharp and safe.</p>
          </div>
          <a href="#" className="text-sm text-rose-600 hover:text-rose-500">Browse catalog</a>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {parts.map((p, i) => (
            <Card key={i} title={p.name} subtitle={p.compat} price={p.price} pill={i===0? 'Bestseller': undefined} />
          ))}
        </div>

        <div className="mt-14 bg-rose-50 border border-rose-100 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <Star className="text-amber-500" size={22}/>
            <p className="text-slate-700 text-sm">Unique perk: Every purchase earns GaragePoints — redeem for free fittings, detailing, or extended warranties. Come back, level up your ride.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
