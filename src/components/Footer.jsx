import React from 'react';
import { Building2, ShieldCheck, Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenValuation, onOpenLoanCalculator, onOpenPostProperty }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-emerald-400 flex items-center justify-center text-white shadow-md">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Acre<span className="text-brand-500">Nova</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              India’s next-generation real estate marketplace engineered for high-intent buyers, verified owners, and certified developers. 100% RERA compliant with verified pricing transparency.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-500" />
                <span>RERA Compliant</span>
              </div>
              <span>•</span>
              <div>Zero Spam Guarantee</div>
            </div>
          </div>

          {/* Column 2: Popular Cities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Top Metropolitan Cities</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#browse" className="hover:text-brand-400 transition-colors">Bengaluru Properties</a></li>
              <li><a href="#browse" className="hover:text-brand-400 transition-colors">Mumbai Real Estate</a></li>
              <li><a href="#browse" className="hover:text-brand-400 transition-colors">Gurgaon / DLF Phase</a></li>
              <li><a href="#browse" className="hover:text-brand-400 transition-colors">Hyderabad IT Corridor</a></li>
              <li><a href="#browse" className="hover:text-brand-400 transition-colors">Pune Residences</a></li>
              <li><a href="#browse" className="hover:text-brand-400 transition-colors">Goa Luxury Estates</a></li>
            </ul>
          </div>

          {/* Column 3: Property Types */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Browse Collections</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#browse" className="hover:text-brand-400 transition-colors">Sky Villa Penthouses</a></li>
              <li><a href="#browse" className="hover:text-brand-400 transition-colors">Gated Community Villas</a></li>
              <li><a href="#browse" className="hover:text-brand-400 transition-colors">Zero Brokerage Rentals</a></li>
              <li><a href="#browse" className="hover:text-brand-400 transition-colors">Grade-A Commercial Offices</a></li>
              <li><a href="#browse" className="hover:text-brand-400 transition-colors">Ready to Move 3 BHKs</a></li>
              <li><a href="#browse" className="hover:text-brand-400 transition-colors">Residential Villa Plots</a></li>
            </ul>
          </div>

          {/* Column 4: Proprietary PropTech Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Calculators & Services</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenValuation} className="hover:text-brand-400 transition-colors text-left">
                  Property Valuation AI
                </button>
              </li>
              <li>
                <button onClick={onOpenLoanCalculator} className="hover:text-brand-400 transition-colors text-left">
                  Home Loan EMI Estimator
                </button>
              </li>
              <li>
                <button onClick={onOpenPostProperty} className="text-brand-400 font-bold hover:underline text-left">
                  Post Free Property Ad
                </button>
              </li>
              <li><a href="#trends" className="hover:text-brand-400 transition-colors">Locality Price Trends</a></li>
              <li><a href="#browse" className="hover:text-brand-400 transition-colors">RERA Verification Guide</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} AcreNova Technologies Pvt. Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">RERA Disclaimers</span>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
