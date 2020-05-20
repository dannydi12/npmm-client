import React, { useState } from 'react';
import './ScrollToTop.css';

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <button
      aria-label="scroll to top"
      type="button"
      aria="button"
      className="scrollToTop"
      onClick={scrollTop}
      style={{ display: showScroll ? 'flex' : 'none' }}
    >
      ^
    </button>
  );
}
