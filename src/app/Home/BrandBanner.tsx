import Image, { StaticImageData } from "next/image";

interface Brand {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface BrandBannerProps {
  brands: Brand[];
  title: string;
}

const BrandBanner: React.FC<BrandBannerProps> = ({ brands, title }) => {
  return (
  <section className="flex-row w-full h-auto bg-dark-blue py-8 justify-center items-center text-center overflow-hidden">
      {/* <h2 className="text-lg font-bold uppercase mb-4 text-light-blue">{title}</h2> */}
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center mx-auto md:space-x-16 lg:space-x-16">
        {brands.map((brand, index) => (
          <div key={index} className="px-8 sm:px-24 py-4 md:p-0 lg:py-4 lg:p-0 flex items-center justify-center">
            <Image src={brand.src} alt={brand.alt} width={brand.width} height={brand.height}/>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrandBanner; 