'use client';
import { useState } from 'react';
import { X, CheckCircle2, Calendar, Wheat, ShieldCheck } from 'lucide-react';

const paddyItems = [
  {
    id: 1,
    type: 'HYBRID PADDY',
    name: 'ARUNDATHI AHP 8899',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776596997/Arundathi_t180wb.jpg',
    info: '120-125 Days | Long slender grains | Non-Lodging | High vigour & yield | Field tolerance to Bacterial Leaf Blight & Blast',
  },
  {
    id: 2,
    type: 'IMPROVED PADDY',
    name: 'VENNELA (AP-121)',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776597107/Vennela_n7mzms.jpg',
    info: '145-150 Days | Medium slender Grains | High yield grain | Non-Lodging | Field tolerance to Bacterial Leaf Blight',
  },
  {
    id: 3,
    type: 'IMPROVED PADDY',
    name: 'INDUMATHI (AP-132)',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776597011/Indumathi_hwrkaq.jpg',
    info: '130-135 Days | Super fine grain | High yield grain | Non-Lodging | Field tolerance to Bacterial Leaf Blight',
  },
  {
    id: 4,
    type: 'IMPROVED PADDY',
    name: 'KAMALA (AP-111)',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776597027/Kamala_tdm2gm.jpg',
    info: '145-150 Days | Medium slender grains | Non-Lodging | Field tolerance to Bacterial Leaf Blight',
  },
  {
    id: 5,
    type: 'IMPROVED PADDY',
    name: 'PARAMAHAMSA (AP-129)',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776597069/Paramahamsa_tm9qp2.jpg',
    info: '140-145 Days | Medium slender grains | Non-Lodging | Field tolerance to Bacterial Leaf Blight',
  },
  {
    id: 6,
    type: 'HYBRID PADDY',
    name: 'ARUNDATHI AHP 5566',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776597089/Purushottam_tikgrp.jpg',
    info: '120-125 Days | Long bold grains | High vigour & High grain yield | Field tolerance to Bacterial Leaf Blight & Blast',
  },
  {
    id: 7,
    type: 'IMPROVED PADDY',
    name: 'KAMALA GOLD (AP-111)',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776597044/Kamala_gold_cxlw0q.jpg',
    info: '140-145 Days | Medium slender grains | Non-Lodging | Field tolerance to Bacterial Leaf Blight',
  },
  {
    id: 8,
    type: 'IMPROVED PADDY',
    name: 'NITHYA (AP-114)',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776597048/Nithya_lwiomb.jpg',
    info: '145-150 Days | Medium slender grains | Non-Lodging | Field tolerance to Bacterial Leaf Blight',
  },
  {
    id: 9,
    type: 'IMPROVED PADDY',
    name: 'VAISHNAVI (AP-113)',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776597110/Vaishnavi_ev0hae.jpg',
    info: '145-150 Days | Medium slender grains | Non-Lodging | Field tolerance to Bacterial Leaf Blight',
  },
  {
    id: 10,
    type: 'IMPROVED PADDY',
    name: 'VIJAYA DURGA (AP-130)',
    image:
      'https://res.cloudinary.com/dmkjnuolr/image/upload/v1776597113/Vijayadurga_qihoz6.jpg',
    info: '115-120 Days | Medium bold grains | Non-Lodging | Field tolerance to Bacterial Leaf Blight',
  },
];

const COLORS = {
  green: '#2B5A27',
  gold: '#BF9B30',
  red: '#8C1C1C',
  stone: '#FBF9F6',
};

export default function PaddyPage() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="pb-20 bg-[#FBF9F6] min-h-screen">
      {/* Header */}
      <div className="h-64 bg-[#2B5A27] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=2000')] bg-cover bg-center opacity-20"></div>
        <h1 className="relative z-10 text-white text-5xl font-black uppercase tracking-tighter">
          Paddy Varieties
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {paddyItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="cursor-pointer group relative bg-white p-6 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col items-center"
            >
              <div className="h-44 w-full mb-4 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <span
                  style={{ color: COLORS.gold }}
                  className="text-[10px] font-black uppercase tracking-widest block mb-1"
                >
                  {item.type}
                </span>
                <p
                  style={{ color: COLORS.green }}
                  className="font-bold text-xs leading-tight uppercase"
                >
                  {item.name}
                </p>
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
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#2B5A27]/90 backdrop-blur-md"
            onClick={() => setActiveItem(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-5xl rounded-[4rem] shadow-2xl overflow-hidden flex flex-col md:flex-row items-stretch animate-in zoom-in fade-in duration-300">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-8 right-8 z-10 p-2 bg-stone-100 rounded-full hover:bg-stone-200 transition"
            >
              <X size={24} style={{ color: COLORS.green }} />
            </button>

            {/* Left: Product Visual */}
            <div className="md:w-1/2 bg-[#FBF9F6] p-12 flex flex-col items-center justify-center border-r border-stone-100">
              <img
                src={activeItem.image}
                alt={activeItem.name}
                className="h-96 w-auto object-contain drop-shadow-2xl"
              />
              <div
                style={{ backgroundColor: COLORS.gold }}
                className="mt-8 h-1 w-20 rounded-full"
              ></div>
            </div>

            {/* Right: Detailed Specs */}
            <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
              <span
                style={{ color: COLORS.gold }}
                className="font-black uppercase tracking-[0.3em] text-xs mb-2"
              >
                Paddy Specification
              </span>
              <h2
                style={{ color: COLORS.green }}
                className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8"
              >
                {activeItem.name}
              </h2>

              <div className="space-y-6">
                {activeItem.info.split('|').map((spec, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="bg-stone-50 p-2 rounded-lg group-hover:bg-[#BF9B30]/10 transition">
                      {i === 0 ? (
                        <Calendar size={18} style={{ color: COLORS.gold }} />
                      ) : i === 1 ? (
                        <Wheat size={18} style={{ color: COLORS.gold }} />
                      ) : (
                        <ShieldCheck size={18} style={{ color: COLORS.gold }} />
                      )}
                    </div>
                    <span className="text-stone-600 font-bold uppercase tracking-wide text-sm">
                      {spec.trim()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex gap-4">
                <button
                  style={{ backgroundColor: COLORS.red }}
                  className="flex-1 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-xl transition"
                >
                  Request Quote
                </button>
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-8 border-2 border-stone-200 rounded-2xl font-black uppercase tracking-widest text-xs text-stone-400 hover:border-[#2B5A27] hover:text-[#2B5A27] transition"
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
