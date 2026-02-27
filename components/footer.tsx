import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-heritage-green text-white pt-20 pb-10 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-6 text-heritage-gold">Heritage Crest</h3>
            <p className="text-stone-300 text-sm leading-relaxed mb-6">
              Nurturing the next generation of global leaders through academic excellence, moral discipline, and cultural pride.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-heritage-gold hover:text-heritage-green transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-heritage-gold hover:text-heritage-green transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-heritage-gold hover:text-heritage-green transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-stone-300 text-sm">
              <li><Link href="#" className="hover:text-heritage-gold transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-heritage-gold transition-colors">Admissions</Link></li>
              <li><Link href="#" className="hover:text-heritage-gold transition-colors">Academics</Link></li>
              <li><Link href="#" className="hover:text-heritage-gold transition-colors">Boarding Life</Link></li>
              <li><Link href="#" className="hover:text-heritage-gold transition-colors">News & Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-stone-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-heritage-gold shrink-0" />
                <span>12 Heritage Avenue, Lekki Phase 1, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-heritage-gold shrink-0" />
                <span>+234 800 HERITAGE</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-heritage-gold shrink-0" />
                <span>admissions@heritagecrest.edu.ng</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-stone-300 text-sm mb-4">Subscribe for updates and educational insights.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-none text-white placeholder:text-white/50 px-4 py-3 rounded-l-lg w-full focus:ring-1 focus:ring-heritage-gold outline-none"
              />
              <button className="bg-heritage-gold text-heritage-green px-4 py-3 rounded-r-lg font-bold hover:bg-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-stone-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Heritage Crest International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
