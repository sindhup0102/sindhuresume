
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center">
          <div className="scroll-progress-container mb-2 h-20 w-1 bg-gray-300 rounded-full">
            <div 
              className="scroll-progress-bar bg-primary rounded-full w-full" 
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glassmorphism hover:scale-110 transition-all duration-300 group"
            aria-label="Scroll to top"
            data-tooltip="Back to Top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
