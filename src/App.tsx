import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { ServicesOverview } from './components/ServicesOverview.tsx';
import { ServiceDeepDives } from './components/ServiceDeepDives.tsx';
import { ProcessTimeline } from './components/ProcessTimeline.tsx';
import { Industries } from './components/Industries.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { PricingPackages } from './components/PricingPackages.tsx';
import { CtaBanner } from './components/CtaBanner.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

export function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-[#F5B90F] selection:text-black">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section with 3D Centerpiece */}
        <Hero />

        {/* 3. About Us */}
        <About />

        {/* 4. What We Do (6 Services Cards) */}
        <ServicesOverview />

        {/* 5. Service Deep-Dives (Social Media & Web/Ads) */}
        <ServiceDeepDives />

        {/* 6. Our 6-Step Process */}
        <ProcessTimeline />

        {/* 7. Who We Work With (8 Industries) */}
        <Industries />

        {/* 8. Why Choose Us (8 Advantages) */}
        <WhyChooseUs />

        {/* 9. Portfolio Showcase & Before/After Slider */}
        <Portfolio />

        {/* 10. Packages & Pricing Matrix */}
        <PricingPackages />

        {/* 11. Final Impact CTA Banner */}
        <CtaBanner />

        {/* 12. Functional Contact Form & Channels */}
        <Contact />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}

export default App;
