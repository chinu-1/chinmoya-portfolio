
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // State for background particles
  const [particles, setParticles] = useState<Array<{id: number, size: number, x: number, y: number, duration: number}>>([]);
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.reveal-animation');
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('animate');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check in case some elements are already in view on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Create floating particles for background animation
  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      const numParticles = 20; // Number of particles
      
      for (let i = 0; i < numParticles; i++) {
        newParticles.push({
          id: i,
          size: Math.random() * 3 + 1, // Random size between 1-4px
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          duration: Math.random() * 15 + 15, // Random duration between 15-30s
        });
      }
      
      setParticles(newParticles);
    };
    
    createParticles();
    
    // Recreate particles on window resize
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);

  // Ensure fonts are loaded
  useEffect(() => {
    document.fonts.ready.then(() => {
      console.log('Fonts loaded successfully');
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Background particles */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              animation: `floatParticle ${particle.duration}s linear infinite`,
            }}
          />
        ))}
      </div>
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
