
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Updated project data
const projects = [
  {
    title: "Digishield - Securing Digital India",
    description: "A web application firewall aimed at improving the cybersecurity of government websites and making digital governance successful. Features include advanced threat detection, real-time monitoring, and regulatory compliance tools.",
    tags: ["Cybersecurity", "Web Development", "Digital Governance", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1562813733-b31f0941db47?auto=format&fit=crop&q=80&w=800&h=500", 
    links: {
      demo: "#",
      github: "#",
    }
  }
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
            Featured Project
          </h2>
          <p className="section-subheading reveal-animation reveal-from-bottom" style={{ transitionDelay: '100ms' }}>
            Innovative solution showcasing my skills in cybersecurity and web development
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-card overflow-hidden group reveal-animation reveal-from-bottom"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-6">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-sm bg-transparent border-white/20 hover:bg-white/5"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-sm bg-transparent border-white/20 hover:bg-white/5"
                    asChild
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
