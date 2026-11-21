import React, { useState } from 'react';
import { X, Calculator, IndianRupee, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function LoanEligibilityModal({ onClose }) {
  const [monthlySalary, setMonthlySalary] = useState(250000); // 2.5 Lakhs
  const [existingEmi, setExistingEmi] = useState(20000);
  const [tenureYears, setTenureYears] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);

  // Financial institutions usually allow max 50% FOIR (Fixed Obligation to Income Ratio)
  const maxAllowableEmi = Math.max(0, (monthlySalary * 0.50) - existingEmi);

  // Present Value (PV) of annuity formula to get principal loan amount
  const r = interestRate / (12 * 100);
  const n = tenureYears * 12;
  const eligibleLoan = Math.round(
    maxAllowableEmi * ((1 - Math.pow(1 + r, -n)) / r)
  );

  // Assuming 20% down payment from savings, maximum property purchasing budget
  const maxPropertyBudget = Math.round(eligibleLoan / 0.8);

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
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">Home Loan Eligibility Calculator</h3>
              <p className="text-xs text-slate-600">Calculate how much top Indian banks (HDFC, SBI, ICICI) will lend you</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                <span>Net Monthly Take-Home Income</span>
                <span className="text-emerald-700 text-sm font-extrabold">₹ {monthlySalary.toLocaleString('en-IN')} / mo</span>
              </div>
              <input
                type="range"
                min="50000"
                max="2000000"
                step="25000"
                value={monthlySalary}
                onChange={(e) => setMonthlySalary(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                <span>Existing Monthly EMI Obligations</span>
                <span className="text-slate-700 text-sm font-extrabold">₹ {existingEmi.toLocaleString('en-IN')} / mo</span>
              </div>
              <input
                type="range"
                min="0"
                max="500000"
                step="5000"
                value={existingEmi}
                onChange={(e) => setExistingEmi(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Loan Tenure</label>
                <select
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 outline-hidden"
                >
                  <option value={10}>10 Years</option>
                  <option value={15}>15 Years</option>
                  <option value={20}>20 Years (Standard)</option>
                  <option value={25}>25 Years</option>
                  <option value={30}>30 Years</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Interest Rate (p.a.)</label>
                <select
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 outline-hidden"
                >
                  <option value={8.35}>8.35% (SBI Repo Linked)</option>
                  <option value={8.50}>8.50% (HDFC Standard)</option>
                  <option value={8.75}>8.75% (ICICI Bank)</option>
                  <option value={9.25}>9.25% (Private NBFC)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Eligibility Results */}
          <div className="p-6 rounded-3xl bg-emerald-50/80 border border-emerald-200 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white shadow-xs border border-emerald-200/60">
                <span className="text-[11px] font-bold text-slate-500 uppercase">Max Eligible Loan Amount</span>
                <p className="text-3xl font-black text-emerald-700 mt-1">
                  {formatLakhsCrores(eligibleLoan)}
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  Permitted monthly EMI: ₹ {Math.round(maxAllowableEmi).toLocaleString('en-IN')}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white shadow-xs border border-emerald-200/60">
                <span className="text-[11px] font-bold text-slate-500 uppercase">Affordable Property Budget</span>
                <p className="text-3xl font-black text-slate-900 mt-1">
                  {formatLakhsCrores(maxPropertyBudget)}
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  With 20% down payment ({formatLakhsCrores(maxPropertyBudget - eligibleLoan)})
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-emerald-900 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Calculated under RBI banking guidelines with 50% fixed obligation ceiling.</span>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-xs font-extrabold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              Done
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
