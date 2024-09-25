import OptimizedImage from "../Utility/OptimizedImage";
import companyPic from "../../../public/images/company.webp"

const WhyCompany = () => {

  const reasons: string[] = [
    "Adaptabilidad a entornos dinámicos.",
    "Amplia experiencia internacional.",
    "Red de contactos estratégicos.",
    "Foco en resultados medibles.  "
  ]

  return (
    <section id='why-company' className="bg-white overflow-hidden">
      <div className="container max-w-6xl mx-auto my-10 md:py-16 flex flex-col md:flex-row items-center relative md:my-24 md:space-x-20 px-4">
        <div className="px-4 md:px-0 md:w-1/2">
          <div>
            <h2 className="text-blue font-bold font-h2 mb-2">Valor Añadido</h2>
            <h3 className="text-xl md:text-3xl font-bold text-dark-blue md:leading-[48px] mb-7 font-h3">Por Qué Elegirnos</h3>
            <p className="text-dark-blue font-light leading-[29px] text-base mb-8 font-body">
              Nuestra experiencia, red de contactos y enfoque orientado a resultados nos permiten ofrecer un servicio de alto valor para nuestros clientes. Adaptamos nuestras soluciones a las necesidades específicas de cada empresa, asegurando un crecimiento sostenible y rentable.
            </p>
            <p className="text-dark-blue mt-10 mb-6 font-bold font-body">
              Puntos Diferenciadores:
            </p>
            {reasons.map((reason, index) => ( 
            <div className='flex flex-row justify-start items-start py-2 font-body' key={index}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6l6 6-6 6" className="text-dark-blue" />
              </svg>
              <p
                key={index}
                className="text-dark-blue font-light">
                {reason}
              </p>
            </div>
              ))}
          </div>
        </div>
        <div className="pt-16 md:pt-0 flex items-center justify-center">
          <OptimizedImage
            src={companyPic.src}
            alt="About Us"
            width={627}
            height={570}
          />
        </div>
      </div>
    </section>
  )
}

export default WhyCompany;