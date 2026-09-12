import React from 'react';
import { ProcessTimeline } from '../components/ProcessTimeline.tsx';
import { Industries } from '../components/Industries.tsx';
import { CtaBanner } from '../components/CtaBanner.tsx';

export const ProcessPage: React.FC = () => {
  return (
    <>
      <ProcessTimeline />
      <Industries />
      <CtaBanner />
    </>
  );
};

export default ProcessPage;
