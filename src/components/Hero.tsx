import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Briefcase, Github, Linkedin, Mail, Phone, Database, HeartPulse, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      clearTimeout(timer);
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
      className="min-h-screen flex flex-col justify-center overflow-hidden relative bg-black text-white"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full opacity-5">
          <div className="w-full h-full border-[0.5px] border-white/20 grid grid-cols-6 md:grid-cols-12"></div>
        </div>
      </div>
      
      {/* Noise texture */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      
      {/* Visual elements that fade in one by one */}
      <div className={`absolute top-20 left-20 w-8 h-8 border-2 border-white/20 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}></div>
      <div className={`absolute bottom-40 right-20 w-16 h-16 border border-white/10 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}></div>
      <div className={`absolute top-40 right-[30%] w-4 h-4 bg-white/5 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}></div>
      
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-screen-2xl mx-auto w-full">
        <div 
          ref={containerRef}
          className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          {/* Highlight bar with animated entrance */}
          <div className={`w-20 h-1 bg-white mb-8 transition-all duration-700 ${isLoaded ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}></div>
          
          {/* Main title with split design and staggered entrance */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-12">
            <div className="md:col-span-12 lg:col-span-12">
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-italiana tracking-tighter leading-none mb-4 font-bold uppercase">
                <span className={`block transition-all duration-700 delay-200 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>SINDHU</span>
                <span className={`block transition-all duration-700 delay-400 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>PETAPALLE</span>
              </h1>
              <h2 className={`text-xl md:text-2xl uppercase tracking-wider font-medium mb-8 transition-all duration-700 delay-600 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                Health Informatics Professional
                <span className="ml-4 inline-block w-12 h-px bg-white/60 align-middle"></span>
              </h2>
            </div>
          </div>
          
          {/* Skills icons with staggered entrance */}
          <div className={`flex flex-wrap justify-start gap-10 mb-12 transition-all duration-700 delay-800 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 flex items-center justify-center border border-white/30 group-hover:border-white transition-colors duration-300">
                <Database size={20} className="text-white" />
              </div>
              <span className="text-sm uppercase tracking-wider text-white/80 group-hover:text-white transition-colors duration-300">Data Analysis</span>
            </div>
            
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 flex items-center justify-center border border-white/30 group-hover:border-white transition-colors duration-300">
                <HeartPulse size={20} className="text-white" />
              </div>
              <span className="text-sm uppercase tracking-wider text-white/80 group-hover:text-white transition-colors duration-300">Healthcare</span>
            </div>
            
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 flex items-center justify-center border border-white/30 group-hover:border-white transition-colors duration-300">
                <Microscope size={20} className="text-white" />
              </div>
              <span className="text-sm uppercase tracking-wider text-white/80 group-hover:text-white transition-colors duration-300">Research</span>
            </div>
          </div>
          
          {/* Social links with staggered entrance */}
          <div className={`flex flex-wrap justify-start gap-4 mb-16 transition-all duration-700 delay-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a 
              href="https://linkedin.com/in/sindhu-petapalle7/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
              <span className="text-xs uppercase tracking-wider">LinkedIn</span>
            </a>
            
            <a 
              href="mailto:petapallesindhu@gmail.com" 
              className="flex items-center gap-2 px-4 py-2 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={16} />
              <span className="text-xs uppercase tracking-wider">Email</span>
            </a>
            
            <a 
              href="tel:+15128182210" 
              className="flex items-center gap-2 px-4 py-2 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
              aria-label="Phone"
            >
              <Phone size={16} />
              <span className="text-xs uppercase tracking-wider">512-818-2210</span>
            </a>
            
            <a 
              href="https://github.com/sindhup0102" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={16} />
              <span className="text-xs uppercase tracking-wider">GitHub</span>
            </a>
          </div>
          
          {/* Professional summary with modern clean design and entrance animation */}
          <div className={`max-w-3xl mb-16 border-l-2 border-white/60 pl-6 transition-all duration-700 delay-1200 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xl uppercase tracking-wide">Professional Summary</h3>
            </div>
            <p className="text-lg text-white/80">
              Health Informatics professional with expertise in SAS, R, Python, and SQL. 
              Specialized in healthcare data analysis, clinical trials, and biomedical data interpretation.
            </p>
          </div>
          
          {/* Modern style button with entrance animation */}
          <Button 
            onClick={scrollToNext}
            variant="outline" 
            size="lg"
            className={`group hover:bg-white hover:text-black transition-all duration-700 delay-1400 rounded-none border-white/60 hover:border-white text-white transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <span className="uppercase text-xs tracking-widest">Explore My Profile</span>
            <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={16} />
          </Button>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-1000 delay-1600 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-0.5 h-16 bg-gradient-to-b from-transparent to-white/60 animate-pulse-slow"></div>
      </div>
    </section>
  );
};

export default Hero;
