import React, { useState } from 'react';
import { Baby, Shapes, BookOpen, Clock, Users, Check, Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface ProgramsProps {
  currentLang: Language;
}

export function Programs({ currentLang }: ProgramsProps) {
  const t = translations[currentLang];
  const [selectedProgram, setSelectedProgram] = useState<string>('infants');

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'baby':
        return <Baby className="w-6 h-6 text-amber-600" />;
      case 'shapes':
        return <Shapes className="w-6 h-6 text-orange-600" />;
      case 'book-open':
      default:
        return <BookOpen className="w-6 h-6 text-yellow-600" />;
    }
  };

  return (
    <section id="programs" className="py-16 md:py-24 bg-gradient-to-b from-[#FFFDF9] to-amber-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-100/90 text-orange-950 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold border border-orange-200 mb-3">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>{t.programs.sectionBadge}</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-tight leading-tight">
            {t.programs.title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            {t.programs.subtitle}
          </p>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Programs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.programs.items.map((program) => {
            const isSelected = selectedProgram === program.id;
            return (
              <div
                key={program.id}
                onClick={() => setSelectedProgram(program.id)}
                className={`cursor-pointer rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between border-2 bg-white shadow-md hover:shadow-xl transform hover:-translate-y-1 ${
                  isSelected ? 'border-amber-400 ring-4 ring-amber-100' : 'border-stone-200/80'
                }`}
              >
                <div>
                  {/* Top Bar with Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${program.colorTheme.badgeBg} ${program.colorTheme.badgeText} border border-amber-200`}>
                      {program.badge}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                      {getProgramIcon(program.iconName)}
                    </div>
                  </div>

                  {/* Title & Age */}
                  <h3 className="font-heading font-bold text-2xl text-stone-900 mb-1">
                    {program.title}
                  </h3>
                  <div className="inline-block bg-stone-100 text-stone-700 text-xs font-bold px-2.5 py-0.5 rounded-md mb-4">
                    🎂 {program.age}
                  </div>

                  {/* Description */}
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mb-6 pt-4 border-t border-stone-100">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-500 mb-3">
                      {t.programs.curriculumIncludes}
                    </h4>
                    <ul className="space-y-2.5">
                      {program.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                          <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card Footer with Hours & CTA */}
                <div className="pt-4 border-t border-stone-100">
                  <div className="flex items-center justify-between text-xs text-stone-600 mb-4 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      7:00 AM – 6:00 PM
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-orange-600" />
                      {program.ratio}
                    </span>
                  </div>

                  <a
                    href="#enrollment"
                    className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold py-2.5 rounded-xl text-sm transition-colors shadow-2xs"
                  >
                    <span>{t.programs.inquireBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border-2 border-amber-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="text-3xl">🧸</span>
            <div>
              <div className="font-heading font-bold text-stone-900 text-base">
                ¿Tiene dudas sobre cuál programa corresponde a su niño(a)?
              </div>
              <div className="text-stone-600 text-sm">
                Con gusto le orientamos y coordinamos una visita personalizada para conocer nuestras instalaciones.
              </div>
            </div>
          </div>
          <a
            href="tel:+18572588823"
            className="shrink-0 bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
          >
            Llamar al +1 (857) 258-8823
          </a>
        </div>

      </div>
    </section>
  );
}
