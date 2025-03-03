
import React, { useEffect, useRef } from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
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
  
  const certifications = [
    { name: "SAS 9.4 Programming (A00-231)", issuer: "LinkedIn Learning", date: "Aug 2024" },
    { name: "AI in Healthcare Capstone", issuer: "University", date: "Nov 2024" },
    { name: "SQL in SAS", issuer: "LinkedIn Learning", date: "Aug 2024" },
    { name: "Data Analytics", issuer: "Udemy", date: "Mar 2023" },
    { name: "R Programming", issuer: "Udemy", date: "Mar 2023" },
    { name: "Advanced SQL Course", issuer: "Udemy", date: "Mar 2023" },
    { name: "Machine Learning", issuer: "Udemy", date: "Sep 2021" }
  ];
  
  const workshops = [
    { 
      name: "Clinical Trial Data Analysis Using SAS",
      description: "Engaged in a practical workshop covering the implementation of CDISC standards (SDTM, ADaM) and statistical reporting for cardiovascular clinical trials",
      date: "August 25, 2020"
    },
    { 
      name: "Data Analysis",
      description: "Conducted a session on creating reusable SAS macro programs to automate repetitive data analysis tasks in cardiac care",
      date: "February 15, 2021"
    },
    { 
      name: "Statistical Modelling for Cardiovascular Research",
      description: "Attended a hands-on session demonstrating the use of SAS for logistic regression, survival analysis, and trend identification in cardiac studies",
      date: "June 10, 2020"
    }
  ];
  
  const otherActivities = [
    "Member of Health Informatics Society: Participated in events on SAS-driven patient data analysis (2020–2021)",
    "Participant in Clinical Data Science Hackathon: Developed cardiac risk models using SAS (September 2020)",
    "Volunteer at Data Analytics Seminar: Supported sessions on SAS integration in healthcare (July 2021)",
    "Coordinator of SAS Programming Bootcamp: Organized workshops on SAS basics for healthcare analytics (March 2020)"
  ];
  
  return (
    <section id="certifications" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Development</h2>
        
        <div ref={containerRef} className="section-container">
          <div className="mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Award className="text-primary mr-2" size={24} />
              Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="glassmorphism rounded-xl p-4 transition-all duration-300 hover:scale-[1.02]"
                >
                  <h4 className="font-medium">{cert.name}</h4>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  <p className="text-xs mt-2 text-primary">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-semibold mb-8">Workshops</h3>
            
            <div className="space-y-6">
              {workshops.map((workshop, index) => (
                <div 
                  key={index}
                  className="glassmorphism rounded-xl p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="font-medium text-lg">{workshop.name}</h4>
                    <span className="text-sm text-primary">{workshop.date}</span>
                  </div>
                  <p className="text-muted-foreground">{workshop.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-semibold mb-8">Other Activities</h3>
            
            <div className="glassmorphism rounded-xl p-6">
              <ul className="space-y-3">
                {otherActivities.map((activity, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
