import React, { useState, useEffect } from 'react';

const ScrollTopArrow = () => {

  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <React.Fragment />
    // <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }} />
  );
}

export default ScrollTopArrow;