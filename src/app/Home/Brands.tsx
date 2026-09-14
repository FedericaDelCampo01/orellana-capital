import BrandMarquee from "./BrandMarquee";

const brands = [
  {
    src: "/images/clients/eduvaluer.webp",
    width: 230,
    height: 58,
    alt: "Eduvaler",
    description: "Software de educación y gestión emocional."
  },
  {
    src: "/images/clients/verdeagua.webp",
    width: 224,
    height: 39,
    alt: "Verdeagua",
    description: "Producción hidropónica de vegetales."
  },
  {
    src: "/images/clients/trivium.webp",
    width: 149,
    height: 71,
    alt: "Trivium",
    description: "Software administrativo y de gestión académica para la educación."
  },
  {
    src: "/images/clients/grifelma.webp",
    width: 122,
    height: 122,
    alt: "Grifelma",
    description: "Imprenta industrial y digital.",
    opaqueBg: true
  },
  {
    src: "/images/clients/genersol.webp",
    width: 150,
    height: 32,
    alt: "Genersol",
    description: "Productos y servicios para los sectores de energía, industria y defensa."
  },
  {
    src: "/images/clients/edintor.png",
    width: 240,
    height: 83,
    alt: "Edintor SA",
    description: "Importación y venta de las líneas de herramientas INGCO y WADFOW.",
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
    description: "Soluciones gráficas de alta calidad."
  },
  {
    src: "/images/clients/epsa.png",
    width: 200,
    height: 72,
    alt: "EPSA",
    description: "Fabricación y exportación de dispositivos médicos descartables para anestesia, cirugía y cuidados intensivos."
  },
  {
    src: "/images/clients/transporte-varela.png",
    width: 150,
    height: 91,
    alt: "Transporte José Pedro Varela",
    description: "Transporte terrestre de cargas, con más de 35 años de trayectoria en el sector."
  },
  {
    src: "/images/clients/gruas-man.png",
    width: 190,
    height: 84,
    alt: "Grúas Man",
    description: "Servicios de izaje y alquiler de grúas para obra e industria."
  },
  {
    src: "/images/clients/schaaf.png",
    width: 240,
    height: 76,
    alt: "Gunter Schaaf",
    description: "Importación y distribución de insumos médicos. Soluciones seguras y confiables, con más de 60 años de trayectoria."
  }
];

const Brands = () => {
  return (
    <>
      <BrandMarquee brands={brands} title="Algunos de nuestros Clientes"/>
    </>
  );
};

export default Brands;
