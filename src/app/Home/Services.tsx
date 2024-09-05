"use client"

import Image from 'next/image';
import ServiceCard from './ServiceCard';
import { useState } from 'react';

// Import all service images
import service1Image from '../../../public/images/service-1.png';
import service2Image from '../../../public/images/service-2.png';
import service3Image from '../../../public/images/service-3.png';

const Services = () => {

  const services = [
    {
      title: 'Custom Software Development',
      description: "We design and build customized software solutions, including mobile and web development, backend, and AI. By using the most advanced technologies and following the best practices we ensure your solution is ready to be use today and prepared to scale tomorrow.",
      image: service2Image,
      width: 550,
      height: 606,
      top: -25,
      right: 0
    },
    {
      title: 'Analysis & Discovery',
      description: "This stage of the process is designed to validate ideas, conduct thorough market research, and define your MVP (Minimum Viable Product). We identify opportunities and challenges from the start so you can navigate the development process with confidence.",
      image: service1Image,
      width: 500,
      height: 566,
      top: -10,
      right: -80
    },
    {
      title: 'Staff Augmentation',
      description: "With our flexible staffing solutions, you can scale your teams up or down as needed, ensuring you have the right talent in place to tackle any challenge. Enhance your team's capabilities and capacity with highly qualifies developers only.",
      image: service3Image,
      width: 541,
      height: 451,
      top: 80,
      right: 0
    }
  ];

  const [selectedService, setSelectedService] = useState(services[0].title);
  const [isImageVisible, setIsImageVisible] = useState(true);

  const handleServiceClick = (title: string) => {
    if (title !== selectedService) {
      setIsImageVisible(false);
      
      setTimeout(() => {  
        setSelectedService(title);
        setIsImageVisible(true);
      }, 200);
    }
  };

  const selectedServiceData = services.find(service => service.title === selectedService);

  return (
    <section id='services' className="bg-dark-blue font-sans overflow-hidden w-full px-4 py-12">
      <div className="container mx-auto md:max-w-5xl bg-white/[.14] rounded-xl md:rounded-3xl">
        <div className='flex flex-col md:flex-row relative'>
          <div className="md:w-7/12 p-6 md:p-12">
            <h1 className="text-white text-2xl font-medium mb-4">Our Services</h1>
            <p className="text-white text-base font-light mb-8">
              We offer a range of services to assist you at every stage of your development process.
            </p>
            <div className="flex flex-col gap-4">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  isSelected={selectedService === service.title}
                  onSelect={() => handleServiceClick(service.title)}
                />
              ))}
            </div>
          </div>
          <div className="md:hidden w-[435px] h-[480px] relative top-5 right-[55px]">
            <Image
              src={services[0].image}
              alt={`${services[0].title} illustration`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="hidden md:block md:w-5/12 relative">
            <div
              className={`absolute transition-opacity duration-200 ease-in-out ${isImageVisible ? 'opacity-100' : 'opacity-0'
                }`}
              style={{
                width: `${selectedServiceData?.width}px`,
                height: `${selectedServiceData?.height}px`,
                top: `${selectedServiceData?.top}px`,
                right: `${selectedServiceData?.right}px`
              }}
            >
              {selectedServiceData && (
                <Image
                  src={selectedServiceData.image}
                  alt={`${selectedService} illustration`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-tr-3xl"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;