'use client';

import Image from "next/image";

interface SubBrand {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface Brand {
  src: string;
  width: number;
  height: number;
  alt: string;
  description: string;
  subBrands?: SubBrand[];
}

interface BrandMarqueeProps {
  brands: Brand[];
  title: string;
}

const BrandCard = ({ brand }: { brand: Brand }) => (
  <div className="w-72 shrink-0 bg-dark-blue shadow-lg shadow-dark-blue/20 flex flex-col items-center p-4 py-8">
    <div className="h-28 flex justify-center items-center">
      <Image
        src={brand.src}
        alt={brand.alt}
        width={brand.width}
        height={brand.height}
        className="max-h-24 w-auto object-contain"
      />
    </div>
    <p className="text-sm text-white font-light font-body text-center mt-4">{brand.description}</p>
    {brand.subBrands && (
      <div className="mt-6 pt-5 border-t border-white/20 w-full flex flex-wrap justify-center items-center gap-3">
        {brand.subBrands.map((subBrand, index) => (
          <Image
            key={index}
            src={subBrand.src}
            alt={subBrand.alt}
            width={subBrand.width}
            height={subBrand.height}
            className="max-h-9 w-auto object-contain"
          />
        ))}
      </div>
    )}
  </div>
);

const BrandMarquee: React.FC<BrandMarqueeProps> = ({ brands, title }) => {
  return (
    <section className="bg-light-blue">
      <div className="md:py-24 py-12">
        <h2 className="md:text-3xl text-xl font-semibold text-dark-blue text-center md:pb-20 pb-12">{title}</h2>
        <div className="marquee-viewport relative">
          <div className="marquee-track flex w-max">
            {/* The list is rendered twice so the loop restarts seamlessly */}
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-stretch gap-4 pr-4" aria-hidden={copy === 1}>
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
