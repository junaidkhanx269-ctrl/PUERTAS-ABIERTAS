import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { WhatsAppIcon } from './CuteDoodles';

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export function FloatingWhatsApp({ currentLang }: FloatingWhatsAppProps) {
  const t = translations[currentLang];
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2"
    >
      {/* Friendly Chat Bubble */}
      {showTooltip && (
        <div className="bg-white text-stone-800 p-3.5 rounded-2xl shadow-xl border-2 border-emerald-300 max-w-[240px] relative animate-in fade-in slide-in-from-bottom-3 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-600 flex items-center justify-center text-xs"
            aria-label="Cerrar mensaje"
          >
            <X className="w-3 h-3" />
          </button>

          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
              En línea / Online
            </span>
          </div>

          <p className="text-xs font-bold text-stone-900 leading-tight">
            {t.floatingWhatsApp.tooltipTitle}
          </p>
          <p className="text-[11px] text-stone-600 mt-1">
            {t.floatingWhatsApp.tooltipSubtitle}
          </p>

          {/* Little tail pointing to button */}
          <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white border-r-2 border-b-2 border-emerald-300 transform rotate-45" />
        </div>
      )}

      {/* Floating Circle Button */}
      <a
        id="floating-whatsapp-button"
        href="https://wa.me/18572588823?text=Hola,%20quisiera%20información%20sobre%20inscripciones%20en%20Puertas%20Abiertas%20Child%20Care"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floatingWhatsApp.ariaLabel}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
      >
        <WhatsAppIcon className="w-8 h-8 drop-shadow-xs" />
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping -z-10" />
      </a>
    </div>
  );
}
