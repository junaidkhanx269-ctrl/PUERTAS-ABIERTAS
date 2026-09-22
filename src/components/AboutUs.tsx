import React from 'react';
import { Heart, Sparkles, BookOpen, Utensils, Shield, CheckCircle2, Award } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { OpenDoorLogo } from './CuteDoodles';

interface AboutUsProps {
  currentLang: Language;
}

export function AboutUs({ currentLang }: AboutUsProps) {
  const t = translations[currentLang];

  const pillarIcons = [
    <Heart key="heart" className="w-6 h-6 text-rose-500" />,
    <Sparkles key="sparkles" className="w-6 h-6 text-amber-500" />,
    <Utensils key="utensils" className="w-6 h-6 text-emerald-500" />,
    <BookOpen key="book" className="w-6 h-6 text-blue-500" />,
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold border border-amber-200 mb-3">
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            <span>{t.about.sectionBadge}</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-tight leading-tight">
            {t.about.title}
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left: Daycare imagery & Provider badge */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-amber-100">
                <img
                  src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=900&q=80"
                  alt="Loving teacher and children learning together"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>

              {/* Provider note / certification callout */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-4 bg-[#FFFDF9] p-4 sm:p-5 rounded-2xl shadow-xl border-2 border-amber-300 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border border-amber-300">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      Massachusetts EEC
                    </div>
                    <div className="font-bold text-stone-900 text-sm">
                      Guardería Familiar Certificada
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Mission Story */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="prose prose-stone max-w-none text-base sm:text-lg leading-relaxed text-stone-700 space-y-4">
              <p>
                {t.about.p1.replace(/\*\*/g, '')}
              </p>
              <p className="bg-amber-50/80 p-4 rounded-2xl border-l-4 border-amber-500 text-amber-950 font-medium">
                {t.about.p2.replace(/\*\*/g, '')}
              </p>
            </div>

            {/* Quote box */}
            <div className="mt-6 p-5 rounded-2xl bg-orange-50/60 border border-orange-200/80 relative">
              <p className="italic text-stone-800 font-medium text-base mb-2">
                "{t.about.directorQuote}"
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800">
                <span>— {t.about.directorName}</span>
                <span>•</span>
                <span>PUERTAS ABIERTAS</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-8">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-stone-900 text-center mb-8">
            {t.about.pillarsTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="bg-stone-50/70 hover:bg-amber-50/60 transition-colors p-6 rounded-2xl border border-stone-200 hover:border-amber-300 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-2xs border border-stone-100 flex items-center justify-center mb-4">
                  {pillarIcons[idx]}
                </div>
                <h4 className="font-heading font-bold text-lg text-stone-900 mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
