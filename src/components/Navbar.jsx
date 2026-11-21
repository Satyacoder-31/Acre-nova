import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  ChevronDown, 
  Headphones, 
  User, 
  Menu, 
  X, 
  PlusCircle, 
  Sparkles,
  TrendingUp,
  Calculator,
  Scale,
  Heart,
  Search,
  Compass
} from 'lucide-react';
import { CITIES } from '../data/mockData';

export default function Navbar({
  selectedCity,
  setSelectedCity,
  activeTab,
  setActiveTab,
  favoritesCount,
  onOpenFavorites,
  compareCount,
  onOpenCompare,
  onOpenPostProperty,
  onOpenValuation,
  onOpenLoanCalculator,
  onOpenAuth,
  user
}) {
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-slate-950 text-white border-b border-slate-800 shadow-lg">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Left: Brand Logo & Location Dropdown */}
            <div className="flex items-center gap-3 sm:gap-6">
              <button 
                onClick={() => { setActiveTab('all'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="flex items-center gap-2 group focus:outline-hidden"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-emerald-400 flex items-center justify-center text-white shadow-md">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-brand-400 transition-colors">
                  Acre<span className="text-brand-400">Nova</span>
                </span>
              </button>

              {/* City Dropdown Selector */}
              <div className="relative">
                <button
                  onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                  className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors py-1 px-2 rounded-lg hover:bg-slate-850"
                >
                  <MapPin className="w-3.5 h-3.5 text-brand-400 sm:hidden" />
                  <span className="truncate max-w-[85px] sm:max-w-none">{selectedCity ? selectedCity.name : 'All India'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${cityDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {cityDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in zoom-in-95">
                    <div className="px-3 py-1.5 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                      Select Your Region
                    </div>
                    <button
                      onClick={() => { setSelectedCity(null); setCityDropdownOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                        selectedCity === null ? 'bg-brand-50 text-brand-800 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>All India (National)</span>
                      {selectedCity === null && <span className="w-2 h-2 rounded-full bg-brand-600"></span>}
                    </button>
                    <div className="h-px bg-slate-100 my-1"></div>
                    {CITIES.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => { setSelectedCity(c); setCityDropdownOpen(false); }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                          selectedCity?.id === c.id ? 'bg-brand-50 text-brand-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div>
                          <span className="font-bold text-slate-900">{c.name}</span>
                          <span className="text-[11px] text-slate-600 ml-1">({c.state})</span>
                        </div>
                        <span className="text-[10px] text-emerald-600 font-extrabold">
                          {c.activeListings}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-slate-300">
              <button
                onClick={() => {
                  setActiveTab('buy');
                  const el = document.getElementById('browse');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors"
              >
                For Buyers
              </button>

              <button
                onClick={() => {
                  setActiveTab('rent');
                  const el = document.getElementById('browse');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors"
              >
                For Tenants
              </button>

              <button
                onClick={onOpenPostProperty}
                className="hover:text-white transition-colors"
              >
                For Owners
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors"
              >
                For Dealers / Builders
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('trends');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>Insights</span>
                <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.2 bg-rose-500 text-white rounded-md">
                  NEW
                </span>
              </button>

              {/* Post property FREE button */}
              <button
                onClick={onOpenPostProperty}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold transition-all shadow-md group"
              >
                <span>Post property</span>
                <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-600 text-white">
                  FREE
                </span>
              </button>

              {/* Support */}
              <button
                onClick={() => alert('AcreNova 24x7 Real Estate Support & Concierge: 1800-ACRENOVA (Toll Free)')}
                className="p-1.5 text-slate-300 hover:text-white transition-colors"
                title="Help & Concierge Support"
              >
                <Headphones className="w-4 h-4" />
              </button>

              {/* User Profile */}
              <button
                onClick={onOpenAuth}
                className="relative p-1.5 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                title="Account Profile"
              >
                <User className="w-4 h-4" />
                <span className="w-2 h-2 rounded-full bg-rose-500 absolute top-1 right-1"></span>
              </button>

              {/* Compare Counter */}
              {compareCount > 0 && (
                <button
                  onClick={onOpenCompare}
                  className="relative p-1.5 text-slate-300 hover:text-white"
                  title="Compare Properties"
                >
                  <Scale className="w-4 h-4" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-500 text-white text-[9px] font-black flex items-center justify-center">
                    {compareCount}
                  </span>
                </button>
              )}

              {/* Saved Favorites Counter */}
              {favoritesCount > 0 && (
                <button
                  onClick={onOpenFavorites}
                  className="relative p-1.5 text-slate-300 hover:text-rose-400"
                  title="Saved Shortlist"
                >
                  <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center">
                    {favoritesCount}
                  </span>
                </button>
              )}
            </div>

            {/* Mobile Header Right Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenPostProperty}
                className="text-[11px] font-black px-2.5 py-1.5 rounded-full bg-white text-slate-900 flex items-center gap-1 shadow-sm"
              >
                <span>Post</span>
                <span className="text-[8px] px-1 py-0.2 rounded-full bg-emerald-600 text-white font-extrabold">FREE</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-slate-300 hover:text-white rounded-lg focus:outline-hidden"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>

          {/* Mobile Full Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-800 py-4 space-y-3 animate-in slide-in-from-top-2">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => { setActiveTab('buy'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-xl text-left font-bold transition-colors ${activeTab === 'buy' ? 'bg-brand-600 text-white' : 'bg-slate-900 text-slate-200'}`}
                >
                  For Buyers
                </button>
                <button
                  onClick={() => { setActiveTab('rent'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-xl text-left font-bold transition-colors ${activeTab === 'rent' ? 'bg-brand-600 text-white' : 'bg-slate-900 text-slate-200'}`}
                >
                  For Tenants
                </button>
                <button
                  onClick={() => { onOpenPostProperty(); setMobileMenuOpen(false); }}
                  className="p-2.5 rounded-xl bg-slate-900 text-slate-200 text-left font-bold"
                >
                  For Owners
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                  className="p-2.5 rounded-xl bg-slate-900 text-slate-200 text-left font-bold"
                >
                  New Launches
                </button>
                <button
                  onClick={() => { onOpenValuation(); setMobileMenuOpen(false); }}
                  className="p-2.5 rounded-xl bg-slate-900 text-slate-200 text-left font-bold"
                >
                  Valuation AI
                </button>
                <button
                  onClick={() => { onOpenLoanCalculator(); setMobileMenuOpen(false); }}
                  className="p-2.5 rounded-xl bg-slate-900 text-slate-200 text-left font-bold"
                >
                  EMI Estimator
                </button>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <button
                  onClick={() => { onOpenFavorites(); setMobileMenuOpen(false); }}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-rose-400 py-1"
                >
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Saved Homes ({favoritesCount})</span>
                </button>
                <button
                  onClick={() => { onOpenCompare(); setMobileMenuOpen(false); }}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-brand-400 py-1"
                >
                  <Scale className="w-4 h-4 text-brand-400" />
                  <span>Compare ({compareCount})</span>
                </button>
              </div>

              <button
                onClick={() => { onOpenAuth(); setMobileMenuOpen(false); }}
                className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-white flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4 text-brand-400" />
                <span>{user ? user.name : 'Sign In to Your Account'}</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Sticky Bottom Navigation Bar (App Experience) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 py-2 px-3 flex items-center justify-around shadow-2xl">
        <button
          onClick={() => {
            setActiveTab('buy');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
            activeTab === 'buy' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Search className="w-4 h-4" />
          <span>Explore</span>
        </button>

        <button
          onClick={onOpenFavorites}
          className="relative flex flex-col items-center gap-0.5 text-[10px] font-bold text-slate-400 hover:text-rose-400"
        >
          <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
          <span>Saved</span>
          {favoritesCount > 0 && (
            <span className="absolute -top-1 right-2 w-3.5 h-3.5 rounded-full bg-rose-500 text-white text-[8px] font-black flex items-center justify-center">
              {favoritesCount}
            </span>
          )}
        </button>

        <button
          onClick={onOpenPostProperty}
          className="flex flex-col items-center -mt-5 bg-gradient-to-tr from-emerald-600 to-teal-500 text-white p-2.5 rounded-full shadow-lg border-2 border-slate-950 active:scale-95 transition-transform"
        >
          <PlusCircle className="w-5 h-5" />
          <span className="text-[8px] font-black uppercase mt-0.5">Post Free</span>
        </button>

        <button
          onClick={onOpenCompare}
          className="relative flex flex-col items-center gap-0.5 text-[10px] font-bold text-slate-400 hover:text-white"
        >
          <Scale className="w-4 h-4" />
          <span>Compare</span>
          {compareCount > 0 && (
            <span className="absolute -top-1 right-2 w-3.5 h-3.5 rounded-full bg-brand-500 text-white text-[8px] font-black flex items-center justify-center">
              {compareCount}
            </span>
          )}
        </button>

        <button
          onClick={onOpenAuth}
          className="flex flex-col items-center gap-0.5 text-[10px] font-bold text-slate-400 hover:text-white"
        >
          <User className="w-4 h-4" />
          <span>{user ? user.name.split(' ')[0] : 'Profile'}</span>
        </button>
      </nav>
    </>
  );
}
