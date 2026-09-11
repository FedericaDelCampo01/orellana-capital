"use client";

import Link from "next/link";
import React from "react";
import Image from 'next/image';
import logoImage from '../../../public/images/logo.png';
import { trackEvent } from '../Utility/AnalyticsHelpers';
import { scrollToSection } from '../Utility/ScrollHelpers';

const links = [
  { id: 'about-us', label: 'Sobre Nosotros' },
  { id: 'services', label: 'Servicios' },
  { id: 'why-company', label: 'Por qué Orellana Capital' }
];

const Navbar = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');

  const toggleNavbar = () => {
    setIsClicked(!isClicked);
  };

  // Solid background once the hero is no longer behind the bar
  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight the link of the section currently crossing the middle of the viewport
  React.useEffect(() => {
    const ids = [...links.map((link) => link.id), 'contact'];
    const visible = new Set<string>();

    // True while the hero still covers the middle of the viewport
    const isAboveFirstSection = () => {
      const firstSection = document.getElementById(ids[0]);
      if (!firstSection) return false;
      return window.scrollY + window.innerHeight / 2 < firstSection.offsetTop;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });

        const current = ids.find((id) => visible.has(id));
        if (current) setActiveSection(current);
        // Between two sections we keep the last one, but on the hero nothing is active
        else if (isAboveFirstSection()) setActiveSection('');
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (id: string) => {
    setIsClicked(false);
    scrollToSection(id);
  };

  const handleLetsTalkClick = () => {
    trackEvent('button_click', {
      button_name: 'Let\'s Talk Navbar',
      section: 'Navbar'
    });

    setIsClicked(false);
    scrollToSection('contact')
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 font-body transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-blue/90 backdrop-blur-md shadow-lg shadow-dark-blue/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-20' : 'h-24 md:pt-3'}`}>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white">
                <Image
                  src={logoImage}
                  alt="Logo"
                  width={300}
                  height={100}
                  className={`hidden md:block transition-all duration-300 ${isScrolled ? 'w-[230px]' : 'w-[300px]'}`}
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

          <div className="hidden md:flex md:flex-row items-center space-x-10">
            <div className="ml-10 flex items-baseline space-x-8 text-base">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-2 duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full ${
                    activeSection === link.id ? 'text-white after:w-full' : 'text-white/75 after:w-0'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <button
              className="group inline-flex items-center gap-2 text-base px-7 py-2.5 bg-white text-dark-blue rounded-md font-semibold hover:bg-blue hover:text-white duration-300 shadow-md shadow-dark-blue/20 hover:shadow-lg hover:-translate-y-0.5"
              onClick={handleLetsTalkClick}
            >
              Contacto
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6l6 6-6 6" />
              </svg>
            </button>
          </div>


          {/* Mobile Menu */}
          <div className="md:hidden relative">
            <button
              className="text-white hover:text-light-blue duration-300"
              onClick={toggleNavbar}
              aria-label="Toggle Navigation"
              aria-expanded={isClicked}
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
            <div
              className={`absolute text-center right-[-16px] mt-6 w-screen bg-dark-blue/95 backdrop-blur-md text-white shadow-lg duration-300 ease-in-out ${
                isClicked ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-8 opacity-0 pointer-events-none'
              }`}
              style={{ zIndex: 9999 }}
            >
              <div className="px-2 py-4 divide-y divide-white/10">
                {[...links, { id: 'contact', label: 'Contacto' }].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`block w-full duration-300 py-5 ${
                      activeSection === link.id ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
