import React, { useState } from 'react';
import { X, TrendingUp, Sparkles, Building, MapPin, Calculator, ShieldCheck } from 'lucide-react';
import { CITIES, PROPERTY_TYPES } from '../data/mockData';

export default function ValuationToolModal({ onClose }) {
  const [city, setCity] = useState('Bengaluru');
  const [locality, setLocality] = useState('Whitefield');
  const [propertyType, setPropertyType] = useState('Apartment / Flat');
  const [areaSqFt, setAreaSqFt] = useState(1800);
  const [propertyAge, setPropertyAge] = useState('0-2 Years (New)');

  // Baseline price estimates per sq ft for top cities
  const cityRates = {
    'Bengaluru': { base: 9800, yield: 4.8 },
    'Mumbai': { base: 28500, yield: 3.4 },
    'Gurgaon / NCR': { base: 14500, yield: 4.2 },
    'Hyderabad': { base: 9200, yield: 5.1 },
    'Pune': { base: 8400, yield: 4.6 },
    'Goa': { base: 13500, yield: 6.2 },
  };

  const currentRate = cityRates[city] || { base: 10000, yield: 4.5 };
  const estimatedTotal = Math.round(areaSqFt * currentRate.base);
  const minValuation = Math.round(estimatedTotal * 0.94);
  const maxValuation = Math.round(estimatedTotal * 1.08);
  const estimatedMonthlyRent = Math.round((estimatedTotal * (currentRate.yield / 100)) / 12);
  const projected3YearValue = Math.round(estimatedTotal * 1.28);

  const formatLakhsCrores = (val) => {
    if (val >= 10000000) {
      return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹ ${(val / 100000).toFixed(2)} Lakhs`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-md">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">AcreNova Property Valuation & Yield AI</h3>
              <p className="text-xs text-slate-600">Institutional-grade property pricing and rental yield estimator</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">City</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 outline-hidden"
              >
                {CITIES.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Locality</label>
              <input
                type="text"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                placeholder="e.g. Indiranagar / Bandra"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 outline-hidden focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Property Type</label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 outline-hidden"
              >
                {PROPERTY_TYPES.filter(t => t !== 'All Types').map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Property Age</label>
              <select
                value={propertyAge}
                onChange={(e) => setPropertyAge(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 outline-hidden"
              >
                <option>0-2 Years (Brand New / Ready)</option>
                <option>2-5 Years (Recent)</option>
                <option>5-10 Years (Well Maintained)</option>
                <option>10+ Years (Established)</option>
              </select>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
              <span>Super Built-up Area</span>
              <span className="text-brand-700 text-sm">{areaSqFt.toLocaleString('en-IN')} sq.ft</span>
            </div>
            <input
              type="range"
              min="500"
              max="8000"
              step="50"
              value={areaSqFt}
              onChange={(e) => setAreaSqFt(Number(e.target.value))}
              className="w-full accent-brand-600 cursor-pointer"
            />
          </div>

          {/* Valuation Output Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-brand-50 via-emerald-50/50 to-slate-50 border border-brand-200 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span className="text-xs font-extrabold text-brand-900 uppercase tracking-wider">
                Fair Market Intelligence for {locality}, {city}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white shadow-xs border border-brand-200/60">
                <span className="text-[11px] font-bold text-slate-500 uppercase">Estimated Valuation Range</span>
                <p className="text-2xl font-black text-brand-700 mt-1">
                  {formatLakhsCrores(minValuation)} — {formatLakhsCrores(maxValuation)}
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  Average rate: ₹ {currentRate.base.toLocaleString('en-IN')}/sq.ft
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white shadow-xs border border-brand-200/60">
                <span className="text-[11px] font-bold text-slate-500 uppercase">Monthly Rental Yield</span>
                <p className="text-2xl font-black text-emerald-700 mt-1">
                  ₹ {estimatedMonthlyRent.toLocaleString('en-IN')} <span className="text-xs font-normal text-slate-600">/mo</span>
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  Gross Yield: ~{currentRate.yield}% p.a.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-semibold text-slate-700 border-t border-brand-200/60">
              <span>Projected 3-Year Value (at ~8.5% YoY):</span>
              <span className="font-extrabold text-brand-900">{formatLakhsCrores(projected3YearValue)}</span>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-xs font-extrabold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
