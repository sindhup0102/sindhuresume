
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
      className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-b from-purple-50 to-blue-50 dark:from-slate-900 dark:to-indigo-950"
    >
      <div 
        ref={containerRef}
        className="section-container max-w-5xl w-full flex flex-col items-center text-center"
      >
        <div className="animate-float mb-4">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-violet-400 to-pink-400 flex items-center justify-center shadow-lg">
            <span className="text-4xl md:text-5xl text-white font-bold">SP</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Sindhu Petapalle
        </h1>
        
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <span className="text-pink-500">Health</span> <span className="text-purple-500">Informatics</span> <span className="text-indigo-500">Professional</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <a 
            href="https://linkedin.com/in/sindhu-petapalle7/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-link flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:shadow-lg transition-all duration-300"
            data-tooltip="Connect on LinkedIn"
          >
            <Linkedin size={18} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          
          <a 
            href="mailto:petapallesindhu@gmail.com" 
            className="social-icon-link flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-400 to-red-500 text-white hover:shadow-lg transition-all duration-300"
            data-tooltip="Send Email"
          >
            <Mail size={18} />
            <span className="hidden sm:inline">Email</span>
          </a>
          
          <a 
            href="tel:+15128182210" 
            className="social-icon-link flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-green-500 text-white hover:shadow-lg transition-all duration-300"
            data-tooltip="Call Me"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">512-818-2210</span>
          </a>
          
          <a 
            href="https://github.com/sindhup0102" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-link flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:shadow-lg transition-all duration-300"
            data-tooltip="Check my GitHub"
          >
            <Github size={18} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
        
        <div 
          ref={cardRef}
          className="card-3d glassmorphism p-6 md:p-8 rounded-2xl max-w-3xl mb-12 animate-fade-in opacity-0 transition-transform bg-gradient-to-br from-white/70 to-white/30 dark:from-slate-800/70 dark:to-slate-800/30 border border-purple-200 dark:border-indigo-900 shadow-xl" 
          style={{ 
            animationDelay: '0.8s', 
            animationFillMode: 'forwards',
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d',
            boxShadow: '0 10px 30px rgba(147, 51, 234, 0.2)'
          }}
        >
          <div className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-20 blur-xl"></div>
          
          <p className="text-lg relative z-10">
            Health Informatics professional with expertise in <span className="text-blue-500 font-semibold">SAS</span>, <span className="text-green-500 font-semibold">R</span>, <span className="text-yellow-500 font-semibold">Python</span>, and <span className="text-purple-500 font-semibold">SQL</span>. 
            Specialized in healthcare data analysis, clinical trials, and biomedical data interpretation.
          </p>
        </div>
        
        <Button 
          onClick={scrollToNext}
          variant="outline" 
          size="lg"
          className="animate-bounce-slow animate-fade-in opacity-0 group bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-0 hover:from-purple-600 hover:to-indigo-600"
          style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
        >
          <span>Explore My Profile</span>
          <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={18} />
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 opacity-20 blur-xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full bg-gradient-to-r from-blue-300 to-indigo-300 opacity-20 blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-gradient-to-r from-green-300 to-teal-300 opacity-20 blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default Hero;
