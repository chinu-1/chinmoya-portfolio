
import React, { useEffect, useRef } from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

// Skills data (these are placeholders - customize as needed)
const technicalSkills = [
  { name: 'Circuit Design', level: 85 },
  { name: 'PCB Design', level: 80 },
  { name: 'Embedded Systems', level: 75 },
  { name: 'Signal Processing', level: 70 },
  { name: 'Microcontrollers', level: 80 },
];

const softwareSkills = [
  { name: 'MATLAB', level: 75 },
  { name: 'PSpice', level: 80 },
  { name: 'Arduino', level: 85 },
  { name: 'Proteus', level: 70 },
  { name: 'Cadence Virtuoso', level: 65 },
];

const Skills = () => {
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
    <section id="skills" ref={sectionRef} className="section-padding bg-secondary/20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-0"></div>
      
      <div className="container container-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading reveal-animation reveal-from-bottom">
            Skills & Expertise
          </h2>
          <p className="section-subheading reveal-animation reveal-from-bottom" style={{ transitionDelay: '100ms' }}>
            Technical competencies and specialized knowledge in electronics and communication engineering
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div className="glass-card p-8 reveal-animation reveal-from-bottom" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl font-display font-semibold mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={0} 
                    className="h-1.5 transition-all duration-1000" 
                    ref={(el) => {
                      if (el) {
                        setTimeout(() => {
                          el.style.setProperty('--value', skill.level.toString());
                        }, 500 + index * 100);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-8 reveal-animation reveal-from-bottom" style={{ transitionDelay: '300ms' }}>
            <h3 className="text-xl font-display font-semibold mb-6">Software & Tools</h3>
            
            <div className="space-y-6">
              {softwareSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={0} 
                    className="h-1.5 transition-all duration-1000" 
                    ref={(el) => {
                      if (el) {
                        setTimeout(() => {
                          el.style.setProperty('--value', skill.level.toString());
                        }, 800 + index * 100);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 reveal-animation reveal-from-bottom" style={{ transitionDelay: '400ms' }}>
          {/* Core competencies */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-display font-semibold mb-4">Core Competencies</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Analog & Digital Circuit Design
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Communication Systems
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Signal & Systems Analysis
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Embedded System Design
              </li>
            </ul>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-lg font-display font-semibold mb-4">Technical Knowledge</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Microcontroller Programming
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                PCB Layout & Fabrication
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                RF & Microwave Engineering
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Antenna Design
              </li>
            </ul>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-lg font-display font-semibold mb-4">Soft Skills</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Problem Solving
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Team Collaboration
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Technical Documentation
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Project Management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
