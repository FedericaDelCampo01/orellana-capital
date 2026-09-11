'use client'

import { FormEvent, useState } from 'react';
import { trackEvent } from '../Utility/AnalyticsHelpers';
import Image from 'next/image';

const inputBaseClass = "appearance-none block w-full bg-light-blue/40 text-dark-blue rounded-lg py-3.5 px-5 leading-tight font-body transition duration-200 focus:outline-none focus:bg-white focus:border-blue focus:ring-2 focus:ring-blue/20";
const labelClass = "block text-xs uppercase tracking-[0.15em] text-blue font-semibold font-body mb-2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear this field's error as soon as the user corrects it
    setErrors(prev => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Ingresá tu nombre';
    if (!formData.email) newErrors.email = 'Ingresá tu email';
    if (!formData.message) newErrors.message = 'Escribí tu mensaje';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    trackEvent('button_click', {
      button_name: 'Contact Form Sent',
      section: 'Contact'
    });

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await response.json();

      setSuccessMessage('¡Mensaje enviado! Te vamos a responder a la brevedad.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Error:', error);
      setSubmitError('No pudimos enviar tu mensaje. Probá de nuevo o escribínos directamente por email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className="bg-light-blue overflow-hidden">
      <div className="container max-w-6xl mx-auto md:py-16 flex flex-col md:flex-row items-center md:items-start relative my-10 md:my-20 md:space-x-20 px-4">

        <div className="w-full md:w-1/2 flex flex-col px-4 md:px-0">
          <h2 className="text-blue font-bold font-h2 mb-2 fade-up-init">Orellana Capital</h2>
          <h3 className="text-dark-blue text-xl md:text-3xl font-bold font-h3 fade-up-init">Contacto</h3>

          <div className="h-[3px] w-12 bg-blue rounded-full my-6" />

          <p className="text-dark-blue font-light font-body leading-relaxed fade-up-init">
            Nos encantaría ayudarte a alcanzar tus objetivos financieros. Escribínos para solicitar una consulta personalizada.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="mailto:alejandro@orellanacapitaladvisors.com"
              className="group flex items-center gap-4 bg-white rounded-xl px-5 py-4 ring-1 ring-dark-blue/5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-dark-blue/10 fade-up-init"
            >
              <span className="h-11 w-11 rounded-lg bg-light-blue flex items-center justify-center shrink-0">
                <Image src="/images/email-icon.webp" width={22} height={22} alt="" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-[0.15em] text-blue font-semibold font-body">Email</span>
                <span className="block text-dark-blue font-light font-body mt-1 break-all">alejandro@orellanacapitaladvisors.com</span>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto shrink-0 text-blue transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6l6 6-6 6" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/alejandro-hughes-stefani-9b501a48/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white rounded-xl px-5 py-4 ring-1 ring-dark-blue/5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-dark-blue/10 fade-up-init"
            >
              <span className="h-11 w-11 rounded-lg bg-light-blue flex items-center justify-center shrink-0">
                <Image src="/images/linkedin-icon.webp" width={22} height={22} alt="" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-[0.15em] text-blue font-semibold font-body">LinkedIn</span>
                <span className="block text-dark-blue font-light font-body mt-1">Alejandro Hughes</span>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto shrink-0 text-blue transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 md:mt-0 w-full md:w-1/2">
          <form
            className="bg-white rounded-2xl shadow-xl shadow-dark-blue/10 ring-1 ring-dark-blue/5 p-6 md:p-8 font-body font-light fade-up-init"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="mb-5">
              <label htmlFor="name" className={labelClass}>Nombre y apellido</label>
              <input
                id="name"
                className={`${inputBaseClass} border ${errors.name ? 'border-red-400' : 'border-dark-blue/10'}`}
                type="text"
                placeholder="Tu nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
            </div>

            <div className="mb-5">
              <label htmlFor="email" className={labelClass}>Email</label>
              <input
                id="email"
                className={`${inputBaseClass} border ${errors.email ? 'border-red-400' : 'border-dark-blue/10'}`}
                type="email"
                placeholder="tu@email.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
            </div>

            <div className="mb-5">
              <label htmlFor="phone" className={labelClass}>
                Teléfono <span className="normal-case tracking-normal text-dark-blue/40 font-light">(opcional)</span>
              </label>
              <input
                id="phone"
                className={`${inputBaseClass} border border-dark-blue/10`}
                type="tel"
                placeholder="+598 ..."
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className={labelClass}>Mensaje</label>
              <textarea
                id="message"
                className={`${inputBaseClass} border ${errors.message ? 'border-red-400' : 'border-dark-blue/10'} h-36 resize-none no-resize`}
                placeholder="Contanos brevemente en qué podemos ayudarte"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-red-500 text-xs mt-2">{errors.message}</p>}
            </div>

            {successMessage && (
              <div className="bg-green-50 border border-green-200 text-green-800 text-sm p-4 rounded-lg text-center mb-4">
                {successMessage}
              </div>
            )}

            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-4 rounded-lg text-center mb-4">
                {submitError}
              </div>
            )}

            <button
              className="group w-full inline-flex items-center justify-center gap-3 py-4 bg-dark-blue text-white hover:bg-blue duration-300 rounded-lg font-semibold font-body shadow-lg shadow-dark-blue/20 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
              {!isSubmitting && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
