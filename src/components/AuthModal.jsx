import React, { useState } from 'react';
import { X, User, Building, ShieldCheck, CheckCircle2, Lock, Mail, Phone } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onLogin, user }) {
  const [role, setRole] = useState('Buyer / Investor');
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({
      name: name || (isSignUp ? 'New Member' : 'Vikram Malhotra'),
      email: email || 'vikram.m@domain.com',
      phone: phone || '+91 98200 12345',
      role: role
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-lg font-black text-slate-900">
              {user ? 'My AcreNova Account' : isSignUp ? 'Create AcreNova Account' : 'Sign in to AcreNova'}
            </h3>
            <p className="text-xs text-slate-600">Access verified listings, saved searches & VIP visits</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {user ? (
            <div className="text-center py-4 space-y-3">
              <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mx-auto text-xl font-black">
                {user.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-base font-extrabold text-slate-900">{user.name}</h4>
                <p className="text-xs text-slate-500">{user.email}</p>
                <span className="inline-block mt-1 text-[11px] font-bold bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full border border-brand-200">
                  {user.role}
                </span>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => { onLogin(null); onClose(); }}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Switcher */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-2xl">
                {['Buyer / Investor', 'Property Owner', 'Certified Agent'].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`py-2 text-[11px] font-bold rounded-xl transition-all ${
                      role === r ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {r.split(' ')[0]}
                  </button>
                ))}
              </div>

              {isSignUp && (
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white outline-hidden"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Mobile Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 12345"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white outline-hidden"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-xs font-extrabold bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-600/30 transition-all"
              >
                {isSignUp ? 'Create Account' : 'Sign In with OTP / Password'}
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-xs font-semibold text-brand-700 hover:underline"
                >
                  {isSignUp ? 'Already have an account? Sign In' : 'New to AcreNova? Register Free'}
                </button>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 text-[11px] text-slate-500 flex items-center justify-center gap-1.5 border border-slate-200/60">
                <ShieldCheck className="w-4 h-4 text-brand-600" />
                <span>Zero spam policy. Your data is never shared with third-party telemarketers.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
