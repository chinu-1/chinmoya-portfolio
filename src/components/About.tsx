
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const About = () => {
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
    <section id="about" ref={sectionRef} className="section-padding bg-background relative">
      <div className="container container-padding">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          <div className="md:w-1/2">
            <h2 className="section-heading reveal-animation reveal-from-bottom">
              About Me
            </h2>
            <p className="section-subheading reveal-animation reveal-from-bottom" style={{ transitionDelay: '100ms' }}>
              Electronics engineer with a commitment to innovation and technical excellence
            </p>
            
            <div className="mt-8 space-y-4 text-muted-foreground">
              <p className="reveal-animation reveal-from-bottom" style={{ transitionDelay: '200ms' }}>
                I'm an Electronics and Communication Engineering student at Mizoram University, passionate about leveraging technology to solve real-world problems. My academic journey has equipped me with a strong foundation in electronic systems, circuit design, and communications technology.
              </p>
              <p className="reveal-animation reveal-from-bottom" style={{ transitionDelay: '300ms' }}>
                Based in Bhubaneswar, India, I'm actively seeking internship opportunities where I can apply my technical knowledge and continue growing as an engineer. I thrive in collaborative environments and am always eager to learn new technologies and methodologies.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <div className="glass-card p-6 reveal-animation reveal-from-bottom" style={{ transitionDelay: '400ms' }}>
              <h3 className="text-xl font-display font-semibold mb-6">Education</h3>
              
              <div className="relative pl-6 border-l border-white/10">
                <div className="mb-6 relative">
                  <div className="absolute w-3 h-3 bg-white rounded-full -left-[25px] top-1"></div>
                  <h4 className="text-lg font-medium">B.Tech, Electronics & Communication Engineering</h4>
                  <p className="text-muted-foreground">Mizoram University</p>
                  <p className="text-sm text-muted-foreground mt-1">2023 - Present</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Focused on communication systems, digital electronics, signal processing, and embedded systems design.
                  </p>
                </div>
                
                <div className="mb-4 relative">
                  <div className="absolute w-3 h-3 bg-white rounded-full -left-[25px] top-1"></div>
                  <h4 className="text-lg font-medium">Higher Secondary Education</h4>
                  <p className="text-muted-foreground">CBSE Board</p>
                  <p className="text-sm text-muted-foreground mt-1">2020 - 2022</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Completed higher secondary education with focus on science and mathematics.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-display font-semibold mb-4">Location</h3>
                <p className="text-muted-foreground flex items-center">
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
                    className="h-5 w-5 mr-2"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Bhubaneswar, India
                </p>
              </div>
            </div>
            
            <div className="glass-card p-6 reveal-animation reveal-from-bottom" style={{ transitionDelay: '500ms' }}>
              <h3 className="text-xl font-display font-semibold mb-4">Experience</h3>
              
              <div className="relative pl-6 border-l border-white/10">
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-white rounded-full -left-[25px] top-1"></div>
                  <h4 className="text-lg font-medium">Yuvamantha Hackathon 2025</h4>
                  <p className="text-muted-foreground">Cybersecurity and Digital Governance</p>
                  <p className="text-sm text-muted-foreground mt-1">March 2025</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Developed "Digishield - Securing Digital India", a web application firewall aimed at improving cybersecurity for government websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
