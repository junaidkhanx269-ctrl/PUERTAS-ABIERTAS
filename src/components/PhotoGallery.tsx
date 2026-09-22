import React, { useState } from 'react';
import { Camera, X, ZoomIn, Heart, Sparkles } from 'lucide-react';
import { Language, GalleryPhoto } from '../types';
import { translations } from '../translations';

interface PhotoGalleryProps {
  currentLang: Language;
}

export function PhotoGallery({ currentLang }: PhotoGalleryProps) {
  const t = translations[currentLang];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const galleryData: GalleryPhoto[] = [
    {
      id: 'photo-1',
      url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80',
      title: currentLang === 'es' ? 'Arte y Creatividad con Colores' : 'Creative Arts & Finger Painting',
      category: 'creative',
      categoryLabel: currentLang === 'es' ? 'Arte' : 'Art',
      description: currentLang === 'es' 
        ? 'Exploración artística con materiales no tóxicos fomentando la motricidad fina y expresión propia.' 
        : 'Artistic exploration using non-toxic materials promoting fine motor coordination and self-expression.',
    },
    {
      id: 'photo-2',
      url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80',
      title: currentLang === 'es' ? 'Sonrisas y Confianza en Cada Paso' : 'Warm Smiles & Everyday Joy',
      category: 'learning',
      categoryLabel: currentLang === 'es' ? 'Aprendizaje' : 'Learning',
      description: currentLang === 'es'
        ? 'Un ambiente donde cada niño es recibido con una sonrisa y se siente amado y seguro.'
        : 'An environment where every child is welcomed with open arms and feels safe, cherished, and happy.',
    },
    {
      id: 'photo-3',
      url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
      title: currentLang === 'es' ? 'Hora del Cuento Bilingüe' : 'Bilingual Circle Time & Stories',
      category: 'learning',
      categoryLabel: currentLang === 'es' ? 'Lectura' : 'Reading',
      description: currentLang === 'es'
        ? 'Lectura interactiva en inglés y español para estimular la imaginación, vocabulario y amor por los libros.'
        : 'Interactive story hour in English and Spanish to foster imagination, vocabulary, and a lifelong love for books.',
    },
    {
      id: 'photo-4',
      url: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=1000&q=80',
      title: currentLang === 'es' ? 'Juegos y Amistades al Aire Libre' : 'Outdoor Sunshine & Fresh Air Play',
      category: 'outdoor',
      categoryLabel: currentLang === 'es' ? 'Juego Libre' : 'Outdoor',
      description: currentLang === 'es'
        ? 'Área de juego exterior segura y protegida para correr, saltar y desarrollar destrezas motoras.'
        : 'Secure fenced outdoor play area for running, jumping, balance games, and getting fresh healthy air.',
    },
    {
      id: 'photo-5',
      url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80',
      title: currentLang === 'es' ? 'Juegos de Construcción y Bloques' : 'Building Blocks & STEM Play',
      category: 'creative',
      categoryLabel: currentLang === 'es' ? 'Construcción' : 'Building',
      description: currentLang === 'es'
        ? 'Aprendiendo sobre formas, tamaños, equilibrio y colaboración mientras construimos juntos.'
        : 'Learning about shapes, gravity, balance, and cooperative play while building fun towers together.',
    },
    {
      id: 'photo-6',
      url: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=1000&q=80',
      title: currentLang === 'es' ? 'Alimentación Nutritiva y Casera' : 'Fresh, Wholesome Meals & Snacks',
      category: 'meals',
      categoryLabel: currentLang === 'es' ? 'Nutrición' : 'Nutrition',
      description: currentLang === 'es'
        ? 'Menús diarios balanceados con frutas frescas, vegetales y recetas caseras hechas con mucho amor.'
        : 'Balanced daily menus featuring fresh fruits, vegetables, and warm home-cooked meals prepared with love.',
    },
  ];

  const filteredPhotos = activeCategory === 'all'
    ? galleryData
    : galleryData.filter(photo => photo.category === activeCategory);

  const categories = [
    { id: 'all', label: t.gallery.filterAll },
    { id: 'learning', label: t.gallery.filterLearning },
    { id: 'creative', label: t.gallery.filterCreative },
    { id: 'outdoor', label: t.gallery.filterOutdoor },
    { id: 'meals', label: t.gallery.filterMeals },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-yellow-100/90 text-yellow-950 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold border border-yellow-300 mb-3">
            <Camera className="w-4 h-4 text-amber-600" />
            <span>{t.gallery.sectionBadge}</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-tight leading-tight">
            {t.gallery.title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            {t.gallery.subtitle}
          </p>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-amber-950 shadow-xs scale-105'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-3xl overflow-hidden bg-stone-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-amber-100/80"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Category Pill on top right */}
              <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-xs text-amber-950 text-xs font-extrabold px-2.5 py-1 rounded-full shadow-xs border border-amber-200">
                {photo.categoryLabel}
              </div>

              {/* Bottom Card Title */}
              <div className="p-4 bg-white">
                <h3 className="font-heading font-bold text-stone-900 text-base group-hover:text-amber-700 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                  {photo.description}
                </p>
                <div className="mt-2.5 flex items-center gap-1 text-xs font-bold text-amber-600">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>{t.gallery.clickToZoom}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl border-4 border-amber-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
              aria-label={t.gallery.closePreview}
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="w-full max-h-[60vh] object-cover"
            />

            <div className="p-6 bg-white">
              <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded-md mb-2">
                {selectedPhoto.categoryLabel}
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-stone-900 mb-2">
                {selectedPhoto.title}
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                {selectedPhoto.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-stone-100 text-xs text-stone-500">
                <span>PUERTAS ABIERTAS Family Child Care</span>
                <span>Roslindale, MA</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
