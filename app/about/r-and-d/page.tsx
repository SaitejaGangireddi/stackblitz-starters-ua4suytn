'use client';
import React, { useState, useEffect } from 'react';
import { Microscope, ShieldCheck, FlaskConical, Sprout } from 'lucide-react';

const COLORS = {
  green: '#2B5A27',
  gold: '#BF9B30',
  stone: '#FBF9F6',
};

// 1. YOUR 5 SCROLLING IMAGES
const RD_IMAGES = [
  'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776603997/IMG_7192_qfvzx0.jpg',
  'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776603993/IMG_9365_uee7og.jpg',
  'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776603981/IMG_7111_qenlx4.jpg',
  'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776603978/IMG_1235_jsnmqb.jpg',
  'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776605870/IMG_7463_lxahdu.jpg',
  ' https://res.cloudinary.com/dmkjnuolr/image/upload/q_auto/f_auto/v1776603968/IMG_0401_jax4nf.jpg',
];

export default function RDPage() {
  const [current, setCurrent] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === RD_IMAGES.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="min-h-screen pb-24"
      style={{ backgroundColor: COLORS.stone }}
    >
      {/* 2. HERO SECTION */}
      <div className="relative h-[400px] bg-stone-900 flex items-center justify-center overflow-hidden">
        <img
          src={RD_IMAGES[0]}
          className="absolute w-full h-full object-cover opacity-40"
          alt="R&D Background"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
            RESEARCH & <span style={{ color: COLORS.gold }}>DEVELOPMENT</span>
          </h1>
          <div
            style={{ backgroundColor: COLORS.gold }}
            className="h-1.5 w-32 mx-auto mt-4 rounded-full"
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* 3. MAIN CONTENT: TEXT + SCROLLER */}
        <section className="py-20 grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2
                style={{ color: COLORS.green }}
                className="text-4xl font-black uppercase tracking-tighter mb-6"
              >
                INNOVATION IN{' '}
                <span style={{ color: COLORS.gold }}>EVERY GRAIN</span>
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed font-medium">
                Annapurna Seeds takes pride in having its own Research &
                Development center. This holistic approach allows us to maintain
                complete control over quality, enabling continuous innovation
                and improvement to meet market demands.
              </p>
            </div>

            {/* EXACT MATTER: MULTI-LOCATION */}
            <div
              className="p-8 bg-white rounded-[3rem] shadow-sm border-l-[12px]"
              style={{ borderColor: COLORS.green }}
            >
              <h3
                style={{ color: COLORS.green }}
                className="text-2xl font-black uppercase mb-4 tracking-tight"
              >
                Multi-location{' '}
                <span style={{ color: COLORS.gold }}>product evaluation</span>
              </h3>
              <p className="text-stone-600 leading-relaxed font-medium">
                We conduct extensive trials in farmer’s fields across different
                locations to assess the product’s adaptability to various
                environments, tolerance to diseases, and ability to deliver the
                expected yield. Further, we consider farmer’s feedback to ensure
                the seed is reliable and high-performing.
              </p>
            </div>

            {/* EXACT MATTER: POST-RELEASE */}
            <div
              className="p-8 bg-white rounded-[3rem] shadow-sm border-l-[12px]"
              style={{ borderColor: COLORS.gold }}
            >
              <h3
                style={{ color: COLORS.green }}
                className="text-2xl font-black uppercase mb-4 tracking-tight"
              >
                Post-Release{' '}
                <span style={{ color: COLORS.gold }}>
                  Performance Monitoring
                </span>
              </h3>
              <p className="text-stone-600 leading-relaxed font-medium">
                We continue to monitor its performance in the field to ensure it
                meets market quality standards and farmer expectations. Through
                ongoing assessments and farmer interactions, we track yield
                consistency and adaptability. This continuous monitoring helps
                us make necessary improvements.
              </p>
            </div>
          </div>

          {/* THE 5 IMAGES AUTO SCROLLER */}
          <div className="sticky top-32 w-full h-[600px] relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
            {RD_IMAGES.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  idx === current ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt="Research Scene"
                />
              </div>
            ))}

            {/* Dots indicator */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3">
              {RD_IMAGES.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? 'w-10 bg-[#BF9B30]' : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. BOTTOM CARDS */}
        <div className="grid md:grid-cols-2 gap-10">
          <div
            className="bg-white p-12 rounded-[3.5rem] shadow-sm text-center border-t-8"
            style={{ borderColor: COLORS.green }}
          >
            <Microscope
              style={{ color: COLORS.gold }}
              className="mx-auto mb-6"
              size={40}
            />
            <h4
              style={{ color: COLORS.green }}
              className="text-2xl font-black uppercase mb-4"
            >
              Genetic Purity
            </h4>
            <p className="text-stone-500 font-medium">
              Rigorous selection processes to ensure 100% variety consistency.
            </p>
          </div>

          <div
            className="bg-white p-12 rounded-[3.5rem] shadow-sm text-center border-t-8"
            style={{ borderColor: COLORS.gold }}
          >
            <ShieldCheck
              style={{ color: COLORS.gold }}
              className="mx-auto mb-6"
              size={40}
            />
            <h4
              style={{ color: COLORS.green }}
              className="text-2xl font-black uppercase mb-4"
            >
              Climate Adaptive
            </h4>
            <p className="text-stone-500 font-medium">
              Developing seeds that survive and thrive in varying Indian
              conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
