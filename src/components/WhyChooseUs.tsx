import React from 'react';
import { Star, Globe, ShieldCheck, Home, Utensils, HeartHandshake, Quote, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface WhyChooseUsProps {
  currentLang: Language;
}

export function WhyChooseUs({ currentLang }: WhyChooseUsProps) {
  const t = translations[currentLang];

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'star':
        return <Star className="w-6 h-6 text-amber-500 fill-amber-500" />;
      case 'languages':
        return <Globe className="w-6 h-6 text-orange-500" />;
      case 'shield-check':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'home':
        return <Home className="w-6 h-6 text-yellow-600" />;
      case 'utensils':
        return <Utensils className="w-6 h-6 text-rose-500" />;
      case 'heart-handshake':
      default:
        return <HeartHandshake className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="why-us" className="py-16 md:py-24 bg-amber-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-amber-200/80 text-amber-950 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold border border-amber-300 mb-3">
            <Star className="w-4 h-4 fill-amber-600 text-amber-600" />
            <span>{t.whyUs.sectionBadge}</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-tight leading-tight">
            {t.whyUs.title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            {t.whyUs.subtitle}
          </p>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Key Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.whyUs.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-100 hover:border-amber-300 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  {pillar.badge && (
                    <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                      {pillar.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-bold text-xl text-stone-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                <CheckCircle className="w-4 h-4" />
                <span>Garantizado en Puertas Abiertas</span>
              </div>
            </div>
          ))}
        </div>

        {/* Parent Testimonials Box */}
        <div className="mt-8 bg-white rounded-3xl p-8 sm:p-10 border-2 border-amber-200 shadow-md">
          <h3 className="font-heading font-extrabold text-2xl text-stone-900 text-center mb-8">
            {t.whyUs.reviewsTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.whyUs.reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-amber-50/40 rounded-2xl p-6 border border-amber-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-stone-700 text-sm italic leading-relaxed mb-4">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-200/60">
                  <div className="font-bold text-stone-900 text-sm">{rev.author}</div>
                  <div className="text-stone-500 text-xs">{rev.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
