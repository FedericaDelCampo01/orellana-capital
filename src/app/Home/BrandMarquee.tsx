'use client';

import Image from "next/image";

interface SubBrand {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** El archivo tiene fondo sólido: no lo pasamos a blanco porque quedaría un bloque */
  opaqueBg?: boolean;
}

interface Brand {
  src: string;
  width: number;
  height: number;
  alt: string;
  name: string;
  /** El archivo tiene fondo sólido: no lo pasamos a blanco porque quedaría un bloque */
  opaqueBg?: boolean;
  /** Escala el logo hasta llenar la caja en vez de dejarlo en su tamaño natural */
  largeLogo?: boolean;
  subBrands?: SubBrand[];
}

interface BrandMarqueeProps {
  brands: Brand[];
  title: string;
}

const logoFilter = (opaqueBg?: boolean) =>
  opaqueBg ? "grayscale brightness-125 contrast-75" : "grayscale brightness-0 invert opacity-90";

const BrandCard = ({ brand }: { brand: Brand }) => (
  <div className="w-80 shrink-0 flex flex-col rounded-2xl overflow-hidden bg-gradient-to-br from-[#033257] to-dark-blue ring-1 ring-white/10 shadow-xl shadow-dark-blue/25 transition duration-300 hover:-translate-y-1 hover:ring-white/25 hover:shadow-2xl hover:shadow-dark-blue/40">
    <div className="flex-1 flex flex-col items-center px-6 pt-8 pb-7">
      <div className="h-28 w-full flex justify-center items-center">
        <Image
          src={brand.src}
          alt={brand.alt}
          width={brand.width}
          height={brand.height}
          className={`${brand.largeLogo ? "h-full" : "max-h-24"} w-auto max-w-full object-contain ${logoFilter(brand.opaqueBg)}`}
        />
      </div>
      <p className="text-sm text-white font-semibold font-body text-center mt-5 leading-snug">{brand.name}</p>
      {brand.subBrands && (
        <div className="mt-5 pt-5 border-t border-white/15 w-full flex flex-wrap justify-center items-center gap-3">
          {brand.subBrands.map((subBrand, index) => (
            <Image
              key={index}
              src={subBrand.src}
              alt={subBrand.alt}
              width={subBrand.width}
              height={subBrand.height}
              className={`max-h-12 w-auto max-w-full object-contain ${logoFilter(subBrand.opaqueBg)}`}
            />
          ))}
        </div>
      )}
    </div>
    <div className="h-1.5 w-full bg-blue" />
  </div>
);

const BrandMarquee: React.FC<BrandMarqueeProps> = ({ brands, title }) => {
  return (
    <section className="bg-light-blue">
      <div className="md:py-24 py-12">
        <h2 className="md:text-3xl text-xl font-semibold text-dark-blue text-center md:pb-20 pb-12">{title}</h2>
        <div className="marquee-viewport relative py-6">
          <div className="marquee-track flex w-max">
            {/* The list is rendered twice so the loop restarts seamlessly */}
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-stretch gap-6 pr-6" aria-hidden={copy === 1}>
                {brands.map((brand, index) => (
                  <BrandCard brand={brand} key={index} />
                ))}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-light-blue to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-light-blue to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default BrandMarquee;
