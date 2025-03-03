
import React, { useEffect, useRef } from 'react';
import { User } from 'lucide-react';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
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
  
  return (
    <section id="about" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        
        <div 
          ref={containerRef}
          className="section-container glassmorphism rounded-2xl p-8 animate-fade-in opacity-0"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 rounded-full flex items-center justify-center bg-primary/10 flex-shrink-0">
              <User className="text-primary" size={40} />
            </div>
            
            <div className="space-y-4">
              <p className="text-lg">
                I am a Health Informatics professional with expertise in SAS, R, Python, and SQL for healthcare data analysis. 
                My background combines technical skills with healthcare domain knowledge, allowing me to effectively analyze 
                clinical data and derive meaningful insights.
              </p>
              
              <p>
                With experience in clinical trials, biomedical data analysis, and healthcare information systems, 
                I'm passionate about leveraging data analytics to improve healthcare outcomes and patient care. 
                My skills extend to data standards like FHIR and HIPAA compliance, as well as deep understanding 
                of health information exchange processes.
              </p>
              
              <p>
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
