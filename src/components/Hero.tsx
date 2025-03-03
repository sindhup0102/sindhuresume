
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
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #f6f6f6 0%, #f0f0f0 100%)'
      }}
    >
      {/* Abstract pattern background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div 
          className="absolute inset-0 z-0 opacity-40" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=1600&q=60")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) brightness(1.2) contrast(0.8)'
          }}
        ></div>
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      </div>
      
      <div 
        ref={containerRef}
        className="section-container max-w-5xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10"
      >
        {/* Profile Image Section */}
        <div className="flex-shrink-0 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 blur-md"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80" 
                alt="Sindhu Petapalle" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                style={{ filter: 'grayscale(30%)' }}
              />
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="relative mb-2 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 drop-shadow-sm">
              Sindhu Petapalle
            </h1>
          </div>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in opacity-0 font-light tracking-wide" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <span className="font-medium">Health Informatics Professional</span>
          </h2>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <a 
              href="https://linkedin.com/in/sindhu-petapalle7/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-link group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 text-gray-800 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              data-tooltip="Connect on LinkedIn"
            >
              <Linkedin size={18} className="transition-transform group-hover:scale-110" />
              <span className="hidden sm:inline font-medium">LinkedIn</span>
            </a>
            
            <a 
              href="mailto:petapallesindhu@gmail.com" 
              className="social-icon-link group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 text-gray-800 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              data-tooltip="Send Email"
            >
              <Mail size={18} className="transition-transform group-hover:scale-110" />
              <span className="hidden sm:inline font-medium">Email</span>
            </a>
            
            <a 
              href="tel:+15128182210" 
              className="social-icon-link group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 text-gray-800 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              data-tooltip="Call Me"
            >
              <Phone size={18} className="transition-transform group-hover:scale-110" />
              <span className="hidden sm:inline font-medium">512-818-2210</span>
            </a>
            
            <a 
              href="https://github.com/sindhup0102" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-link group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 text-gray-800 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              data-tooltip="Check my GitHub"
            >
              <Github size={18} className="transition-transform group-hover:scale-110" />
              <span className="hidden sm:inline font-medium">GitHub</span>
            </a>
          </div>
          
          <div 
            ref={cardRef}
            className="card-3d p-6 md:p-8 rounded-xl max-w-2xl mb-8 animate-fade-in opacity-0 transition-transform relative overflow-hidden backdrop-blur-sm border border-white/80 shadow-xl" 
            style={{ 
              animationDelay: '1s', 
              animationFillMode: 'forwards',
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transformStyle: 'preserve-3d',
              background: 'rgba(255,255,255,0.7)',
            }}
          >
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-gray-100 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gray-100 rounded-full opacity-30 blur-3xl"></div>
            
            <p className="text-lg relative z-10 leading-relaxed text-gray-800">
              Health Informatics professional with expertise in <span className="font-semibold">SAS</span>, <span className="font-semibold">R</span>, <span className="font-semibold">Python</span>, and <span className="font-semibold">SQL</span>. 
              Specialized in healthcare data analysis, clinical trials, and biomedical data interpretation.
            </p>
          </div>
          
          <Button 
            onClick={scrollToNext}
            variant="outline" 
            size="lg"
            className="animate-bounce-slow animate-fade-in opacity-0 group border border-gray-300 bg-white/80 hover:bg-white/90 text-gray-800 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
            style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
          >
            <span className="relative z-10">Explore My Profile</span>
            <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
