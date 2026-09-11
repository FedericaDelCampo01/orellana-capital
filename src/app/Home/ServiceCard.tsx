import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  services: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, services, index }) => {
  return (
    <div className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white shadow-lg shadow-dark-blue/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-dark-blue/30">
      <span
        aria-hidden="true"
        className="absolute top-5 right-7 text-5xl font-bold text-dark-blue/10 select-none font-h1 transition-colors duration-300 group-hover:text-blue/20"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="flex-1 p-8 text-left">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-dark-blue font-h1 pr-16">
          {title}
        </h2>

        <div className="h-[3px] w-12 bg-blue rounded-full my-5 transition-all duration-300 group-hover:w-20" />

        <p className="text-dark-blue font-light font-body leading-relaxed">
          {description}
        </p>

        <p className="text-xs uppercase tracking-[0.15em] text-blue font-semibold font-body mt-8 mb-4">
          Servicios incluidos
        </p>

        <ul className="space-y-3">
          {services.map((service, serviceIndex) => (
            <li className="flex flex-row justify-start items-start font-body" key={serviceIndex}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3 mt-1 shrink-0 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6l6 6-6 6" />
              </svg>
              <span className="text-dark-blue font-light leading-relaxed">
                {service}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-1.5 w-full bg-dark-blue" />
    </div>
  );
};

export default ServiceCard;
