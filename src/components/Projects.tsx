
import React, { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';

const Projects = () => {
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
  
  const projects = [
    {
      title: "Patient Churn Prediction Model",
      technologies: "Python, Machine Learning, SQL, Power BI, Azure",
      period: "Sep 2020 – Aug 2022",
      description: [
        "Developed a patient churn prediction model using Python and Machine Learning algorithms, improving accuracy by 20%.",
        "Aggregated and cleaned data from Electronic Medical Records (EMR) using SQL for preprocessing.",
        "Integrated predictions into Power BI dashboards, reducing patient churn by 18%.",
        "Collaborated with healthcare teams to enhance patient retention strategies."
      ]
    },
    {
      title: "Cardiotoxicity in Carcinoma of Lung",
      technologies: "Python, AI/ML, Systematic Review",
      period: "Aug 2024 – Nov 2024",
      description: [
        "Conducted a systematic literature review on cardiotoxicity in lung cancer treatments, focusing on AI/ML applications.",
        "Analyzed cardiotoxic effects of chemotherapy and immunotherapy, utilizing AI/ML for predictive modeling.",
        "Proposed future research directions and evaluated AI/ML algorithms for early detection of cardiotoxic events.",
        "Contributed to oncology and cardiology advancements through comprehensive analysis."
      ]
    }
  ];
  
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        
        <div 
          ref={containerRef}
          className="section-container space-y-8"
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-2xl p-6 animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="pill bg-primary/10 text-primary">{project.period}</span>
                    <span className="pill">{project.technologies}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                {project.description.map((point, pointIndex) => (
                  <p key={pointIndex} className="text-muted-foreground">
                    • {point}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
