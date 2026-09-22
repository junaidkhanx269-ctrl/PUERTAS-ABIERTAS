import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, Car, Check } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface MapAndHoursProps {
  currentLang: Language;
}

export function MapAndHours({ currentLang }: MapAndHoursProps) {
  const t = translations[currentLang];
  const fullAddress = "90 Archadale Rd, Roslindale, MA 02131";
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
  const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;

  return (
    <section id="location" className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-950 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold border border-amber-300 mb-3">
            <MapPin className="w-4 h-4 text-amber-700" />
            <span>{t.location.sectionBadge}</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-tight leading-tight">
            {t.location.title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            {t.location.subtitle}
          </p>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Details Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0 text-amber-700">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-stone-900 mb-1">
                    {t.location.addressTitle}
                  </h3>
                  <p className="font-bold text-stone-800 text-base">
                    {t.location.addressLine1}
                  </p>
                  <p className="text-stone-600 text-sm">
                    {t.location.addressLine2}
                  </p>

                  <a
                    id="maps-directions-link"
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-extrabold text-amber-700 hover:text-amber-900 underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{t.location.directionsBtn}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0 text-orange-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                    {t.location.hoursTitle}
                  </h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between py-1.5 border-b border-stone-100">
                      <span className="font-bold text-stone-800">{t.location.hoursDays}</span>
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                        {t.location.hoursTime}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1.5 text-stone-500 text-xs">
                      <span>{t.location.weekendDays}</span>
                      <span className="italic">{t.location.weekendClosed}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking & Neighborhood Info */}
            <div className="bg-amber-100/60 rounded-3xl p-6 border border-amber-300/80">
              <div className="flex items-center gap-2 text-amber-950 font-bold text-sm mb-2">
                <Car className="w-4 h-4 text-amber-700" />
                <span>Estacionamiento & Accesibilidad</span>
              </div>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-3">
                {t.location.neighborhoodNote}
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs text-amber-900 font-medium">
                <span className="bg-white/80 px-2.5 py-1 rounded-lg border border-amber-200">✓ Fácil drop-off</span>
                <span className="bg-white/80 px-2.5 py-1 rounded-lg border border-amber-200">✓ Calle residencial segura</span>
                <span className="bg-white/80 px-2.5 py-1 rounded-lg border border-amber-200">✓ Cerca de Forest Hills</span>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-amber-200 h-full min-h-[380px] flex flex-col">
              
              {/* Map View Header */}
              <div className="bg-amber-50 px-5 py-3 border-b border-amber-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-heading font-bold text-stone-800 text-xs sm:text-sm">
                    90 Archadale Rd, Roslindale, MA 02131
                  </span>
                </div>
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-amber-500 hover:bg-amber-600 text-amber-950 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Cómo llegar</span>
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative w-full flex-1 min-h-[320px] bg-stone-100">
                <iframe
                  title="Puertas Abiertas Family Child Care Location Map"
                  src={googleMapsEmbedUrl}
                  className="w-full h-full border-0 absolute inset-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
