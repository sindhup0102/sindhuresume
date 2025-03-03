
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Briefcase, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visibility after a short delay to allow transitions to occur
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
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
      clearTimeout(timer);
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
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
    >
      {/* Primary background with gradient overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-fixed bg-center animate-blur-in opacity-0"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=1920&q=80")',
          filter: 'brightness(0.4) contrast(1.3)',
          animationDelay: '0.1s',
          animationFillMode: 'forwards'
        }}
      />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-indigo-800/20 to-blue-900/30 animate-gradient animate-blur-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}></div>
      
      {/* Texture overlay */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay animate-blur-in"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1600&q=60")',
          backgroundSize: '200px',
          animationDelay: '0.5s',
          animationFillMode: 'forwards'
        }}
      />
      
      {/* Glass overlay with blue tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-indigo-950/40 to-black/80 backdrop-blur-sm animate-blur-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}></div>
      
      {/* Glowing orbs in background */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/20 blur-[100px] animate-morph"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600/20 blur-[100px] animate-morph" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-indigo-500/20 blur-[80px] animate-morph" style={{ animationDelay: '4s' }}></div>
      
      <div 
        ref={containerRef}
        className={`section-container max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Profile Image with enhanced glow effect */}
        <div className="flex-shrink-0 animate-appear opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <div className="relative animate-float">
            {/* Outer glow ring with rotation */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-pink-500/30 blur-xl opacity-70 animate-pulse-slow animate-rotate-slow"></div>
            
            {/* Inner glow ring with opposite rotation */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-400/30 to-purple-400/20 blur-md animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
            
            {/* Image container with morph animation */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-white/20 shadow-[0_0_30px_rgba(79,70,229,0.3)] animate-morph" style={{ animationDuration: '8s' }}>
              <img 
                src="/lovable-uploads/345d6cc9-83d0-4a54-8e88-ecb892359cd0.png" 
                alt="Sindhu Petapalle" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Name with gradient text */}
          <div className="relative mb-2 animate-slide-down opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-lg transition-all duration-500 hover:from-blue-200 hover:via-purple-200 hover:to-blue-200">
              Sindhu Petapalle
            </h1>
          </div>
          
          {/* Title with subtle glow */}
          <h2 className="text-xl md:text-2xl text-white/90 mb-6 animate-slide-up opacity-0 font-light tracking-wide" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <span className="font-medium relative">
              <span className="relative z-10">Health Informatics Professional</span>
              <span className="absolute -inset-1 bg-indigo-500/10 blur-sm rounded-lg -z-0 animate-pulse-slow"></span>
            </span>
          </h2>
          
          {/* Enhanced social links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8 animate-slide-up opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <a 
              href="https://linkedin.com/in/sindhu-petapalle7/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-link group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white border border-indigo-500/30 shadow-lg hover:bg-indigo-600/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-indigo-500/30 hover:shadow-lg"
              data-tooltip="Connect on LinkedIn"
            >
              <Linkedin size={18} className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
              <span className="hidden sm:inline font-medium">LinkedIn</span>
            </a>
            
            <a 
              href="mailto:petapallesindhu@gmail.com" 
              className="social-icon-link group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white border border-purple-500/30 shadow-lg hover:bg-purple-600/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-purple-500/30 hover:shadow-lg"
              data-tooltip="Send Email"
            >
              <Mail size={18} className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
              <span className="hidden sm:inline font-medium">Email</span>
            </a>
            
            <a 
              href="tel:+15128182210" 
              className="social-icon-link group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white border border-blue-500/30 shadow-lg hover:bg-blue-600/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-blue-500/30 hover:shadow-lg"
              data-tooltip="Call Me"
            >
              <Phone size={18} className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
              <span className="hidden sm:inline font-medium">512-818-2210</span>
            </a>
            
            <a 
              href="https://github.com/sindhup0102" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-link group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white border border-pink-500/30 shadow-lg hover:bg-pink-600/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-pink-500/30 hover:shadow-lg"
              data-tooltip="Check my GitHub"
            >
              <Github size={18} className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
              <span className="hidden sm:inline font-medium">GitHub</span>
            </a>
          </div>
          
          {/* Enhanced 3D card with gradient */}
          <div 
            ref={cardRef}
            className="card-3d p-6 md:p-8 rounded-xl max-w-2xl mb-8 animate-zoom-in opacity-0 transition-transform duration-500 relative overflow-hidden backdrop-blur-sm border border-white/20 shadow-2xl" 
            style={{ 
              animationDelay: '1.4s', 
              animationFillMode: 'forwards',
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transformStyle: 'preserve-3d',
              background: 'linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%)',
              transition: 'transform 0.5s cubic-bezier(0.26, 1.04, 0.54, 1), box-shadow 0.5s cubic-bezier(0.26, 1.04, 0.54, 1)'
            }}
          >
            {/* Card background effects */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/20 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full opacity-30 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 animate-gradient"></div>
            
            {/* Card content with highlighted text */}
            <p className="text-lg relative z-10 leading-relaxed text-white/90">
              Health Informatics professional with expertise in <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300 animate-pulse-slow">SAS</span>, <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 animate-pulse-slow" style={{ animationDelay: '0.5s' }}>R</span>, <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 animate-pulse-slow" style={{ animationDelay: '1s' }}>Python</span>, and <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 animate-pulse-slow" style={{ animationDelay: '1.5s' }}>SQL</span>. 
              Specialized in healthcare data analysis, clinical trials, and biomedical data interpretation.
            </p>
          </div>
          
          {/* Enhanced button with gradient */}
          <Button 
            onClick={scrollToNext}
            variant="outline" 
            size="lg"
            className="animate-bounce-slow animate-appear opacity-0 group relative border-0 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 hover:from-indigo-500/50 hover:to-purple-500/50 text-white transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20"
            style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}
          >
            <span className="relative z-10 transition-transform duration-500 group-hover:scale-105">Explore My Profile</span>
            <div className="absolute inset-0 rounded-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 animate-shimmer"></div>
            </div>
            <ArrowDown className="ml-2 transition-all duration-500 group-hover:translate-y-1" size={18} />
          </Button>
        </div>
      </div>
      
      {/* Enhanced animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => {
          const isEven = i % 2 === 0;
          return (
            <div 
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `rgba(${isEven ? '79, 70, 229' : '147, 51, 234'}, ${Math.random() * 0.5 + 0.3})`,
                boxShadow: `0 0 ${Math.random() * 4 + 1}px rgba(${isEven ? '79, 70, 229' : '147, 51, 234'}, 0.5)`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite, fade-in 2s ease-out forwards`,
                opacity: 0,
                animationDelay: `${Math.random() * 2 + 1}s`,
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
