import React from 'react';
import { Portfolio } from '../components/Portfolio.tsx';
import { CtaBanner } from '../components/CtaBanner.tsx';

export const WorkPage: React.FC = () => {
  return (
    <>
      <Portfolio />
      <CtaBanner />
    </>
  );
};

export default WorkPage;
