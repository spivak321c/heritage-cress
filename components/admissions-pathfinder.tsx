'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Check } from 'lucide-react';

export function AdmissionsPathfinder() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    grade: '',
    interest: '',
    parentName: '',
    contact: ''
  });

  const handleNext = () => setStep(prev => prev + 1);

  return (
    <section className="py-24 bg-heritage-green text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Is Heritage Crest the right fit for your child?
            </h2>
            <p className="text-stone-300 text-lg mb-8 leading-relaxed">
              Every child's journey is unique. Use our Admissions Pathfinder to discover how we can tailor our curriculum to your child's potential.
            </p>
            <ul className="space-y-4 mb-8">
              {['Personalized Success Brochure', 'Tuition Fee Estimates', 'Priority Tour Booking'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-heritage-gold">
                  <div className="w-6 h-6 rounded-full border border-heritage-gold flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white text-stone-900 rounded-2xl p-8 shadow-2xl">
            <div className="mb-6 flex items-center gap-2 text-sm font-medium text-stone-400">
              <span className={step >= 1 ? "text-heritage-green" : ""}>Step 1</span>
              <div className="h-px w-8 bg-stone-200" />
              <span className={step >= 2 ? "text-heritage-green" : ""}>Step 2</span>
              <div className="h-px w-8 bg-stone-200" />
              <span className={step >= 3 ? "text-heritage-green" : ""}>Step 3</span>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="font-serif text-2xl mb-6 text-heritage-green">Current Academic Stage</h3>
                  <div className="space-y-3">
                    {['Year 7 (JSS 1) Entry', 'Mid-Stream Transfer', 'Sixth Form (A-Levels/IB)'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setFormData({...formData, grade: opt});
                          handleNext();
                        }}
                        className="w-full text-left p-4 rounded-xl border border-stone-200 hover:border-heritage-green hover:bg-heritage-green/5 transition-all flex justify-between items-center group"
                      >
                        <span className="font-medium">{opt}</span>
                        <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-heritage-green" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="font-serif text-2xl mb-6 text-heritage-green">Primary Interest</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {['Sciences & STEM', 'Arts & Humanities', 'Sports & Athletics', 'Music & Performance'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setFormData({...formData, interest: opt});
                          handleNext();
                        }}
                        className="p-4 rounded-xl border border-stone-200 hover:border-heritage-green hover:bg-heritage-green/5 transition-all text-center h-24 flex items-center justify-center font-medium"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="font-serif text-2xl mb-2 text-heritage-green">Your Details</h3>
                  <p className="text-stone-500 text-sm mb-6">Where should we send your personalized brochure?</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Parent's Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-heritage-green/20 focus:border-heritage-green outline-none"
                        placeholder="Dr. & Mrs. Adebayo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">WhatsApp / Email</label>
                      <input 
                        type="text" 
                        className="w-full p-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-heritage-green/20 focus:border-heritage-green outline-none"
                        placeholder="+234..."
                      />
                    </div>
                    <button 
                      onClick={handleNext}
                      className="w-full py-4 bg-heritage-gold text-heritage-green font-bold text-lg rounded-lg hover:bg-yellow-500 transition-colors mt-4"
                    >
                      Get My Success Brochure
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-heritage-green" />
                  </div>
                  <h3 className="font-serif text-3xl mb-4 text-heritage-green">Welcome to the Family</h3>
                  <p className="text-stone-600 mb-8">
                    Your personalized brochure is on its way. An admissions officer will be in touch shortly.
                  </p>
                  <button 
                    onClick={() => setStep(1)}
                    className="text-heritage-green font-medium hover:underline"
                  >
                    Start a new inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
