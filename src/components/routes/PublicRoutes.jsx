import React from 'react'
import Stats from "../Stats";
import BuyTrustedGroceries from "../BuyTrustedGroceries";
import HowItWorks from "../HowItWorks";
import Testimonials from "../Testimonials";
import FAQ from "../Faq";
import CTA from "../Cta";
// import Footer from "../Footer";
import About from "../About";
import Hero from '../Hero';
const PublicRoutes = () => {
  return (
    <>
   
        <div className="min-h-screen bg-white font-inter text-gray-800 scroll-smooth">
            <main className="space-y-0">
          <section id="hero" className="m-0 p-0">
            <Hero/>
          </section>
        
          <section id="why-us" className="m-0 p-0">
            <Stats />
          </section>
        
          <section id="available-groceries" className="m-0 p-0">
            <BuyTrustedGroceries />
          </section>
        
          <section id="how-it-works" className="m-0 p-0">
            <HowItWorks />
          </section>
        
          <section id="testimonials" className="m-0 p-0">
            {/* <Testimonials /> */}
          </section>
        
           <section id="about" className="m-0 p-0">
            {/* <Testimonials /> */}
            <About/>
          </section>
        
          <section id="faqs" className="m-0 p-0">
            <FAQ />
          </section>
        
          <section id="cta" className="m-0 p-0">
            <CTA />
          </section>
        </main>
        
              {/* Footer */}
              {/* <Footer /> */}
            </div>
     
    </>
  )
}

export default PublicRoutes