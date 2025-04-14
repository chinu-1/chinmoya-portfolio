
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal-animation');
    elements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-secondary/20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent z-0"></div>
      
      <div className="container container-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading reveal-animation reveal-from-bottom">
            Get In Touch
          </h2>
          <p className="section-subheading reveal-animation reveal-from-bottom" style={{ transitionDelay: '100ms' }}>
            Interested in working together? Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass-card p-8 reveal-animation reveal-from-bottom" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl font-display font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mt-1 mr-3 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a href="mailto:contact@chinmoyapadhi.com" className="text-sm text-muted-foreground hover:text-white transition-colors">
                    contact@chinmoyapadhi.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
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
                  className="h-5 w-5 mt-1 mr-3 text-muted-foreground"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">
                    Bhubaneswar, India
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-sm font-medium mb-3">Social Profiles</p>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 reveal-animation reveal-from-bottom" style={{ transitionDelay: '300ms' }}>
            <h3 className="text-xl font-display font-semibold mb-6">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button className="w-full bg-white text-background hover:bg-white/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
