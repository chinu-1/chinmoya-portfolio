
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import DownloadButton from './DownloadButton';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/20 z-0">
        {/* Animated particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="particle absolute rounded-full"
              style={{
                width: `${Math.random() * 6 + 1}px`,
                height: `${Math.random() * 6 + 1}px`,
                background: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `floatParticle ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
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
        
        {/* Updated arrow with more space */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-white transition-colors p-4">
            <ArrowDown className="h-8 w-8 opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
