import Navbar from "./Home/Navbar";
import Hero from "./Home/Hero";
import AboutUs from "./Home/AboutUs";
import Services from "./Home/Services";
import BannerCTA from "./Home/Banner-CTA"
import Brands from "./Home/Brands"
import WhyCompany from "./Home/WhyCompany"
import Contact from "./Home/Contact"
import Footer from "./Home/Footer"
import heroBackgroundImage from "../../public/images/hero-bg.png"

export default function Home() {
  return (
    <>
      <div className="bg-cover bg-hero w-full h-[500px] md:h-[850px]">
        <Navbar />
        <Hero />
      </div>
      <Brands/>
      <AboutUs />
      <Services />
      <WhyCompany />
      <BannerCTA />
      <Contact />
      <Footer />
    </>
  );
}
