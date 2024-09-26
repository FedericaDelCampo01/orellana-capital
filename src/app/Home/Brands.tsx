import BrandBanner from "./BrandBannerSquares";
import client1 from '../../../public/images/clients/eduvaluer.webp'
import client5 from '../../../public/images/clients/fotmer.webp'
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
    description: "Eduvaler es una empresa líder en la educación en línea."
  },
  {
    src: client2.src,
    width: 224,
    height: 39,
    alt: "Verdeagua",
    description: "Verdeagua es una empresa comprometida con el cuidado del medio ambiente."
  },
  {
    src: client3.src,
    width: 96,
    height: 63,
    alt: "Propack",
    description: "Propack es una empresa especializada en empaquetado y logística."
  },
  {
    src: client4.src,
    width: 149,
    height: 71,
    alt: "Trivium",
    description: "Trivium es una empresa de tecnología innovadora."
  },
  {
    src: client6.src,
    width: 157,
    height: 35,
    alt: "Emexem",
    description: "Emexem es una empresa de comercio electrónico."
  },
  {
    src: client7.src,
    width: 64,
    height: 32,
    alt: "Grifelma",
    description: "Grifelma es una empresa de manufactura de componentes."
  },
  {
    src: client5.src,
    width: 236,
    height: 44,
    alt: "Fotmer",
    description: "Fotmer es una empresa de servicios de marketing digital."
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
