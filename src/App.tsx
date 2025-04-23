import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PropertyHighlights from './components/PropertyHighlights';
import Gallery from './components/Gallery';
import PropertyDetails from './components/PropertyDetails';
import ContactSection from './components/ContactSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <PropertyHighlights />
      <Gallery />
      <PropertyDetails />
      <CtaSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;