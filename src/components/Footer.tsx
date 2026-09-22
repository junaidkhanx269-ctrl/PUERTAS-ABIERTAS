import React from 'react';
import { Phone, MapPin, Clock, Heart, Star, ShieldCheck, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { OpenDoorLogo, WhatsAppIcon } from './CuteDoodles';

interface FooterProps {
  currentLang: Language;
}

export function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t-4 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <OpenDoorLogo className="w-12 h-12" />
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-wide block">
                  PUERTAS ABIERTAS
                </span>
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                  Family Child Care • Roslindale, MA
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed mb-4 max-w-sm">
              "{t.footer.tagline}"
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1 bg-amber-950 text-amber-300 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-800">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                5-Star Child Care
              </span>
              <span className="inline-flex items-center gap-1 bg-rose-950 text-rose-300 text-xs font-bold px-2.5 py-1 rounded-full border border-rose-800">
                <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
                Latina-Owned
              </span>
              <span className="inline-flex items-center gap-1 bg-emerald-950 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                MA EEC Licensed
              </span>
            </div>

            {/* Direct WhatsApp Call to Action in Footer */}
            <a
              id="footer-whatsapp-btn"
              href="https://wa.me/18572588823?text=Hola,%20quisiera%20información%20sobre%20inscripciones%20en%20Puertas%20Abiertas%20Child%20Care"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-5 py-3 rounded-2xl shadow-md transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>{t.footer.chatWithUs}: (857) 258-8823</span>
            </a>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-white text-base mb-4 tracking-wider uppercase">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">
                  {t.nav.programs}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">
                  {t.nav.whyUs}
                </a>
              </li>
              <li>
                <a href="#enrollment" className="hover:text-amber-400 transition-colors">
                  {t.nav.enrollment}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  {t.nav.location}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="lg:col-span-4">
            <h4 className="font-heading font-bold text-white text-base mb-4 tracking-wider uppercase">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-3.5 text-sm">
              <a
                href="tel:+18572588823"
                className="flex items-start gap-3 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <div>
                  <div className="font-bold text-white">+1 (857) 258-8823</div>
                  <div className="text-xs text-stone-400">Llamadas y WhatsApp</div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <div>
                  <div className="font-bold text-white">90 Archadale Rd</div>
                  <div className="text-xs text-stone-400">Roslindale, MA 02131</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <div>
                  <div className="font-bold text-white">Lunes a Viernes</div>
                  <div className="text-xs text-stone-400">7:00 AM – 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} PUERTAS ABIERTAS Family Child Care. {t.footer.rights}
          </p>

          <p className="text-center sm:text-right text-stone-400 max-w-md">
            {t.footer.licensedNotice}
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors"
            title="Volver arriba"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
