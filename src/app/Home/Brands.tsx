import BrandBanner from "./BrandBannerSquares";
import client1 from '../../../public/images/clients/eduvaluer.webp'
import client6 from '../../../public/images/clients/emexem.webp'
import client7 from '../../../public/images/clients/grifelma.webp'
import client4 from '../../../public/images/clients/trivium.webp'
import client3 from '../../../public/images/clients/propack.webp'
import client2 from '../../../public/images/clients/verdeagua.webp'

const brands = [
  {
    src: client1.src,
    width: 230,
    height: 58,
    alt: "Eduvaler",
    description: "Software de educación y gestión emocional."
  },
  {
    src: client2.src,
    width: 224,
    height: 39,
    alt: "Verdeagua",
    description: "Producción hidropónica de vegetales."
  },
  {
    src: client3.src,
    width: 96,
    height: 63,
    alt: "Propack",
    description: "Packaging de PET para la industria de alimenticia."
  },
  {
    src: client4.src,
    width: 149,
    height: 71,
    alt: "Trivium",
    description: "Software administrativo y de gestión académica para la educación."
  },
  {
    src: client6.src,
    width: 157,
    height: 35,
    alt: "Emexem",
    description: "Retail & e-commerce, merchandising para empresas y camisetas personalizadas."
  },
  {
    src: client7.src,
    width: 64,
    height: 32,
    alt: "Grifelma",
    description: "Imprenta industrial y digital."
  }
];

const Brands = () => {
  return (
    <>
      <BrandBanner brands={brands} title="Nuestros Clientes"/>
    </>
  );
};

export default Brands;
