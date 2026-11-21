import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSearch from './components/HeroSearch';
import PropertyCard from './components/PropertyCard';
import PropertyDetailModal from './components/PropertyDetailModal';
import PostPropertyModal from './components/PostPropertyModal';
import ComparisonDrawer from './components/ComparisonDrawer';
import ValuationToolModal from './components/ValuationToolModal';
import LoanEligibilityModal from './components/LoanEligibilityModal';
import ShortlistDrawer from './components/ShortlistDrawer';
import AuthModal from './components/AuthModal';
import PriceTrendsSection from './components/PriceTrendsSection';
import FeaturedProjectsSection from './components/FeaturedProjectsSection';
import LifestyleCollections from './components/LifestyleCollections';
import CityExplorerSection from './components/CityExplorerSection';
import NRIServicesSection from './components/NRIServicesSection';
import ArticlesSection from './components/ArticlesSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

import { 
  INITIAL_PROPERTIES, 
  CITIES, 
  PROPERTY_TYPES, 
  AMENITIES_LIST,
  TESTIMONIALS 
} from './data/mockData';

import { 
  SlidersHorizontal, 
  X, 
  RotateCcw, 
  Grid, 
  List, 
  Map as MapIcon, 
  ShieldCheck, 
  Sparkles, 
  ArrowUpDown, 
  TrendingUp,
  Building2,
  CheckCircle2,
  Quote,
  Search,
  MapPin
} from 'lucide-react';

