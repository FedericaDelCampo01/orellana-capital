import OptimizedImage from "../Utility/OptimizedImage";
import companyPic from "../../../public/images/company.webp"

const WhyCompany = () => {

  const reasons: string[] = [
    "Adaptabilidad a entornos dinámicos.",
    "Amplia experiencia internacional.",
    "Red de contactos estratégicos.",
    "Foco en resultados medibles."
  ]

  return (
    <section id='why-company' className="bg-white overflow-hidden">
      <div className="container max-w-6xl mx-auto my-10 md:py-16 flex flex-col md:flex-row items-center relative md:my-20 md:space-x-20 px-4">
        <div className="px-4 md:px-0 md:w-1/2">
          <div>
            <h2 className="text-blue font-bold font-h2 mb-2 fade-up-init">Orellana Capital</h2>
            <h3 className="text-xl md:text-3xl font-bold text-dark-blue md:leading-[48px] font-h3 fade-up-init">Por Qué Elegirnos</h3>

            <div className="h-[3px] w-12 bg-blue rounded-full my-6" />

            <p className="text-dark-blue font-light leading-[29px] text-base mb-8 font-body fade-up-init">
              Nuestra experiencia, red de contactos y enfoque orientado a resultados nos permiten ofrecer un servicio de alto valor para nuestros clientes. Adaptamos nuestras soluciones a las necesidades específicas de cada empresa, asegurando un crecimiento sostenible y rentable.
            </p>

            <p className="text-xs uppercase tracking-[0.15em] text-blue font-semibold font-body mt-10 mb-5 fade-up-init">
              Puntos diferenciadores
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="fade-up-init flex flex-row justify-start items-start gap-3 rounded-xl bg-light-blue/60 border border-dark-blue/5 px-5 py-4 font-body transition duration-300 hover:bg-light-blue hover:-translate-y-1 hover:shadow-md hover:shadow-dark-blue/15"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 shrink-0 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6l6 6-6 6" />
                  </svg>
                  <p className="text-dark-blue font-light leading-snug">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="group relative md:w-1/2 w-full rounded-2xl overflow-hidden mt-12 md:mt-0 shadow-xl shadow-dark-blue/20 ring-1 ring-dark-blue/10 fade-in-init">
          <OptimizedImage
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={companyPic.src}
            alt="Orellana Capital Advisors"
            width={627}
            height={570}
            quality={100}
          />
        </div>
      </div>
    </section>
  )
}

export default WhyCompany;
