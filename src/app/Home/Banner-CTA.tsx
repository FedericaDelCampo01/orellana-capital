'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';


const BannerCTA = () => {
  return (
    <section className="w-full h-auto bg-dark-blue py-20 font-sans">
      <div className="w-full h-auto custom-banner-gradient">
        <div className='max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center w-full py-12 px-4 md:px-6'>

          <div className="text-center md:text-left mb-6 md:mb-0 max-w-[300px]">
            <h2 className="text-lg md:text-2xl font-medium text-dark-blue">Schedule a FREE 30-min consultation call</h2>

          </div>
          <button className="text-center md:text-right">
            <Link 
              href="https://calendar.app.google/uFxrUnMRtAZZtwih9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-base px-8 py-4 bg-dark-blue hover:bg-white text-white hover:text-dark-blue border-2 border-dark-blue duration-300 rounded-full font-medium"
            >
              Let's discuss your project
            </Link>
          </button>

        </div>
      </div>
    </section>
  );
};

export default BannerCTA;
