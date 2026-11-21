import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  MapPin, 
  ChevronDown, 
  Crosshair, 
  Mic, 
  ChevronLeft, 
  ChevronRight, 
  QrCode, 
  ShieldCheck, 
  Sparkles, 
  Building2 
} from 'lucide-react';

export default function HeroSearch({
  searchQuery,
  setSearchQuery,
  searchPurpose,
  setSearchPurpose,
  selectedType,
  setSelectedType,
  onExecuteSearch,
  onOpenPostProperty,
  onOpenValuation
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [propertyCategory, setPropertyCategory] = useState('Residential');
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const quickOptionsRef = useRef(null);

  // Full-bleed sliding billboard data
  const billboardSlides = [
    {
      id: 1,
      developer: 'OBEROI REALTY PRESENTS',
      residenceType: '4 & 5 BHK',
      residenceSub: 'SKY MANSIONS',
      price: '₹ 9.50 Cr* Onwards',
      projectTitle: 'Sky Forest Horizon',
      projectSub: 'BY OBEROI REALTY • WORLI SEA FACE, MUMBAI',
      tagline: 'PANORAMIC ARABIAN OCEAN HORIZONS',
      subtagline: 'PRIVATE PLUNGE POOL & KEYCARD ELEVATOR LOBBIES',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85',
      reraNo: 'P51900035021 (MahaRERA)',
      bankInfo: 'Standard Chartered Bank BKC Branch Mumbai IFSC: SCBL0036001',
      badge: 'Worli Sea Face'
    },
    {
      id: 2,
      developer: 'HERO HOMES PRESENTS',
      residenceType: '3 BHK',
      residenceSub: 'PREMIUM RESIDENCES',
      price: '₹ 1.93 Cr* Onwards',
      projectTitle: 'Leafsong Retreat',
      projectSub: 'BY HERO HOMES • SECTOR MU, GREATER NOIDA',
      tagline: 'LIFE AT EASE',
      subtagline: 'BREATHE BETTER WITH AQI-CONTROLLED HOMES',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85',
      reraNo: 'UPRERAPRJ414014/10/2026',
      bankInfo: 'HDFC Bank Sector 132 Noida Branch IFSC: HDFC0004393',
      badge: 'Greater Noida'
    },
    {
      id: 3,
      developer: 'DLF ULTRA LUXURY PRESENTS',
      residenceType: '4 BHK',
      residenceSub: 'GOLF COURSE ESTATES',
      price: '₹ 7.20 Cr* Onwards',
      projectTitle: 'The Arbour Sovereign',
      projectSub: 'BY DLF HOME DEVELOPERS • DLF PHASE 5, GURUGRAM',
      tagline: 'FRONT-ROW FAIRWAYS LIVING',
      subtagline: 'LOW DENSITY DOUBLE-GLAZED SCHUCO HOMES',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=85',
      reraNo: 'RC/REP/HARERA/GGM/684/416',
      bankInfo: 'ICICI Bank Golf Course Road Branch Gurugram IFSC: ICIC0001248',
      badge: 'Golf Drive'
    },
    {
      id: 4,
      developer: 'GODREJ PROPERTIES PRESENTS',
      residenceType: '3 & 4 BHK',
      residenceSub: 'SMART ECO HOMES',
      price: '₹ 2.45 Cr* Onwards',
      projectTitle: 'Miraya Sky Residences',
      projectSub: 'BY GODREJ • ITPL MAIN ROAD, WHITEFIELD, BENGALURU',
      tagline: 'LIVING AMIDST 85% GREEN CANOPY',
      subtagline: '200 METERS FROM PURPLE LINE METRO & IT PARKS',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=85',
      reraNo: 'PRM/KA/RERA/1251/446/PR/200811',
      bankInfo: 'State Bank of India ITPL Whitefield Branch IFSC: SBIN0004120',
      badge: 'Whitefield'
    }
  ];

  // Auto sliding carousel timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % billboardSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, billboardSlides.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % billboardSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? billboardSlides.length - 1 : prev - 1));
  };

  const activeSlide = billboardSlides[currentSlide];

  // Search Tabs (matching 99acres reference)
  const searchTabs = [
    { id: 'buy', label: 'Buy' },
    { id: 'rent', label: 'Rent' },
    { id: 'new_launch', label: 'New Launch', hasDot: true },
    { id: 'commercial', label: 'Commercial' },
    { id: 'plot', label: 'Plots/Land' },
    { id: 'projects', label: 'Projects' },
    { id: 'post_property', label: 'Post Property', isPost: true }
  ];

  // Quick Exploring Options (Cards below search bar)
  const quickOptions = [
    {
      id: 'buying',
      title: 'Buying a home',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
      action: () => {
        setSearchPurpose('buy');
        const el = document.getElementById('browse');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'renting',
      title: 'Renting a home',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80',
      action: () => {
        setSearchPurpose('rent');
        const el = document.getElementById('browse');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'investing',
      title: 'Invest in Real Estate',
      isNew: true,
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=400&q=80',
      action: onOpenValuation
    },
    {
      id: 'selling',
      title: 'Sell/Rent your property',
      subtitle: 'Sell faster at the right price!',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
      action: onOpenPostProperty
    },
    {
      id: 'plots',
      title: 'Plots/Land',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80',
      action: () => {
        setSearchPurpose('plot');
        const el = document.getElementById('browse');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'insights',
      title: 'Explore Insights',
      isNew: true,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80',
      action: () => {
        const el = document.getElementById('trends');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'commercial',
      title: 'Commercial Spaces',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
      action: () => {
        setSearchPurpose('commercial');
        const el = document.getElementById('browse');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'coliving',
      title: 'PG & Co-Living',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',
      action: () => {
        setSearchPurpose('rent');
        setSearchQuery('Studio');
        const el = document.getElementById('browse');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  ];

  const handleTabClick = (tabId) => {
    if (tabId === 'post_property') {
      onOpenPostProperty();
    } else if (tabId === 'new_launch' || tabId === 'projects') {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSearchPurpose(tabId);
    }
  };

  const handleNearMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setSearchQuery('Bengaluru Central');
        },
        () => {
          setSearchQuery('Bengaluru');
        }
      );
    } else {
      setSearchQuery('Bengaluru');
    }
  };

  const handleVoiceSearch = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      setSearchQuery('3 BHK Apartment in Whitefield');
      onExecuteSearch();
    }, 1800);
  };

  const scrollQuickOptions = (direction) => {
    if (quickOptionsRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      quickOptionsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-white">
      
      {/* 1. NICELY ARRANGED FULL-BLEED SLIDING HERO SECTION */}
      <div 
        className="relative w-full overflow-hidden bg-slate-950 text-white min-h-[440px] sm:min-h-[480px] md:min-h-[500px] pt-8 sm:pt-10 pb-28 flex flex-col justify-between"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Full-Bleed Background Images with Smooth Crossfade */}
        {billboardSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 z-0'
                : 'opacity-0 pointer-events-none -z-10'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.projectTitle}
              className="w-full h-full object-cover object-center filter brightness-[0.75] transform scale-100 hover:scale-102 transition-transform duration-7000 ease-out"
            />
            {/* Elegant Vignette Shading for Maximum Text Clarity */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/40 to-slate-950/95" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/50" />
          </div>
        ))}

        {/* Top Floating Controls / Slide Counter (positioned cleanly away from text) */}
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 sm:px-16 flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[11px] font-bold text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Featured Showcase</span>
          </div>

          {/* Clean Indicator Dots at the top right (no overlap with bottom text) */}
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
            {billboardSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide 
                    ? 'w-6 h-2 bg-brand-400 shadow-md shadow-brand-400/50' 
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
                title={`Showcase ${idx + 1}`}
              />
            ))}
            <span className="text-[10px] font-bold text-slate-300 ml-1">
              0{currentSlide + 1} / 0{billboardSlides.length}
            </span>
          </div>
        </div>

        {/* Nicely Arranged 2-Column Hero Content Overlay with Generous Gutters */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-16 sm:px-20 md:px-24 my-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (Offer, BHK, Starting Price) with Ample Breathing Space */}
            <div className="md:col-span-5 text-left space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-500/20 backdrop-blur-md border border-brand-400/40 text-xs font-black tracking-widest text-brand-300 uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                <span>{activeSlide.developer}</span>
              </div>

              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-md leading-none">
                {activeSlide.residenceType}
              </div>

              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-200 drop-shadow-sm">
                {activeSlide.residenceSub}
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-300 block uppercase tracking-wider">
                  STARTING PRICE AS
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white drop-shadow-md">
                  {activeSlide.price}
                </span>
              </div>
            </div>

            {/* Right Column (Project Identity, Taglines, QR Box & RERA) */}
            <div className="md:col-span-7 text-left space-y-3.5 md:pl-6">
              
              {/* Project Title Header */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-brand-500/30 backdrop-blur-md border border-brand-400/50 flex items-center justify-center text-brand-300 font-bold text-sm shadow-md shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight drop-shadow-md">
                    {activeSlide.projectTitle}
                  </h3>
                  <p className="text-[11px] font-bold text-slate-300 uppercase tracking-widest drop-shadow-sm">
                    {activeSlide.projectSub}
                  </p>
                </div>
              </div>

              {/* Taglines */}
              <div className="space-y-1">
                <div className="text-lg sm:text-xl lg:text-2xl font-black text-white tracking-wide drop-shadow-md leading-snug">
                  {activeSlide.tagline}
                </div>
                <div className="text-xs sm:text-sm font-bold text-emerald-300 tracking-wider drop-shadow-sm">
                  {activeSlide.subtagline}
                </div>
              </div>

              {/* QR Code & Official RERA Credentials Container */}
              <div className="flex items-center gap-4 pt-1.5">
                <div className="w-14 h-14 bg-white p-1 rounded-xl shrink-0 shadow-xl flex items-center justify-center border border-white/20">
                  <QrCode className="w-12 h-12 text-slate-900" />
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-200 leading-snug space-y-0.5 font-mono drop-shadow-sm">
                  <p className="font-bold text-white">RERA Reg. No: {activeSlide.reraNo}</p>
                  <p className="truncate max-w-[340px] text-slate-300">Account: 999907771405 | Bank: {activeSlide.bankInfo}</p>
                  <p className="text-[9px] text-slate-400">Scan QR for sanctioned layout, approved deed & digital brochure</p>
                </div>
              </div>

              {/* Regulatory Disclaimer */}
              <p className="text-[8px] sm:text-[9px] text-slate-400 leading-tight pt-1 hidden sm:block">
                *Disclaimer: Visuals represent architectural impressions. Prices and terms subject to developer confirmation.
              </p>
            </div>

          </div>

        </div>

        {/* Dedicated Pinned Carousel Navigation Arrows (Clear outside margin, never touching text) */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-slate-900 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-30"
          title="Previous Showcase"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-slate-900 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-30"
          title="Next Showcase"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

      </div>

      {/* 2. FLOATING OVERLAPPING SEARCH CARD (EXACT 99ACRES PATTERN) */}
      <div className="max-w-4xl mx-auto px-4 -mt-14 relative z-30">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
          
          {/* Top Category Tabs Row */}
          <div className="flex items-center justify-between border-b border-slate-200 px-4 sm:px-6 pt-3 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-6 sm:gap-8">
              {searchTabs.map((tab) => {
                if (tab.isPost) return null;
                const isActive = searchPurpose === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`relative pb-3 text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-1 ${
                      isActive 
                        ? 'text-slate-900 font-black' 
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {tab.hasDot && (
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                    )}
                    {/* Active Underline Indicator */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-600 rounded-t-md"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Post Property FREE tab (Far Right) */}
            <button
              onClick={onOpenPostProperty}
              className="pb-3 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Post Property</span>
              <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.2 rounded-md bg-emerald-600 text-white">
                FREE
              </span>
            </button>
          </div>

          {/* Bottom Search Bar Row */}
          <div className="p-3 sm:p-4 flex flex-col sm:flex-row items-center gap-3">
            
            {/* Property Category Dropdown: "Residential ▾" */}
            <div className="relative w-full sm:w-auto shrink-0">
              <button
                type="button"
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className="w-full sm:w-auto flex items-center justify-between gap-2 px-3 py-2.5 text-xs sm:text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <span>{propertyCategory}</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${categoryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {categoryDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-40">
                  {['Residential', 'Commercial', 'Plots / Land', 'Co-Living / PG'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setPropertyCategory(cat);
                        setCategoryDropdownOpen(false);
                      }}
                      className="w-full text-left px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Vertical Divider (Desktop) */}
            <div className="hidden sm:block w-px h-7 bg-slate-200"></div>

            {/* Central Search Input Box */}
            <div className="relative flex-1 w-full flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onExecuteSearch();
                }}
                placeholder='Search "3 BHK for sale in Mumbai"'
                className="w-full pl-9 pr-20 py-2.5 text-xs sm:text-sm text-slate-900 font-medium placeholder-slate-400 bg-transparent outline-hidden"
              />

              {/* Near Me & Voice Icons (Right aligned inside input) */}
              <div className="absolute right-2 flex items-center gap-1.5">
                <button
                  onClick={handleNearMe}
                  className="p-1.5 text-brand-600 hover:text-brand-700 hover:bg-brand-50 rounded-full transition-colors"
                  title="Detect Near Me (GPS)"
                >
                  <Crosshair className="w-4 h-4" />
                </button>

                <button
                  onClick={handleVoiceSearch}
                  className={`p-1.5 rounded-full transition-colors ${
                    isListening 
                      ? 'bg-rose-50 text-rose-600 animate-pulse' 
                      : 'text-brand-600 hover:text-brand-700 hover:bg-brand-50'
                  }`}
                  title="Voice Search"
                >
                  <Mic className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Primary Action Button: "Search" */}
            <button
              onClick={onExecuteSearch}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-black text-xs sm:text-sm shadow-md transition-all shrink-0 active:scale-95"
            >
              Search
            </button>

          </div>

        </div>
      </div>

      {/* 3. "GET STARTED WITH EXPLORING REAL ESTATE OPTIONS" */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
        <div className="text-center mb-6">
          <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-500">
            GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
          </h2>
        </div>

        {/* Carousel Container with Left / Right Navigation */}
        <div className="relative group">
          
          <button
            onClick={() => scrollQuickOptions('left')}
            className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 flex items-center justify-center shadow-lg z-20 transition-all opacity-80 hover:opacity-100"
            title="Scroll Left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div 
            ref={quickOptionsRef}
            className="flex items-stretch gap-4 overflow-x-auto no-scrollbar py-2 px-1 scroll-smooth"
          >
            {quickOptions.map((opt) => (
              <div
                key={opt.id}
                onClick={opt.action}
                className="shrink-0 w-36 sm:w-44 flex flex-col items-center cursor-pointer group/card text-center"
              >
                {/* Thumbnail Box */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs group-hover/card:shadow-md transition-all">
                  <img
                    src={opt.image}
                    alt={opt.title}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                  />
                  {opt.isNew && (
                    <span className="absolute top-2 left-2 px-1.5 py-0.2 rounded-md bg-rose-500 text-white text-[8px] font-black uppercase tracking-wider shadow-xs">
                      NEW
                    </span>
                  )}
                  {opt.subtitle && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-2 text-center">
                      <span className="text-[10px] font-extrabold text-white leading-tight drop-shadow-md">
                        {opt.subtitle}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Title Label below */}
                <span className="mt-2.5 text-xs font-bold text-slate-800 group-hover/card:text-brand-600 transition-colors">
                  {opt.title}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollQuickOptions('right')}
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 flex items-center justify-center shadow-lg z-20 transition-all opacity-80 hover:opacity-100"
            title="Scroll Right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>
      </div>

    </div>
  );
}
