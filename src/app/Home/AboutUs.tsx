'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import world from '../../../public/images/about-us.svg';
import satelite from '../../../public/images/satelite.svg';
import Link from 'next/link';

const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='about-us' className="bg-dark-blue font-sans overflow-hidden">

      <div className="relative h-96 inset-x-0 top-0 md:w-[calc(100vw+80px)] md:left-[-40px] w-[calc(100vw+200px)] left-[-100px] bg-gradient-to-b from-[#D9D9D9]/20 via-transparent to-transparent" style={{ transform: 'scaleY(0.5)', borderRadius: '50%' }}></div>

      <div className="container max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center relative -mt-64">
        <div className="mt-[-30px] md:mt-0 md:w-1/2 mb-16 md:mb-0">
          <Image
            src={world}
            alt="About Us"
            width={627}
            height={570}
          />
          <div
            className="hidden md:block absolute top-0 left-0 w-full h-full"
            style={{
              transform: `translate(${190 + scrollY * 0.08}px, ${scrollY * 0.08}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <Image
              src={satelite}
              alt="Satellite"
              width={333}
              height={250}
            />
          </div>

        </div>
        <div className="px-4 md:px-0 md:w-1/2 md:pl-8 md:ml-16">
          <h2 className="text-lg font-bold uppercase mb-4 text-light-blue">About Us</h2>
          <div>
            <h3 className="text-3xl md:text-4xl font-medium text-white md:leading-[48px] mb-7">Where technology and sustainability meet</h3>
            <p className="text-white font-light leading-[29px] text-base">
              At Coddit, we’re on a mission to accelerate the transition to a sustainable economy.
              We partner with startups and enterprises to build eco-friendly,
              custom software solutions that address the challenges of today while creating
              a more efficient and sustainable tomorrow.
            </p>
          </div>
          <button className="mt-6 px-8 py-3 bg-transparent border border-white/40 rounded-full text-white hover:bg-white/10 transition duration-200 text-sm font-medium">
            <Link
              href="https://calendar.app.google/uFxrUnMRtAZZtwih9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-light-blue duration-300"
            >
              Learn more about our approach
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;