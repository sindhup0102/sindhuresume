
import React, { useEffect, useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
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
  
  const education = [
    {
      degree: "Master of Science",
      major: "Health Informatics",
      institution: "University of Wisconsin-Milwaukee",
      location: "Milwaukee, WI, USA",
      period: "08/2023 - 12/2024",
      gpa: "3.9/4"
    },
    {
      degree: "Bachelor of Science",
      major: "Health Informatics, Cardiac Care and Cardiovascular Technology",
      institution: "P.E.S. Institute of Medical Sciences and Research",
      location: "AP, India",
      period: "12/2019 - 12/2022",
      gpa: "3.7/4"
    }
  ];
  
  return (
    <section id="education" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        
        <div 
          ref={containerRef}
          className="section-container grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {education.map((edu, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-2xl p-6 animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.period}</p>
                </div>
              </div>
              
              <div className="pl-15">
                <p className="font-medium mb-1">{edu.major}</p>
                <p className="mb-2">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.location}</p>
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary">
                  <span className="font-medium">GPA: {edu.gpa}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
