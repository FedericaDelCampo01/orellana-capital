"use client";

import Link from "next/link";
import React from "react";
import Image from 'next/image';
import logoImage from '../../../public/images/logo.svg';

const Navbar = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const toggleNavbar = () => {
    setIsClicked(!isClicked);
  };

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-dark-blue font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white">
                <Image
                  src={logoImage}
                  alt="Logo"
                  width={150}
                  height={47}
                />
              </Link>
            </div>
          </div>

          {/* Web Menu */}
          <div className="hidden md:block self-center">
            <div className="ml-10 flex items-baseline space-x-6 text-base">
              <button onClick={() => scrollToSection('about-us')} className="text-white hover:text-light-blue duration-300">About Us</button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-light-blue duration-300">Services</button>
              <button onClick={() => scrollToSection('why-coddit')} className="text-white hover:text-light-blue duration-300">Why Coddit</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-light-blue duration-300">Contact</button>
            </div>
          </div>
          <button className="hidden md:block text-sm px-8 py-3 custom-gradient text-dark-blue rounded-full font-medium">
            <Link 
              href="https://calendar.app.google/uFxrUnMRtAZZtwih9" 
              target="_blank" 
              rel="noopener noreferrer" 
            >
              Let&apos;s Talk
            </Link>
          </button>

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
                <button onClick={() => scrollToSection('about-us')} className="block text-white hover:text-light-blue duration-300 p-5">About Us</button>
                <button onClick={() => scrollToSection('services')} className="block text-white hover:text-light-blue duration-300 p-5">Services</button>
                <button onClick={() => scrollToSection('why-coddit')} className="block text-white hover:text-light-blue duration-30 p-5">Why Coddit</button>
                <button onClick={() => scrollToSection('contact')} className="block text-white hover:text-light-blue duration-300 p-5">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
