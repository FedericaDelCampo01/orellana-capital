import Image, { StaticImageData } from "next/image";

interface Brand {
  src: string;
  width: number;
  height: number;
  alt: string;
  description: string;
}

interface BrandBannerProps {
  brands: Brand[];
  title: string;
}

const BrandBanner: React.FC<BrandBannerProps> = ({ brands, title }) => {
  return (
    <section className="bg-dark-blue/20">
      <div className="max-w-6xl m-auto md:py-24 py-12">
        <h2 className="md:text-3xl text-xl font-semibold text-dark-blue text-center md:pb-20 pb-12">{title}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {brands.map((brand, index) => (
            <div key={index} className="fade-up-init p-4 bg-dark-blue flex flex-col items-center py-8 md:mx-0 md:w-1/4 sm:w-1/2 w-full mx-20 shadow-lg shadow-dark-blue/20 fade-up-init">
              <div className="h-28 flex justify-center items-center">
                <Image src={brand.src} alt={brand.alt} width={brand.width} height={brand.height} className="mb-4" />
              </div>
              <p className="text-sm text-white font-light font-body text-center">{brand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandBanner; 