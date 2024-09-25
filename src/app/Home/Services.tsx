import ServiceCard from './ServiceCard';

const Services = () => {

  const services = [
    {
      title: 'Finanzas Corporativas y Estrategia',
      description: "Asesoramos a empresas en fusiones, adquisiciones y valoraciones, diseñando estrategias financieras que maximizan el valor y optimizan la estructura de capital.",
      services: ['Valoración de empresas.', 'Modelos financieros detallados.', 'Asesoría en fusiones y adquisiciones.']
    },
    {
      title: 'Levantamiento de Capital',
      description: "Brindamos apoyo integral para el levantamiento de capital, desde la preparación de teasers y decks de inversión hasta la negociación de contratos y la optimización de términos clave.",
      services: ['Preparación de documentos para inversores.', 'Asesoría en cláusulas y covenants.', 'Gestión del proceso de inversión.']
    },
    {
      title: 'Venture Capital',
      description: "Ayudamos a startups y empresas en expansión a preparar sus modelos financieros, desarrollar métricas y a optimizar sus estrategias para atraer inversión de Venture Capital.",
      services: ['Desarrollo de modelos financieros para startups.', 'Medición de métricas clave.', 'Asesoría en la captación de fondos de  Venture Capital.']
    },
    {
      title: 'Mergers and Acquisitions',
      description: "Asesoramos en todo el proceso de fusiones y adquisiciones, gestionando las negociaciones y asegurando un acuerdo estratégico que aporte valor a las partes involucradas.",
      services: ['Asesoría estratégica en procesos de M&A.', 'Valoración, estructuración y cierre de acuerdos.', 'Negociación con todas las partes implicadas.']
    }
  ];

  return (
    <section id='services' className="bg-services bg-cover overflow-hidden w-full px-4 py-12">
      <div className="container mx-auto md:max-w-6xl">
        <div className='flex flex-col md:flex-row relative'>
          <div className="md:py-16">
            <h1 className="text-white text-3xl font-bold mb-6 font-h1">Nuestros Servicios</h1>
            <p className="text-white text-base font-light mb-16 md:w-7/12 font-body">
              Ofrecemos soluciones financieras integrales para ayudar a empresas a crecer y maximizar su valor. Nuestros servicios principales son:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div className="w-full h-full flex" key={index}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    services={service.services}
                    key={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;