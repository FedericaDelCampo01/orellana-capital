import ServiceCard from './ServiceCard';
import { useLanguage } from '../i18n/LanguageContext';

const Services = () => {

  const { t } = useLanguage();
  const services = t.services.items;

  return (
    <section id='services' className="bg-services bg-cover overflow-hidden w-full px-4 py-12 md:bg-fixed">
      <div className="container mx-auto md:max-w-6xl">
        <div className='flex flex-col md:flex-row relative'>
          <div className="md:py-16">
            <h1 className="text-white text-xl md:text-3xl font-bold mb-6 font-h1 px-4 md:px-0">{t.services.title}</h1>
            <p className="text-white text-base font-light mb-16 md:w-7/12 font-body px-4 md:px-0">
              {t.services.intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div className="w-full h-full flex fade-up-init" key={index}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    services={service.services}
                    index={index}
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