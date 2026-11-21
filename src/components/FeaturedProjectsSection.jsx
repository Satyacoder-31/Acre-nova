import React from 'react';
import { Sparkles, Calendar, MapPin, Building, ShieldCheck, ArrowRight, Download } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/mockData';
import ScrollReveal from './ScrollReveal';

export default function FeaturedProjectsSection({ onInquireProject }) {
  return (
    <section id="projects" className="py-16 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-black uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                <span>Pre-Launch & Mega Townships</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Featured Flagship Projects
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                Explore handpicked RERA-approved masterplanned communities from India’s top tier-1 developers with early-stage investor pricing.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                100% Escrow Account Regulated
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project, idx) => (
            <ScrollReveal key={project.id} animation="fade-up" delay={idx * 150}>
              <div className="group bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden">
                
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/30 pointer-events-none" />

                  {/* Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-brand-600 text-white shadow-md">
                    {project.badge}
                  </span>

                  {/* RERA pill */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 text-slate-200 backdrop-blur-md">
                    RERA: {project.rera}
                  </span>

                  {/* Starting Price Overlay */}
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-[10px] font-bold text-slate-300 uppercase block">Starting from</span>
                    <span className="text-xl font-black">{project.startingPrice}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-1">
                      <span className="text-brand-700 font-extrabold">{project.developer}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        Possession: {project.possession}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-slate-900 group-hover:text-brand-600 transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-xs text-slate-600 flex items-center gap-1 mt-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                      <span>{project.location}</span>
                    </p>

                    <div className="text-xs font-bold text-slate-800 mt-2 bg-slate-50 p-2 rounded-xl">
                      {project.bhk}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1 mt-3">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => alert(`Brochure and sanctioned floor plans for ${project.name} sent to your registered email.`)}
                      className="flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-slate-500" />
                      <span>Brochure</span>
                    </button>

                    <button
                      onClick={() => alert(`VIP Site Visit booked for ${project.name}. Our developer relationship head will call you shortly.`)}
                      className="flex-1 py-2 px-3 rounded-xl text-xs font-black bg-brand-600 hover:bg-brand-700 text-white flex items-center justify-center gap-1 transition-all shadow-md shadow-brand-600/20"
                    >
                      <span>Express Interest</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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
