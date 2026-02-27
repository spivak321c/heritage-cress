'use client';

import { MessageCircle, Calendar } from 'lucide-react';

export function StickyFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-stone-200 p-4 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg font-medium shadow-sm active:scale-95 transition-transform">
          <MessageCircle className="w-5 h-5" />
          <span>Chat Now</span>
        </button>
        <button className="flex items-center justify-center gap-2 bg-heritage-green text-white py-3 rounded-lg font-medium shadow-sm active:scale-95 transition-transform">
          <Calendar className="w-5 h-5" />
          <span>Book Tour</span>
        </button>
      </div>
    </div>
  );
}
