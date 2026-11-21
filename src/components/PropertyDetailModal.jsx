import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  Scale, 
  Share2, 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  Maximize2, 
  Building2, 
  Compass, 
  Car, 
  Home, 
  Calculator, 
  TrendingUp,
  Award,
  ChevronRight,
  Send
} from 'lucide-react';

export default function PropertyDetailModal({
  property,
  onClose,
  isFavorite,
  onToggleFavorite,
  isCompared,
  onToggleCompare
}) {
  const [activeImage, setActiveImage] = useState(property.images[0]);
  const [showPhone, setShowPhone] = useState(false);
  const [visitBooked, setVisitBooked] = useState(false);
  const [visitDate, setVisitDate] = useState('2026-11-25');
  const [visitTime, setVisitTime] = useState('11:00 AM');
  const [visitType, setVisitType] = useState('In-Person Tour');
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');

  // Interactive EMI Calculator State
  const defaultLoanAmount = Math.round(property.price * 0.8);
  const [loanAmount, setLoanAmount] = useState(defaultLoanAmount);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);

  // EMI Formula: [P x R x (1+R)^N]/[(1+R)^N-1]
  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = tenureYears * 12;
  const calculatedEmi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
  const totalPayment = calculatedEmi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const handleBookVisit = (e) => {
    e.preventDefault();
    setVisitBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      
      <div className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Sticky Top Header */}
        <div className="px-6 py-4 bg-white border-b border-slate-200 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-brand-50 text-brand-700 border border-brand-200">
              <ShieldCheck className="w-4 h-4 text-brand-600" />
              {property.reraId}
            </span>
            <span className="text-xs text-slate-600 font-semibold hidden md:inline">
              Listing ID: #{property.id}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleCompare(property)}
              className={`p-2.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-colors ${
                isCompared 
                  ? 'bg-brand-50 text-brand-700 border-brand-300' 
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span className="hidden sm:inline">{isCompared ? 'Comparing' : 'Compare'}</span>
            </button>

            <button
              onClick={() => onToggleFavorite(property)}
              className={`p-2.5 rounded-xl border transition-colors ${
                isFavorite 
                  ? 'bg-rose-50 text-rose-600 border-rose-200' 
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: property.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Listing link copied to clipboard!');
                }
              }}
              className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors"
              title="Share"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors ml-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Gallery Section */}
          <div className="space-y-3">
            <div className="aspect-[21/9] sm:aspect-[21/10] rounded-3xl overflow-hidden bg-slate-900 relative shadow-inner">
              <img 
                src={activeImage} 
                alt={property.title} 
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-black/60 text-white backdrop-blur-md">
                  {property.propertyType}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-brand-600/90 text-white backdrop-blur-md">
                  {property.possession}
                </span>
              </div>
            </div>

            {/* Thumbnails row */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                    activeImage === img ? 'border-brand-600 scale-102 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Two-Column Overview & Contact Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (8 cols): Property Details */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Title & Pricing Block */}
              <div className="border-b border-slate-100 pb-6">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {property.title}
                    </h2>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 mt-1">
                      <MapPin className="w-4 h-4 text-brand-600" />
                      <span>{property.address}</span>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="text-3xl font-black text-brand-700 tracking-tight">
                      {property.formattedPrice}
                    </div>
                    <div className="text-xs font-semibold text-slate-600">
                      ₹ {property.pricePerSqFt.toLocaleString('en-IN')}/sq.ft
                      {property.purpose === 'buy' && (
                        <span className="text-slate-600 ml-1">(Est. Registration ~ 6.5%)</span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-700 leading-relaxed font-medium">
                  {property.tagline}
                </p>
              </div>

              {/* Key Specifications Grid */}
              <div>
                <h3 className="text-base font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-600" />
                  Key Property Specifications
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <span className="text-xs font-bold text-slate-500 uppercase">Configuration</span>
                    <p className="text-sm font-extrabold text-slate-900 mt-0.5">
                      {property.bhk > 0 ? `${property.bhk} BHK` : property.propertyType}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <span className="text-xs font-bold text-slate-500 uppercase">Super Built-up</span>
                    <p className="text-sm font-extrabold text-slate-900 mt-0.5">
                      {property.areaSqFt.toLocaleString('en-IN')} sq.ft
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <span className="text-xs font-bold text-slate-500 uppercase">Carpet Area</span>
                    <p className="text-sm font-extrabold text-slate-900 mt-0.5">
                      {property.carpetAreaSqFt.toLocaleString('en-IN')} sq.ft
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <span className="text-xs font-bold text-slate-500 uppercase">Facing</span>
                    <p className="text-sm font-extrabold text-slate-900 mt-0.5">
                      {property.facing}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <span className="text-xs font-bold text-slate-500 uppercase">Floor Level</span>
                    <p className="text-sm font-extrabold text-slate-900 mt-0.5">
                      {property.floor > 0 ? `${property.floor} of ${property.totalFloors}` : 'Ground'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <span className="text-xs font-bold text-slate-500 uppercase">Furnishing</span>
                    <p className="text-sm font-extrabold text-slate-900 mt-0.5">
                      {property.furnishing}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <span className="text-xs font-bold text-slate-500 uppercase">Possession</span>
                    <p className="text-sm font-extrabold text-slate-900 mt-0.5">
                      {property.possession}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <span className="text-xs font-bold text-slate-500 uppercase">Ownership</span>
                    <p className="text-sm font-extrabold text-slate-900 mt-0.5">
                      Freehold Title
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2">About this Home & Architecture</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Amenities Grid */}
              <div>
                <h3 className="text-base font-extrabold text-slate-900 mb-3">Premium Amenities & Facilities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {property.amenities.map((amenity) => (
                    <div 
                      key={amenity}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive EMI Calculator Section */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-brand-50/70 via-emerald-50/40 to-slate-50 border border-brand-200/80 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-xs">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900">Interactive Home Loan EMI Estimator</h3>
                      <p className="text-xs text-slate-600">Simulate monthly installments based on prevailing bank interest rates</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Loan Amount */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                      <span>Loan Amount</span>
                      <span className="text-brand-700">₹ {(loanAmount / 100000).toFixed(1)} L</span>
                    </div>
                    <input
                      type="range"
                      min="1000000"
                      max={property.price}
                      step="500000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full accent-brand-600 cursor-pointer"
                    />
                  </div>

                  {/* Interest Rate */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                      <span>Interest Rate (p.a.)</span>
                      <span className="text-brand-700">{interestRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="7.5"
                      max="12.0"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full accent-brand-600 cursor-pointer"
                    />
                  </div>

                  {/* Tenure */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                      <span>Tenure (Years)</span>
                      <span className="text-brand-700">{tenureYears} Years</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="30"
                      step="1"
                      value={tenureYears}
                      onChange={(e) => setTenureYears(Number(e.target.value))}
                      className="w-full accent-brand-600 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Calculation Result Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-brand-200/60 bg-white/80 p-4 rounded-2xl">
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Monthly EMI</span>
                    <p className="text-xl font-black text-brand-700">
                      ₹ {calculatedEmi.toLocaleString('en-IN')} <span className="text-xs font-normal text-slate-600">/mo</span>
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Total Interest</span>
                    <p className="text-base font-bold text-slate-800">
                      ₹ {(totalInterest / 100000).toFixed(2)} Lakhs
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Total Repayment</span>
                    <p className="text-base font-bold text-slate-800">
                      ₹ {(totalPayment / 100000).toFixed(2)} Lakhs
                    </p>
                  </div>
                </div>
              </div>

              {/* Locality Insights & Scorecard */}
              <div className="space-y-4">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-600" />
                  Neighborhood & Commute Scores
                </h3>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/60 text-center">
                    <span className="text-xs font-bold text-emerald-800 uppercase">Transit Score</span>
                    <p className="text-2xl font-black text-emerald-700 mt-1">
                      {property.neighborhood.transitScore}<span className="text-xs font-medium text-emerald-600">/10</span>
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200/60 text-center">
                    <span className="text-xs font-bold text-blue-800 uppercase">Safety Rating</span>
                    <p className="text-2xl font-black text-blue-700 mt-1">
                      {property.neighborhood.safetyScore}<span className="text-xs font-medium text-blue-600">/10</span>
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-200/60 text-center">
                    <span className="text-xs font-bold text-purple-800 uppercase">Lifestyle & Malls</span>
                    <p className="text-2xl font-black text-purple-700 mt-1">
                      {property.neighborhood.lifestyleScore}<span className="text-xs font-medium text-purple-600">/10</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-500 uppercase">Nearby Key Landmarks</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {property.neighborhood.landmarks.map((landmark, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
                        <span className="font-semibold text-slate-800">{landmark.name}</span>
                        <span className="text-brand-700 font-extrabold">{landmark.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price Appreciation History */}
              <div className="space-y-3">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-brand-600" />
                  Historical Capital Appreciation (Past 5 Quarters)
                </h3>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-end justify-between gap-2 h-28 pt-4">
                    {property.priceHistory.map((item, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <span className="text-[10px] font-bold text-brand-700">₹{item.price}</span>
                        <div 
                          className="w-full bg-brand-500 hover:bg-brand-600 rounded-t-md transition-all"
                          style={{ height: `${(item.price / property.pricePerSqFt) * 75}%` }}
                        ></div>
                        <span className="text-[10px] font-semibold text-slate-600">{item.quarter}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (4 cols): Direct Contact / Schedule Visit Widget */}
            <div className="lg:col-span-4 sticky top-4 space-y-5">
              
              {/* Seller / Builder Profile Card */}
              <div className="p-5 rounded-3xl bg-slate-900 text-white shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-brand-400 bg-brand-950/80 px-2.5 py-1 rounded-full border border-brand-800">
                    {property.postedBy}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                    ★ {property.seller.rating} rating
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <img 
                    src={property.seller.avatar} 
                    alt={property.seller.name}
                    className="w-13 h-13 rounded-2xl object-cover border-2 border-brand-500/40"
                  />
                  <div>
                    <h4 className="font-extrabold text-base text-white">{property.seller.name}</h4>
                    <p className="text-xs text-slate-400">{property.seller.agency}</p>
                    <p className="text-[11px] text-emerald-400 font-medium mt-0.5">
                      ✓ {property.seller.dealsClosed} verified transactions closed
                    </p>
                  </div>
                </div>

                {/* Direct Phone / Contact Reveal */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  {showPhone ? (
                    <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-center">
                      <span className="text-xs text-slate-400">Direct Contact:</span>
                      <p className="text-base font-extrabold text-brand-400 mt-0.5">{property.seller.phone}</p>
                      <p className="text-[11px] text-slate-400">{property.seller.email}</p>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowPhone(true)}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-extrabold bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center gap-2 transition-colors border border-slate-700"
                    >
                      <Phone className="w-3.5 h-3.5 text-brand-400" />
                      <span>Reveal Direct Number</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Schedule Private VIP Visit Form */}
              <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-600" />
                  <h4 className="font-extrabold text-sm text-slate-900">Schedule a Site Visit</h4>
                </div>

                {visitBooked ? (
                  <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200 text-center space-y-2 animate-in zoom-in-95">
                    <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h5 className="font-extrabold text-sm text-brand-900">Site Visit Confirmed!</h5>
                    <p className="text-xs text-brand-800">
                      Our relationship manager will coordinate your private VIP pass for {visitDate} at {visitTime}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleBookVisit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setVisitType('In-Person Tour')}
                        className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                          visitType === 'In-Person Tour'
                            ? 'bg-brand-50 text-brand-700 border-brand-300'
                            : 'bg-slate-50 text-slate-600 border-slate-200'
                        }`}
                      >
                        In-Person Tour
                      </button>
                      <button
                        type="button"
                        onClick={() => setVisitType('Virtual 3D Call')}
                        className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                          visitType === 'Virtual 3D Call'
                            ? 'bg-brand-50 text-brand-700 border-brand-300'
                            : 'bg-slate-50 text-slate-600 border-slate-200'
                        }`}
                      >
                        Virtual 3D Call
                      </button>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Siddharth Sharma"
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-hidden font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Mobile Phone (for Gate Pass)</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={visitorPhone}
                        onChange={(e) => setVisitorPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 outline-hidden font-medium"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Preferred Date</label>
                        <input
                          type="date"
                          value={visitDate}
                          onChange={(e) => setVisitDate(e.target.value)}
                          className="w-full px-2.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white outline-hidden font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Time Slot</label>
                        <select
                          value={visitTime}
                          onChange={(e) => setVisitTime(e.target.value)}
                          className="w-full px-2 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white outline-hidden font-medium cursor-pointer"
                        >
                          <option>10:00 AM</option>
                          <option>11:30 AM</option>
                          <option>02:00 PM</option>
                          <option>04:30 PM</option>
                          <option>06:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl text-xs font-extrabold bg-brand-600 hover:bg-brand-700 text-white flex items-center justify-center gap-2 shadow-md shadow-brand-600/30 transition-all mt-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Confirm Site Visit Pass</span>
                    </button>
                  </form>
                )}

                <div className="pt-2 text-center">
                  <p className="text-[11px] text-slate-600 flex items-center justify-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                    Zero spam guaranteed. Encrypted contact token.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
