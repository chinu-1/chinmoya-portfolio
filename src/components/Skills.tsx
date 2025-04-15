
import React, { useEffect, useRef, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

// Updated skills data for web and android development
const programmingSkills = [
  { name: 'JavaScript/TypeScript', level: 90 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'React.js', level: 85 },
  { name: 'Java', level: 80 },
  { name: 'Python', level: 75 },
];

const softwareSkills = [
  { name: 'VS Code', level: 95 },
  { name: 'Android Studio', level: 80 },
  { name: 'Git/GitHub', level: 85 },
  { name: 'Figma', level: 75 },
  { name: 'Docker', level: 70 },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: boolean}>({});
  
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

  // Initialize progress values to 0
  useEffect(() => {
    // Set animated skills to true after component mounts to trigger animations
    const timer = setTimeout(() => {
      const skills = {};
      [...programmingSkills, ...softwareSkills].forEach(skill => {
        skills[skill.name] = true;
      });
      setAnimatedSkills(skills);
    }, 500);
    
    return () => clearTimeout(timer);
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
            Technical competencies and specialized knowledge in web and mobile development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div className="glass-card p-8 reveal-animation reveal-from-bottom" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl font-display font-semibold mb-6">Programming Languages</h3>
            
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={animatedSkills[skill.name] ? skill.level : 0} 
                    className="h-2.5 transition-all duration-1000" 
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
                    value={animatedSkills[skill.name] ? skill.level : 0} 
                    className="h-2.5 transition-all duration-1000" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 reveal-animation reveal-from-bottom" style={{ transitionDelay: '400ms' }}>
          {/* Core competencies */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-display font-semibold mb-4">Web Development</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Frontend Development (React, Next.js)
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Responsive Web Design
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Web Security Implementation
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                API Integration
              </li>
            </ul>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-lg font-display font-semibold mb-4">Mobile Development</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Android App Development
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Cross-platform Development
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Mobile UI/UX Design
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                App Performance Optimization
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
