import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Programs } from './components/Programs';
import { PhotoGallery } from './components/PhotoGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { EnrollmentForm } from './components/EnrollmentForm';
import { MapAndHours } from './components/MapAndHours';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('es');

  // Load language preference if available or default to Spanish
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('puertas_abiertas_lang') as Language;
      if (savedLang === 'es' || savedLang === 'en') {
        setCurrentLang(savedLang);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('puertas_abiertas_lang', lang);
    } catch {
      // ignore storage errors
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2D2721] flex flex-col font-sans selection:bg-amber-300 selection:text-amber-950">
      {/* Navigation Header with Language Toggle */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />

      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero currentLang={currentLang} />

        {/* Section 2: About Us */}
        <AboutUs currentLang={currentLang} />

        {/* Section 3: Our Programs */}
        <Programs currentLang={currentLang} />

        {/* Section 4: Photo Gallery */}
        <PhotoGallery currentLang={currentLang} />

        {/* Section 5: Why Choose Us */}
        <WhyChooseUs currentLang={currentLang} />

        {/* Section 6: Enrollment Form */}
        <EnrollmentForm currentLang={currentLang} />

        {/* Section 7: Map & Hours */}
        <MapAndHours currentLang={currentLang} />
      </main>

      {/* Section 8: Footer with WhatsApp */}
      <Footer currentLang={currentLang} />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp currentLang={currentLang} />
    </div>
  );
}
