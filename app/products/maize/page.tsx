'use client';
import React from 'react';
import { Sprout } from 'lucide-react';

export default function ComingSoonProducts() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#FBF9F6] px-6 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-[#BF9B30] blur-3xl opacity-20 rounded-full animate-pulse"></div>
        <div className="relative bg-white p-8 rounded-full shadow-2xl border border-stone-100">
          <Sprout size={60} className="text-[#2B5A27]" />
        </div>
      </div>

      <h1 className="text-5xl font-black text-[#2B5A27] uppercase tracking-tighter mb-4">
        Coming <span className="text-[#BF9B30]">Soon</span>
      </h1>

      <div className="h-1.5 w-24 bg-[#8C1C1C] rounded-full mb-6"></div>

      <p className="max-w-md text-stone-600 font-medium leading-relaxed">
        We are currently curating our finest hybrid varieties to ensure you get
        the highest yields. Stay tuned for our premium portfolio.
      </p>

      <button
        onClick={() => (window.location.href = '/contact')}
        className="mt-10 border-2 border-[#2B5A27] text-[#2B5A27] px-8 py-3 rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#2B5A27] hover:text-white transition-all"
      >
        Enquire for details
      </button>
    </div>
  );
}
