'use client'

import React from 'react';
import Link from 'next/link';
import { trackEvent } from '../Utility/AnalyticsHelpers';

const handleHeroClick = () => {
  trackEvent('button_click', {
    button_name: 'Free Consultation',
    section: 'Hero'
  });
};

const Hero = () => {
  return (
    <section className="flex flex-col bg-transparent items-center justify-center">
      <div className="flex flex-col text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 md:my-52 my-24">
        <h1 className="text-white text-2xl md:text-5xl font-bold md:leading-[3.8rem] mb-10 font-h1 fade-up-init">
          Impulsamos tu Crecimiento Empresarial con Soluciones Financieras Estratégicas
        </h1>
        <p className="text-white text-base md:text-lg max-w-xl font-light text-center self-center mb-12 font-body fade-up-init">
          Más de 15 años de experiencia en finanzas corporativas, banca de inversión y consultoría empresarial.
        </p>
        <button onClick={handleHeroClick} className="self-center font-body px-8 py-3 w-fit bg-white  hover:bg-blue text-dark-blue duration-300 hover:text-white rounded-lg font-semibold text-base fade-up-init">
          <Link href="" target="_blank" rel="noopener noreferrer">Descubre cómo podemos ayudarte</Link>
        </button>
      </div>
    </section>
  );
}

export default Hero;

