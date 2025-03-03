
import React, { useEffect, useRef } from 'react';
import { User, FileDigit, Network, Shield } from 'lucide-react';

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
        <h2 className="text-3xl font-bold mb-12 text-center font-italiana text-italian-chianti">About Me</h2>
        
        <div 
          ref={containerRef}
          className="section-container"
        >
          <div className="glassmorphism rounded-2xl p-8 animate-fade-in opacity-0 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center bg-italian-terracotta/10 flex-shrink-0">
                <User className="text-italian-terracotta" size={40} />
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glassmorphism rounded-2xl p-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-italian-terracotta/10 mb-4">
                  <FileDigit className="text-italian-terracotta" size={30} />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-italiana">Data Analysis</h3>
                <p className="text-muted-foreground">
                  Expertise in analyzing healthcare data using SAS, R, and Python to derive actionable insights that improve patient outcomes and clinical efficiency.
                </p>
              </div>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-italian-terracotta/10 mb-4">
                  <Network className="text-italian-terracotta" size={30} />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-italiana">Healthcare Integration</h3>
                <p className="text-muted-foreground">
                  Experience with health information systems integration, clinical workflows, and implementing data standards like FHIR for seamless information exchange.
                </p>
              </div>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-italian-terracotta/10 mb-4">
                  <Shield className="text-italian-terracotta" size={30} />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-italiana">Data Security</h3>
                <p className="text-muted-foreground">
                  Knowledge of healthcare data security practices, HIPAA compliance, and protecting sensitive patient information while enabling necessary data access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
