"use client"

import BrandBanner from "./BrandBanner";
import partner2 from "../../../public/images/partners/partner1.svg";
import partner3 from "../../../public/images/partners/partner2.svg";
import partner4 from "../../../public/images/partners/partner3.svg";
import partner1 from "../../../public/images/partners/partner4.svg";
import affiliate1 from "../../../public/images/affiliates/affiliate1.svg";
import affiliate2 from "../../../public/images/affiliates/affiliate2.svg";
import affiliate3 from "../../../public/images/affiliates/affiliate3.svg";

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
];

const affiliates = [
  affiliate1,
  affiliate2,
  affiliate3
];

const Brands = () => {
  return (
    <>
      <BrandBanner brands={partners} title="Trusted Partners" />
      <BrandBanner brands={affiliates} title="Members of" />
    </>
  );
};

export default Brands;
