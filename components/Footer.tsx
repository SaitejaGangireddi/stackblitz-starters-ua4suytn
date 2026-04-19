'use client';
import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

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

        {/* Navigation - Restored all links */}
        <div>
          <h4
            style={{ color: COLORS.green }}
            className="font-black uppercase tracking-widest text-xs mb-8 underline decoration-[#BF9B30] decoration-2 underline-offset-8"
          >
            Navigation
          </h4>
          <ul className="space-y-4 text-sm font-bold text-stone-600">
            <li>
              <Link href="/" className="hover:text-[#BF9B30] transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#BF9B30] transition">About Us</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-[#BF9B30] transition">All Products</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#BF9B30] transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links for R&D/Production */}
        <div>
          <h4
            style={{ color: COLORS.green }}
            className="font-black uppercase tracking-widest text-xs mb-8 underline decoration-[#BF9B30] decoration-2 underline-offset-8"
          >
            Our Facility
          </h4>
          <ul className="space-y-4 text-sm font-bold text-stone-600">
            <li>
              <Link href="/about/r-and-d" className="hover:text-[#BF9B30] transition">Research &amp; Development</Link>
            </li>
            <li>
              <Link href="/about/processing" className="hover:text-[#BF9B30] transition">Processing &amp; Treatment</Link>
            </li>
            <li>
              <Link href="/about/production" className="hover:text-[#BF9B30] transition">Field Production</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
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
              <Mail size={16} style={{ color: COLORS.red }} />
              nithyareddy@annapurna.com
            </p>
            <p className="flex items-start gap-3 leading-relaxed">
              <MapPin size={20} style={{ color: COLORS.red }} className="shrink-0" />
              IDA, Madikonda Post, Warangal-506142
            </p>
          </div>
        </div>
      </div>

      {/* FIXED FOOTER STRIP - ESCAPED CHARACTERS */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center opacity-40 text-[9px] font-black uppercase tracking-[0.4em] text-[#2B5A27]">
        <p>© 2026 Annapurna Seeds &amp; Farms</p>
        <p>A Farmer&apos;s Trust</p>
      </div>
    </footer>
  );
}