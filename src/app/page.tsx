'use client';

import { useEffect, useRef } from "react";
import Navbar from "./Home/Navbar";
import Hero from "./Home/Hero";
import AboutUs from "./Home/AboutUs";
import Services from "./Home/Services";
import BannerCTA from "./Home/Banner-CTA";
import Brands from "./Home/Brands";
import WhyCompany from "./Home/WhyCompany";
import Contact from "./Home/Contact";
import Footer from "./Home/Footer";

export default function Home() {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up-init, .fade-in-init');

    observer.current = new IntersectionObserver(
      (entries) => {
        let delay = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply animation with staggered delay when element enters viewport
            const el = entry.target as HTMLElement;

            // Determine the animation type based on the class
            if (el.classList.contains('fade-up-init')) {
              setTimeout(() => {
                el.classList.add('fade-up');
                el.classList.remove('fade-up-init');
              }, delay += 200); // 200ms stagger delay for fade-up
            }

            if (el.classList.contains('fade-in-init')) {
              setTimeout(() => {
                el.classList.add('fade-in');
                el.classList.remove('fade-in-init');
              }, delay += 100); // 100ms stagger delay for fade-in
            }
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    elements.forEach((el) => observer.current?.observe(el));

    return () => {
      elements.forEach((el) => observer.current?.unobserve(el));
      observer.current?.disconnect();
    };
  }, []);

  return (
    <>
      <div className="bg-cover bg-hero w-full h-[600px] md:h-[850px] bg-fixed ">
        <Navbar />
        <Hero />
      </div>
      <AboutUs />
      <Services />
      <Brands />
      <WhyCompany />
      <BannerCTA />
      <Contact />
      <Footer />
    </>
  );
}
