'use client'

import OptimizedImage from '../Utility/OptimizedImage';
import logoImage from "../../../public/images/logo.webp";
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
        <p className="text-white/70 text-sm font-extralight text-center font-body">
          © 2024 Orellana Capital Advisors. All Rights Reserved
        </p>
        <a href="https://coddit.io" target="_blank" rel="noopener noreferrer" className="text-white/70 text-sm font-extralight text-center font-body">
          Site by Coddit
        </a>
      </div>
    </section>
  )
}

export default Footer;