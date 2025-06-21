
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Header from './Header';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import FeaturesSection from './FeaturesSection';
import ProductsSection from './ProductsSection';
import CTASection from './CTASection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ProductsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
