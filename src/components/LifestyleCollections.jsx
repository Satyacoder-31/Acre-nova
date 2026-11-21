import React from 'react';
import { Compass, ArrowRight, Sparkles } from 'lucide-react';
import { LIFESTYLE_COLLECTIONS } from '../data/mockData';
import ScrollReveal from './ScrollReveal';

export default function LifestyleCollections({ onSelectCollection }) {
  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-black uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              <span>Curated by Living Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Explore by Architectural Lifestyle
            </h2>
            <p className="text-sm text-slate-600">
              Whether you yearn for fairways, ocean sunsets, high-rise penthouses, or corporate commercial assets.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LIFESTYLE_COLLECTIONS.map((col, idx) => (
            <ScrollReveal key={col.id} animation="fade-up" delay={idx * 120}>
              <div 
                onClick={() => onSelectCollection(col.title)}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent group-hover:via-slate-950/60 transition-all" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/20 text-white backdrop-blur-md border border-white/20">
                    {col.tag}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] font-bold text-brand-300 tracking-wide uppercase">
                    {col.propertiesCount}
                  </span>
                  <h3 className="text-xl font-black text-white mt-1 group-hover:text-brand-300 transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                    {col.description}
                  </p>
                  
                  <div className="flex items-center gap-1 text-xs font-black text-brand-300 mt-3 group-hover:translate-x-1 transition-transform">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
