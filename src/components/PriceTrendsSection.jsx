import React, { useState } from 'react';
import { TrendingUp, ArrowUpRight, MapPin, Building, Sparkles } from 'lucide-react';

export default function PriceTrendsSection({ onSelectCityLocality }) {
  const [activeCityTab, setActiveCityTab] = useState('Bengaluru');

  const marketData = {
    'Bengaluru': [
      { locality: 'Whitefield', avgPrice: 11400, yoyGrowth: '+12.4%', rentalYield: '4.8%', status: 'High Demand' },
      { locality: 'Indiranagar', avgPrice: 22800, yoyGrowth: '+9.8%', rentalYield: '3.9%', status: 'Ultra Prime' },
      { locality: 'Sarjapur Road', avgPrice: 9400, yoyGrowth: '+14.1%', rentalYield: '5.2%', status: 'Fast Appreciating' },
      { locality: 'Hebbal', avgPrice: 13200, yoyGrowth: '+11.0%', rentalYield: '4.4%', status: 'Airport Corridor' },
    ],
    'Mumbai': [
      { locality: 'Worli', avgPrice: 42500, yoyGrowth: '+8.5%', rentalYield: '3.1%', status: 'Ultra Luxury' },
      { locality: 'Bandra West', avgPrice: 48000, yoyGrowth: '+7.8%', rentalYield: '3.3%', status: 'Trophy Asset' },
      { locality: 'Andheri West', avgPrice: 24500, yoyGrowth: '+10.2%', rentalYield: '4.1%', status: 'Metro Hub' },
      { locality: 'Powai', avgPrice: 22000, yoyGrowth: '+9.4%', rentalYield: '4.3%', status: 'Tech Hub' },
    ],
    'Gurgaon / NCR': [
      { locality: 'DLF Phase 5', avgPrice: 24500, yoyGrowth: '+15.2%', rentalYield: '4.0%', status: 'Golf Course Belt' },
      { locality: 'Golf Course Extn', avgPrice: 16800, yoyGrowth: '+18.4%', rentalYield: '4.5%', status: 'Booming' },
      { locality: 'Sohna Road', avgPrice: 9200, yoyGrowth: '+12.1%', rentalYield: '4.7%', status: 'High Growth' },
      { locality: 'Sector 65', avgPrice: 18200, yoyGrowth: '+16.5%', rentalYield: '4.2%', status: 'Top Rated' },
    ],
    'Hyderabad': [
      { locality: 'Hitec City', avgPrice: 12500, yoyGrowth: '+14.8%', rentalYield: '5.4%', status: 'IT Corridor' },
      { locality: 'Jubilee Hills', avgPrice: 26000, yoyGrowth: '+8.9%', rentalYield: '3.5%', status: 'Bespoke Villas' },
      { locality: 'Gachibowli', avgPrice: 10800, yoyGrowth: '+13.5%', rentalYield: '5.1%', status: 'High Rental Yield' },
      { locality: 'Kondapur', avgPrice: 9600, yoyGrowth: '+12.7%', rentalYield: '5.0%', status: 'High Demand' },
    ]
  };

  const cities = ['Bengaluru', 'Mumbai', 'Gurgaon / NCR', 'Hyderabad'];

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-950 border border-brand-800 text-brand-400 text-xs font-bold uppercase tracking-wider mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Real Estate Intelligence Index</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              City Micro-Market Price Trends
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Track weighted capital appreciation, average rate per sq.ft, and gross rental yield before you purchase or invest.
            </p>
          </div>

          {/* City Tabs */}
          <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-2xl border border-slate-700">
            {cities.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCityTab(c)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCityTab === c 
                    ? 'bg-brand-600 text-white shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {c.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Micro Market Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {marketData[activeCityTab].map((item, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-3xl bg-slate-800/60 border border-slate-700/80 hover:border-brand-500/60 transition-all hover:bg-slate-800 group"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="text-[11px] font-bold text-brand-400 bg-brand-950 px-2 py-0.5 rounded-md border border-brand-800">
                  {item.status}
                </span>
                <span className="flex items-center gap-0.5 text-emerald-400 font-extrabold text-xs">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  {item.yoyGrowth} YoY
                </span>
              </div>

              <h4 className="text-lg font-black text-white group-hover:text-brand-400 transition-colors">
                {item.locality}
              </h4>
              <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-slate-500" />
                {activeCityTab}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-700/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Avg Price</span>
                  <span className="text-base font-extrabold text-white">
                    ₹ {item.avgPrice.toLocaleString('en-IN')}<span className="text-xs text-slate-400 font-normal">/sq.ft</span>
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Rental Yield</span>
                  <span className="text-sm font-extrabold text-emerald-400">
                    {item.rentalYield}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
