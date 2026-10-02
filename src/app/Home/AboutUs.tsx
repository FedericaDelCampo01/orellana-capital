import React from 'react';
import OptimizedImage from '../Utility/OptimizedImage';
import profilePic from '../../../public/images/profile-pic.jpg';
import { useLanguage } from '../i18n/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();
  return (
    <section id='about-us' className="bg-white overflow-hidden">

      <div className="container max-w-6xl mx-auto md:py-16 flex flex-col md:flex-row items-center md:items-stretch my-10 px-4 md:my-20 md:space-x-20">
        <div className="px-4 md:px-0 md:w-1/2">
          <div>
            <h2 className="text-blue font-bold font-h2 mb-2 fade-up-init">Orellana Capital</h2>
            <h3 className="text-xl md:text-3xl font-bold text-dark-blue md:leading-[48px] font-h3">{t.aboutUs.title}</h3>

            <div className="h-[3px] w-12 bg-blue rounded-full my-6" />

            <p className="text-dark-blue font-light leading-[29px] text-base mb-8 font-body fade-up-init md:text-justify">
              {t.aboutUs.paragraph1}
            </p>
            <p className="text-dark-blue font-light leading-[29px] text-base mb-8 font-body fade-up-init md:text-justify">
              {t.aboutUs.paragraph2}
            </p>

            <div className="bg-light-blue border-l-[3px] border-blue rounded-r-lg px-6 py-5 mb-8 fade-up-init">
              <p className="text-xs uppercase tracking-[0.15em] text-blue font-semibold font-body mb-2">
                {t.aboutUs.academicLabel}
              </p>
              <p className="text-dark-blue font-light leading-[26px] text-base font-body">
                {t.aboutUs.academic}
              </p>
            </div>

            <p className="text-dark-blue font-light leading-[29px] text-base font-body fade-up-init md:text-justify">
              {t.aboutUs.paragraph3}
            </p>
          </div>
        </div>

        <div className="group relative md:w-1/2 w-full rounded-2xl h-[420px] md:h-auto overflow-hidden mt-10 md:mt-0 shadow-xl shadow-dark-blue/20 ring-1 ring-dark-blue/10 fade-in-init">
          <OptimizedImage
            className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
            src={profilePic.src}
            alt="Alejandro Hughes"
            width={450}
            height={450}
            quality={100}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-blue via-dark-blue/85 to-transparent pt-24 pb-7 px-7">
            <p className="text-white font-bold text-lg font-h2">Alejandro Hughes</p>
            <p className="text-white/75 text-sm font-light font-body mt-1">
              {t.aboutUs.role}
            </p>
            <div className="mt-5 pt-5 border-t border-white/20">
              <p className="text-2xl font-bold text-white font-h2">+15</p>
              <p className="text-[11px] uppercase tracking-[0.15em] text-white/60 font-body mt-1">
                {t.aboutUs.yearsOfExperience}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
