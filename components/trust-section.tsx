import { cn } from "@/lib/utils";
import { Marquee } from "./marquee";

const ACCREDITATIONS = [
  { name: "Cambridge International", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Cambridge_Assessment_International_Education_logo.svg/2560px-Cambridge_Assessment_International_Education_logo.svg.png" },
  { name: "IB World School", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/IB_World_School_Logo.svg/1200px-IB_World_School_Logo.svg.png" },
  { name: "WAEC", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/WAEC_logo.svg/1200px-WAEC_logo.svg.png" },
  { name: "COBIS", logo: "https://www.cobis.org.uk/uploaded/themes/default_20/images/logo.png" },
];

const UNIVERSITIES = [
  "Harvard University",
  "University of Oxford",
  "MIT",
  "Imperial College London",
  "University of Toronto",
  "Yale University",
  "LSE",
  "McGill University",
  "Columbia University",
];

export function TrustSection() {
  return (
    <section className="py-12 bg-white border-y border-stone-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-sm font-medium text-stone-500 uppercase tracking-widest mb-6">
          Accredited Excellence
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Using text placeholders for logos to avoid broken external links if possible, or generic shapes. 
               For this demo, I will use styled text blocks to represent the logos if images fail, 
               but let's try to make it look like a logo bar. */}
           {ACCREDITATIONS.map((acc, i) => (
             <div key={i} className="h-12 flex items-center justify-center font-serif font-bold text-xl text-heritage-green">
               {acc.name}
             </div>
           ))}
        </div>
      </div>

      <div className="relative border-t border-stone-100 pt-8">
        <p className="text-center text-sm font-medium text-stone-500 uppercase tracking-widest mb-6">
          Our Graduates Attend
        </p>
        <Marquee className="py-4" pauseOnHover>
          {UNIVERSITIES.map((uni, i) => (
            <div key={i} className="mx-8 text-lg font-serif text-stone-700 whitespace-nowrap">
              {uni}
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
}
