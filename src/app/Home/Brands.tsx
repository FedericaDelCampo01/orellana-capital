import BrandMarquee from "./BrandMarquee";
import { useLanguage } from '../i18n/LanguageContext';

const brands = [
  {
    src: "/images/clients/eduvaluer.webp",
    width: 230,
    height: 58,
    alt: "Eduvaluer",
    name: "Eduvaluer"
  },
  {
    src: "/images/clients/verdeagua.webp",
    width: 224,
    height: 39,
    alt: "Verdeagua",
    name: "Verdeagua"
  },
  {
    src: "/images/clients/trivium.webp",
    width: 149,
    height: 71,
    alt: "Trivium",
    name: "Trivium"
  },
  {
    src: "/images/clients/grifelman.webp",
    width: 122,
    height: 122,
    alt: "Grifelman",
    name: "Grifelman",
    opaqueBg: true
  },
  {
    src: "/images/clients/genersol.png",
    width: 200,
    height: 80,
    alt: "Genersol Industry & Energy",
    name: "Genersol Industry & Energy",
    mediumLogo: true
  },
  {
    src: "/images/clients/edintor.png",
    width: 240,
    height: 83,
    alt: "Edintor SA",
    name: "Edintor S.A.",
    largeLogo: true,
    subBrands: [
      { src: "/images/clients/ingco.png", width: 1600, height: 1600, alt: "Ingco", opaqueBg: true },
      { src: "/images/clients/wadfow.png", width: 1200, height: 628, alt: "Wadfow", opaqueBg: true },
      { src: "/images/clients/osburk.png", width: 1600, height: 1600, alt: "Osburk" }
    ]
  },
  {
    src: "/images/clients/borriero.png",
    width: 200,
    height: 200,
    alt: "Borriero Impresores",
    name: "Borriero Impresores"
  },
  {
    src: "/images/clients/epsa.png",
    width: 200,
    height: 72,
    alt: "EPSA",
    name: "EPSA"
  },
  {
    src: "/images/clients/transporte-varela.png",
    width: 150,
    height: 91,
    alt: "Transporte José Pedro Varela",
    name: "Transporte José Pedro Varela"
  },
  {
    src: "/images/clients/gruas-mar.png",
    width: 190,
    height: 84,
    alt: "Grúas Mar",
    name: "Grúas Mar"
  },
  {
    src: "/images/clients/schaaf.png",
    width: 240,
    height: 76,
    alt: "Gunter Schaaf",
    name: "Gunter Schaaf"
  }
];

const Brands = () => {
  const { t } = useLanguage();
  return (
    <>
      <BrandMarquee brands={brands} title={t.brands.title}/>
    </>
  );
};

export default Brands;
