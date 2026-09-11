import React from 'react';
import OptimizedImage from '../Utility/OptimizedImage';
import profilePic from '../../../public/images/profile-pic.jpg';

const AboutUs = () => {
  return (
    <section id='about-us' className="bg-white overflow-hidden">

      <div className="container max-w-6xl mx-auto md:py-16 flex flex-col md:flex-row items-center my-10 px-4 md:my-20 md:space-x-20">
        <div className="px-4 md:px-0 md:w-1/2">
          <div>
            <h2 className="text-blue font-bold font-h2 mb-2 fade-up-init">Orellana Capital</h2>
            <h3 className="text-xl md:text-3xl font-bold text-dark-blue md:leading-[48px] font-h3">Sobre Nosotros</h3>

            <div className="h-[3px] w-12 bg-blue rounded-full my-6" />

            <p className="text-dark-blue font-light leading-[29px] text-base mb-8 font-body fade-up-init md:text-justify">
              Somos una firma especializada en brindar asesoramiento financiero estratégico, liderada por Alejandro Hughes, un profesional con más de 15 años de experiencia en M&A, finanzas corporativas, banca de inversión y gestión empresarial.
            </p>
            <p className="text-dark-blue font-light leading-[29px] text-base mb-8 font-body fade-up-init md:text-justify">
              A lo largo de su carrera, Alejandro ha liderado exitosamente numerosas rondas de inversión, negociaciones complejas y adquisiciones a nivel local e internacional. Con una sólida red de contactos en el sector financiero, su experiencia abarca mercados como Uruguay, España, Australia, y otras regiones, lo que le otorga una perspectiva global para cada transacción.
            </p>

            <div className="bg-light-blue border-l-[3px] border-blue rounded-r-lg px-6 py-5 mb-8 fade-up-init">
              <p className="text-xs uppercase tracking-[0.15em] text-blue font-semibold font-body mb-2">
                Actividad académica
              </p>
              <p className="text-dark-blue font-light leading-[26px] text-base font-body">
                Docente en la Facultad de Ciencias Empresariales y Economía de la Universidad de Montevideo, en la materia Fusiones y Adquisiciones.
              </p>
            </div>

            <p className="text-dark-blue font-light leading-[29px] text-base font-body fade-up-init md:text-justify">
              Nuestro enfoque personalizado y pragmático nos permite ofrecer soluciones financieras que maximicen el valor para cada cliente.
            </p>

            <div className="mt-10 pt-8 border-t border-dark-blue/10 grid grid-cols-2 gap-6 fade-up-init">
              <div>
                <p className="text-3xl font-bold text-blue font-h2">+15</p>
                <p className="text-xs uppercase tracking-[0.15em] text-dark-blue/60 font-body mt-2">
                  Años de experiencia
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue font-h2">3</p>
                <p className="text-xs uppercase tracking-[0.15em] text-dark-blue/60 font-body mt-2">
                  Continentes con operaciones
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative md:w-1/2 w-full rounded-2xl md:h-[550px] h-[350px] overflow-hidden mt-10 md:mt-0 shadow-xl shadow-dark-blue/20 ring-1 ring-dark-blue/10 fade-in-init">
          <OptimizedImage
            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
            src={profilePic.src}
            alt="Alejandro Hughes"
            width={450}
            height={450}
            quality={100}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-blue/90 to-transparent pt-16 pb-6 px-6">
            <p className="text-white font-bold text-lg font-h2">Alejandro Hughes</p>
            <p className="text-white/75 text-sm font-light font-body mt-1">
              M&A, finanzas corporativas y banca de inversión
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
