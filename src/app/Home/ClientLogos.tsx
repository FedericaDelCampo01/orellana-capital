import Image from 'next/image';
import client1 from '../../../public/images/clients/eduvaluer.png'
import client5 from '../../../public/images/clients/fotmer.png'
import client6 from '../../../public/images/clients/emexem.png'
import client7 from '../../../public/images/clients/grifelma.png'
import client4 from '../../../public/images/clients/trivium.png'
import client3 from '../../../public/images/clients/propack.png'
import client2 from '../../../public/images/clients/verdeagua.png'

const logos = [
  {
    src: client1,
    width: 230,
    height: 58,
    alt: "Eduvaler"
  },
  {
    src: client2,
    width: 224,
    height: 39,
    alt: "Verdeagua"
  },
  {
    src: client3,
    width: 96,
    height: 63,
    alt: "Propack"
  },
  {
    src: client4,
    width: 149,
    height: 71,
    alt: "Trivium"
  },
  {
    src: client5,
    width: 236,
    height: 44,
    alt: "Fotmer"
  },
  {
    src: client6,
    width: 157,
    height: 35,
    alt: "Emexem"
  },
  {
    src: client7,
    width: 64,
    height: 32,
    alt: "Grifelma"
  }
];

const ClientLogos = () => {
  return (
      <div className="m-auto w-full flex flex-wrap flex-row items-center space-x-16 pb-10 overflow-x-auto">
        {logos.map((logo, index) => (
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              key={index}
            />
        ))}
      </div>
  );
};

export default ClientLogos;
