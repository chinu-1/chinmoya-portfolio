
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock project data (customize with your actual projects)
const projects = [
  {
    title: "Smart Home Automation System",
    description: "Designed and implemented a home automation system using Arduino and various sensors to control lights, temperature, and security features remotely.",
    tags: ["Arduino", "IoT", "Sensors", "Mobile App"],
    image: "https://images.unsplash.com/photo-1585036156261-1e2ac055426c?auto=format&fit=crop&q=80&w=800&h=500", 
    links: {
      demo: "#",
      github: "#",
    }
  },
  {
    title: "RF Signal Analyzer",
    description: "Built a radio frequency signal analyzer capable of detecting and analyzing signals in the 433MHz band, with visualization of signal characteristics.",
    tags: ["RF", "Signal Processing", "Arduino", "MATLAB"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112c5ce661?auto=format&fit=crop&q=80&w=800&h=500",
    links: {
      demo: "#",
      github: "#",
    }
  },
  {
    title: "Wireless Power Transfer System",
    description: "Engineered a system for wireless power transmission using resonant inductive coupling, achieving efficient power transfer over short distances.",
    tags: ["Inductive Coupling", "Power Electronics", "Circuit Design"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=500",
    links: {
      demo: "#",
      github: "#",
    }
  },
];

const Projects = () => {
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
    <section id="projects" ref={sectionRef} className="section-padding bg-background relative">
      <div className="container container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading reveal-animation reveal-from-bottom">
            Featured Projects
          </h2>
          <p className="section-subheading reveal-animation reveal-from-bottom" style={{ transitionDelay: '100ms' }}>
            Innovative solutions and technical implementations showcasing my skills and expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-card overflow-hidden group reveal-animation reveal-from-bottom"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs bg-transparent border-white/20 hover:bg-white/5"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5 mr-1" />
                      Code
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs bg-transparent border-white/20 hover:bg-white/5"
                    asChild
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5 mr-1" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal-animation reveal-from-bottom" style={{ transitionDelay: '500ms' }}>
          <Button 
            variant="outline" 
            className="bg-transparent border-white/20 hover:bg-white/5 text-white"
            asChild
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <span>View All Projects</span>
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
                className="ml-2 h-4 w-4"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
