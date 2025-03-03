
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 glassmorphism mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Sindhu Petapalle</h3>
            <p className="text-muted-foreground">Health Informatics Professional</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://linkedin.com/in/sindhu-petapalle7/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 hover:bg-primary/10 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
              <span className="sr-only">LinkedIn</span>
            </a>
            
            <a 
              href="mailto:petapallesindhu@gmail.com" 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 hover:bg-primary/10 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
              <span className="sr-only">Email</span>
            </a>
            
            <a 
              href="tel:+15128182210" 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 hover:bg-primary/10 transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone size={18} />
              <span className="sr-only">Phone</span>
            </a>
            
            <a 
              href="https://github.com/sindhup0102" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 hover:bg-primary/10 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Sindhu Petapalle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
