import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout.tsx';

// Code-split pages with React.lazy for on-demand bundle loading
const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Services = lazy(() => import('./pages/Services.tsx'));
const Process = lazy(() => import('./pages/Process.tsx'));
const Work = lazy(() => import('./pages/Work.tsx'));
const Packages = lazy(() => import('./pages/Packages.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/work" element={<Work />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
