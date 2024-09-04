import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-dark-blue font-sans flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-4 md:mt-36 md:mb-12">
        <h1 className="text-white text-4xl md:text-5xl font-medium md:leading-[3.8rem] mb-14">
          Your partner in sustainable software innovation
        </h1>
        <button className="px-8 py-3 custom-gradient hover:bg-white text-dark-blue duration-300 rounded-full font-medium">
          <Link href="https://calendar.app.google/uFxrUnMRtAZZtwih9" target="_blank" rel="noopener noreferrer">Book a FREE consultation</Link>
        </button>
      </div>
    </section>
  );
}

export default Hero;

