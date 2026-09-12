import React from 'react';
import { Contact as ContactSection } from '../components/Contact.tsx';
import { CtaBanner } from '../components/CtaBanner.tsx';

export const ContactPage: React.FC = () => {
  return (
    <>
      <ContactSection />
      <CtaBanner />
    </>
  );
};

export default ContactPage;
