import React from 'react';
import { ServicesOverview } from '../components/ServicesOverview.tsx';
import { ServiceDeepDives } from '../components/ServiceDeepDives.tsx';
import { CtaBanner } from '../components/CtaBanner.tsx';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <ServicesOverview />
      <ServiceDeepDives />
      <CtaBanner />
    </>
  );
};

export default ServicesPage;
