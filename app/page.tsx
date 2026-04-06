import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Technologies />
      <Process />
      <Testimonials />
      <Footer />
    </>
  );
}
