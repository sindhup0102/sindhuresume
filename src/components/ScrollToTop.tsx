
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrolled / windowHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Show animation
    setShowAnimation(true);
    
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Reset animation after scrolling
    setTimeout(() => {
      setShowAnimation(false);
    }, 1000);
  };

  return (
    <>
      {showAnimation && (
        <div className="fixed inset-0 z-[60] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-0 animate-appear" style={{ 
            backgroundImage: 'radial-gradient(circle at center, rgba(var(--primary-rgb), 0.2) 0%, transparent 70%)',
            animationDuration: '1s'
          }}></div>
        </div>
      )}
      
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center animate-fade-in">
          <div className="scroll-progress-container mb-2 h-20 w-1 bg-gray-300 rounded-full overflow-hidden">
            <div 
              className="scroll-progress-bar bg-primary rounded-full w-full transition-all duration-300" 
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glassmorphism hover:scale-110 transition-all duration-500 group"
            aria-label="Scroll to top"
            data-tooltip="Back to Top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-500" />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
