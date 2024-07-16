import { useState, useEffect } from 'react';

import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Testimonials from './pages/testimonials';

import Navigator from './components/Navigator';

import useModal from './components/Modal';

import './App.css';

function App() {
  const { Modal, openModal } = useModal();

  const [currentSection, setCurrentSection] = useState('');
  
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const handleScroll = () => {
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });
      if (current !== currentSection) {
        setCurrentSection(current);
        window.history.pushState({}, '', `/#${current}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);


  return (
    <>
      <div id='main-app-container' className='main-container w-full'>
        <section id="home" data-title='Home - American Janitorial Services' className='h-screen flex flex-col items-center justify-center'>
          <Home Navigator={Navigator}/>
        </section>
        <section id="about" data-title='About - American Janitorial Services' className='h-screen flex flex-col items-center justify-center'>
          <About />
        </section>
        <section id="services" data-title='Services - American Janitorial Services' className='h-screen flex flex-col items-center justify-center'>
          <Services />
        </section>
        <section id="testimonials" data-title='Testimonials - American Janitorial Services' className='h-screen flex flex-col items-center justify-center'>
          <Testimonials modalCallback={openModal}/>
        </section>
        <section id="contact" data-title='Contact - American Janitorial Services' className='h-screen flex flex-col items-center justify-center'>
          <Contact />
        </section>
      </div>
      {Modal()}
    </>
  );
}


export default App;