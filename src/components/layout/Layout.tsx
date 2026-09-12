import React, { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../Navbar.tsx';
import { Footer } from '../Footer.tsx';
import { ScrollToTop } from '../common/ScrollToTop.tsx';
import { PageLoader } from '../common/PageLoader.tsx';

export const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-[#F5B90F] selection:text-black">
      <ScrollToTop />
      
      {/* Persistent Shared Header */}
      <Navbar />

      {/* Main Routed Content with Animated Route Transitions */}
      <div className="flex-grow pt-20 sm:pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full flex flex-col"
          >
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Persistent Shared Footer */}
      <Footer />
    </div>
  );
};
