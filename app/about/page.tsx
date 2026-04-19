'use client';
import React from 'react';
import {
  Sprout,
  Award,
  History,
  Target,
  Users,
} from 'lucide-react';

const COLORS = {
  green: '#2B5A27',
  gold: '#BF9B30',
  red: '#8C1C1C',
  stone: '#FBF9F6',
};

export default function AboutPage() {
  return (
    <div className="pb-24 bg-[#FBF9F6]">
      {/* 1. PREMIUM HEADER */}
      <div className="relative h-[450px] flex items-center justify-center overflow-hidden bg-stone-900">
        <img
          src="https://res.cloudinary.com/dmkjnuolr/image/upload/q_auto/f_auto/v1776602815/IMG_9298_ba0vjm.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          alt="Annapurna Heritage"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FBF9F6]/20"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4 italic">
            About <span style={{ color: COLORS.gold }}>Us</span>
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-12 bg-[#BF9B30]"></div>
            {/* FIXED APOSTROPHE BELOW */}
            <p className="text-white/90 font-black uppercase tracking-[0.4em] text-[10px]">
              A Farmer&apos;s Trust since 1996
            </p>
            <div className="h-[2px] w-12 bg-[#BF9B30]"></div>
          </div>
        </div>
      </div>

      {/* 2. FOUNDATION STORY (Split Layout) */}
      <div className="max-w-7xl mx-auto -mt-20 px-6 relative z-20">
        <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-stone-100 flex flex-col lg:flex-row items-stretch">
          {/* Left: Branding & Visual */}
          <div className="lg:w-1/2 p-12 md:p-16 bg-stone-50 flex flex-col justify-center items-center text-center">
            <div className="relative group">
              <div
                style={{ borderColor: COLORS.gold }}
                className="absolute -inset-4 border-2 rounded-[3.5rem] opacity-20 group-hover:opacity-40 transition-opacity"
              ></div>
              <img
                src="https://res.cloudinary.com/dmkjnuolr/image/upload/v1776602763/IMG_1038_jznmxw.jpg"
                className="relative rounded-[3rem] shadow-2xl object-cover h-[550px] w-full"
                alt="Our Founder's Vision"
              />
            </div>
            <p className="mt-10 text-stone-400 font-black uppercase tracking-[0.3em] text-[10px]">
              Rooted in Telangana
            </p>
          </div>

          {/* Right: The Narrative Content */}
          <div className="flex-1 p-12 md:p-20 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <History style={{ color: COLORS.gold }} size={24} />
              <span
                style={{ color: COLORS.gold }}
                className="font-black uppercase tracking-widest text-xs"
              >
                Our Founding Legacy
              </span>
            </div>

            <h2
              style={{ color: COLORS.green }}
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-10"
            >
              Built by Farmers, <br />
              <span style={{ color: COLORS.gold }}>for Farmers</span>
            </h2>

            <div className="space-y-8 text-stone-600 text-lg leading-relaxed font-medium">
              <p>
                {/* FIXED AMPERSAND BELOW */}
                Annapurna Seeds &amp; Farms was founded in{' '}
                <strong>1996 by Mr. Chandupatla Venugopal Reddy</strong>, coming
                from a farming family in Telangana.
              </p>
              <p>
                Having witnessed firsthand the challenges that farmers face, our
                company recognized that the <strong>purity of seeds</strong> was
                one of the most critical concerns in agriculture.
              </p>

              <div className="p-10 bg-[#FBF9F6] rounded-[3rem] border-l-[12px] border-[#2B5A27] shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-[0.05] p-4 text-[#2B5A27]">
                  <Award size={80} />
                </div>
                {/* FIXED QUOTES BELOW */}
                <p
                  style={{ color: COLORS.green }}
                  className="font-black italic text-2xl uppercase tracking-tight"
                >
                  &ldquo;Purity is our mantra.&rdquo;
                </p>
                <p className="mt-4 text-base opacity-70 leading-relaxed">
                  To this day, we uphold these values, ensuring that every seed
                  we produce carries the legacy of trust, quality, and
                  excellence that has defined us from the very beginning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CORE MISSION PILLARS */}
      <div className="max-w-7xl mx-auto mt-24 px-6">
        <div className="text-center mb-16">
          <h3
            style={{ color: COLORS.green }}
            className="text-3xl font-black uppercase tracking-tighter"
          >
            Our Core <span style={{ color: COLORS.gold }}>Objectives</span>
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <AboutValueCard
            icon={<Target size={32} />}
            title="Disease Tolerance"
            desc="Providing high-quality seeds engineered to withstand local crop diseases."
          />
          <AboutValueCard
            icon={<Sprout size={32} />}
            title="High Productivity"
            desc="Nurturing seeds that guarantee higher yields and better productivity for every farm."
          />
          <AboutValueCard
            icon={<Users size={32} />}
            title="Farmer Empowerment"
            desc="Working closely with the farming community to provide tailored seed solutions."
          />
        </div>
      </div>
    </div>
  );
}

function AboutValueCard({ icon, title, desc }: any) {
  return (
    <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-stone-100 hover:shadow-2xl transition-all duration-500 text-center group">
      <div
        style={{ color: COLORS.gold }}
        className="mb-6 flex justify-center group-hover:scale-110 transition-transform"
      >
        {icon}
      </div>
      <h4
        style={{ color: COLORS.green }}
        className="text-xl font-black uppercase tracking-tighter mb-3"
      >
        {title}
      </h4>
      <p className="text-stone-400 text-sm font-bold leading-relaxed uppercase tracking-widest italic opacity-70">
        {desc}
      </p>
    </div>
  );
}