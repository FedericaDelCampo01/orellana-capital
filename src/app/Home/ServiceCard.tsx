import React from 'react';
import OptimizedImage from '../Utility/OptimizedImage';
import pologino from '../../../public/images/poligono.png'

interface ServiceCardProps {
  title: string;
  description: string;
  services: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, services }) => {
  return (
    <div className='flex flex-col shadow-lg shadow-dark-blue/20'>
      <div className="p-8 flex-1 transition-all duration-300 ease-in-out overflow-hidden text-left bg-white">
        <h2 className={`text-base sm:text-lg md:text-xl font-medium text-dark-blue mb-4' transition-all duration-300 mb-4`}>
          {title}
        </h2>
        <p className="text-dark-blue font-light">
          {description}
        </p>
        <p className="text-dark-blue mt-10 mb-6 font-bold">
          Servicios Incluidos:
        </p>
        {services.map((service, index) => (
          <div className='flex flex-row justify-start items-start py-2' key={index}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6l6 6-6 6" className="text-dark-blue" />
            </svg>
            <p
              key={index}
              className="text-dark-blue font-light">
              {service}
            </p>
          </div>
        ))}
      </div>
      <div className='h-2 w-full bg-dark-blue'/>
    </div>
  );
};

export default ServiceCard;
