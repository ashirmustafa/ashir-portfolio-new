
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Home from '@/components/Home';
import Partners from '@/components/Partners';
import Team from '@/components/Team';
import News from '@/components/News';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-black">
      <Navigation />
      <Hero />
      <Home />
      <Partners />
      <Team />
      <News />
      <Footer />
    </div>
  );
};

export default Index;
