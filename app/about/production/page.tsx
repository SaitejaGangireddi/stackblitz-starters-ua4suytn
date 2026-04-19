'use client';
import React from 'react';
import { Map, Eye, ClipboardCheck, ShieldCheck, Wheat } from 'lucide-react';

const COLORS = {
  green: '#2B5A27',
  gold: '#BF9B30',
  stone: '#FBF9F6',
};

export default function ProductionPage() {
  return (
    <div className="pb-24 bg-[#FBF9F6]">
      {/* 1. HERO SECTION */}
      <div className="relative h-[450px] bg-stone-900 flex items-center justify-center overflow-hidden">
        <img
          src="https://res.cloudinary.com/dmkjnuolr/image/upload/q_auto/f_auto/v1776607725/P-7_aqtlvm.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
          alt="Lush Green Fields"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#FBF9F6]/20"></div>
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-[#BF9B30]"></div>
            <span className="text-white/80 font-black uppercase tracking-[0.4em] text-[10px]">
              Annapurna Standards
            </span>
            <div className="h-[2px] w-12 bg-[#BF9B30]"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4 italic">
            Our <span style={{ color: COLORS.gold }}>Production</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* 2. CORE PHILOSOPHY */}
        <section className="py-24 text-center max-w-5xl mx-auto">
          <h2
            style={{ color: COLORS.green }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-[0.9]"
          >
            The Journey of <br />
            <span style={{ color: COLORS.gold }}>Genetic Purity</span>
          </h2>
          <p className="text-xl text-stone-600 leading-relaxed font-medium italic border-l-8 border-[#BF9B30] pl-8 py-4 bg-white rounded-r-3xl shadow-sm">
            The purity of the seed begins with quality production in the field.
            This is achieved through frequent monitoring, effective Off-Type and
            Diseased Variety control (ODV), weed management, and maintaining the
            crop as per company standards.
          </p>
        </section>

        {/* 3. PRODUCTION PILLARS */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          <ProductionStepCard
            image="https://res.cloudinary.com/dmkjnuolr/image/upload/q_auto/f_auto/v1776610783/Feild-monitoring_zwlbsb.webp"
            icon={<Map />}
            title="Field Selection"
            desc="Choosing the ideal location plays a vital role in ensuring both seed quality and yield. Factors like soil health and water availability are evaluated to maintain genetic purity."
          />
          <ProductionStepCard
            image="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800"
            icon={<Eye />}
            title="Field Monitoring"
            desc="Our field staff continuously monitor the fields to ensure balanced fertilization, effective weed control, and proper pest management."
          />
          <ProductionStepCard
            image="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800"
            icon={<ClipboardCheck />}
            title="Final Inspection"
            desc="Before harvesting begins, a thorough evaluation is conducted to check overall uniformity and physical condition to meet all production protocols."
          />
        </div>

        {/* 4. CROP PORTFOLIO VISUALS - FIXED IMAGES */}
        <div className="bg-white p-12 md:p-20 rounded-[4rem] border border-stone-100 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-5 text-[#2B5A27]">
            <Wheat size={200} />
          </div>

          <div className="relative z-10">
            <h3
              style={{ color: COLORS.green }}
              className="text-3xl font-black uppercase tracking-tighter mb-12 text-center md:text-left"
            >
              Production <span style={{ color: COLORS.gold }}>Excellence</span>{' '}
              across Crops
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Paddy - Farmer working in rice field */}
              <div className="group overflow-hidden rounded-[2.5rem] h-80 relative shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=800"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  alt="Paddy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <span className="text-white font-black uppercase tracking-widest text-xs">
                    Paddy Fields
                  </span>
                </div>
              </div>

              {/* Vegetables - High quality vegetable crop */}
              <div className="group overflow-hidden rounded-[2.5rem] h-80 relative shadow-lg">
                <img
                  src="https://res.cloudinary.com/dmkjnuolr/image/upload/q_auto/f_auto/v1776611040/Vegetables_seeds_b7xfgj.webp"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  alt="Vegetables"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <span className="text-white font-black uppercase tracking-widest text-xs">
                    Vegetable Plots
                  </span>
                </div>
              </div>

              {/* Maize - Real Maize/Corn field */}
              <div className="group overflow-hidden rounded-[2.5rem] h-80 relative shadow-lg">
                <img
                  src="https://res.cloudinary.com/dmkjnuolr/image/upload/q_auto/f_auto/v1776610529/maize_dfa6h2.png"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  alt="Maize"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <span className="text-white font-black uppercase tracking-widest text-xs">
                    Maize Hybrids
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductionStepCard({ image, icon, title, desc }: any) {
  return (
    <div className="bg-white rounded-[3.5rem] shadow-xl overflow-hidden border border-stone-100 flex flex-col h-full">
      <div className="h-64 overflow-hidden relative shrink-0">
        <img src={image} className="w-full h-full object-cover" alt={title} />
        <div className="absolute top-6 right-6 bg-white/90 p-3 rounded-2xl text-[#BF9B30]">
          {React.cloneElement(icon, { size: 24 })}
        </div>
      </div>
      <div className="p-10">
        <h3
          style={{ color: COLORS.green }}
          className="text-2xl font-black uppercase tracking-tighter mb-4"
        >
          {title}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed font-medium">
          {desc}
        </p>
      </div>
    </div>
  );
}
