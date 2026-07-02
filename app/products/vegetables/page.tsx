'use client';
import { useState } from 'react';
import { X, Calendar, Wheat, ShieldCheck, Box } from 'lucide-react';

// Define explicit type interface for TypeScript verification
interface VegetableItem {
  id: number;
  type: string;
  name: string;
  image: string;
  info: string;
}

const vegetableItems: VegetableItem[] = [
  {
    id: 1,
    type: 'HYBRID VEGETABLE',
    name: 'HYBRID BHENDI (AHO-401)',
    image: 'https://res.cloudinary.com/dmkjnuolr/image/upload/v1783011404/bhindi_cid3ey.png',
    info: 'Dark green, Tender fruits | More pods per plant with higher yield compared to local varieties | High resistance to Yellow Vein Mosaic Virus | Robust plants with good Branches'
  },
  {
    id: 2,
    type: 'HYBRID VEGETABLE',
    name: 'HYBRID BITTER GOURD (AHBIG-752)',
    image: 'https://res.cloudinary.com/dmkjnuolr/image/upload/v1783011410/butter_vnxytu.png',
    info: 'High yield with dark green, Glossy fruits with uniform shape | Small fruits size, Highly nutritious | Fruits stay firm and fresh for longer | Suitable for long-distance markets & tolerance to common diseases'
  },
  {
    id: 3,
    type: 'HYBRID VEGETABLE',
    name: 'HYBRID BITTER GOURD (AHBIG-751)',
    image: 'https://res.cloudinary.com/dmkjnuolr/image/upload/v1783011404/bg_751_edmah0.png',
    info: 'Fruit size: 12-14cm & Dark green with attractive shine | Produces high number of fruits per plant | Vigorous plants with excellent branching | Early picking advantage for better mandi rates'
  },
  {
    id: 4,
    type: 'HYBRID VEGETABLE',
    name: 'HYBRID RIDGE GOURD (AHRG 601)',
    image: 'https://res.cloudinary.com/dmkjnuolr/image/upload/v1783011404/601_fexfmc.png',
    info: 'Cylindrical fruit with deep, prominent Ridges | Medium-Long segment structure | First picking 35-40 days | Average fruit weight around 200grams with less damage during transport'
  },
  {
    id: 5,
    type: 'HYBRID VEGETABLE',
    name: 'HYBRID TOMATO (AHT-202)',
    image: 'https://res.cloudinary.com/dmkjnuolr/image/upload/v1783011437/tomato_202_ak5zup.png',
    info: 'Deep red colour with attractive shine | High-yield hybrid framework | Moderate resistance to leaf curl virus and wilt | High acceptance in local markets and mandis'
  },
  {
    id: 6,
    type: 'HYBRID VEGETABLE',
    name: 'HYBRID BOTTLE GOURD (AHBIG-751)',
    image: 'https://res.cloudinary.com/dmkjnuolr/image/upload/v1783011404/bg_751_edmah0.png',
    info: 'Long cylindrical fruit structure | Average weight is above 500grams | Vigorous vines with strong growth | Longer shelf life layout suitable for longer distance transport & mildew resistance'
  },
  {
    id: 7,
    type: 'HYBRID VEGETABLE',
    name: 'CLUSTERBEAN (ACS-901)',
    image: 'https://res.cloudinary.com/dmkjnuolr/image/upload/v1783011405/cluster_bean_a3m7va.png',
    info: 'Bushy, erect plant with single stem growth | Early maturity cycle | Quick income crop with multiple harvests | Highly drought-tolerant crop suitable for arid and semi-arid regions'
  }
];

const COLORS = {
  green: '#2B5A27',
  gold: '#BF9B30',
  red: '#8C1C1C',
  stone: '#FBF9F6',
};

