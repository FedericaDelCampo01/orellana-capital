import Image, { StaticImageData } from "next/image";

interface BrandBannerProps {
  brands: StaticImageData[];
  title: string;
}

const BrandBanner: React.FC<BrandBannerProps> = ({ brands, title }) => {
  return (
  <section className="flex-row w-full h-auto bg-dark-blue md:py-12 py-8 justify-center items-center text-center">
      <h2 className="text-lg font-bold uppercase mb-4 text-light-blue">{title}</h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:max-w-5xl mx-auto md:space-x-16">
        {brands.map((brand, index) => (
          <Image key={index} src={brand} alt={`Brand ${index}`} width={100} height={50} className="w-full md:w-1/4 px-24 md:py-6 md:p-0"/>
        ))}
      </div>
    </section>
  );
}

export default BrandBanner; 