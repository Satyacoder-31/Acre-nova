import React from 'react';
import { X, Scale, Check, Trash2, ArrowRight } from 'lucide-react';

export default function ComparisonDrawer({
  comparedProperties,
  onRemoveCompare,
  onClearCompare,
  isOpen,
  onClose,
  onViewDetails
}) {
  if (comparedProperties.length === 0) return null;

  // If comparison drawer is NOT open in full view, show bottom sticky banner
  if (!isOpen) {
    return (
      <div className="fixed bottom-20 lg:bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-[92vw] sm:max-w-none bg-slate-900/95 text-white backdrop-blur-xl px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center justify-between sm:justify-start gap-3 sm:gap-4 animate-in slide-in-from-bottom-5">
        <div className="flex items-center gap-2">
          <Scale className="w-4 sm:w-5 h-4 sm:h-5 text-brand-400 shrink-0" />
          <span className="text-xs sm:text-sm font-extrabold whitespace-nowrap">
            Compare ({comparedProperties.length}/4)
          </span>
        </div>

        {/* Small thumbnail avatars */}
        <div className="hidden sm:flex items-center -space-x-2">
          {comparedProperties.map((p) => (
            <img 
              key={p.id} 
              src={p.images[0]} 
              alt={p.title} 
              className="w-7 sm:w-8 h-7 sm:h-8 rounded-full object-cover border-2 border-slate-900"
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="px-3 sm:px-3.5 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-extrabold flex items-center gap-1 shadow-md shadow-brand-600/30 transition-all whitespace-nowrap"
          >
            <span>Compare</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onClearCompare}
            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 transition-colors"
            title="Clear all"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Full Screen Side-by-Side Comparison Modal
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-md">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">Side-by-Side Property Comparison</h3>
              <p className="text-xs text-slate-600">Comparing {comparedProperties.length} handpicked real estate opportunities</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClearCompare}
              className="px-3 py-1.5 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors"
            >
              Clear Comparison
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto p-6">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left text-xs font-extrabold text-slate-400 uppercase tracking-wider w-48 bg-slate-50/70 rounded-l-2xl">
                  Metric
                </th>
                {comparedProperties.map((prop) => (
                  <th key={prop.id} className="p-4 text-left min-w-[240px] max-w-[280px]">
                    <div className="relative group">
                      <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 mb-3 relative">
                        <img src={prop.images[0]} alt={prop.title} className="w-full h-full object-cover" />
                        <button
                          onClick={() => onRemoveCompare(prop.id)}
                          className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white hover:bg-rose-600 transition-colors"
                          title="Remove from comparison"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <h4 className="text-sm font-extrabold text-slate-900 line-clamp-1">{prop.title}</h4>
                      <p className="text-xs text-slate-600">{prop.locality}, {prop.city}</p>
                      <div className="text-lg font-black text-brand-700 mt-1">{prop.formattedPrice}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              <tr>
                <td className="p-3.5 font-bold text-slate-600 bg-slate-50/50">Price / Sq.Ft</td>
                {comparedProperties.map((p) => (
                  <td key={p.id} className="p-3.5 font-bold text-slate-900">
                    ₹ {p.pricePerSqFt.toLocaleString('en-IN')}/sq.ft
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-600 bg-slate-50/50">Configuration</td>
                {comparedProperties.map((p) => (
                  <td key={p.id} className="p-3.5 font-bold text-slate-900">
                    {p.bhk > 0 ? `${p.bhk} BHK (${p.bathrooms} Baths)` : p.propertyType}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-600 bg-slate-50/50">Super Built-up Area</td>
                {comparedProperties.map((p) => (
                  <td key={p.id} className="p-3.5 font-bold text-slate-900">
                    {p.areaSqFt.toLocaleString('en-IN')} sq.ft
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-600 bg-slate-50/50">Carpet Area</td>
                {comparedProperties.map((p) => (
                  <td key={p.id} className="p-3.5 font-bold text-slate-900">
                    {p.carpetAreaSqFt.toLocaleString('en-IN')} sq.ft
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-600 bg-slate-50/50">Possession Status</td>
                {comparedProperties.map((p) => (
                  <td key={p.id} className="p-3.5 font-bold text-brand-700">
                    {p.possession}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-600 bg-slate-50/50">Furnishing</td>
                {comparedProperties.map((p) => (
                  <td key={p.id} className="p-3.5 font-bold text-slate-900">
                    {p.furnishing}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-600 bg-slate-50/50">Facing</td>
                {comparedProperties.map((p) => (
                  <td key={p.id} className="p-3.5 font-medium text-slate-700">
                    {p.facing}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-600 bg-slate-50/50">RERA Registration</td>
                {comparedProperties.map((p) => (
                  <td key={p.id} className="p-3.5 text-slate-600 font-mono text-[11px]">
                    {p.reraId}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-600 bg-slate-50/50">Zero Brokerage</td>
                {comparedProperties.map((p) => (
                  <td key={p.id} className="p-3.5">
                    {p.zeroBrokerage ? (
                      <span className="text-emerald-700 font-extrabold bg-emerald-50 px-2 py-0.5 rounded-md">Yes (Direct)</span>
                    ) : (
                      <span className="text-slate-500 font-medium">Standard Advisory</span>
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-600 bg-slate-50/50">Action</td>
                {comparedProperties.map((p) => (
                  <td key={p.id} className="p-3.5">
                    <button
                      onClick={() => {
                        onClose();
                        onViewDetails(p);
                      }}
                      className="w-full py-2 rounded-xl text-xs font-extrabold bg-slate-900 hover:bg-slate-800 text-white transition-colors"
                    >
                      View Full Details
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
