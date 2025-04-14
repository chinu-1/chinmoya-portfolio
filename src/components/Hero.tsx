import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import DownloadButton from './DownloadButton';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/20 z-0"></div>
      
      {/* Animated Dots */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-1 h-1 rounded-full bg-white/20 animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`
            }}
          ></div>
        ))}
      </div>
      
      <div 
        className={cn(
          "container container-padding relative z-10 flex flex-col items-center text-center space-y-6",
          "transition-all duration-1000 ease-out transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-balance">
          <span className="text-gradient">Chinmoya Padhi</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl text-balance">
          Electronics & Communication Engineer with a passion for creating impactful solutions
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <DownloadButton />
          <Button 
            variant="outline" 
            className="bg-transparent border-white/20 hover:bg-white/5 text-white"
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
