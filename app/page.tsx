'use client';
import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  TrendingUp,
  Users,
  Microscope,
  Factory,
  Truck,
  Sprout,
} from 'lucide-react';

const COLORS = {
  green: '#2B5A27',
  red: '#8C1C1C',
  gold: '#BF9B30',
  stone: '#FBF9F6',
};

const paddyItems = [
  {
    id: 1,
    name: 'ARUNDATHI AHP 8899',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776596997/Arundathi_t180wb.jpg',
  },
  {
    id: 2,
    name: 'VENNELA (AP-121)',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776597107/Vennela_n7mzms.jpg',
  },
  {
    id: 3,
    name: 'INDUMATHI (AP-132)',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776597011/Indumathi_hwrkaq.jpg',
  },
  {
    id: 4,
    name: 'KAMALA (AP-111)',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776597027/Kamala_tdm2gm.jpg',
  },
  {
    id: 5,
    name: 'PARAMAHAMSA (AP-129)',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776597069/Paramahamsa_tm9qp2.jpg',
  },
  {
    id: 6,
    name: 'ARUNDATHI AHP 5566',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776597089/Purushottam_tikgrp.jpg',
  },
  {
    id: 7,
    name: 'KAMALA GOLD (AP-111)',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776597044/Kamala_gold_cxlw0q.jpg',
  },
  {
    id: 8,
    name: 'NITHYA (AP-114)',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776597048/Nithya_lwiomb.jpg',
  },
  {
    id: 9,
    name: 'VAISHNAVI (AP-113)',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776597110/Vaishnavi_ev0hae.jpg',
  },
  {
    id: 10,
    name: 'VIJAYA DURGA (AP-130)',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776597113/Vijayadurga_qihoz6.jpg',
  },
];

