import React, { useState } from 'react';
import Arrow from '../../images/top-arrow.svg';
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
      className="scrollToTop"
      onClick={scrollTop}
      style={{ display: showScroll ? 'flex' : 'none' }}
    >
      <img src={Arrow} alt="Scroll to top arrow" className="arrow" />
    </button>
  );
}
