import React from 'react';
import { Globe2, ShieldCheck, FileCheck, Landmark, Key, PhoneCall, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function NRIServicesSection() {
  const services = [
    {
      icon: Landmark,
      title: 'FEMA & Banking Compliance',
      description: 'Streamlined NRE / NRO banking advisory, repatriation clearance, and RBI inward remittance compliance.'
    },
    {
      icon: FileCheck,
      title: 'Legal Title & Due Diligence',
      description: 'Independent legal counsel vetting Encumbrance Certificates (EC), sanctioned layouts, and developer escrow.'
    },
    {
      icon: Key,
      title: 'Remote Power of Attorney (PoA)',
      description: 'Registered consulate PoA drafting and seamless local representation for deed registrations.'
    },
    {
      icon: Globe2,
      title: '360° Tenant & Asset Management',
      description: 'Complete remote tenancy management: verified tenant onboarding, rent collection, and maintenance.'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-950 border border-brand-800 text-brand-400 text-xs font-black uppercase tracking-wider mb-2">
                <Globe2 className="w-3.5 h-3.5" />
                <span>Global Indian Investors</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Dedicated NRI Real Estate Advisory
              </h2>
              <p className="text-sm text-slate-400 mt-1 max-w-xl">
                Serving expatriates across USA, UAE, UK, Singapore & Canada with end-to-end transparent real estate acquisitions and portfolio management.
              </p>
            </div>

            <button
              onClick={() => alert('NRI Advisory Desk connected. A dedicated relationship manager will reach out via WhatsApp/Email.')}
              className="px-5 py-3 rounded-2xl text-xs font-black bg-brand-600 hover:bg-brand-700 text-white flex items-center gap-2 shadow-xl shadow-brand-600/30 transition-all self-start lg:self-auto"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Connect with NRI Specialist</span>
            </button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 120}>
                <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-brand-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-950 border border-brand-800/80 flex items-center justify-center text-brand-400 mb-4 shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-white">{srv.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mt-2">
                      {srv.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-800 flex items-center gap-1 text-xs font-bold text-brand-400">
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
