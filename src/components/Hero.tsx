
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Briefcase, Github, Linkedin, Mail, Phone, Database, HeartPulse, Microscope } from 'lucide-react';
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
      className="min-h-screen flex items-center justify-center pt-20 px-6"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.7)), url("https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div 
        ref={containerRef}
        className="section-container max-w-5xl w-full flex flex-col items-center text-center backdrop-blur-sm py-12 px-6 rounded-xl border border-gray-200 shadow-xl bg-white/60 dark:bg-gray-900/40"
      >
        <div className="relative mb-4">
          <div className="absolute -z-10 w-full h-24 bg-gradient-to-r from-gray-50/70 via-gray-100/60 to-gray-200/70 blur-3xl opacity-80"></div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-italiana font-bold mb-6 animate-fade-in opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-black to-gray-700" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Sindhu Petapalle
          </h1>
        </div>
        
        <h2 className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in opacity-0 font-italiana relative" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <span className="relative z-10">
            Health Informatics Professional
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gray-500/0 via-gray-500/80 to-gray-500/0"></span>
          </span>
        </h2>
        
        <div className="flex justify-center gap-10 mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <div className="flex flex-col items-center p-3 rounded-lg bg-white/60 backdrop-blur-md shadow-md border border-gray-300 hover:border-gray-400 transition-all duration-300">
            <Database size={28} className="text-gray-800 mb-1" />
            <span className="text-xs font-medium text-gray-700">Data Analysis</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-white/60 backdrop-blur-md shadow-md border border-gray-300 hover:border-gray-400 transition-all duration-300">
            <HeartPulse size={28} className="text-gray-800 mb-1" />
            <span className="text-xs font-medium text-gray-700">Healthcare</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-white/60 backdrop-blur-md shadow-md border border-gray-300 hover:border-gray-400 transition-all duration-300">
            <Microscope size={28} className="text-gray-800 mb-1" />
            <span className="text-xs font-medium text-gray-700">Research</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <a 
            href="https://linkedin.com/in/sindhu-petapalle7/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-link flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-md border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
            data-tooltip="Connect on LinkedIn"
          >
            <Linkedin size={18} className="text-gray-800" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          
          <a 
            href="mailto:petapallesindhu@gmail.com" 
            className="social-icon-link flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-md border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
            data-tooltip="Send Email"
          >
            <Mail size={18} className="text-gray-800" />
            <span className="hidden sm:inline">Email</span>
          </a>
          
          <a 
            href="tel:+15128182210" 
            className="social-icon-link flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-md border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
            data-tooltip="Call Me"
          >
            <Phone size={18} className="text-gray-800" />
            <span className="hidden sm:inline">512-818-2210</span>
          </a>
          
          <a 
            href="https://github.com/sindhup0102" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-link flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-md border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
            data-tooltip="Check my GitHub"
          >
            <Github size={18} className="text-gray-800" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
        
        <div 
          ref={cardRef}
          className="card-3d p-6 md:p-8 rounded-2xl max-w-3xl mb-12 animate-fade-in opacity-0 transition-all border border-gray-200 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm shadow-xl" 
          style={{ 
            animationDelay: '0.8s', 
            animationFillMode: 'forwards',
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d' 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl -z-10"></div>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 rounded-full bg-gray-100">
              <Briefcase size={24} className="text-gray-800" />
            </div>
            <h3 className="text-xl font-italiana">Professional Summary</h3>
          </div>
          <p className="text-lg leading-relaxed text-gray-700">
            Health Informatics professional with expertise in SAS, R, Python, and SQL. 
            Specialized in healthcare data analysis, clinical trials, and biomedical data interpretation.
          </p>
        </div>
        
        <Button 
          onClick={scrollToNext}
          variant="default" 
          size="lg"
          className="animate-bounce-slow animate-fade-in opacity-0 group bg-gradient-to-r from-gray-700 to-black hover:from-black hover:to-gray-700 shadow-md hover:shadow-lg"
          style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
        >
          <span>Explore My Profile</span>
          <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={18} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
