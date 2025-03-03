
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Cursor from '@/components/Cursor';
import Animations from '@/components/Animations';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-container">
      <Cursor />
      <Animations />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certifications />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
