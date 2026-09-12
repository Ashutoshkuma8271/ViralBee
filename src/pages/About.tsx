import React from 'react';
import { About as AboutSection } from '../components/About.tsx';
import { WhyChooseUs } from '../components/WhyChooseUs.tsx';
import { CtaBanner } from '../components/CtaBanner.tsx';

export const AboutPage: React.FC = () => {
  return (
    <>
      <AboutSection />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
};

export default AboutPage;
