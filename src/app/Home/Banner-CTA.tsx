'use client'

import Link from 'next/link';
import { trackEvent } from '../Utility/AnalyticsHelpers';

const handleBannerCTAClick = () => {
  trackEvent('button_click', {
    button_name: 'Banner CTA',
    section: 'Banner CTA'
  });
};

const BannerCTA = () => {
  return (
    <section className="w-full h-auto bg-dark-blue py-10">
      <div className="w-full h-auto custom-banner-gradient">
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center w-full py-8'>

          <div className="text-center mx-20 md:mx-0 md:text-left mb-6 md:mb-0 max-w-[350px]">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-h2">Impulsá el crecimiento de tu empresa</h2>

          </div>
          <button onClick={handleBannerCTAClick} className="text-center md:text-right">
            <Link 
              href="https://calendar.app.google/uFxrUnMRtAZZtwih9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-base px-8 py-4 bg-white hover:bg-blue text-dark-blue hover:text-white border-2 border-dark-blue duration-300 rounded-lg font-semibold font-body"
            >
              Solicitá una consulta personalizada
            </Link>
          </button>

        </div>
      </div>
    </section>
  );
};

export default BannerCTA;
