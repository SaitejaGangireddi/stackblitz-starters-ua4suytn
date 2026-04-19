'use client';
import React from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const COLORS = {
  green: '#2B5A27',
  gold: '#BF9B30',
  red: '#8C1C1C',
  stone: '#FBF9F6',
};

export default function ContactPage() {
  return (
    <div className="pb-24 bg-[#FBF9F6]">
      {/* 1. PREMIUM HEADER WITH BACKGROUND IMAGE */}
      <div className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <img
          src="https://res.cloudinary.com/dmkjnuolr/image/upload/v1776600647/IMG_4099_f8xgge.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Contact Background"
        />
        {/* Heritage Green Overlay */}
        <div className="absolute inset-0 bg-[#2B5A27]/80 backdrop-blur-[2px]"></div>

        <div className="relative z-10 text-center px-6">
          <span
            style={{ color: COLORS.gold }}
            className="font-black tracking-[0.4em] text-xs uppercase mb-4 block"
          >
            Connect with us
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
            Let's Grow <br />{' '}
            <span style={{ color: COLORS.gold }}>Together</span>
          </h1>
        </div>
      </div>

      {/* 2. CONTACT INFO CARDS - Floating Header Style */}
      <div className="max-w-7xl mx-auto -mt-24 px-6 relative z-20 grid md:grid-cols-3 gap-8">
        <ContactCard
          icon={<Phone size={28} />}
          title="Call Support"
          info="+91 9000106333"
          sub="Mon - Sat, 9:00 AM - 6:00 PM"
        />
        <ContactCard
          icon={<Mail size={28} />}
          title="Official Email"
          info="nithyareddy@annapurna.com"
          sub="Expect a reply within 24 hours"
        />
        <ContactCard
          icon={<MapPin size={28} />}
          title="Visit HQ"
          info="IDA, Madikonda Post, Warangal"
          sub="Telangana - 506142, India"
        />
      </div>

      {/* 3. MAIN FORM SECTION - Professional Split Layout */}
      <div className="max-w-7xl mx-auto mt-24 px-6">
        <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-stone-100">
          {/* Left Side: Branding/Image Section */}
          <div
            style={{ backgroundColor: COLORS.green }}
            className="lg:w-1/3 p-12 text-white flex flex-col justify-between relative overflow-hidden"
          >
            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-tight">
                Reach out to the <br />{' '}
                <span style={{ color: COLORS.gold }}>Seed Experts</span>
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-10">
                Whether you are a farmer looking for high-yield paddy or a
                distributor interested in our hybrid maize, our team is here to
                assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                  <div className="h-1 w-8 bg-[#BF9B30]"></div>
                  Quality Assured
                </div>
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                  <div className="h-1 w-8 bg-[#BF9B30]"></div>
                  Farmer First Support
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12">
              <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#BF9B30] mb-2">
                  Current Location
                </p>
                <p className="text-sm font-bold leading-relaxed">
                  Warangal District, <br /> Telangana, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="flex-1 p-10 md:p-16">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare style={{ color: COLORS.gold }} size={24} />
              <h2
                style={{ color: COLORS.green }}
                className="text-3xl font-black uppercase tracking-tighter"
              >
                Send us a Message
              </h2>
            </div>

            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-5 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:border-[#BF9B30] focus:bg-white transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-5 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:border-[#BF9B30] focus:bg-white transition-all font-medium"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-2">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your requirement..."
                  className="w-full p-5 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:border-[#BF9B30] focus:bg-white transition-all font-medium"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  style={{ backgroundColor: COLORS.red }}
                  className="w-full text-white py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-[#2B5A27] hover:shadow-2xl transition-all flex items-center justify-center gap-4 group"
                >
                  Submit Enquiry{' '}
                  <Send
                    size={16}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactCard({ icon, title, info, sub }: any) {
  return (
    <div className="bg-white p-10 rounded-[2.5rem] shadow-xl text-center border border-stone-100 hover:-translate-y-2 transition-all duration-500 group">
      <div
        style={{ color: COLORS.gold }}
        className="flex justify-center mb-6 group-hover:scale-110 transition-transform"
      >
        {icon}
      </div>
      <h4
        style={{ color: COLORS.green }}
        className="font-black uppercase text-xs tracking-[0.2em] mb-3 leading-none"
      >
        {title}
      </h4>
      <p style={{ color: COLORS.green }} className="font-black text-xl mb-2">
        {info}
      </p>
      <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">
        {sub}
      </p>
    </div>
  );
}
