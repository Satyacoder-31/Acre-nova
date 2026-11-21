import React, { useState } from 'react';
import { 
  X, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  ShieldCheck, 
  IndianRupee,
  Home,
  Check
} from 'lucide-react';
import { CITIES, PROPERTY_TYPES, AMENITIES_LIST } from '../data/mockData';
import confetti from 'canvas-confetti';

export default function PostPropertyModal({ onClose, onPropertyCreated }) {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    postedBy: 'Verified Owner',
    purpose: 'buy',
    propertyType: 'Apartment / Flat',
    title: '',
    tagline: '',
    city: 'Bengaluru',
    locality: '',
    address: '',
    pincode: '',
    bhk: 3,
    bathrooms: 3,
    balconies: 2,
    areaSqFt: 1850,
    carpetAreaSqFt: 1520,
    floor: 7,
    totalFloors: 14,
    furnishing: 'Semi-Furnished',
    facing: 'East (Vastu Compliant)',
    price: 18500000,
    priceNegotiable: true,
    possession: 'Ready to Move',
    possessionDate: 'Immediate',
    reraId: 'PRM/KA/RERA/1251/PENDING',
    amenities: ['24x7 Multi-Tier Security', '100% Power Backup', 'Covered Stilt Parking', 'Fitness Center & Spa'],
    sellerName: 'Karan Varma',
    sellerPhone: '+91 98450 12345',
    sellerEmail: 'karan.varma@gmail.com',
    imagePreset: 'modern-apartment'
  });

  const sampleImages = {
    'modern-apartment': [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
    ],
    'luxury-villa': [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    'penthouse': [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    'commercial': [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ]
  };

  const handleToggleAmenity = (label) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(label)
        ? prev.amenities.filter(a => a !== label)
        : [...prev.amenities, label]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedPricePerSqFt = Math.round(formData.price / formData.areaSqFt);
    
    let formatted = '';
    if (formData.purpose === 'rent') {
      formatted = `₹ ${formData.price.toLocaleString('en-IN')} / mo`;
    } else if (formData.price >= 10000000) {
      formatted = `₹ ${(formData.price / 10000000).toFixed(2)} Cr`;
    } else {
      formatted = `₹ ${(formData.price / 100000).toFixed(2)} Lakhs`;
    }

    const newProperty = {
      id: `prop-${Date.now().toString().slice(-4)}`,
      title: formData.title || `${formData.bhk} BHK Luxury Residence in ${formData.locality || formData.city}`,
      tagline: formData.tagline || 'Recently verified listing with premium fittings and direct owner connection',
      purpose: formData.purpose,
      propertyType: formData.propertyType,
      bhk: Number(formData.bhk),
      bathrooms: Number(formData.bathrooms),
      balconies: Number(formData.balconies),
      price: Number(formData.price),
      formattedPrice: formatted,
      pricePerSqFt: calculatedPricePerSqFt,
      areaSqFt: Number(formData.areaSqFt),
      carpetAreaSqFt: Number(formData.carpetAreaSqFt),
      city: formData.city,
      locality: formData.locality || 'Prime Sector',
      address: formData.address || `${formData.locality}, ${formData.city}`,
      pincode: formData.pincode || '560001',
      possession: formData.possession,
      possessionDate: formData.possessionDate,
      floor: Number(formData.floor),
      totalFloors: Number(formData.totalFloors),
      furnishing: formData.furnishing,
      facing: formData.facing,
      postedBy: formData.postedBy,
      seller: {
        name: formData.sellerName,
        agency: formData.postedBy === 'Verified Owner' ? 'Direct Owner Listing' : 'AcreNova Certified Partner',
        phone: formData.sellerPhone,
        email: formData.sellerEmail,
        rating: 5.0,
        dealsClosed: 1,
        verified: true,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
      },
      reraId: formData.reraId,
      verified: true,
      featured: true,
      zeroBrokerage: formData.postedBy === 'Verified Owner',
      images: sampleImages[formData.imagePreset] || sampleImages['modern-apartment'],
      floorPlan: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
      description: `Newly published verified property listed in ${formData.locality}, ${formData.city}. Features ${formData.bhk} BHK layout, ${formData.furnishing} interior specifications, high-grade fittings, and round-the-clock amenities.`,
      amenities: formData.amenities,
      neighborhood: {
        transitScore: 9.2,
        safetyScore: 9.5,
        lifestyleScore: 9.4,
        landmarks: [
          { name: 'City Center Metro', distance: '1.0 km' },
          { name: 'Commercial High Street', distance: '1.5 km' },
          { name: 'Multispecialty Hospital', distance: '2.5 km' }
        ]
      },
      priceHistory: [
        { quarter: 'Q3 2025', price: Math.round(calculatedPricePerSqFt * 0.92) },
        { quarter: 'Q4 2025', price: Math.round(calculatedPricePerSqFt * 0.96) },
        { quarter: 'Q1 2026', price: calculatedPricePerSqFt }
      ]
    };

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }

    setSuccess(true);
    onPropertyCreated(newProperty);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-md shadow-brand-600/30">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">Post Free Property Ad</h3>
              <p className="text-xs text-slate-600">Sell or rent your real estate to verified genuine buyers with 0% brokerage</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard Stepper Bar */}
        {!success && (
          <div className="px-6 py-3 bg-white border-b border-slate-100 flex items-center justify-between text-xs font-bold">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-brand-700' : 'text-slate-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-600'}`}>1</span>
              <span>Intent</span>
            </div>
            <div className="w-8 h-0.5 bg-slate-200"></div>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-brand-700' : 'text-slate-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-600'}`}>2</span>
              <span>Location</span>
            </div>
            <div className="w-8 h-0.5 bg-slate-200"></div>
            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-brand-700' : 'text-slate-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-600'}`}>3</span>
              <span>Specs</span>
            </div>
            <div className="w-8 h-0.5 bg-slate-200"></div>
            <div className={`flex items-center gap-2 ${step >= 4 ? 'text-brand-700' : 'text-slate-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 4 ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-600'}`}>4</span>
              <span>Pricing</span>
            </div>
          </div>
        )}

        {/* Wizard Body */}
        <div className="p-6 sm:p-8">
          {success ? (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900">Your Property is Live on AcreNova!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                We have verified and indexed your listing across our metropolitan network. Genuine prospective buyers and tenants can now view specs and request VIP visits.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl text-sm font-extrabold bg-brand-600 text-white shadow-lg shadow-brand-600/30 hover:bg-brand-700 transition-all"
                >
                  View Active Listings
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: Basic Intent */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-2">You are posting as</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['Verified Owner', 'Certified Agent', 'Reputed Builder'].map((role) => (
                        <button
                          key={role}
                          type="button"
                          onClick={() => setFormData({ ...formData, postedBy: role })}
                          className={`p-3 rounded-2xl text-xs font-bold border transition-all text-center ${
                            formData.postedBy === role
                              ? 'bg-brand-50 text-brand-700 border-brand-400 shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Purpose</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'buy', label: 'Sell Property' },
                        { id: 'rent', label: 'Rent Out' },
                        { id: 'commercial', label: 'Commercial Lease' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, purpose: item.id })}
                          className={`p-3 rounded-2xl text-xs font-bold border transition-all text-center ${
                            formData.purpose === item.id
                              ? 'bg-brand-50 text-brand-700 border-brand-400 shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Property Type</label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 outline-hidden"
                    >
                      {PROPERTY_TYPES.filter(t => t !== 'All Types').map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Property Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. The Sovereign Horizon — Luxury Sky Penthouse"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 outline-hidden focus:bg-white focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Catchy Tagline / Key Highlight</label>
                    <input
                      type="text"
                      placeholder="e.g. Panoramic sea view, double-height living, 2 covered EV car parks"
                      value={formData.tagline}
                      onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 outline-hidden focus:bg-white focus:border-brand-500"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Location */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">City</label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 outline-hidden"
                      >
                        {CITIES.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Locality / Sector</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Whitefield, Indiranagar, Worli"
                        value={formData.locality}
                        onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 outline-hidden focus:bg-white focus:border-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Building / Society / Project Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Miraya Meadows, Tower 3"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 outline-hidden focus:bg-white focus:border-brand-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Pincode</label>
                      <input
                        type="text"
                        placeholder="e.g. 560066"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 outline-hidden focus:bg-white focus:border-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">RERA Registration ID</label>
                      <input
                        type="text"
                        placeholder="e.g. PRM/KA/RERA/1251/..."
                        value={formData.reraId}
                        onChange={(e) => setFormData({ ...formData, reraId: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 outline-hidden focus:bg-white focus:border-brand-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Specs */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Bedrooms (BHK)</label>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        value={formData.bhk}
                        onChange={(e) => setFormData({ ...formData, bhk: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Bathrooms</label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={formData.bathrooms}
                        onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Balconies</label>
                      <input
                        type="number"
                        min="0"
                        max="6"
                        value={formData.balconies}
                        onChange={(e) => setFormData({ ...formData, balconies: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Super Built-up Area (sq.ft)</label>
                      <input
                        type="number"
                        value={formData.areaSqFt}
                        onChange={(e) => setFormData({ ...formData, areaSqFt: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Carpet Area (sq.ft)</label>
                      <input
                        type="number"
                        value={formData.carpetAreaSqFt}
                        onChange={(e) => setFormData({ ...formData, carpetAreaSqFt: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Floor</label>
                      <input
                        type="number"
                        value={formData.floor}
                        onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Total Floors</label>
                      <input
                        type="number"
                        value={formData.totalFloors}
                        onChange={(e) => setFormData({ ...formData, totalFloors: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Furnishing</label>
                      <select
                        value={formData.furnishing}
                        onChange={(e) => setFormData({ ...formData, furnishing: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 outline-hidden"
                      >
                        <option>Fully Furnished</option>
                        <option>Semi-Furnished</option>
                        <option>Unfurnished</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Pricing & Final submission */}
              {step === 4 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                      {formData.purpose === 'rent' ? 'Expected Monthly Rent (₹)' : 'Expected Total Price (₹)'}
                    </label>
                    <div className="relative">
                      <IndianRupee className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="number"
                        required
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-base font-extrabold text-slate-900 outline-hidden"
                      />
                    </div>
                    <p className="text-xs text-brand-700 font-bold mt-1">
                      {formData.purpose === 'rent'
                        ? `₹ ${Number(formData.price).toLocaleString('en-IN')} / month`
                        : formData.price >= 10000000 
                          ? `₹ ${(formData.price / 10000000).toFixed(2)} Crores`
                          : `₹ ${(formData.price / 100000).toFixed(2)} Lakhs`}
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Select Amenities Included</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {AMENITIES_LIST.slice(0, 9).map((a) => (
                        <button
                          key={a.id}
                          type="button"
                          onClick={() => handleToggleAmenity(a.label)}
                          className={`p-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 text-left transition-all ${
                            formData.amenities.includes(a.label)
                              ? 'bg-brand-50 text-brand-800 border-brand-300 font-bold'
                              : 'bg-slate-50 text-slate-600 border-slate-200'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-md flex items-center justify-center ${formData.amenities.includes(a.label) ? 'bg-brand-600 text-white' : 'bg-slate-200'}`}>
                            {formData.amenities.includes(a.label) && <Check className="w-3 h-3" />}
                          </div>
                          <span className="truncate">{a.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.sellerName}
                        onChange={(e) => setFormData({ ...formData, sellerName: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Your Mobile Phone</label>
                      <input
                        type="tel"
                        required
                        value={formData.sellerPhone}
                        onChange={(e) => setFormData({ ...formData, sellerPhone: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-brand-50 border border-brand-200 flex items-center gap-2 text-xs text-brand-900 font-medium">
                    <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Free listing includes verified badge, zero brokerage tag, and instant syndication.</span>
                  </div>
                </div>
              )}

              {/* Navigation Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2.5 rounded-xl text-xs font-extrabold text-slate-700 bg-slate-100 hover:bg-slate-200 flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : <div></div>}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-slate-900 hover:bg-slate-800 flex items-center gap-1.5 transition-colors shadow-md"
                  >
                    <span>Next: {step === 1 ? 'Location' : step === 2 ? 'Specs' : 'Pricing'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl text-xs font-extrabold text-white bg-brand-600 hover:bg-brand-700 flex items-center gap-2 shadow-lg shadow-brand-600/30 transition-all transform hover:-translate-y-0.5"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Publish Listing for Free</span>
                  </button>
                )}
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
