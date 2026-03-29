import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Capabilities from './components/sections/Capabilities';
import CCOModel from './components/sections/CCOModel';
import Platform from './components/sections/Platform';
import WhyCymonic from './components/sections/WhyCymonic';
import Arise from './components/sections/Arise';
import AriseBand from './components/sections/AriseBand';
import TechPartners from './components/sections/TechPartners';
import GlobalReach from './components/sections/GlobalReach';
import CTABand from './components/sections/CTABand';

const App: React.FC = () => (
  <>
    <Navbar />
    <main className="pt-16 overflow-x-hidden">
      <Hero />
      <TechPartners />
      <Capabilities />
      <CCOModel />
      <Platform />
      <WhyCymonic />
      <Arise />
      <GlobalReach />
      <AriseBand />
      <CTABand />
    </main>
    <Footer />
  </>
);

export default App;
