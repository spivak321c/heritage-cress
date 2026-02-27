'use client';

import { BookOpen, Shield, Home, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

const PILLARS = [
  {
    title: "Academic Rigor",
    description: "A fusion of the British National Curriculum and Nigerian standards, focusing on STEM excellence and critical thinking.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1974&auto=format&fit=crop", // Library/Study
    colSpan: "md:col-span-2",
  },
  {
    title: "Moral Foundation",
    description: "Instilling discipline, integrity, and leadership values that stand the test of time.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop", // Students talking/mentoring
    colSpan: "md:col-span-1",
  },
  {
    title: "World-Class Boarding",
    description: "A safe, nurturing 'home away from home' with state-of-the-art pastoral care.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1974&auto=format&fit=crop", // Modern dorm/lounge
    colSpan: "md:col-span-1",
  },
  {
    title: "Extra-Curricular Mastery",
    description: "From robotics and coding to fencing and orchestral music, we nurture every talent.",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop", // Music/Arts
    colSpan: "md:col-span-2",
  },
];

export function BentoGrid() {
  return (
    <section className="py-20 bg-heritage-cream relative overflow-hidden">
      {/* Subtle Adire Pattern Background */}
      <div className="absolute inset-0 bg-adire-pattern opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-heritage-green mb-4">The Total Child</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Our educational philosophy rests on four unshakeable pillars designed to mold well-rounded, future-ready leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${pillar.colSpan} shadow-sm hover:shadow-xl transition-all duration-500`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={pillar.image} 
                  alt={pillar.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heritage-green/90 via-heritage-green/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-heritage-gold/20 backdrop-blur-md border border-heritage-gold/50 text-heritage-gold">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl mb-2 group-hover:text-heritage-gold transition-colors">{pillar.title}</h3>
                <p className="text-stone-200 text-sm md:text-base leading-relaxed opacity-90">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
