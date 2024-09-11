import Navbar from "./Home/Navbar";
import Hero from "./Home/Hero";
import AboutUs from "./Home/AboutUs";
import Services from "./Home/Services";
import BannerCTA from "./Home/Banner-CTA"
import Brands from "./Home/Brands"
import WhyCoddit from "./Home/WhyCoddit"
import Contact from "./Home/Contact"
import Footer from "./Home/Footer"

export const runtime = 'edge';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <BannerCTA />
      <Brands />
      <WhyCoddit />
      <Contact />
      <Footer />
    </>
  );
}
