
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
import LoadingTransition from '@/components/LoadingTransition';

const Index = () => {
  // Add page transitions
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    let currentSection = 0;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
        currentSection++;
        sections[currentSection].scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        currentSection--;
        sections[currentSection].scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    // Apply entrance animations to all sections
    const applyAnimations = () => {
      sections.forEach((section, index) => {
        section.style.setProperty('--stagger-delay', `${index * 100}ms`);
      });
    };
    
    window.addEventListener('keydown', handleKeyDown);
    applyAnimations();
    
    // Disable scrolling briefly during initial load
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflow = '';
    }, 1800);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground scroll-container">
      <LoadingTransition />
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
