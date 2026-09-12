import React from 'react';
import { PricingPackages } from '../components/PricingPackages.tsx';
import { CtaBanner } from '../components/CtaBanner.tsx';

export const PackagesPage: React.FC = () => {
  return (
    <>
      <PricingPackages />
      <CtaBanner />
    </>
  );
};

export default PackagesPage;
