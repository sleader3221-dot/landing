import { FaqProvider } from "../context/FaqContext";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import BuyTrustedGroceries from "../components/BuyTrustedGroceries";
import FAQ from "../components/Faq";
import CTA from "../components/Cta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 scroll-smooth">
      <main className="space-y-0">
        <section id="hero" className="m-0 p-0">
          <Hero />
        </section>
        <section id="about" className="m-0 p-0">
          <About />
        </section>
        <section id="why-us" className="m-0 p-0">
          <Stats />
        </section>
        <section id="how-it-works" className="m-0 p-0">
          <HowItWorks />
        </section>
        <section id="available-groceries" className="m-0 p-0">
          <BuyTrustedGroceries />
        </section>
        <section id="faqs" className="m-0 p-0">
          <FaqProvider>
            <FAQ />
          </FaqProvider>
        </section>
        <section id="cta" className="m-0 p-0">
          <CTA />
        </section>
      </main>
      <Footer />
    </div>
  );
}
