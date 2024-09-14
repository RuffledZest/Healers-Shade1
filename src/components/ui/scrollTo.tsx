import React from 'react';

const ScrollTo = ({ to, children }) => {
  const scrollToSection = () => {
    const section = document.getElementById(to);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div onClick={scrollToSection} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
};

export default ScrollTo;