
import React, { useEffect, useRef } from 'react';
import { Database, Code, Activity, FileText } from 'lucide-react';

const Skills = () => {
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
  
  const skillCategories = [
    {
      title: "SAS & Statistical Analysis",
      icon: <FileText className="text-primary" size={20} />,
      skills: [
        "SAS Base", "SAS Macro", "SAS SQL (PROC SQL)", "SAS Data Step",
        "SAS/ODS", "SAS/GRAPH", "SAS/STAT", "SAS Enterprise Guide",
        "SAS Studio", "PROC SORT", "PROC TRANSPOSE", "PROC FREQ",
        "PROC MEANS", "PROC REPORT", "PROC ANOVA", "AdaM"
      ]
    },
    {
      title: "Programming & Databases",
      icon: <Code className="text-primary" size={20} />,
      skills: [
        "R", "Python", "SQL Queries", "Oracle Databases",
        "Data Visualization", "Data Pipelines", "Data Cleaning",
        "Data Validation", "Statistical Analysis", "Report Generation",
        "Microsoft Office Suite", "UNIX/Linux", "Windows"
      ]
    },
    {
      title: "Data Standards & Healthcare",
      icon: <Database className="text-primary" size={20} />,
      skills: [
        "FHIR", "ICD", "CPT", "HIPAA/HITECH",
        "IRB processes", "Health Information Exchange"
      ]
    },
    {
      title: "Biomedical Skills",
      icon: <Activity className="text-primary" size={20} />,
      skills: [
        "Drug Development Processes", "Pharmacovigilance",
        "Biomedical Data Analysis", "Genomic Data Interpretation",
        "Human Anatomy", "Physiology", "Disease Pathophysiology",
        "Patient Safety", "Quality Improvement Initiatives"
      ]
    }
  ];
  
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        
        <div 
          ref={containerRef}
          className="section-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-2xl p-6 animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-2 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="pill hover:bg-primary/10 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
