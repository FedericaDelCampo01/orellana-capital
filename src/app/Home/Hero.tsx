'use client'

import React from 'react';
import { trackEvent } from '../Utility/AnalyticsHelpers';
import { scrollToSection } from '../Utility/ScrollHelpers';

const handleHeroClick = () => {
  trackEvent('button_click', {
    button_name: 'Free Consultation',
    section: 'Hero'
  });

  scrollToSection('services')
};

const Hero = () => {
  return (
    <>
    <section className="relative z-10 flex flex-col bg-transparent items-center justify-center">
      <div className="flex flex-col text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 md:my-52 my-24">

        <div className="flex items-center justify-center gap-4 mb-8 fade-in-init">
          <span className="hidden sm:block h-px w-10 bg-white/40" />
          <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/80 font-semibold font-body">
            Asesoramiento Financiero Estratégico
          </p>
          <span className="hidden sm:block h-px w-10 bg-white/40" />
        </div>

        <h1 className="text-white text-2xl md:text-5xl font-bold md:leading-[3.8rem] mb-10 font-h1 fade-up-init">
          Impulsamos tu Crecimiento Empresarial con Soluciones Financieras Estratégicas
        </h1>
        <p className="text-white text-base md:text-lg max-w-xl font-light text-center self-center mb-12 font-body fade-up-init">
          Más de 15 años de experiencia en M&A, finanzas corporativas, banca de inversión y consultoría empresarial.
        </p>
        <button
          onClick={handleHeroClick}
          className="group self-center inline-flex items-center gap-3 font-body px-8 py-3 w-fit bg-white hover:bg-blue text-dark-blue duration-300 hover:text-white rounded-lg font-semibold text-base shadow-lg shadow-dark-blue/30 hover:shadow-xl hover:-translate-y-0.5 fade-up-init"
        >
          Descubre cómo podemos ayudarte
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
      </section>

      <button
        onClick={() => scrollToSection('about-us')}
        aria-label="Ir a Sobre Nosotros"
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/60 hover:text-white duration-300"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-body">Descubrí más</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </>
  );
}

export default Hero;
