import React from 'react';
import { MapPin, ArrowUpRight, Building, Sparkles } from 'lucide-react';
import { CITIES } from '../data/mockData';
import ScrollReveal from './ScrollReveal';

export default function CityExplorerSection({ onSelectCity }) {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-black uppercase tracking-wider mb-2">
                <Building className="w-3.5 h-3.5 text-brand-600" />
                <span>Metropolitan Footprint</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Explore India's High-Growth Metros
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                Browse verified properties across premier IT hubs, business districts, and vacation destinations.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CITIES.map((city, idx) => (
            <ScrollReveal key={city.id} animation="fade-up" delay={idx * 100}>
              <div
                onClick={() => onSelectCity(city)}
                className="group p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-brand-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-200/80">
                      {city.state}
                    </span>
                    <span className="flex items-center gap-0.5 text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      {city.avgGrowth} YoY
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-brand-600 transition-colors">
                    {city.name}
                  </h3>

                  <p className="text-xs font-bold text-slate-500 mt-1">
                    {city.activeListings.toLocaleString('en-IN')} Active Verified Homes
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-2">
                      Key Micro-Markets
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {city.popularLocalities.slice(0, 4).map((loc) => (
                        <span
                          key={loc}
                          className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 group-hover:bg-brand-50 group-hover:text-brand-800 transition-colors"
                        >
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-black text-brand-700 group-hover:text-brand-800">
                  <span>View Properties in {city.name}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
