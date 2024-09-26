'use client'

import Navbar from "./Home/Navbar";
import Hero from "./Home/Hero";
import AboutUs from "./Home/AboutUs";
import Services from "./Home/Services";
import BannerCTA from "./Home/Banner-CTA"
import Brands from "./Home/Brands"
import WhyCompany from "./Home/WhyCompany"
import Contact from "./Home/Contact"
import Footer from "./Home/Footer"
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-up-init');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          el.classList.add('fade-up');
          el.classList.remove('fade-up-init');
        }
      });
    };

    // Check for elements on initial load
    handleScroll(); 

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-cover bg-hero w-full h-[600px] md:h-[850px]">
        <Navbar />
        <Hero />
      </div>
      <AboutUs />
      <Services />
      <Brands/>
      <WhyCompany />
      <BannerCTA />
      <Contact />
      <Footer />
    </>
  );
}
