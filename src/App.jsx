import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

import Background from './components/Background';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Optional: Prevent scrolling while loading
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

      <Background className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />
      <Navbar />
      <main className="flex flex-col w-full relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
