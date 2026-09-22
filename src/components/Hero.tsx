import React from 'react';
import { Phone, Star, ShieldCheck, Heart, Sparkles, MapPin, Clock, Calendar, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { OpenDoorLogo, SmilingSun, CuteRainbow, WhatsAppIcon } from './CuteDoodles';

interface HeroProps {
  currentLang: Language;
}

export function Hero({ currentLang }: HeroProps) {
  const t = translations[currentLang];

  return (
    <section id="hero-section" className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-amber-50/70 via-[#FFFDF9] to-amber-50/30">
      {/* Decorative Warm Shapes & SVG motifs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden -z-10 opacity-70">
        <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute top-48 -left-20 w-80 h-80 rounded-full bg-orange-200/35 blur-3xl" />
        <div className="absolute top-10 right-10 hidden md:block">
          <SmilingSun className="w-24 h-24 animate-pulse duration-1000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Headline, Badges, Tagline, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Trust Pill & Latina-Owned Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs sm:text-sm font-bold border border-amber-300 shadow-2xs">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span>{t.hero.badgeRating}</span>
              </span>

              <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-900 px-2.5 py-1 rounded-full text-xs font-bold border border-orange-200">
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                {t.hero.latinaBadge}
              </span>

              <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-full text-xs font-bold border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                {t.hero.licensedBadge}
              </span>
            </div>

            {/* Daycare Name & Tagline */}
            <div className="flex items-center gap-3 mb-2">
              <OpenDoorLogo className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 drop-shadow-sm" />
              <div>
                <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-amber-950 tracking-tight leading-none">
                  PUERTAS ABIERTAS
                </h1>
                <p className="text-sm sm:text-base md:text-lg font-bold text-amber-700 tracking-wider uppercase mt-0.5">
                  Family Child Care • Roslindale, MA
                </p>
              </div>
            </div>

            {/* Tagline Callout */}
            <div className="my-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-100/80 via-orange-100/60 to-yellow-100/70 border-2 border-amber-300 shadow-xs w-full">
              <p className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-amber-950 leading-snug">
                "{t.hero.tagline}"
              </p>
            </div>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed mb-6 max-w-2xl">
              {t.hero.lead}
            </p>

            {/* Main Action Buttons: Call Now + WhatsApp + Schedule Tour */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              {/* Call Now Button */}
              <a
                id="hero-call-btn"
                href="tel:+18572588823"
                className="inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-600 text-amber-950 font-extrabold text-base px-6 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <Phone className="w-5 h-5 fill-amber-950/20" />
                <span>{t.hero.btnCall}</span>
              </a>

              {/* WhatsApp Button */}
              <a
                id="hero-whatsapp-btn"
                href="https://wa.me/18572588823?text=Hola,%20quisiera%20información%20sobre%20inscripciones%20en%20Puertas%20Abiertas%20Child%20Care"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base px-6 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>{t.hero.btnWhatsApp}</span>
              </a>

              {/* Tour Scroll Link */}
              <a
                id="hero-tour-btn"
                href="#enrollment"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-amber-50 text-stone-800 font-bold text-sm px-5 py-3.5 rounded-2xl border-2 border-stone-200 hover:border-amber-300 shadow-xs transition-all text-center"
              >
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>{t.hero.btnSchedule}</span>
              </a>
            </div>

            {/* Quick Details Pills (Address, Hours, Ages) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full pt-4 border-t border-amber-200/80">
              <div className="flex items-center gap-2 bg-white/90 p-2.5 rounded-xl border border-amber-100 shadow-2xs">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                <div className="text-xs">
                  <div className="font-extrabold text-amber-950">5 Estrellas</div>
                  <div className="text-stone-500 text-[11px]">{t.hero.quickFacts.stars}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/90 p-2.5 rounded-xl border border-amber-100 shadow-2xs">
                <Sparkles className="w-4 h-4 text-orange-500 shrink-0" />
                <div className="text-xs">
                  <div className="font-extrabold text-amber-950">Bilingüe</div>
                  <div className="text-stone-500 text-[11px]">{t.hero.quickFacts.bilingual}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/90 p-2.5 rounded-xl border border-amber-100 shadow-2xs">
                <Heart className="w-4 h-4 text-rose-500 shrink-0" />
                <div className="text-xs">
                  <div className="font-extrabold text-amber-950">6 sem – 5 años</div>
                  <div className="text-stone-500 text-[11px]">{t.hero.quickFacts.ages}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/90 p-2.5 rounded-xl border border-amber-100 shadow-2xs">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <div className="text-xs">
                  <div className="font-extrabold text-amber-950">7am – 6pm</div>
                  <div className="text-stone-500 text-[11px]">Lun – Vie</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Heartwarming Photo & Illustrated Daycare Scene */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80"
                  alt="Happy children learning and drawing at daycare"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                
                {/* Warm overlay gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                      <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
                      Roslindale, MA 02131
                    </div>
                    <p className="font-heading text-lg font-bold leading-tight">
                      Amor, diversión y estimulación bilingüe cada día
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Nutritious meals */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-xs py-2 px-3.5 rounded-2xl shadow-lg border-2 border-amber-200 flex items-center gap-2 transform -rotate-2">
                <span className="text-xl">🍎</span>
                <span className="text-xs font-bold text-amber-950">{t.hero.floatingBadge1}</span>
              </div>

              {/* Floating Badge 2: Rainbow & Clean environment */}
              <div className="absolute -bottom-5 -right-3 bg-white/95 backdrop-blur-xs py-2 px-3.5 rounded-2xl shadow-lg border-2 border-orange-200 flex items-center gap-2 transform rotate-1">
                <CuteRainbow className="w-10 h-7" />
                <span className="text-xs font-bold text-stone-800">{t.hero.floatingBadge2}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
