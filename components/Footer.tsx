'use client';
import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const COLORS = {
  green: '#2B5A27',
  gold: '#BF9B30',
  stone: '#FBF9F6',
  red: '#8C1C1C',
};

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: COLORS.stone }}
      className="pt-24 pb-10 px-6 border-t border-stone-200"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-stone-200 pb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="bg-white p-3 rounded-2xl inline-block shadow-sm border border-stone-100">
            <img
              src="https://res.cloudinary.com/dmkjnuolr/image/upload/v1776594161/annapurna_Logo_mkbwhz.jpg"
              alt="Logo"
              className="h-14 w-auto"
            />
          </div>
          <p className="text-stone-500 text-sm leading-relaxed font-medium">
            Empowering farmers with high-quality, disease-tolerant seeds
            nurtured through research.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4
            style={{ color: COLORS.green }}
            className="font-black uppercase tracking-widest text-xs mb-8 underline decoration-[#BF9B30] decoration-2 underline-offset-8"
          >
            Navigation
          </h4>
          <ul className="space-y-4 text-sm font-bold text-stone-600">
            <li>
              <Link
                href="/"
                className="hover:text-[#BF9B30] transition flex items-center gap-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about/processing"
                className="hover:text-[#BF9B30] transition flex items-center gap-2"
              >
                Processing
              </Link>
            </li>
            <li>
              <Link
                href="/products/paddy"
                className="hover:text-[#BF9B30] transition flex items-center gap-2"
              >
                Paddy Varieties
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4
            style={{ color: COLORS.green }}
            className="font-black uppercase tracking-widest text-xs mb-8 underline decoration-[#BF9B30] decoration-2 underline-offset-8"
          >
            Seed Categories
          </h4>
          <ul className="space-y-4 text-sm font-bold text-stone-600">
            <li className="opacity-60 uppercase tracking-tighter text-[10px]">
              Hybrid Paddy
            </li>
            <li className="opacity-60 uppercase tracking-tighter text-[10px]">
              Maize (Coming Soon)
            </li>
            <li className="opacity-60 uppercase tracking-tighter text-[10px]">
              Veg (Coming Soon)
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4
            style={{ color: COLORS.green }}
            className="font-black uppercase tracking-widest text-xs mb-8 underline decoration-[#BF9B30] decoration-2 underline-offset-8"
          >
            Contact Us
          </h4>
          <div className="space-y-4 text-sm font-bold text-stone-600">
            <p className="flex items-center gap-3">
              <Phone size={16} style={{ color: COLORS.red }} /> +91 9000106333
            </p>
            <p className="flex items-center gap-3">
              <Mail size={16} style={{ color: COLORS.red }} />{' '}
              nithyareddy@annapurna.com
            </p>
            <p className="flex items-start gap-3 leading-relaxed">
              <MapPin
                size={20}
                style={{ color: COLORS.red }}
                className="shrink-0"
              />
              IDA, Madikonda Post, Warangal-506142
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center opacity-40 text-[9px] font-black uppercase tracking-[0.4em] text-[#2B5A27]">
        <p>© 2026 Annapurna Seeds & Farms</p>
        <p>A Farmer's Trust</p>
      </div>
    </footer>
  );
}
