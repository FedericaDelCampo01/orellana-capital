"use client";

import Link from "next/link";
import React from "react";
import Image from 'next/image';
import logoImage from '../../../public/images/logo.png';
import { trackEvent } from '../Utility/AnalyticsHelpers';
import { scrollToSection } from '../Utility/ScrollHelpers';

const Navbar = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const toggleNavbar = () => {
    setIsClicked(!isClicked);
  };

  const handleLetsTalkClick = () => {
    trackEvent('button_click', {
      button_name: 'Let\'s Talk Navbar',
      section: 'Navbar'
    });

    scrollToSection('contact')
  };

  return (
    <nav className="bg-transparent font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white">
                <Image
                  src={logoImage}
                  alt="Logo"
                  width={300}
                  height={100}
                  className="hidden md:block"
                />
                <Image
                  src={logoImage}
                  alt="Logo"
                  width={200}
                  height={75}
                  className="block md:hidden"
                />
              </Link>
            </div>
          </div>

          {/* Web Menu */}

          <div className="hidden md:flex md:flex-row space-x-10">
            <div className="ml-10 flex items-baseline space-x-6 text-base py-2">
              <button onClick={() => scrollToSection('about-us')} className="text-white hover:text-blue duration-300">Sobre Nosotros</button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-blue duration-300">Servicios</button>
              <button onClick={() => scrollToSection('why-company')} className="text-white hover:text-blue duration-300">Por qué Orellana Capital</button>
            </div>
            <button
              className="text-base px-8 py-2 bg-white text-dark-blue rounded-md font-semibold hover:bg-blue hover:text-white duration-300"
              onClick={handleLetsTalkClick}
            >
              Contacto
            </button>
          </div>


          {/* Mobile Menu */}
          <div className="md:hidden relative">
            <button
              className="text-white hover:text-light-blue duration-300"
              onClick={toggleNavbar}
              aria-label="Toggle Navigation"
            >
              {isClicked ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
            {/* Dropdown Menu */}
            <div className={`absolute text-center right-[-16px] mt-8 w-screen bg-dark-blue text-white shadow-lg duration-300 ease-in-out ${isClicked ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-8 opacity-0'}`}>
              <div className="px-2 py-2 space-y-1">
                <button onClick={() => scrollToSection('about-us')} className="block text-white hover:text-light-blue duration-300 p-5">Sobre Nosotros</button>
                <button onClick={() => scrollToSection('services')} className="block text-white hover:text-light-blue duration-300 p-5">Servicios</button>
                <button onClick={() => scrollToSection('why-company')} className="block text-white hover:text-light-blue duration-30 p-5">Por qué Orellana Capital</button>
                <button onClick={() => scrollToSection('contact')} className="block text-white hover:text-light-blue duration-300 p-5">Contacto</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
