import React from 'react';
import { X, Heart, Trash2, MapPin, Eye, ArrowRight } from 'lucide-react';

export default function ShortlistDrawer({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onClearFavorites,
  onViewDetails
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white h-full shadow-2xl border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-200 shadow-xs">
              <Heart className="w-5 h-5 fill-rose-500" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900">Saved Properties</h3>
              <p className="text-xs text-slate-600">{favorites.length} properties shortlisted</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {favorites.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="text-base font-extrabold text-slate-800">Your Shortlist is Empty</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Click the heart icon on any property card to save it for easy review and side-by-side comparison.
              </p>
            </div>
          ) : (
            favorites.map((prop) => (
              <div 
                key={prop.id}
                className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex gap-3 group"
              >
                <img 
                  src={prop.images[0]} 
                  alt={prop.title} 
                  className="w-24 h-24 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-1 group-hover:text-brand-600">
                        {prop.title}
                      </h4>
                      <button
                        onClick={() => onRemoveFavorite(prop.id)}
                        className="text-slate-400 hover:text-rose-500 p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                      <MapPin className="w-3 h-3 text-brand-600 shrink-0" />
                      <span className="truncate">{prop.locality}, {prop.city}</span>
                    </div>

                    <div className="text-sm font-extrabold text-brand-700 mt-1">
                      {prop.formattedPrice}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px]">
                    <span className="text-slate-600 font-medium">
                      {prop.bhk > 0 ? `${prop.bhk} BHK` : prop.propertyType} • {prop.areaSqFt} sq.ft
                    </span>
                    <button
                      onClick={() => {
                        onClose();
                        onViewDetails(prop);
                      }}
                      className="font-bold text-brand-700 hover:text-brand-800 flex items-center gap-0.5"
                    >
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {favorites.length > 0 && (
          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
            <button
              onClick={onClearFavorites}
              className="text-xs font-bold text-rose-600 hover:text-rose-700"
            >
              Clear All ({favorites.length})
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-extrabold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              Back to Browse
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
