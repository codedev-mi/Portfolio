import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Background from './components/Background';
import LogoMarquee from './components/LogoMarquee';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen text-gray-300 font-sans selection:bg-purple-500 selection:text-white relative bg-[#0a0a0a]">
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      <CustomCursor />
      <Background className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />
      <Navbar />
      
      <main className="flex flex-col w-full relative z-10">
        <Hero />
        <LogoMarquee />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
