import React from 'react';
import { Hero } from '../components/Hero.tsx';
import { About } from '../components/About.tsx';
import { ServicesOverview } from '../components/ServicesOverview.tsx';
import { WhyChooseUs } from '../components/WhyChooseUs.tsx';
import { CtaBanner } from '../components/CtaBanner.tsx';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <ServicesOverview />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
};

export default Home;
