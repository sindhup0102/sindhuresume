
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const Animations = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  
  useEffect(() => {
    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1 }
      );
      
      const sections = document.querySelectorAll('.section-container');
      sections.forEach((section) => {
        observer.observe(section);
      });
      
      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    };
    
    const addScrollSmoothing = () => {
      // Make all anchor links smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href')?.substring(1);
          if (!targetId) return;
          
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 100,
              behavior: 'smooth'
            });
          }
        });
      });
    };
    
    const addParticleEffect = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Set canvas to full screen
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      
      // Create particles
      const createParticles = () => {
        const particles: Particle[] = [];
        const colors = ['#4361ee', '#3a0ca3', '#4cc9f0', '#560bad', '#7209b7'];
        
        for (let i = 0; i < 50; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            color: colors[Math.floor(Math.random() * colors.length)]
          });
        }
        
        return particles;
      };
      
      particlesRef.current = createParticles();
      
      // Animation loop
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particlesRef.current.forEach((particle) => {
          // Draw particle
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Move particle
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) {
            particle.speedX *= -1;
          }
          
          if (particle.y < 0 || particle.y > canvas.height) {
            particle.speedY *= -1;
          }
        });
        
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animate();
      
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        window.removeEventListener('resize', resizeCanvas);
      };
    };
    
    const cleanup1 = observeElements();
    addScrollSmoothing();
    const cleanup2 = addParticleEffect();
    
    return () => {
      cleanup1();
      if (cleanup2) cleanup2();
    };
  }, []);
  
  // Add tooltip handler
  useEffect(() => {
    const socialLinks = document.querySelectorAll('.social-icon-link');
    
    socialLinks.forEach(link => {
      link.addEventListener('mouseenter', function() {
        const tooltip = this.getAttribute('data-tooltip');
        if (tooltip) {
          const tooltipEl = document.createElement('div');
          tooltipEl.classList.add('custom-tooltip');
          tooltipEl.textContent = tooltip;
          document.body.appendChild(tooltipEl);
          
          const rect = this.getBoundingClientRect();
          tooltipEl.style.left = `${rect.left + rect.width / 2}px`;
          tooltipEl.style.top = `${rect.top - 30}px`;
          
          setTimeout(() => {
            tooltipEl.classList.add('visible');
          }, 10);
        }
      });
      
      link.addEventListener('mouseleave', function() {
        const tooltips = document.querySelectorAll('.custom-tooltip');
        tooltips.forEach(tooltip => {
          tooltip.classList.remove('visible');
          setTimeout(() => {
            tooltip.remove();
          }, 300);
        });
      });
    });
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="particle-canvas fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"
    />
  );
};

export default Animations;
