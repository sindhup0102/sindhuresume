
import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on desktop
    if (window.innerWidth < 768) {
      return;
    }
    
    setHidden(false);
    
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      
      // Add listener for page transitions
      document.addEventListener('click', checkForTransition);
    };
    
    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('click', checkForTransition);
    };
    
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      if (hoveredElement) {
        const isLink = 
          hoveredElement.tagName === 'A' || 
          hoveredElement.tagName === 'BUTTON' ||
          hoveredElement.closest('a') ||
          hoveredElement.closest('button');
          
        setLinkHovered(!!isLink);
        
        // Show text on buttons and links
        if (isLink) {
          const linkElement = hoveredElement.tagName === 'A' || hoveredElement.tagName === 'BUTTON' 
            ? hoveredElement 
            : (hoveredElement.closest('a') || hoveredElement.closest('button'));
          
          // Get any custom text from data-tooltip
          const tooltipText = linkElement?.getAttribute('data-tooltip');
          setCursorText(tooltipText || "Click");
        } else {
          setCursorText("");
        }
      }
    };
    
    const checkForTransition = (e: MouseEvent) => {
      const clickedElement = e.target as HTMLElement;
      const isLink = 
        clickedElement.tagName === 'A' || 
        clickedElement.closest('a') ||
        clickedElement.tagName === 'BUTTON' ||
        clickedElement.closest('button');
      
      if (isLink) {
        // Create a transition effect
        setIsTransitioning(true);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }
    };
    
    const onMouseDown = () => {
      setClicked(true);
    };
    
    const onMouseUp = () => {
      setClicked(false);
    };
    
    const onMouseEnter = () => {
      setHidden(false);
    };
    
    const onMouseLeave = () => {
      setHidden(true);
    };
    
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  if (hidden) return null;

  return (
    <>
      {isTransitioning && (
        <div className="fixed inset-0 bg-black/70 z-[9999] animate-fade-in" style={{ animationDuration: '0.3s' }} />
      )}
      <div
        className={`cursor ${clicked ? 'active' : ''} ${linkHovered ? 'active' : ''} ${isTransitioning ? 'transitioning' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: hidden ? 0 : 1,
        }}
      />
      {cursorText && (
        <div 
          className="cursor-text"
          style={{
            left: `${position.x + 15}px`,
            top: `${position.y + 15}px`,
            opacity: hidden ? 0 : 1,
          }}
        >
          {cursorText}
        </div>
      )}
    </>
  );
};

export default Cursor;
