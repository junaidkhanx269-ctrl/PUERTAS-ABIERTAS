import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, Star, Heart, MessageCircle, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { OpenDoorLogo, WhatsAppIcon } from './CuteDoodles';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Navbar({ currentLang, onLanguageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#programs", label: t.nav.programs },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#why-us", label: t.nav.whyUs },
    { href: "#enrollment", label: t.nav.enrollment },
    { href: "#location", label: t.nav.location },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification / Info Bar */}
      <div className="bg-amber-500 text-amber-950 px-4 py-1.5 text-xs sm:text-sm font-medium border-b border-amber-600/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-bold bg-amber-200/80 text-amber-900 px-2.5 py-0.5 rounded-full text-xs shadow-xs">
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              {t.topBar.latinaOwned}
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-amber-950">
              <Clock className="w-3.5 h-3.5 text-amber-800" />
              {t.topBar.hours}
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-amber-950">
              <MapPin className="w-3.5 h-3.5 text-amber-800" />
              {t.topBar.address}
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto sm:ml-0">
            <a
              id="top-phone-link"
              href="tel:+18572588823"
              className="inline-flex items-center gap-1.5 font-bold hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+1 (857) 258-8823</span>
            </a>

            {/* Language switch button in topbar */}
            <div className="inline-flex items-center bg-amber-600/30 rounded-full p-0.5 border border-amber-600/40">
              <button
                id="lang-btn-es-top"
                type="button"
                onClick={() => onLanguageChange('es')}
                className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all ${
                  currentLang === 'es'
                    ? 'bg-white text-amber-900 shadow-xs'
                    : 'text-amber-950 hover:text-white'
                }`}
                title="Cambiar a Español"
              >
                ES
              </button>
              <button
                id="lang-btn-en-top"
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all ${
                  currentLang === 'en'
                    ? 'bg-white text-amber-900 shadow-xs'
                    : 'text-amber-950 hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-md py-2.5 border-b border-amber-100'
            : 'bg-[#FFFDF9] py-3.5 border-b border-amber-100/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a id="brand-logo-link" href="#" className="flex items-center gap-3 group">
            <OpenDoorLogo className="w-11 h-11 sm:w-12 sm:h-12 drop-shadow-xs transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-lg sm:text-xl tracking-wide text-amber-950 leading-tight">
                  PUERTAS ABIERTAS
                </span>
                <span className="hidden sm:inline-flex items-center gap-0.5 bg-amber-100 text-amber-800 text-[11px] font-bold px-1.5 py-0.5 rounded-md border border-amber-200">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  5-Star
                </span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-amber-700 tracking-wider uppercase">
                Family Child Care
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-stone-700 hover:text-amber-700 transition-colors py-1 relative hover:after:w-full after:transition-all after:duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Language Switch */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Desktop Language Selector Pill */}
            <div
              id="desktop-lang-selector"
              className="flex items-center bg-stone-100/90 rounded-full p-1 border border-stone-200"
              title="Select Language / Cambiar Idioma"
            >
              <Globe className="w-3.5 h-3.5 text-stone-500 ml-1.5 mr-1" />
              <button
                id="lang-toggle-es"
                onClick={() => onLanguageChange('es')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                  currentLang === 'es'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Español
              </button>
              <button
                id="lang-toggle-en"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                  currentLang === 'en'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                English
              </button>
            </div>

            {/* Direct Call Button */}
            <a
              id="nav-call-button"
              href="tel:+18572588823"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold text-sm px-4 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 fill-amber-950/20" />
              <span>{t.nav.callNow}</span>
            </a>

            {/* Quick WhatsApp Header Link */}
            <a
              id="nav-whatsapp-button"
              href="https://wa.me/18572588823?text=Hola,%20quisiera%20información%20sobre%20inscripciones%20en%20Puertas%20Abiertas%20Child%20Care"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xs hover:shadow-md transition-all active:scale-95"
              title="WhatsApp +1 (857) 258-8823"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button & Mobile Lang Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex sm:hidden items-center bg-stone-100 rounded-full p-0.5 border border-stone-200">
              <button
                onClick={() => onLanguageChange('es')}
                className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                  currentLang === 'es' ? 'bg-amber-500 text-white' : 'text-stone-600'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                  currentLang === 'en' ? 'bg-amber-500 text-white' : 'text-stone-600'
                }`}
              >
                EN
              </button>
            </div>

            <a
              id="mobile-phone-shortcut"
              href="tel:+18572588823"
              className="sm:hidden p-2 rounded-full bg-amber-500 text-amber-950"
              aria-label="Call daycare"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-amber-100/70 text-amber-900 hover:bg-amber-200 transition-colors"
              aria-label={mobileMenuOpen ? t.nav.close : t.nav.menu}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#FFFDF9] border-b border-amber-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg font-bold text-stone-700 hover:bg-amber-50 hover:text-amber-900 transition-colors text-base"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-amber-100 flex flex-col gap-2.5">
              <a
                id="mobile-drawer-call-btn"
                href="tel:+18572588823"
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold py-3 rounded-xl shadow-xs text-base"
              >
                <Phone className="w-5 h-5" />
                {t.nav.callNow}: +1 (857) 258-8823
              </a>
              <a
                id="mobile-drawer-whatsapp-btn"
                href="https://wa.me/18572588823?text=Hola,%20quisiera%20información%20sobre%20inscripciones%20en%20Puertas%20Abiertas%20Child%20Care"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-xs text-base"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp: (857) 258-8823
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