const HERO_IMAGES = [
  'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776595754/IMG_2293.jpg_upqoz4.jpg',
  'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776595751/IMG_4139_id0qgu.jpg',
  'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776595736/IMG_7492_srwues.jpg',
  'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776595726/IMG_9040_cdjqaz.jpg',
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === HERO_IMAGES.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.stone }}>
      {/* 1. HERO SECTION */}
      <section className="relative h-[600px] overflow-hidden bg-stone-900">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current
              ? 'opacity-100 scale-105'
              : 'opacity-0 scale-100'
              }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
            <img
              src={img}
              alt="Annapurna Farm"
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        <div className="relative z-20 h-full max-w-7xl mx-auto px-10 flex flex-col items-start justify-center">
          <div className="max-w-3xl animate-in fade-in slide-in-from-left-8 duration-700">
            <h1 className="text-white text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-[0.85]">
              A Farmer&apos;s Smile <br /> Is The
              <span style={{ color: COLORS.gold }}> True Sign</span> <br />
              Of A Thriving Nation
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium mb-10 leading-relaxed italic border-l-4 border-[#BF9B30] pl-6 max-w-xl">
              &quot;Every seed we provide carries the promise of prosperity, nurtured
              through extensive research and innovation.&quot;
            </p>
            <button
              style={{ backgroundColor: COLORS.red }}
              className="text-white px-12 py-4 rounded-full font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition"
            >
              Explore Our Seeds
            </button>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-[#BF9B30]/5 blur-[120px] rounded-full -z-10"></div>

        <div className="text-center mb-16 space-y-4">
          <span style={{ color: COLORS.gold }} className="text-[10px] font-black uppercase tracking-[0.4em]">
            The Annapurna Advantage
          </span>
          <h2 style={{ color: COLORS.green }} className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Why Farmers <span style={{ color: COLORS.gold }}>Choose Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<ShieldCheck size={40} />}
            title="Unmatched Quality"
            desc="Every batch undergoes rigorous 7-layer testing to ensure only the finest seeds reach your soil."
            tag="Certified"
          />
          <FeatureCard
            icon={<TrendingUp size={40} />}
            title="Superior Yields"
            desc="Driven by scientific R&amp;D to deliver up to 30% higher output than standard local varieties."
            tag="Research-Led"
          />
          <FeatureCard
            icon={<Users size={40} />}
            title="Farmer&apos;s Legacy"
            desc="Built on 25+ years of trust, treating every single seed like a sacred promise of prosperity."
            tag="Trusted"
          />
        </div>
      </section>

      {/* 3. MISSION SECTION */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="bg-white rounded-[4rem] shadow-sm border border-stone-100 overflow-hidden flex flex-col lg:flex-row">
          <div className="flex-1 p-12 md:p-20 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BF9B30]/10 border border-[#BF9B30]/20">
              <Sprout size={14} style={{ color: COLORS.gold }} />
              <span style={{ color: COLORS.gold }} className="text-[9px] font-black uppercase tracking-widest">
                A Farmer&rsquo;s Trust
              </span>
            </div>

            <h2 style={{ color: COLORS.green }} className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Welcome to Annapurna <br /> <span style={{ color: COLORS.gold }}>Seeds &amp; Farms</span>
            </h2>

            <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-medium">
              <p>
                At Annapurna Seeds &amp; Farms, <strong className="text-[#2B5A27]">Farmers always come first</strong>. We work closely with them to empower their journey towards prosperity.
              </p>
              <div className="p-8 bg-[#FBF9F6] rounded-3xl border-l-8 border-[#2B5A27] text-stone-700 italic shadow-inner">
                &quot;Our core objective: To provide high-quality seeds that are
                disease-tolerant and deliver high yields.&quot;
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: COLORS.green }} className="lg:w-[40%] p-12 md:p-16 text-white flex flex-col justify-center gap-10 relative">
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
            <h3 className="text-2xl font-black uppercase tracking-tight relative z-10">
              Total Production <br /> Control
            </h3>
            <div className="space-y-8 relative z-10">
              <ProductionStep icon={<Microscope />} label="R&amp;D Center" sub="Managed In-House" />
              <ProductionStep icon={<Factory />} label="Processing Units" sub="Quality Guaranteed" />
              <ProductionStep icon={<Truck />} label="Dispatch" sub="Timely Delivery" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. PREMIUM VARIETIES SCROLLER - REFINED SPACING & SLOW SCROLL */}
      <section
        style={{ backgroundColor: COLORS.green }}
        className="py-24 overflow-hidden relative rounded-b-[4rem] z-10 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <span style={{ color: COLORS.gold }} className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">
            Our Collection
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            Premium <span style={{ color: COLORS.gold }}>Varieties</span>
          </h2>
        </div>

        {/* Outer Container with slower animation and gap */}
        <div className="relative overflow-visible">
          <div className="flex gap-12 animate-scroll-slow whitespace-nowrap px-10 hover:pause">
            {[...paddyItems, ...paddyItems].map((item, idx) => (
              <div
                key={idx}
                className="group/card relative min-w-[280px] bg-white rounded-[3rem] p-8 text-center shadow-2xl transition-all duration-700 hover:-translate-y-4 flex flex-col items-center border border-white/10"
              >
                {/* Image Container */}
                <div className="h-52 w-full mb-6 flex items-center justify-center bg-stone-50 rounded-[2.5rem] group-hover/card:bg-white transition-colors duration-500 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-40 w-auto object-contain transition-transform duration-700 group-hover/card:scale-110"
                  />
                </div>

                <div className="space-y-2">
                  <h4
                    style={{ color: COLORS.green }}
                    className="font-black text-xs md:text-sm uppercase tracking-tighter whitespace-normal px-2 leading-tight flex items-center justify-center"
                  >
                    {item.name}
                  </h4>
                  <p style={{ color: COLORS.gold }} className="text-[9px] font-black uppercase tracking-widest opacity-60 italic">
                    Premium Grade
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-10"></div>
    </div>
  );
}

function FeatureCard({ icon, title, desc, tag }: any) {
  return (
    <div className="group relative p-10 rounded-[3rem] bg-white border border-stone-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-10px_rgba(43,90,39,0.15)] transition-all duration-500 hover:-translate-y-3 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#BF9B30]/20 via-transparent to-[#2B5A27]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-6 right-8 bg-stone-50 group-hover:bg-[#BF9B30]/10 px-3 py-1 rounded-full transition-colors">
        <span className="text-[8px] font-black uppercase tracking-widest text-stone-400 group-hover:text-[#BF9B30]">
          {tag}
        </span>
      </div>
      <div className="relative z-10 mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FBF9F6] text-[#BF9B30] group-hover:bg-[#2B5A27] group-hover:text-white transition-all duration-500 transform group-hover:rotate-[10deg]">
        {icon}
      </div>
      <div className="relative z-10 space-y-4">
        <h3 style={{ color: COLORS.green }} className="text-2xl font-black uppercase tracking-tighter leading-none">
          {title}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed font-medium">
          {desc}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-[#BF9B30] group-hover:w-full transition-all duration-700"></div>
    </div>
  );
}

function ProductionStep({ icon, label, sub }: any) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-[#BF9B30] transition-colors duration-500">
        {React.cloneElement(icon as React.ReactElement, {
          size: 24,
          className: 'text-white',
        })}
      </div>
      <div>
        <h4 className="font-black uppercase tracking-widest text-sm">
          {label}
        </h4>
        <p className="text-[10px] text-white/50 uppercase font-bold tracking-widest mt-0.5">
          {sub}
        </p>
      </div>
    </div>
  );
}