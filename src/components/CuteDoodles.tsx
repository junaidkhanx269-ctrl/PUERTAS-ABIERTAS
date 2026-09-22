import React from 'react';

export function OpenDoorLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Warm background circle */}
      <circle cx="32" cy="32" r="30" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2.5" />
      {/* Sun rays above the door */}
      <path d="M32 10V14" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M46 16L43 19" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 16L21 19" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Door frame */}
      <rect x="18" y="20" width="28" height="34" rx="14" fill="#FDE68A" stroke="#D97706" strokeWidth="2.5" />
      {/* Open door swinging inward to reveal sunshine inside */}
      <path d="M22 23C22 23 27 22 34 25V54H22V23Z" fill="#FBBF24" />
      <path d="M22 23V54H34V25C27 22 22 23 22 23Z" stroke="#B45309" strokeWidth="2" />
      {/* Golden door knob */}
      <circle cx="30" cy="38" r="2" fill="#78350F" />
      {/* Little heart on door representing love & learning */}
      <path d="M26 31C26 29.8954 26.8954 29 28 29C29.1046 29 30 29.8954 30 31C30 32.5 28 34 28 34C28 34 26 32.5 26 31Z" fill="#EF4444" />
      {/* Little green plant leaf at base */}
      <path d="M42 54C42 49 46 48 48 50C48 52 46 54 42 54Z" fill="#10B981" />
    </svg>
  );
}

export function SmilingSun({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="28" fill="#FBBF24" />
      <circle cx="50" cy="50" r="24" fill="#FCD34D" />
      {/* Sun rays */}
      <g stroke="#F59E0B" strokeWidth="4" strokeLinecap="round">
        <line x1="50" y1="8" x2="50" y2="18" />
        <line x1="50" y1="82" x2="50" y2="92" />
        <line x1="8" y1="50" x2="18" y2="50" />
        <line x1="82" y1="50" x2="92" y2="50" />
        <line x1="20" y1="20" x2="27" y2="27" />
        <line x1="73" y1="73" x2="80" y2="80" />
        <line x1="20" y1="80" x2="27" y2="73" />
        <line x1="73" y1="27" x2="80" y2="20" />
      </g>
      {/* Cute eyes */}
      <circle cx="42" cy="46" r="3" fill="#78350F" />
      <circle cx="58" cy="46" r="3" fill="#78350F" />
      {/* Rosy cheeks */}
      <circle cx="36" cy="52" r="3.5" fill="#F87171" fillOpacity="0.6" />
      <circle cx="64" cy="52" r="3.5" fill="#F87171" fillOpacity="0.6" />
      {/* Warm smile */}
      <path d="M44 54C47 58 53 58 56 54" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function CuteRainbow({ className = "w-20 h-14" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 65C10 37.3858 32.3858 15 60 15C87.6142 15 110 37.3858 110 65" stroke="#F87171" strokeWidth="8" strokeLinecap="round" />
      <path d="M22 65C22 44.0132 39.0132 27 60 27C80.9868 27 98 44.0132 98 65" stroke="#FBBF24" strokeWidth="8" strokeLinecap="round" />
      <path d="M34 65C34 50.6406 45.6406 39 60 39C74.3594 39 86 50.6406 86 65" stroke="#34D399" strokeWidth="8" strokeLinecap="round" />
      <path d="M46 65C46 57.268 52.268 51 60 51C67.732 51 74 57.268 74 65" stroke="#60A5FA" strokeWidth="8" strokeLinecap="round" />
      {/* Clouds at base */}
      <circle cx="16" cy="65" r="10" fill="#FFFFFF" />
      <circle cx="26" cy="63" r="8" fill="#FFFFFF" />
      <circle cx="104" cy="65" r="10" fill="#FFFFFF" />
      <circle cx="94" cy="63" r="8" fill="#FFFFFF" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.414z" />
    </svg>
  );
}
