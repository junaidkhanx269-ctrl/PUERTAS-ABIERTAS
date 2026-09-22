import React, { useState } from 'react';
import { Send, Phone, CheckCircle2, MessageSquare, Calendar, User, Baby, Sparkles, Clock, AlertCircle } from 'lucide-react';
import { Language, EnrollmentFormData } from '../types';
import { translations } from '../translations';
import { WhatsAppIcon } from './CuteDoodles';

interface EnrollmentFormProps {
  currentLang: Language;
}

export function EnrollmentForm({ currentLang }: EnrollmentFormProps) {
  const t = translations[currentLang];
  const [formData, setFormData] = useState<EnrollmentFormData>({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    preferredStartDate: '',
    preferredLanguage: currentLang === 'es' ? 'es' : 'en',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName.trim() || !formData.childAge.trim() || !formData.phone.trim()) {
      setErrorMsg(
        currentLang === 'es'
          ? 'Por favor complete su nombre, la edad de su niño(a) y su número de teléfono.'
          : 'Please enter your name, your child’s age, and your phone number.'
      );
      return;
    }

    // Record submission state
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const parent = formData.parentName || (currentLang === 'es' ? 'Padre de familia' : 'Parent');
    const age = formData.childAge || (currentLang === 'es' ? 'No especificada' : 'Not specified');
    const child = formData.childName ? ` (Niño/a: ${formData.childName})` : '';
    const phone = formData.phone ? ` | Tel: ${formData.phone}` : '';
    const date = formData.preferredStartDate ? ` | Inicio deseado: ${formData.preferredStartDate}` : '';
    const customMsg = formData.message ? `\n\nPregunta: ${formData.message}` : '';

    const text = currentLang === 'es'
      ? `Hola Puertas Abiertas Family Child Care! 👋\nMi nombre es ${parent}.\nEstoy interesado(a) en un cupo para mi hijo(a)${child}, edad: ${age}.${phone}${date}${customMsg}`
      : `Hello Puertas Abiertas Family Child Care! 👋\nMy name is ${parent}.\nI am inquiring about child care enrollment${child}, age: ${age}.${phone}${date}${customMsg}`;

    const url = `https://wa.me/18572588823?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="enrollment" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-950 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold border border-amber-300 mb-3">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>{t.enrollment.sectionBadge}</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-tight leading-tight">
            {t.enrollment.title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            {t.enrollment.subtitle}
          </p>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-[#FFFDF9] rounded-3xl p-6 sm:p-9 border-2 border-amber-200 shadow-xl">
            <div className="mb-6">
              <h3 className="font-heading font-extrabold text-2xl text-stone-900">
                {t.enrollment.formCardTitle}
              </h3>
              <p className="text-stone-600 text-sm mt-1">
                {t.enrollment.formCardSubtitle}
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-8 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-heading font-bold text-2xl text-emerald-950 mb-2">
                  {t.enrollment.successTitle}
                </h4>
                <p className="text-emerald-800 text-sm max-w-md mx-auto mb-6">
                  {t.enrollment.successMessage}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-xs text-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>{t.enrollment.btnWhatsAppDirect}</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        parentName: '',
                        childName: '',
                        childAge: '',
                        phone: '',
                        email: '',
                        preferredStartDate: '',
                        preferredLanguage: currentLang,
                        message: '',
                      });
                    }}
                    className="text-stone-600 hover:text-stone-900 text-xs font-bold underline"
                  >
                    {t.enrollment.resetBtn}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3.5 bg-rose-50 border border-rose-300 text-rose-800 rounded-xl text-xs font-bold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Parent Name */}
                <div>
                  <label htmlFor="parentName" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    {t.enrollment.labels.parentName}
                  </label>
                  <div className="relative">
                    <input
                      id="parentName"
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder={t.enrollment.placeholders.parentName}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm bg-white"
                    />
                  </div>
                </div>

                {/* Child Name & Child Age */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="childName" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      {t.enrollment.labels.childName}
                    </label>
                    <input
                      id="childName"
                      type="text"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      placeholder={t.enrollment.placeholders.childName}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="childAge" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      {t.enrollment.labels.childAge}
                    </label>
                    <input
                      id="childAge"
                      type="text"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      placeholder={t.enrollment.placeholders.childAge}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm bg-white"
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      {t.enrollment.labels.phone}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.enrollment.placeholders.phone}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      {t.enrollment.labels.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.enrollment.placeholders.email}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm bg-white"
                    />
                  </div>
                </div>

                {/* Preferred Start Date & Language */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredStartDate" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      {t.enrollment.labels.preferredStartDate}
                    </label>
                    <input
                      id="preferredStartDate"
                      type="text"
                      name="preferredStartDate"
                      value={formData.preferredStartDate}
                      onChange={handleChange}
                      placeholder={t.enrollment.placeholders.preferredStartDate}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredLanguage" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      {t.enrollment.labels.preferredLanguage}
                    </label>
                    <select
                      id="preferredLanguage"
                      name="preferredLanguage"
                      value={formData.preferredLanguage}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm bg-white"
                    >
                      <option value="es">{t.enrollment.languageOptions.es}</option>
                      <option value="en">{t.enrollment.languageOptions.en}</option>
                      <option value="both">{t.enrollment.languageOptions.both}</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    {t.enrollment.labels.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.enrollment.placeholders.message}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm bg-white"
                  />
                </div>

                <div className="text-[11px] text-stone-500 italic">
                  {t.enrollment.requiredNotice}
                </div>

                {/* Submit Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    id="submit-enrollment-form-btn"
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all text-sm active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.enrollment.btnSubmit}</span>
                  </button>

                  <button
                    id="whatsapp-direct-send-btn"
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all text-sm active:scale-98"
                    title="Send your inquiry directly to our WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>{t.enrollment.btnWhatsAppDirect}</span>
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Info & Peace of Mind Box */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Call Direct Card */}
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-amber-950 rounded-3xl p-7 shadow-xl">
              <h4 className="font-heading font-extrabold text-2xl text-amber-950 mb-2">
                {t.enrollment.contactDirectHeading}
              </h4>
              <p className="text-amber-950/80 text-sm mb-6 leading-relaxed">
                {t.enrollment.callDirectText}
              </p>

              <a
                id="enrollment-call-direct-link"
                href="tel:+18572588823"
                className="w-full flex items-center justify-center gap-3 bg-white hover:bg-amber-50 text-amber-950 font-extrabold py-3.5 rounded-2xl shadow-md transition-all text-base"
              >
                <Phone className="w-5 h-5 text-amber-600" />
                <span>+1 (857) 258-8823</span>
              </a>

              <p className="text-amber-950/70 text-xs text-center mt-3">
                Lunes a Viernes de 7:00 AM a 6:00 PM
              </p>
            </div>

            {/* Quick WhatsApp Direct Card */}
            <div className="bg-white rounded-3xl p-7 border-2 border-emerald-200 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-stone-900">
                    WhatsApp Chat
                  </h4>
                  <p className="text-xs text-stone-500">
                    Respuesta rápida para padres
                  </p>
                </div>
              </div>

              <p className="text-stone-600 text-sm mb-5 leading-relaxed">
                {t.enrollment.whatsAppDirectText}
              </p>

              <a
                id="enrollment-whatsapp-chat-link"
                href="https://wa.me/18572588823?text=Hola,%20quisiera%20consultar%20sobre%20inscripciones%20para%20mi%20hijo(a)%20en%20Puertas%20Abiertas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-2xl shadow-xs transition-all text-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chatear al (857) 258-8823</span>
              </a>
            </div>

            {/* Safety & License Trust Seal */}
            <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200 flex items-start gap-3">
              <div className="text-2xl shrink-0">🏡</div>
              <div className="text-xs text-stone-700 leading-relaxed">
                <strong className="text-amber-950 block mb-0.5">
                  Puertas Abiertas Family Child Care
                </strong>
                Licencia oficial de Massachusetts EEC. Espacio seguro, sanitizado y con cupos reducidos para asegurar el bienestar de cada niño.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
