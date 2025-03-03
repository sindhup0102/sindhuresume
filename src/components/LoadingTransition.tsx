
import React, { useEffect, useState } from 'react';

const LoadingTransition = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate a short loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isLoading) return null;
  
  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-all duration-500 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-t-2 border-white rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-r-2 border-white/70 rounded-full animate-spin animate-reverse"></div>
        <div className="absolute inset-4 border-b-2 border-white/40 rounded-full animate-spin animate-delay-150"></div>
      </div>
      <p className="mt-8 text-lg font-italiana text-white tracking-widest">SP</p>
    </div>
  );
};

export default LoadingTransition;
