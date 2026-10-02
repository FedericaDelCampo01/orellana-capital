'use client'

import OptimizedImage from '../Utility/OptimizedImage';
import logoImage from "../../../public/images/logo.png";
import Image from 'next/image';
const Footer = () => {

  return (
    <section className="bg-dark-blue overflow-hidden w-full pt-4 pb-2 md:py-6 px-4">
      <div className="m-auto max-w-7xl flex flex-col md:flex-row justify-between mb-8 md:mb-0 items-center">
        <OptimizedImage
          src={logoImage.src}
          alt="Logo"
          width={250}
          height={130}
        />
        <address className="not-italic text-white/70 text-sm font-extralight text-center md:text-left font-body leading-relaxed md:mt-0 mt-4">
          <span className="text-white font-normal">Schroeder Haus</span>
          <br />
          <a
            href="https://share.google/ICvqCS8U9Hc69WUGw"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline hover:text-white duration-300"
          >
            Dr. Alejandro Schroeder 6558, oficina 10
            <br />
            Montevideo, Uruguay
          </a>
        </address>
        <p className="text-white/70 text-sm font-extralight text-center font-body md:mt-0 mt-4">
          © 2024 Orellana Capital Advisors. All Rights Reserved
        </p>
      </div>
    </section>
  )
}

export default Footer;