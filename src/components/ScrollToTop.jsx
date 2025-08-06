import '../assets/ScrollToTop.css';
import React, { useState, useEffect } from 'react';
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    
   
    if (currentScroll > scrollableHeight - 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
 return (
    isVisible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;


