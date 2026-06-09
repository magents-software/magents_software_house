import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Magents Software House",
  url: "https://magents.com.br",
  logo: "https://magents.com.br/assets/icon.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "magents@magents.com.br",
    contactType: "customer support",
    availableLanguage: "Portuguese",
  },
  sameAs: ["https://instagram.com/magents_software"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
