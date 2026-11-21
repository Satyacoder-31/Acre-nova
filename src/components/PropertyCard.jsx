import React, { useState } from 'react';
import { 
  Heart, 
  MapPin, 
  BedDouble, 
  Bath, 
  Maximize2, 
  ShieldCheck, 
  Check, 
  PhoneCall, 
  Scale, 
  ChevronLeft, 
  ChevronRight,
  Eye,
  Star,
  Sparkles
} from 'lucide-react';

export default function PropertyCard({
  property,
  isFavorite,
  onToggleFavorite,
  isCompared,
  onToggleCompare,
  onViewDetails,
  onContactSeller
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-slate-900/8 hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Property Image Showcase */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img 
          src={property.images[activeImageIndex] || property.images[0]} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient Overlay for badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center z-10">
          {property.verified && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-brand-600/90 text-white backdrop-blur-md shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              RERA Verified
            </span>
          )}
          {property.zeroBrokerage && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-emerald-500/95 text-white backdrop-blur-md shadow-xs">
              Zero Brokerage
            </span>
          )}
          {property.featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-amber-500/95 text-white backdrop-blur-md shadow-xs">
              <Sparkles className="w-3 h-3" />
              Featured
            </span>
          )}
        </div>

        {/* Top Right Action Buttons: Favorite & Compare */}
        <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
          {/* Compare Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleCompare(property);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all shadow-md ${
              isCompared 
                ? 'bg-brand-600 text-white ring-2 ring-white' 
                : 'bg-white/80 hover:bg-white text-slate-700'
            }`}
            title={isCompared ? 'Remove from compare' : 'Add to compare'}
          >
            <Scale className="w-4 h-4" />
          </button>

          {/* Shortlist Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(property);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all shadow-md ${
              isFavorite 
                ? 'bg-rose-500 text-white ring-2 ring-white' 
                : 'bg-white/80 hover:bg-white text-slate-700 hover:text-rose-600'
            }`}
            title={isFavorite ? 'Remove from shortlist' : 'Add to shortlist'}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Photo Navigation Arrows */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Bottom Price on Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white z-10">
          <div>
            <div className="text-xl sm:text-2xl font-black tracking-tight drop-shadow-md">
              {property.formattedPrice}
            </div>
            <p className="text-[11px] font-semibold text-slate-200">
              ₹ {property.pricePerSqFt.toLocaleString('en-IN')}/sq.ft
            </p>
          </div>
          <span className="text-[11px] font-medium bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-md">
            {activeImageIndex + 1}/{property.images.length}
          </span>
        </div>
      </div>

      {/* Card Details Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Locality & Type Row */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
            <div className="flex items-center gap-1 text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-brand-600" />
              <span className="truncate">{property.locality}, {property.city}</span>
            </div>
            <span className="text-brand-700 font-bold bg-brand-50 px-2 py-0.5 rounded-md border border-brand-200/60">
              {property.propertyType}
            </span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onViewDetails(property)}
            className="text-base font-extrabold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-1 cursor-pointer"
          >
            {property.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-1 mt-1">
            {property.tagline}
          </p>

          {/* Key Specs Pills Grid */}
          <div className="grid grid-cols-3 gap-2 my-4 py-3 border-y border-slate-100">
            {property.bhk > 0 && (
              <div className="flex items-center gap-1.5 text-xs text-slate-700">
                <BedDouble className="w-4 h-4 text-brand-600 shrink-0" />
                <span className="font-bold">{property.bhk} BHK</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex items-center gap-1.5 text-xs text-slate-700">
                <Bath className="w-4 h-4 text-brand-600 shrink-0" />
                <span className="font-bold">{property.bathrooms} Baths</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 text-xs text-slate-700">
              <Maximize2 className="w-4 h-4 text-brand-600 shrink-0" />
              <span className="font-bold">{property.areaSqFt.toLocaleString('en-IN')} sq.ft</span>
            </div>
          </div>

          {/* Possession & Furnishing mini meta */}
          <div className="flex items-center justify-between text-[11px] text-slate-600 mb-4">
            <span className="font-medium">
              Status: <strong className="text-slate-800">{property.possession}</strong>
            </span>
            <span className="font-medium">
              Furnishing: <strong className="text-slate-800">{property.furnishing}</strong>
            </span>
          </div>
        </div>

        {/* Seller Info & Card Action Buttons */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          {/* Seller / Builder Identity */}
          <div className="flex items-center gap-2 min-w-0">
            <img 
              src={property.seller.avatar} 
              alt={property.seller.name} 
              className="w-8 h-8 rounded-full object-cover border border-slate-200"
            />
            <div className="min-w-0">
              <p className="text-xs font-bold text-slate-900 truncate">
                {property.seller.name}
              </p>
              <div className="flex items-center gap-1 text-[10px] text-slate-600">
                <span>{property.postedBy}</span>
                <span>•</span>
                <span className="flex items-center text-amber-600 font-bold">
                  ★ {property.seller.rating}
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onContactSeller(property)}
              className="p-2 sm:px-2.5 sm:py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center gap-1 transition-colors"
              title="Contact Seller"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-600" />
              <span className="hidden sm:inline">Connect</span>
            </button>

            <button
              onClick={() => onViewDetails(property)}
              className="px-3 py-2 rounded-xl text-xs font-extrabold bg-brand-600 hover:bg-brand-700 text-white flex items-center gap-1 shadow-md shadow-brand-600/20 transition-all"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
