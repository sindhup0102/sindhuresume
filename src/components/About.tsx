
import React, { useEffect, useRef, useState } from 'react';
import { User } from 'lucide-react';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 bg-white text-black relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full opacity-5">
          <div className="w-full h-full border-[0.5px] border-black/20 grid grid-cols-6 md:grid-cols-12"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title with horizontal line */}
        <div className="flex items-center mb-16">
          <div className="w-12 h-px bg-black mr-4"></div>
          <h2 className="text-3xl md:text-4xl font-italiana font-bold uppercase tracking-tight">About Me</h2>
        </div>
        
        <div 
          ref={containerRef}
          className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <div className="w-20 h-20 bg-black text-white flex items-center justify-center">
                <User size={32} />
              </div>
            </div>
            
            <div className="md:col-span-9 space-y-6">
              <p className="font-italiana text-lg leading-relaxed">
                I am a Health Informatics professional with expertise in SAS, R, Python, and SQL for healthcare data analysis. 
                My background combines technical skills with healthcare domain knowledge, allowing me to effectively analyze 
                clinical data and derive meaningful insights.
              </p>
              
              <p className="font-italiana text-lg text-black/80 leading-relaxed">
                With experience in clinical trials, biomedical data analysis, and healthcare information systems, 
                I'm passionate about leveraging data analytics to improve healthcare outcomes and patient care. 
                My skills extend to data standards like FHIR and HIPAA compliance, as well as deep understanding 
                of health information exchange processes.
              </p>
              
              <p className="font-italiana text-lg text-black/80 leading-relaxed">
                I'm currently pursuing my Master's degree in Health Informatics at the University of Wisconsin-Milwaukee, 
                where I'm enhancing my technical expertise and healthcare knowledge. My goal is to continue contributing 
                to the advancement of healthcare through data-driven insights and innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
