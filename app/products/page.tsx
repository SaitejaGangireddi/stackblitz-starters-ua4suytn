'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Sprout, ShieldCheck, TrendingUp } from 'lucide-react';

const COLORS = {
  green: '#2B5A27',
  gold: '#BF9B30',
  stone: '#FBF9F6',
};

export default function ProductsOverview() {
  const categories = [
    {
      name: 'Paddy Varieties',
      slug: 'paddy',
      icon: <Sprout size={20} />,
      desc: 'Our flagship portfolio of high-yield varietal and hybrid paddy seeds, engineered for disease tolerance and superior grain quality.',
      context:
        'Nurtured through extensive R&D to ensure maximum adaptability to local Indian soil and climate conditions.',
      img: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=1000',
    },
    {
      name: 'Maize Hybrid',
      slug: 'maize',
      icon: <TrendingUp size={20} />,
      desc: 'Superior hybrid maize technology focused on high vigour, sturdy stalks, and exceptional grain weight.',
      context:
        'Coming Soon: We are currently in the advanced evaluation stage for hybrids that deliver consistent performance even in water-stressed environments.',
      img: 'https://res.cloudinary.com/dmkjnuolr/image/upload/q_auto/f_auto/v1776610529/maize_dfa6h2.png', // Distinct Maize Image
    },
    {
      name: 'Vegetable Seeds',
      slug: 'vegetables',
      icon: <ShieldCheck size={20} />,
      desc: 'Premium vegetable seed portfolio including high-demand varieties focused on uniform size, taste, and transportability.',
      context:
        'Coming Soon: Developing disease-resistant vegetable seeds to help local farmers meet growing market demands with lower pesticide reliance.',
      img: 'https://res.cloudinary.com/dmkjnuolr/image/upload/q_auto/f_auto/v1776611040/Vegetables_seeds_b7xfgj.webp', // Distinct Vegetable Image
    },
  ];

  return (
    <div className="pb-24 bg-[#FBF9F6]">
      {/* 1. Header with Depth */}
      <div className="h-80 bg-[#2B5A27] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        <div className="text-center relative z-10">
          <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Our <span style={{ color: COLORS.gold }}>Products</span>
          </h1>
          <p className="text-white/60 font-black uppercase tracking-[0.4em] text-[10px]">
            Quality • Purity • Prosperity
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((cat) => (
            <div
              key={cat.slug}
              className="group bg-white rounded-[3.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col"
            >
              {/* Image Section */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg">
                  <div style={{ color: COLORS.gold }}>{cat.icon}</div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10 flex flex-col flex-1">
                <h3
                  style={{ color: COLORS.green }}
                  className="text-2xl font-black uppercase tracking-tighter mb-4"
                >
                  {cat.name}
                </h3>

                <p className="text-stone-700 font-bold text-sm leading-relaxed mb-4">
                  {cat.desc}
                </p>

                <p className="text-stone-400 text-xs leading-relaxed italic mb-8 border-l-2 border-stone-100 pl-4">
                  {cat.context}
                </p>

                <div className="mt-auto">
                  <Link
                    href={`/products/${cat.slug}`}
                    style={{
                      backgroundColor:
                        cat.slug === 'paddy' ? COLORS.green : '#F5F5F5',
                    }}
                    className={`flex items-center justify-between w-full px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
                      cat.slug === 'paddy'
                        ? 'text-white hover:bg-[#8C1C1C]'
                        : 'text-stone-400 cursor-not-allowed'
                    }`}
                  >
                    {cat.slug === 'paddy'
                      ? 'Explore Variety'
                      : 'Under Evaluation'}
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio Statement */}
        <div className="mt-20 bg-white p-12 rounded-[4rem] border border-stone-100 shadow-sm text-center">
          <p className="max-w-4xl mx-auto text-stone-500 font-medium leading-relaxed italic">
            "Our product portfolio includes varietal and hybrid seeds for field
            crops and vegetables. At Annapurna Seeds & Farms, we work closely
            with farmers to provide the best seeds that align with evolving
            market needs."
          </p>
        </div>
      </div>
    </div>
  );
}