export default function App() {
  // Master Property List (persists posted items in memory)
  const [properties, setProperties] = useState(INITIAL_PROPERTIES);

  // Search & Filter State
  const [selectedCity, setSelectedCity] = useState(null);
  const [activeTab, setActiveTab] = useState('buy');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedBhk, setSelectedBhk] = useState('All');
  const [maxPrice, setMaxPrice] = useState(350000000);
  const [minPrice, setMinPrice] = useState(0);
  const [possessionFilter, setPossessionFilter] = useState('All');
  const [furnishingFilter, setFurnishingFilter] = useState('All');
  const [postedByFilter, setPostedByFilter] = useState('All');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [zeroBrokerageOnly, setZeroBrokerageOnly] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list' | 'map'

  // User & Interactive Modals State
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('acrenova_favs');
      return saved ? JSON.parse(saved) : ['prop-101', 'prop-102'];
    } catch {
      return ['prop-101', 'prop-102'];
    }
  });

  const [comparedProperties, setComparedProperties] = useState([]);
  const [detailProperty, setDetailProperty] = useState(null);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isValuationModalOpen, setIsValuationModalOpen] = useState(false);
  const [isLoanModalOpen, setIsLoanModalOpen] = useState(false);
  const [isFavoritesDrawerOpen, setIsFavoritesDrawerOpen] = useState(false);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Sync favorites with local storage
  useEffect(() => {
    try {
      localStorage.setItem('acrenova_favs', JSON.stringify(favorites));
    } catch {
      // ignore
    }
  }, [favorites]);

  // Toggle Favorite
  const handleToggleFavorite = (property) => {
    setFavorites(prev => 
      prev.includes(property.id)
        ? prev.filter(id => id !== property.id)
        : [...prev, property.id]
    );
  };

  // Toggle Compare
  const handleToggleCompare = (property) => {
    setComparedProperties(prev => {
      const exists = prev.find(p => p.id === property.id);
      if (exists) {
        return prev.filter(p => p.id !== property.id);
      }
      if (prev.length >= 4) {
        alert('You can compare a maximum of 4 properties side-by-side.');
        return prev;
      }
      return [...prev, property];
    });
  };

  // Filtered Properties Computation
  const filteredProperties = useMemo(() => {
    return properties.filter(prop => {
      // Tab Purpose Filter (buy / rent / commercial / plot)
      if (activeTab !== 'all') {
        if (activeTab === 'plot') {
          if (prop.propertyType !== 'Plot / Land') return false;
        } else if (prop.purpose !== activeTab) {
          return false;
        }
      }

      // City Filter
      if (selectedCity) {
        if (!prop.city.toLowerCase().includes(selectedCity.name.toLowerCase().split(' ')[0])) {
          return false;
        }
      }

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesLocality = prop.locality.toLowerCase().includes(query);
        const matchesCity = prop.city.toLowerCase().includes(query);
        const matchesTitle = prop.title.toLowerCase().includes(query);
        const matchesAddress = prop.address.toLowerCase().includes(query);
        const matchesTagline = prop.tagline.toLowerCase().includes(query);
        if (!matchesLocality && !matchesCity && !matchesTitle && !matchesAddress && !matchesTagline) {
          return false;
        }
      }

      // Property Type
      if (selectedType !== 'All Types' && prop.propertyType !== selectedType) {
        return false;
      }

      // BHK Filter
      if (selectedBhk !== 'All') {
        if (selectedBhk === '4+') {
          if (prop.bhk < 4) return false;
        } else if (prop.bhk !== Number(selectedBhk)) {
          return false;
        }
      }

      // Budget Range
      if (prop.price > maxPrice) return false;
      if (minPrice > 0 && prop.price < minPrice) return false;

      // Possession Filter
      if (possessionFilter !== 'All') {
        if (!prop.possession.toLowerCase().includes(possessionFilter.toLowerCase())) {
          return false;
        }
      }

      // Furnishing Filter
      if (furnishingFilter !== 'All' && prop.furnishing !== furnishingFilter) {
        return false;
      }

      // Posted By Filter
      if (postedByFilter !== 'All') {
        if (!prop.postedBy.toLowerCase().includes(postedByFilter.toLowerCase())) {
          return false;
        }
      }

      // Verified Only
      if (verifiedOnly && !prop.verified) return false;

      // Zero Brokerage Only
      if (zeroBrokerageOnly && !prop.zeroBrokerage) return false;

      // Amenities filter
      if (selectedAmenities.length > 0) {
        const hasAll = selectedAmenities.every(a => prop.amenities.includes(a));
        if (!hasAll) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'area-high') return b.areaSqFt - a.areaSqFt;
      if (sortBy === 'rating') return b.seller.rating - a.seller.rating;
      return 0; // relevance
    });
  }, [
    properties,
    activeTab,
    selectedCity,
    searchQuery,
    selectedType,
    selectedBhk,
    maxPrice,
    minPrice,
    possessionFilter,
    furnishingFilter,
    postedByFilter,
    verifiedOnly,
    zeroBrokerageOnly,
    selectedAmenities,
    sortBy
  ]);

  const favoriteObjects = useMemo(() => {
    return properties.filter(p => favorites.includes(p.id));
  }, [properties, favorites]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedType('All Types');
    setSelectedBhk('All');
    setMaxPrice(350000000);
    setMinPrice(0);
    setPossessionFilter('All');
    setFurnishingFilter('All');
    setPostedByFilter('All');
    setVerifiedOnly(false);
    setZeroBrokerageOnly(false);
    setSelectedAmenities([]);
    setSortBy('relevance');
  };

  const hasActiveFilters = searchQuery || selectedType !== 'All Types' || selectedBhk !== 'All' || maxPrice < 350000000 || possessionFilter !== 'All' || furnishingFilter !== 'All' || verifiedOnly || zeroBrokerageOnly || selectedAmenities.length > 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      
      {/* Enhanced Top Navbar with live ticker & rich interactions */}
      <Navbar
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesDrawerOpen(true)}
        compareCount={comparedProperties.length}
        onOpenCompare={() => setIsCompareModalOpen(true)}
        onOpenPostProperty={() => setIsPostModalOpen(true)}
        onOpenValuation={() => setIsValuationModalOpen(true)}
        onOpenLoanCalculator={() => setIsLoanModalOpen(true)}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        user={user}
      />

      {/* Hero Section matching 99acres reference structure */}
      <HeroSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchPurpose={activeTab}
        setSearchPurpose={setActiveTab}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedBhk={selectedBhk}
        setSelectedBhk={setSelectedBhk}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        onExecuteSearch={() => {
          const el = document.getElementById('browse');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        totalMatchingCount={filteredProperties.length}
        onOpenPostProperty={() => setIsPostModalOpen(true)}
        onOpenValuation={() => setIsValuationModalOpen(true)}
      />

      {/* Main Browse & Listings Explorer Area */}
      <main id="browse" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* SERP Controls & Counter Header with Scroll Animation */}
        <ScrollReveal animation="fade-down">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {selectedCity ? `${selectedCity.name} Real Estate` : 'All Verified Real Estate'}
                </h2>
                <span className="text-xs font-black px-2.5 py-1 rounded-full bg-brand-100 text-brand-800">
                  {filteredProperties.length} Properties
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Showing verified listings for {activeTab.toUpperCase()} across top localities
              </p>
            </div>

            {/* Right Controls: Sort & View Toggle */}
            <div className="flex items-center gap-3">
              {/* Sort Dropdown */}
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-2xl border border-slate-200 shadow-xs">
                <ArrowUpDown className="w-4 h-4 text-slate-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs font-bold text-slate-700 bg-transparent outline-hidden cursor-pointer"
                >
                  <option value="relevance">Sort: AcreNova Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="area-high">Area: Largest First</option>
                  <option value="rating">Top Rated Seller</option>
                </select>
              </div>

              {/* View Mode Switcher */}
              <div className="flex items-center bg-white p-1 rounded-2xl border border-slate-200 shadow-xs">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
                  title="Grid View"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-xl transition-all ${viewMode === 'list' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
                  title="List View"
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-2 rounded-xl transition-all ${viewMode === 'map' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
                  title="Interactive Map"
                >
                  <MapIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2-Column Layout: Sidebar Filters + Property Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
          
          {/* Left Column (3 cols): Comprehensive Faceted Filters */}
          <aside className="lg:col-span-3 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-6 sticky top-24">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-brand-600" />
                <h3 className="font-extrabold text-sm text-slate-900">Filters</h3>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-xs font-bold text-brand-700 hover:text-brand-800 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Quick Toggle Switches */}
            <div className="space-y-2.5">
              <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 cursor-pointer hover:bg-slate-100/70 transition-colors">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-600" />
                  <span className="text-xs font-bold text-slate-800">RERA Verified Only</span>
                </div>
                <input
                  type="checkbox"
                  checked={verifiedOnly}
                  onChange={(e) => setVerifiedOnly(e.target.checked)}
                  className="w-4 h-4 accent-brand-600 rounded-sm"
                />
              </label>

              <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 cursor-pointer hover:bg-slate-100/70 transition-colors">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-800">Zero Brokerage Only</span>
                </div>
                <input
                  type="checkbox"
                  checked={zeroBrokerageOnly}
                  onChange={(e) => setZeroBrokerageOnly(e.target.checked)}
                  className="w-4 h-4 accent-brand-600 rounded-sm"
                />
              </label>
            </div>

            {/* Possession Status */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Possession Status
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {['All', 'Ready to Move', 'Under Construction'].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPossessionFilter(p)}
                    className={`p-2 rounded-xl font-bold border transition-all text-center ${
                      possessionFilter === p
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Posted By (Owner / Builder / Agent) */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Posted By
              </label>
              <div className="grid grid-cols-3 gap-1.5 text-xs">
                {['All', 'Owner', 'Builder', 'Agent'].map((role) => (
                  <button
                    key={role}
                    onClick={() => setPostedByFilter(role)}
                    className={`py-1.5 px-2 rounded-xl font-bold border transition-all text-center ${
                      postedByFilter === role
                        ? 'bg-brand-50 text-brand-700 border-brand-300'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            {/* Furnishing Status */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Furnishing
              </label>
              <select
                value={furnishingFilter}
                onChange={(e) => setFurnishingFilter(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 outline-hidden"
              >
                <option value="All">All Furnishing Types</option>
                <option value="Fully Furnished">Fully Furnished</option>
                <option value="Semi-Furnished">Semi-Furnished</option>
                <option value="Unfurnished">Unfurnished</option>
              </select>
            </div>

            {/* Amenities Checklist */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Select Amenities
              </label>
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {AMENITIES_LIST.map((a) => (
                  <label 
                    key={a.id}
                    className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer hover:text-slate-900"
                  >
                    <input
                      type="checkbox"
                      checked={selectedAmenities.includes(a.label)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedAmenities([...selectedAmenities, a.label]);
                        } else {
                          setSelectedAmenities(selectedAmenities.filter(item => item !== a.label));
                        }
                      }}
                      className="w-3.5 h-3.5 accent-brand-600 rounded-sm"
                    />
                    <span className="truncate">{a.label}</span>
                  </label>
                ))}
              </div>
            </div>

          </aside>

          {/* Right Column (9 cols): Property Cards Stream with Scroll Animations */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* View Mode: Map Simulation */}
            {viewMode === 'map' && (
              <div className="p-6 rounded-3xl bg-slate-900 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-between shadow-xl animate-in zoom-in-95">
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-400" />
                    <span className="font-extrabold text-sm">Interactive Geo-Clustered Map</span>
                  </div>
                  <span className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-300">
                    Satellite & Metro Overlay Active
                  </span>
                </div>

                {/* Simulated Geolocation Pins */}
                <div className="relative z-10 my-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {filteredProperties.slice(0, 6).map((prop) => (
                    <div 
                      key={prop.id}
                      onClick={() => setDetailProperty(prop)}
                      className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 cursor-pointer transition-all hover:scale-102"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-400 animate-ping"></span>
                        <span className="text-xs font-extrabold text-white truncate">{prop.locality}</span>
                      </div>
                      <p className="text-sm font-black text-brand-300 mt-1">{prop.formattedPrice}</p>
                      <p className="text-[11px] text-slate-300 truncate">{prop.title}</p>
                    </div>
                  ))}
                </div>

                <div className="relative z-10 text-xs text-slate-400 text-center">
                  Click any micro-market cluster card above to launch full 3D specs & drone layout.
                </div>
              </div>
            )}

            {/* Normal Property Grid / List */}
            {filteredProperties.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">No Properties Match Your Specific Criteria</h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  Try broadening your budget range, clearing specific amenity filters, or switching cities to see available homes.
                </p>
                <div className="pt-2">
                  <button
                    onClick={resetFilters}
                    className="px-6 py-2.5 rounded-xl text-xs font-extrabold bg-brand-600 text-white shadow-md shadow-brand-600/30 hover:bg-brand-700 transition-all"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            ) : (
              <div className={
                viewMode === 'list' 
                  ? 'space-y-4' 
                  : 'grid grid-cols-1 md:grid-cols-2 gap-6'
              }>
                {filteredProperties.map((property, idx) => (
                  <ScrollReveal key={property.id} animation="fade-up" delay={(idx % 2) * 120}>
                    <PropertyCard
                      property={property}
                      isFavorite={favorites.includes(property.id)}
                      onToggleFavorite={handleToggleFavorite}
                      isCompared={comparedProperties.some(p => p.id === property.id)}
                      onToggleCompare={handleToggleCompare}
                      onViewDetails={(prop) => setDetailProperty(prop)}
                      onContactSeller={(prop) => setDetailProperty(prop)}
                    />
                  </ScrollReveal>
                ))}
              </div>
            )}

          </div>

        </div>

      </main>

      {/* Featured Flagship Mega Projects Showcase */}
      <FeaturedProjectsSection 
        onInquireProject={(proj) => alert(`Inquiry initiated for ${proj.name}`)}
      />

      {/* Architectural Lifestyle Collections */}
      <LifestyleCollections 
        onSelectCollection={(collTitle) => {
          if (collTitle.toLowerCase().includes('golf')) {
            setSearchQuery('DLF Phase 5');
          } else if (collTitle.toLowerCase().includes('waterfront')) {
            setSearchQuery('Sea');
          } else if (collTitle.toLowerCase().includes('penthouse')) {
            setSelectedType('Penthouse');
          } else if (collTitle.toLowerCase().includes('commercial')) {
            setActiveTab('commercial');
          }
          const el = document.getElementById('browse');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Metropolitan City Explorer */}
      <CityExplorerSection 
        onSelectCity={(city) => {
          setSelectedCity(city);
          const el = document.getElementById('browse');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Real Estate Micro-Market Trends Section */}
      <div id="trends">
        <PriceTrendsSection />
      </div>

      {/* Dedicated Global NRI Real Estate Services Desk */}
      <NRIServicesSection />

      {/* Real Estate Insights & Legal Guides */}
      <ArticlesSection />

      {/* Customer Trust & Testimonials */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-bold text-brand-700 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                Verified Experience
              </span>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                Trusted by 45,000+ Homeowners & Investors
              </h3>
              <p className="text-sm text-slate-600">
                Experience transparent pricing, zero spam broker spam, and direct developer communication.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 150}>
                <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between h-full">
                  <div>
                    <Quote className="w-8 h-8 text-brand-500/30 mb-3" />
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-6">
                    <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                    <div>
                      <h5 className="text-xs font-extrabold text-slate-900">{t.author}</h5>
                      <p className="text-[11px] text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <Footer 
        onOpenValuation={() => setIsValuationModalOpen(true)}
        onOpenLoanCalculator={() => setIsLoanModalOpen(true)}
        onOpenPostProperty={() => setIsPostModalOpen(true)}
      />

      {/* Floating Property Comparison Dock */}
      <ComparisonDrawer
        comparedProperties={comparedProperties}
        onRemoveCompare={(id) => setComparedProperties(prev => prev.filter(p => p.id !== id))}
        onClearCompare={() => setComparedProperties([])}
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        onViewDetails={(prop) => setDetailProperty(prop)}
      />

      {/* Shortlist Drawer */}
      <ShortlistDrawer
        isOpen={isFavoritesDrawerOpen}
        onClose={() => setIsFavoritesDrawerOpen(false)}
        favorites={favoriteObjects}
        onRemoveFavorite={(id) => setFavorites(prev => prev.filter(item => item !== id))}
        onClearFavorites={() => setFavorites([])}
        onViewDetails={(prop) => setDetailProperty(prop)}
      />

      {/* Property Details Modal */}
      {detailProperty && (
        <PropertyDetailModal
          property={detailProperty}
          onClose={() => setDetailProperty(null)}
          isFavorite={favorites.includes(detailProperty.id)}
          onToggleFavorite={handleToggleFavorite}
          isCompared={comparedProperties.some(p => p.id === detailProperty.id)}
          onToggleCompare={handleToggleCompare}
        />
      )}

      {/* Post Free Property Wizard Modal */}
      {isPostModalOpen && (
        <PostPropertyModal
          onClose={() => setIsPostModalOpen(false)}
          onPropertyCreated={(newProp) => {
            setProperties(prev => [newProp, ...prev]);
            setDetailProperty(newProp);
          }}
        />
      )}

      {/* Valuation Tool Modal */}
      {isValuationModalOpen && (
        <ValuationToolModal onClose={() => setIsValuationModalOpen(false)} />
      )}

      {/* Home Loan Eligibility Modal */}
      {isLoanModalOpen && (
        <LoanEligibilityModal onClose={() => setIsLoanModalOpen(false)} />
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={(userData) => setUser(userData)}
        user={user}
      />

    </div>
  );
}
