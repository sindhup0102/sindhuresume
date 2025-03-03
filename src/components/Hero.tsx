
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
      className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-indigo-50 via-rose-50 to-teal-50 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-pink-200 to-rose-300 opacity-20 blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 right-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-200 to-indigo-300 opacity-20 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-green-200 to-teal-300 opacity-15 blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-28 h-28 rounded-full bg-gradient-to-r from-purple-200 to-violet-300 opacity-20 blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div 
        ref={containerRef}
        className="section-container max-w-5xl w-full flex flex-col items-center text-center relative z-10"
      >
        <div className="relative mb-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400 rounded-full blur-md opacity-70 animate-pulse-slow"></div>
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-xl relative animate-float z-10">
            <span className="text-4xl md:text-5xl text-white font-bold">SP</span>
          </div>
        </div>
        
        <div className="relative mb-6">
          <div className="absolute -inset-x-6 -inset-y-2 bg-gradient-to-r from-transparent via-violet-400/20 to-transparent blur-md"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 drop-shadow-sm" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Sindhu Petapalle
          </h1>
        </div>
        
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in opacity-0 font-light tracking-wide" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <span className="text-pink-500 font-medium">Health</span> <span className="text-purple-500 font-medium">Informatics</span> <span className="text-indigo-500 font-medium">Professional</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <a 
            href="https://linkedin.com/in/sindhu-petapalle7/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-link group flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-300/30 transition-all duration-300 transform hover:-translate-y-1"
            data-tooltip="Connect on LinkedIn"
          >
            <Linkedin size={18} className="transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline font-medium">LinkedIn</span>
          </a>
          
          <a 
            href="mailto:petapallesindhu@gmail.com" 
            className="social-icon-link group flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:shadow-lg hover:shadow-rose-300/30 transition-all duration-300 transform hover:-translate-y-1"
            data-tooltip="Send Email"
          >
            <Mail size={18} className="transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline font-medium">Email</span>
          </a>
          
          <a 
            href="tel:+15128182210" 
            className="social-icon-link group flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg hover:shadow-emerald-300/30 transition-all duration-300 transform hover:-translate-y-1"
            data-tooltip="Call Me"
          >
            <Phone size={18} className="transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline font-medium">512-818-2210</span>
          </a>
          
          <a 
            href="https://github.com/sindhup0102" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-link group flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:shadow-lg hover:shadow-gray-400/20 transition-all duration-300 transform hover:-translate-y-1"
            data-tooltip="Check my GitHub"
          >
            <Github size={18} className="transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline font-medium">GitHub</span>
          </a>
        </div>
        
        <div 
          ref={cardRef}
          className="card-3d p-8 md:p-10 rounded-2xl max-w-3xl mb-12 animate-fade-in opacity-0 transition-transform relative overflow-hidden backdrop-blur-sm border border-white/30 dark:border-white/10 shadow-2xl" 
          style={{ 
            animationDelay: '0.8s', 
            animationFillMode: 'forwards',
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.3))',
          }}
        >
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 blur-3xl"></div>
          
          <p className="text-lg relative z-10 leading-relaxed text-gray-800 dark:text-white/90">
            Health Informatics professional with expertise in <span className="text-blue-600 dark:text-blue-400 font-semibold">SAS</span>, <span className="text-green-600 dark:text-green-400 font-semibold">R</span>, <span className="text-yellow-600 dark:text-yellow-400 font-semibold">Python</span>, and <span className="text-purple-600 dark:text-purple-400 font-semibold">SQL</span>. 
            Specialized in healthcare data analysis, clinical trials, and biomedical data interpretation.
          </p>
        </div>
        
        <Button 
          onClick={scrollToNext}
          variant="outline" 
          size="lg"
          className="animate-bounce-slow animate-fade-in opacity-0 group relative overflow-hidden bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white border-0 hover:shadow-lg hover:shadow-purple-400/30 transition-all duration-300 transform hover:-translate-y-1"
          style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
        >
          <span className="relative z-10">Explore My Profile</span>
          <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={18} />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
