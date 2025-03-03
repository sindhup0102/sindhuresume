
import React, { useEffect, useRef } from 'react';
import { Database, Code, Activity, FileText, Heart, BrainCircuit } from 'lucide-react';

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
      icon: <FileText className="text-italian-terracotta" size={20} />,
      skills: [
        "SAS Base", "SAS Macro", "SAS SQL (PROC SQL)", "SAS Data Step",
        "SAS/ODS", "SAS/GRAPH", "SAS/STAT", "SAS Enterprise Guide",
        "SAS Studio", "PROC SORT", "PROC TRANSPOSE", "PROC FREQ",
        "PROC MEANS", "PROC REPORT", "PROC ANOVA", "AdaM"
      ]
    },
    {
      title: "Programming & Databases",
      icon: <Code className="text-italian-terracotta" size={20} />,
      skills: [
        "R", "Python", "SQL Queries", "Oracle Databases",
        "Data Visualization", "Data Pipelines", "Data Cleaning",
        "Data Validation", "Statistical Analysis", "Report Generation",
        "Microsoft Office Suite", "UNIX/Linux", "Windows"
      ]
    },
    {
      title: "Health Informatics",
      icon: <BrainCircuit className="text-italian-terracotta" size={20} />,
      skills: [
        "EHR Systems", "Health Information Exchange", "FHIR", "HL7", 
        "ICD", "CPT", "SNOMED CT", "LOINC", "HIPAA/HITECH Compliance",
        "Clinical Decision Support", "Population Health Management",
        "Telehealth Analytics", "Healthcare AI Applications"
      ]
    },
    {
      title: "Data Standards & Healthcare",
      icon: <Database className="text-italian-terracotta" size={20} />,
      skills: [
        "FHIR", "ICD", "CPT", "HIPAA/HITECH",
        "IRB processes", "Health Information Exchange",
        "CDISC Standards", "SDTM", "ADaM", "DICOM"
      ]
    },
    {
      title: "Clinical & Biomedical",
      icon: <Heart className="text-italian-terracotta" size={20} />,
      skills: [
        "Clinical Workflow Analysis", "Clinical Trials Data Management",
        "Pharmacovigilance", "Biomedical Data Analysis", 
        "Genomic Data Interpretation", "Patient Safety Analytics",
        "Clinical Quality Metrics", "Healthcare Process Improvement"
      ]
    },
    {
      title: "Research & Analysis",
      icon: <Activity className="text-italian-terracotta" size={20} />,
      skills: [
        "Research Design", "Cohort Analysis", "Predictive Modeling",
        "Outcomes Research", "Evidence-Based Medicine",
        "Health Services Research", "Clinical Effectiveness",
        "Risk Stratification", "Quality Improvement", "Data Mining"
      ]
    }
  ];
  
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-italiana text-italian-chianti">Professional Skills</h2>
        
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
                <h3 className="text-xl font-semibold font-italiana">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="pill bg-italian-cream hover:bg-italian-terracotta/10 hover:scale-105 text-italian-chianti"
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