export default function VegetablesPage() {
  const [activeItem, setActiveItem] = useState<VegetableItem | null>(null);

  return (
    <div className="pb-20 bg-[#FBF9F6] min-h-screen">
      {/* Header */}
      <div className="h-64 bg-[#2B5A27] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=2000')] bg-cover bg-center opacity-20"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-black uppercase tracking-tighter">
          Vegetable Hybrids
        </h1>
      </div>

      {/* Grid Layout conforming exactly to Paddy configuration */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {vegetableItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="cursor-pointer group relative bg-white p-6 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col items-center"
            >
              <div className="h-44 w-full mb-4 flex items-center justify-center bg-stone-50 rounded-[2rem] group-hover:bg-white transition-colors">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover rounded-[1.8rem] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-center w-full">
                <span
                  style={{ color: COLORS.gold }}
                  className="text-[10px] font-black uppercase tracking-widest block mb-1"
                >
                  {item.type}
                </span>
                <p
                  style={{ color: COLORS.green }}
                  className="font-black text-[11px] leading-tight uppercase mb-2"
                >
                  {item.name}
                </p>
                <div className="text-[8px] font-bold text-stone-400 bg-stone-50 py-1 rounded-full px-2 inline-block">
                  Sizes: 10g • 50g • 100g • 500g
                </div>
              </div>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-50 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#BF9B30]">
                View Specs
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TECHNICAL SPOTLIGHT MODAL */}
      {activeItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div
            className="absolute inset-0 bg-[#2B5A27]/90 backdrop-blur-md"
            onClick={() => setActiveItem(null)}
          ></div>

          <div className="relative bg-white w-full max-w-5xl rounded-[3rem] md:rounded-[4rem] shadow-2xl overflow-hidden flex flex-col md:flex-row items-stretch animate-in zoom-in fade-in duration-300 max-h-[90vh] overflow-y-auto md:overflow-hidden">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-6 right-6 md:top-8 md:right-8 z-10 p-2 bg-stone-100 rounded-full hover:bg-stone-200 transition"
            >
              <X size={24} style={{ color: COLORS.green }} />
            </button>

            {/* Left Frame */}
            <div className="md:w-1/2 bg-[#FBF9F6] p-8 md:p-12 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-stone-100">
              <img
                src={activeItem.image}
                alt={activeItem.name}
                className="h-64 md:h-80 w-full object-cover rounded-[2.5rem] drop-shadow-xl"
              />
              <div
                style={{ backgroundColor: COLORS.gold }}
                className="mt-8 h-1 w-20 rounded-full"
              ></div>
            </div>

            {/* Right Specifications Frame */}
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
              <span
                style={{ color: COLORS.gold }}
                className="font-black uppercase tracking-[0.3em] text-[10px] mb-2"
              >
                Vegetable Specification
              </span>
              <h2
                style={{ color: COLORS.green }}
                className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-6"
              >
                {activeItem.name}
              </h2>

              <div className="space-y-4 md:space-y-5">
                {activeItem.info.split('|').map((spec, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="bg-stone-50 p-2 rounded-lg group-hover:bg-[#BF9B30]/10 transition shrink-0">
                      {i === 0 ? (
                        <Calendar size={18} style={{ color: COLORS.gold }} />
                      ) : i === 1 ? (
                        <Wheat size={18} style={{ color: COLORS.gold }} />
                      ) : (
                        <ShieldCheck size={18} style={{ color: COLORS.gold }} />
                      )}
                    </div>
                    <span className="text-stone-600 font-bold uppercase tracking-wide text-xs md:text-sm">
                      {spec.trim()}
                    </span>
                  </div>
                ))}

                {/* Packaging Specification Segment */}
                <div className="flex items-center gap-4 group pt-2 border-t border-stone-100">
                  <div className="bg-stone-50 p-2 rounded-lg group-hover:bg-[#BF9B30]/10 transition shrink-0">
                    <Box size={18} style={{ color: COLORS.gold }} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-wider text-stone-400">Available Packaging</span>
                    <div className="flex gap-2 mt-1">
                      {['10g', '50g', '100g', '500g'].map((size) => (
                        <span key={size} className="bg-[#2B5A27]/5 border border-[#2B5A27]/10 text-[#2B5A27] font-black text-[10px] px-2.5 py-1 rounded-md">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-8 md:mt-10 flex flex-col md:flex-row gap-4">
                <button
                  style={{ backgroundColor: COLORS.red }}
                  className="flex-1 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:shadow-xl transition active:scale-95"
                >
                  Request Quote
                </button>
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-8 py-4 border-2 border-stone-200 rounded-2xl font-black uppercase tracking-widest text-[10px] text-stone-400 hover:border-[#2B5A27] hover:text-[#2B5A27] transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}