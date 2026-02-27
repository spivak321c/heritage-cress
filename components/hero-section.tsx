'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-heritage-green text-white">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
        {/* In a real app, this would be a video tag. Using a high-quality image for now. */}
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
          alt="Graduation Ceremony" 
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-block px-3 py-1 mb-6 border border-heritage-gold/50 rounded-full bg-heritage-green/30 backdrop-blur-sm">
            <span className="text-heritage-gold text-sm font-medium tracking-wider uppercase">
              Admissions Open for 2026/2027
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
            Raising Global Leaders with <span className="text-heritage-gold italic">Nigerian Roots</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-xl leading-relaxed">
            Experience an education that blends academic excellence, moral discipline, and cultural heritage. Welcome to Heritage Crest International.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group relative px-8 py-4 bg-heritage-gold text-heritage-green font-bold text-lg rounded-none overflow-hidden transition-all hover:bg-white">
              <span className="relative z-10 flex items-center gap-2">
                Secure Your Child's Future <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="px-8 py-4 border border-white/30 text-white font-medium text-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
              Take a Virtual Tour
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Pattern Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-heritage-green to-transparent z-10 pointer-events-none" />
    </section>
  );
}
