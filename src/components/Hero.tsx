
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Briefcase, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      setRotation({ x: rotateX, y: rotateY });
    };
    
    const resetRotation = () => {
      setRotation({ x: 0, y: 0 });
    };
    
    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', resetRotation);
    }
    
    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', resetRotation);
      }
    };
  }, []);
  
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 px-6 bg-background relative overflow-hidden"
    >
      {/* Decorative elements - more subtle now */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-gray-100 opacity-10 blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 right-10 w-40 h-40 rounded-full bg-gray-100 opacity-10 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-gray-100 opacity-10 blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-28 h-28 rounded-full bg-gray-100 opacity-10 blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div 
        ref={containerRef}
        className="section-container max-w-5xl w-full flex flex-col items-center text-center relative z-10"
      >
        <div className="relative mb-6">
          <div className="absolute -inset-1 bg-gray-200 rounded-full blur-md opacity-50 animate-pulse-slow"></div>
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gray-800 flex items-center justify-center shadow-xl relative animate-float z-10">
            <span className="text-4xl md:text-5xl text-white font-bold">SP</span>
          </div>
        </div>
        
        <div className="relative mb-6">
          <div className="absolute -inset-x-6 -inset-y-2 bg-gray-100/20 blur-md"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in opacity-0 text-gray-800 dark:text-gray-100 drop-shadow-sm" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Sindhu Petapalle
          </h1>
        </div>
        
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in opacity-0 font-light tracking-wide" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <span className="font-medium">Health Informatics Professional</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <a 
            href="https://linkedin.com/in/sindhu-petapalle7/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-link group flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-800 text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            data-tooltip="Connect on LinkedIn"
          >
            <Linkedin size={18} className="transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline font-medium">LinkedIn</span>
          </a>
          
          <a 
            href="mailto:petapallesindhu@gmail.com" 
            className="social-icon-link group flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-800 text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            data-tooltip="Send Email"
          >
            <Mail size={18} className="transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline font-medium">Email</span>
          </a>
          
          <a 
            href="tel:+15128182210" 
            className="social-icon-link group flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-800 text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            data-tooltip="Call Me"
          >
            <Phone size={18} className="transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline font-medium">512-818-2210</span>
          </a>
          
          <a 
            href="https://github.com/sindhup0102" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-link group flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-800 text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            data-tooltip="Check my GitHub"
          >
            <Github size={18} className="transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline font-medium">GitHub</span>
          </a>
        </div>
        
        <div 
          ref={cardRef}
          className="card-3d p-8 md:p-10 rounded-2xl max-w-3xl mb-12 animate-fade-in opacity-0 transition-transform relative overflow-hidden backdrop-blur-sm border border-gray-200 dark:border-gray-800 shadow-2xl" 
          style={{ 
            animationDelay: '0.8s', 
            animationFillMode: 'forwards',
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d',
            background: 'rgba(255,255,255,0.8)',
          }}
        >
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-gray-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gray-200 rounded-full opacity-20 blur-3xl"></div>
          
          <p className="text-lg relative z-10 leading-relaxed text-gray-800 dark:text-white/90">
            Health Informatics professional with expertise in <span className="font-semibold">SAS</span>, <span className="font-semibold">R</span>, <span className="font-semibold">Python</span>, and <span className="font-semibold">SQL</span>. 
            Specialized in healthcare data analysis, clinical trials, and biomedical data interpretation.
          </p>
        </div>
        
        <Button 
          onClick={scrollToNext}
          variant="outline" 
          size="lg"
          className="animate-bounce-slow animate-fade-in opacity-0 group relative overflow-hidden border-gray-300 hover:border-gray-400 bg-white/50 hover:bg-white/80 text-gray-800 transition-all duration-300 transform hover:-translate-y-1"
          style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
        >
          <span className="relative z-10">Explore My Profile</span>
          <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={18} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
