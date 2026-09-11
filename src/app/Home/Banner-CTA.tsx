'use client'

import { trackEvent } from '../Utility/AnalyticsHelpers';
import { scrollToSection } from '../Utility/ScrollHelpers';

const handleBannerCTAClick = () => {
  trackEvent('button_click', {
    button_name: 'Banner CTA',
    section: 'Banner CTA'
  });

  scrollToSection('contact')
};

const BannerCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-dark-blue via-[#02304F] to-blue py-16 md:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-20 h-80 w-80 rounded-full bg-white/[0.07] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-blue/40 blur-3xl" />

      <div className='relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-4'>

        <div className="text-center md:text-left max-w-xl fade-in-init">
          <div className="h-[3px] w-12 bg-white/40 rounded-full mb-5 mx-auto md:mx-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-white font-h2 leading-snug">
            Impulsá el crecimiento de tu empresa
          </h2>
          <p className="text-white/70 font-light font-body mt-4 leading-relaxed">
            Conversemos sobre tu próximo paso: financiamiento, levantamiento de capital o una operación de M&A.
          </p>
        </div>

        <button
          onClick={handleBannerCTAClick}
          className="group shrink-0 inline-flex items-center gap-3 fade-in-init text-base px-8 py-4 bg-white hover:bg-blue text-dark-blue hover:text-white duration-300 rounded-lg font-semibold font-body shadow-lg shadow-dark-blue/40 hover:shadow-xl hover:-translate-y-0.5"
        >
          Solicitá una consulta personalizada
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

      </div>
    </section>
  );
};

export default BannerCTA;
