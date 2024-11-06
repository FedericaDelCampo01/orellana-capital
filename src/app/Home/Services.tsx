import ServiceCard from './ServiceCard';

const Services = () => {

  const services = [
    {
      title: 'Finanzas Corporativas y Estrategia',
      description: "Asesoramos a empresas en el financiamiento de sus negocios existentes y/o nuevos proyectos, diseñando estrategias financieras que maximizan el valor y optimizan la estrucutra de capital.",
      services: ['Valoración de empresas y modelos financieros.', ' Financiamiento y relacionamiento con instituciones financieras / bancarias.', ' Analisis de solvencia financiera, flujos de caja y desarrollo de nuevos negocios.']
    },
    {
      title: 'Levantamiento de Capital',
      description: "Brindamos apoyo integral para el levantamiento de capital, desde la preparación de teasers y decks de inversión hasta la negociación de contratos y la optimización de términos y condiciones para recibir inversión.",
      services: ['Preparación de documentos para inversores.', 'Asesoría en términos, condiciones, cláusulas y covenants.', 'Contacto con fondos de inversión y/o inversores estratégicos.']
    },
    {
      title: 'Venture Capital',
      description: "Ayudamos a startups y empresas en expansión a preparar sus modelos financieros, desarrollar métricas y a optimizar sus estrategias para atraer inversión de Capital de Riesgo.",
      services: ['Desarrollo de modelos financieros para startups.', 'Medición de métricas clave (KPI’s).', 'Contacto y captacion de fondos con VC’s.']
    },
    {
      title: 'Mergers and Acquisitions',
      description: "Asesoramos en todo el proceso de fusiones y adquisiciones, gestionando las negociaciones y estructurando las operaciones de manera eficiente y profesional.",
      services: ['Presentación de fondos de Private Equity o inversores estratégicos.', 'Valuación, modelos financieros, estructuración, y cierre de acuerdos.', 'Negociación con todas las partes involucradas.']
    }
  ];

  return (
    <section id='services' className="bg-services bg-cover overflow-hidden w-full px-4 py-12 md:bg-fixed">
      <div className="container mx-auto md:max-w-6xl">
        <div className='flex flex-col md:flex-row relative'>
          <div className="md:py-16">
            <h1 className="text-white text-xl md:text-3xl font-bold mb-6 font-h1 px-4 md:px-0">Nuestros Servicios</h1>
            <p className="text-white text-base font-light mb-16 md:w-7/12 font-body px-4 md:px-0">
              Ofrecemos soluciones financieras integrales para ayudar a empresas a crecer y maximizar su valor. Nuestros servicios principales son:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div className="w-full h-full flex fade-up-init" key={index}>
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