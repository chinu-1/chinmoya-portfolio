
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-background border-t border-white/10">
      <div className="container container-padding">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-display font-bold text-white">Chinmoya.</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Chinmoya Padhi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
