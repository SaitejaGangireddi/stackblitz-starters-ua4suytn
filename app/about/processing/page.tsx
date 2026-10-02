'use client';
import React from 'react';
import { Settings2, Truck, Warehouse, ArrowRightCircle } from 'lucide-react';

const COLORS = {
  green: '#2B5A27',
  gold: '#BF9B30',
  red: '#8C1C1C',
  stone: '#FBF9F6',
};

// All 5 Processing Facility Images provided by your friend
const PROCESSING_GALLERY = [
  'https://res.cloudinary.com/dmkjnuolr/image/upload/v1788753967/Processing_1_ushokb.png',
  'https://res.cloudinary.com/dmkjnuolr/image/upload/v1788753954/Processing_2_sg275r.png',
  'https://res.cloudinary.com/dmkjnuolr/image/upload/v1788753954/Processing_3_u8zeqi.png',
  'https://res.cloudinary.com/dmkjnuolr/image/upload/v1788753955/Processing_4_pc7lla.png',
  'https://res.cloudinary.com/dmkjnuolr/image/upload/v1788753955/Processing_5_ebtpsl.png',
];

export default function ProcessingPage() {
  return (
    <div className="pb-24 bg-[#FBF9F6]">
      {/* 1. HERO SECTION (Without "OUR") */}
      <div className="relative h-[500px] bg-stone-900 flex items-center justify-center overflow-hidden">
        <img
          src="https://res.cloudinary.com/dmkjnuolr/image/upload/v1790936988/image_1_q4gkrl.png"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
          alt="Processing Facility Header"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#FBF9F6]/20"></div>

        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-[#BF9B30]"></div>
            <span className="text-white/80 font-black uppercase tracking-[0.4em] text-[10px]">
              Annapurna Excellence
            </span>
            <div className="h-[2px] w-12 bg-[#BF9B30]"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4 italic">
            <span style={{ color: COLORS.gold }}>Processing</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* 2. CORE PHILOSOPHY SUMMARY */}
        <section className="py-24 text-center max-w-5xl mx-auto">
          <h2
            style={{ color: COLORS.green }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]"
          >
            Quality Processing & <br />
            <span style={{ color: COLORS.gold }}>Timely Dispatch</span>
          </h2>
          <p className="text-xl text-stone-600 leading-relaxed font-medium italic border-l-8 border-[#BF9B30] pl-8 py-4 bg-white rounded-r-3xl shadow-sm">
            Quality processing and timely dispatch are crucial to maintaining
            excellence. From seed procurement to final dispatch, a dedicated
            team of highly trained staff oversees every stage to ensure we
            deliver only the highest quality products.
          </p>
        </section>

        {/* 3. CLEAN AUTO-SCROLLING VISUAL GALLERY (NO TITLES / SUBHEADINGS) */}
        <div className="mb-32">
          <div className="relative w-full overflow-hidden py-4">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FBF9F6] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FBF9F6] to-transparent z-10 pointer-events-none"></div>

            <div className="flex gap-8 animate-scroll-slow hover:pause whitespace-nowrap">
              {[...PROCESSING_GALLERY, ...PROCESSING_GALLERY].map((url, idx) => (
                <div
                  key={idx}
                  className="group relative min-w-[320px] md:min-w-[420px] h-80 rounded-[3rem] overflow-hidden shadow-xl border-4 border-white bg-stone-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex-shrink-0"
                >
                  <img
                    src={url}
                    alt="Facility Infrastructure"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. THE INDUSTRIAL PIPELINE */}
        <div className="space-y-16">
          {/* STEP 1: PROCUREMENT */}
          <section className="bg-white rounded-[4rem] shadow-xl overflow-hidden flex flex-col lg:flex-row items-stretch border border-stone-100">
            <div
              style={{ backgroundColor: COLORS.green }}
              className="lg:w-1/3 p-12 flex flex-col items-center justify-center text-white relative"
            >
              <Warehouse size={80} className="mb-6 opacity-30" />
              <h3 className="font-black uppercase tracking-[0.3em] text-xs mb-2">
                Primary Phase
              </h3>
              <p className="text-4xl font-black italic">STEP 01</p>
            </div>
            <div className="flex-1 p-12 md:p-20 relative">
              <div className="absolute top-10 right-10 opacity-5 text-[#2B5A27]">
                <ArrowRightCircle size={100} />
              </div>
              <h3
                style={{ color: COLORS.green }}
                className="text-3xl font-black uppercase tracking-tighter mb-8"
              >
                Procurement &{' '}
                <span style={{ color: COLORS.gold }}>Storage</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-10 text-stone-600 font-medium text-lg leading-relaxed">
                <p>
                  Once the stock arrives, our Quality Control team collects
                  samples and performs a series of tests, including moisture
                  content and physical purity assessments. The seeds are also
                  subjected to a germination test.
                </p>
                <p>
                  After passing all quality checks the seed is stored in our
                  godowns, systematically organized by lot numbers. During the
                  storage period, regular fumigation is carried out to protect
                  the seeds from pests.
                </p>
              </div>
            </div>
          </section>

          {/* STEP 2: TREATMENT */}
          <section className="bg-white rounded-[4rem] shadow-xl overflow-hidden flex flex-col lg:flex-row-reverse items-stretch border border-stone-100">
            <div
              style={{ backgroundColor: COLORS.gold }}
              className="lg:w-1/3 p-12 flex flex-col items-center justify-center text-white"
            >
              <Settings2 size={80} className="mb-6 opacity-30" />
              <h3 className="font-black uppercase tracking-[0.3em] text-xs mb-2">
                Technical Phase
              </h3>
              <p className="text-4xl font-black italic">STEP 02</p>
            </div>
            <div className="flex-1 p-12 md:p-20">
              <h3
                style={{ color: COLORS.green }}
                className="text-3xl font-black uppercase tracking-tighter mb-8"
              >
                Processing &{' '}
                <span style={{ color: COLORS.gold }}>Treatment</span>
              </h3>
              <div className="space-y-8 text-stone-600 font-medium text-lg leading-relaxed">
                <p>
                  Seed processing involves several stages to ensure purity and
                  quality. The initial steps focus on removing impurities such
                  as dust, stone, straw, and husk. One of the most critical
                  stages in this process is <strong>grading</strong>—a key step
                  that eliminates undersized and oversized grains.
                </p>
                <div className="p-10 bg-[#FBF9F6] rounded-3xl border-l-[12px] border-[#2B5A27] shadow-inner">
                  <p className="italic">
                    After grading, the seeds undergo chemical treatment to
                    protect against future infestations. This is followed by a
                    drying process to reduce moisture content and ensure safe
                    storage. Seeds are sampled again for final germination
                    testing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* STEP 3: DISPATCH */}
          <section className="bg-white rounded-[4rem] shadow-xl overflow-hidden flex flex-col lg:flex-row items-stretch border border-stone-100">
            <div
              style={{ backgroundColor: COLORS.red }}
              className="lg:w-1/3 p-12 flex flex-col items-center justify-center text-white"
            >
              <Truck size={80} className="mb-6 opacity-30" />
              <h3 className="font-black uppercase tracking-[0.3em] text-xs mb-2">
                Final Phase
              </h3>
              <p className="text-4xl font-black italic">STEP 03</p>
            </div>
            <div className="flex-1 p-12 md:p-20">
              <h3
                style={{ color: COLORS.green }}
                className="text-3xl font-black uppercase tracking-tighter mb-8"
              >
                Timely <span style={{ color: COLORS.gold }}>Dispatch</span>
              </h3>
              <p className="text-stone-700 font-bold text-xl leading-relaxed italic pr-10">
                Without timely dispatch, seed won’t reach the farmers at the
                right time for sowing. We work with reliable logistics partners
                to guarantee on-time delivery, even to remote locations.
              </p>
              <p className="mt-6 text-stone-500 font-medium text-lg leading-relaxed">
                Our inventory and dispatch systems are well-coordinated. We
                ensure prompt dispatch immediately upon order confirmation to
                avoid any delays in the agricultural cycle.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}