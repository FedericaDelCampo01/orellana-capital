import React, { useEffect, useState } from 'react';
import OptimizedImage from '../Utility/OptimizedImage';
import profilePic from '../../../public/images/profile-pic.webp';

const AboutUs = () => {
  return (
    <section id='about-us' className="bg-white overflow-hidden">

      <div className="container max-w-6xl mx-auto md:py-16 flex flex-col md:flex-row items-center my-10 px-4 md:my-20 md:space-x-20">
        <div className="px-4 md:px-0 md:w-1/2">
          <div>
            <h3 className="text-xl md:text-3xl font-bold text-dark-blue md:leading-[48px] mb-7 font-h3">Sobre Nosotros</h3>
            <p className="text-dark-blue font-light leading-[29px] text-base mb-8 font-body fade-up-init text-justify">
              Somos una firma especializada en brindar asesoramiento financiero estratégico, liderada por Alejandro Hughes, un profesional con más de 15 años de experiencia en M&A, finanzas corporativas, banca de inversión y gestión empresarial.
            </p>
            <p className="text-dark-blue font-light leading-[29px] text-base mb-8 font-body fade-up-init text-justify">
              A lo largo de su carrera, Alejandro ha liderado exitosamente numerosas rondas de inversión, negociaciones complejas y adquisiciones a nivel local e internacional. Con una sólida red de contactos en el sector financiero, su experiencia abarca mercados como Uruguay, España, Australia, y otras regiones, lo que le otorga una perspectiva global para cada transacción.
            </p>
            <p className="text-dark-blue font-light leading-[29px] text-base font-body fade-up-init text-justify">
              Nuestro enfoque personalizado y pragmático nos permite ofrecer soluciones financieras que maximicen el valor para cada cliente.

            </p>
          </div>
        </div>
        <div className="pt-16 md:pt-0 flex items-center justify-center fade-in-init">
          <OptimizedImage
            src={profilePic.src}
            alt="About Us"
            width={627}
            height={570}
          />
        </div>

      </div>
    </section>
  );
}

export default AboutUs;