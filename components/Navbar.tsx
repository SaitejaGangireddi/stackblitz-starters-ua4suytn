'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const COLORS = {
  green: '#2B5A27',
  red: '#8C1C1C',
  gold: '#BF9B30',
};

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        
        {/* Brand Section */}
        <Link href="/" className="flex items-center gap-4 group shrink-0">
          <img
            src="https://res.cloudinary.com/dmkjnuolr/image/upload/q_auto/f_auto/v1776594161/annapurna_Logo_mkbwhz.jpg"
            alt="Annapurna Logo"
            className="h-16 w-auto group-hover:scale-105 transition duration-300"
          />
          <div className="flex flex-col border-l-2 border-stone-100 pl-4">
            <span
              style={{ color: COLORS.green }}
              className="font-black text-2xl md:text-3xl leading-none tracking-tighter uppercase"
            >
              ANNAPURNA
            </span>
            <span
              style={{ color: COLORS.red }}
              className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mt-1"
            >
              Seeds &amp; Farms
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="flex gap-4 md:gap-10 items-center font-black text-gray-800 uppercase text-[9px] md:text-[12px] tracking-widest">
          <Link href="/" className="hover:text-[#2B5A27] transition">
            Home
          </Link>

          {/* ABOUT US - Dropdown */}
          <div className="relative group py-2">
            <Link
              href="/about"
              className="flex items-center gap-1 group-hover:text-[#2B5A27] transition cursor-pointer z-10"
            >
              About Us <ChevronDown size={14} style={{ color: COLORS.gold }} />
            </Link>
            <div className="absolute hidden group-hover:block bg-white border border-stone-100 shadow-2xl w-64 top-[100%] left-0 rounded-b-2xl overflow-hidden animate-in fade-in slide-in-from-top-1 z-0">
              <Link
                href="/about/r-and-d"
                className="block px-6 py-4 hover:bg-stone-50 border-b lowercase first-letter:uppercase"
              >
                Research &amp; Development
              </Link>
              <Link
                href="/about/processing"
                className="block px-6 py-4 hover:bg-stone-50 border-b lowercase first-letter:uppercase"
              >
                Processing &amp; Treatment
              </Link>
              <Link
                href="/about/production"
                className="block px-6 py-4 hover:bg-stone-50 lowercase first-letter:uppercase"
              >
                Production
              </Link>
            </div>
          </div>

          {/* PRODUCTS - Dropdown */}
          <div className="relative group py-2">
            <Link
              href="/products"
              className="flex items-center gap-1 group-hover:text-[#2B5A27] transition cursor-pointer z-10"
            >
              Products <ChevronDown size={14} style={{ color: COLORS.gold }} />
            </Link>
            <div className="absolute hidden group-hover:block bg-white border border-stone-100 shadow-2xl w-64 top-[100%] left-0 rounded-b-2xl overflow-hidden animate-in fade-in slide-in-from-top-1 z-0">
              <Link
                href="/products/paddy"
                className="block px-6 py-4 hover:bg-stone-50 border-b lowercase first-letter:uppercase"
              >
                Paddy Varieties
              </Link>
              <Link
                href="/products/maize"
                className="block px-6 py-4 hover:bg-stone-50 border-b lowercase first-letter:uppercase"
              >
                Maize Hybrid
              </Link>
              <Link
                href="/products/vegetables"
                className="block px-6 py-4 hover:bg-stone-50 lowercase first-letter:uppercase"
              >
                Vegetable Seeds
              </Link>
            </div>
          </div>

          <Link href="/contact" className="hover:text-[#2B5A27] transition">
            Contact
          </Link>

          <Link href="/contact">
            <button
              style={{ backgroundColor: COLORS.red }}
              className="text-white px-8 py-3 rounded-full font-black uppercase tracking-widest text-[11px] shadow-lg hover:shadow-2xl transition-all active:scale-95"
            >
              ENQUIRE NOW
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}