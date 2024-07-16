import { useState, useEffect } from 'react';

const Navigator = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // Set the navbar to sticky after 50px of scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navigator ${isSticky ? 'sticky' : ''} flex gap-2`} role='navigation' aria-label="Site navigation">
      <a href="#home" aria-label="Navigate to Home section">Home</a>
      <a href="#about" aria-label="Navigate to About section">About</a>
      <a href="#services" aria-label="Navigate to Services section">Services</a>
      <a href="#testimonials" aria-label="Navigate to Testimonial section">Testimonials</a>
      <a href="#contact" aria-label="Navigate to Contact section">Contact</a>
    </nav>
  );
};

export default Navigator;