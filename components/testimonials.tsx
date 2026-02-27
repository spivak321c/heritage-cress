'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Sending our son to Heritage Crest was the best investment we've ever made. He went from being shy to leading the debate team and securing admission to Imperial College.",
    author: "Mrs. Folake O.",
    role: "Parent of Class of '24",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop"
  },
  {
    quote: "The balance between Nigerian moral values and global academic standards is what sets this school apart. It feels like a family that truly cares.",
    author: "Chief Emeka N.",
    role: "Parent of Year 9 Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    quote: "The robotics program here is world-class. I never thought I'd be competing in international competitions in Dubai while still in secondary school.",
    author: "Tolu A.",
    role: "Head Boy, Class of '25",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
  }
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-heritage-gold font-medium tracking-widest uppercase text-sm">Social Proof</span>
          <h2 className="font-serif text-4xl md:text-5xl text-heritage-green mt-2">The Heritage Family</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 -translate-x-4 -translate-y-4 text-heritage-gold/20">
            <Quote className="w-24 h-24" />
          </div>

          <div className="relative z-10 bg-heritage-cream rounded-3xl p-8 md:p-12 shadow-lg border border-stone-100">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img 
                  src={TESTIMONIALS[current].image} 
                  alt={TESTIMONIALS[current].author} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="font-serif text-xl md:text-2xl text-stone-700 italic mb-6 leading-relaxed">
                  "{TESTIMONIALS[current].quote}"
                </p>
                <div>
                  <h4 className="font-bold text-heritage-green text-lg">{TESTIMONIALS[current].author}</h4>
                  <p className="text-stone-500 text-sm">{TESTIMONIALS[current].role}</p>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center md:justify-end gap-4 mt-8">
              <button onClick={prev} className="p-2 rounded-full border border-stone-200 hover:bg-white hover:shadow-md transition-all">
                <ChevronLeft className="w-6 h-6 text-stone-600" />
              </button>
              <button onClick={next} className="p-2 rounded-full border border-stone-200 hover:bg-white hover:shadow-md transition-all">
                <ChevronRight className="w-6 h-6 text-stone-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
