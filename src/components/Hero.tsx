
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Briefcase, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
      className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-b from-italian-cream/50 to-background"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1526724132975-731d24e189ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundAttachment: 'fixed'
      }}
    >
      <div 
        ref={containerRef}
        className="section-container max-w-5xl w-full flex flex-col items-center text-center backdrop-blur-sm py-12 px-6 rounded-lg"
      >
        <div className="mb-8 relative">
          <div className="absolute -z-10 w-64 h-64 bg-italian-terracotta/10 rounded-full blur-3xl opacity-70 animate-pulse-slow"></div>
          <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-italian-terracotta/20 shadow-xl">
            <AvatarImage src="/profile.jpg" alt="Sindhu Petapalle" />
            <AvatarFallback className="bg-italian-terracotta/10 text-2xl font-bold">SP</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-italiana font-bold mb-6 animate-fade-in opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-italian-chianti to-italian-terracotta" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Sindhu Petapalle
          </h1>
        </div>
        
        <h2 className="text-xl md:text-2xl text-italian-chianti/80 mb-8 animate-fade-in opacity-0 font-italiana" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Health Informatics Professional
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <a 
            href="https://linkedin.com/in/sindhu-petapalle7/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-link flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-md border border-italian-terracotta/30 hover:border-italian-terracotta hover:shadow-lg transition-all duration-300"
            data-tooltip="Connect on LinkedIn"
          >
            <Linkedin size={18} className="text-italian-terracotta" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          
          <a 
            href="mailto:petapallesindhu@gmail.com" 
            className="social-icon-link flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-md border border-italian-terracotta/30 hover:border-italian-terracotta hover:shadow-lg transition-all duration-300"
            data-tooltip="Send Email"
          >
            <Mail size={18} className="text-italian-terracotta" />
            <span className="hidden sm:inline">Email</span>
          </a>
          
          <a 
            href="tel:+15128182210" 
            className="social-icon-link flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-md border border-italian-terracotta/30 hover:border-italian-terracotta hover:shadow-lg transition-all duration-300"
            data-tooltip="Call Me"
          >
            <Phone size={18} className="text-italian-terracotta" />
            <span className="hidden sm:inline">512-818-2210</span>
          </a>
          
          <a 
            href="https://github.com/sindhup0102" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-link flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-md border border-italian-terracotta/30 hover:border-italian-terracotta hover:shadow-lg transition-all duration-300"
            data-tooltip="Check my GitHub"
          >
            <Github size={18} className="text-italian-terracotta" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
        
        <div 
          ref={cardRef}
          className="card-3d p-6 md:p-8 rounded-2xl max-w-3xl mb-12 animate-fade-in opacity-0 transition-all border border-italian-terracotta/10 bg-white/70 backdrop-blur-sm shadow-xl" 
          style={{ 
            animationDelay: '0.8s', 
            animationFillMode: 'forwards',
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d' 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-italian-tuscany/5 to-italian-terracotta/10 rounded-2xl -z-10"></div>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 rounded-full bg-italian-terracotta/10">
              <Briefcase size={24} className="text-italian-terracotta" />
            </div>
            <h3 className="text-xl font-italiana">Professional Summary</h3>
          </div>
          <p className="text-lg leading-relaxed text-italian-chianti/90">
            Dedicated Health Informatics professional specializing in healthcare data analysis using SAS, R, Python, and SQL. 
            Expert in leveraging data analytics to improve healthcare outcomes through clinical trials analysis, 
            biomedical data interpretation, and health information systems optimization.
          </p>
        </div>
        
        <Button 
          onClick={scrollToNext}
          variant="default" 
          size="lg"
          className="animate-bounce-slow animate-fade-in opacity-0 group bg-italian-terracotta hover:bg-italian-sienna shadow-md hover:shadow-lg"
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
