import React, { useState, useEffect, useRef } from 'react';
import {  FaCss3Alt, FaReact,  FaDatabase,  FaServer } from 'react-icons/fa';
import { SiOpenai,SiFirebase,SiVercel } from 'react-icons/si';
import './Projects.css';
import lmsImage from '../assets/lms.png';
import Gemini from '../assets/gemini.png';
import Ecom from '../assets/shopping.png';



const Projects = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: 'Learning Management System',
      description: 'Developed a comprehensive LMS with admin dashboard featuring student/faculty management, course tracking, library integration, and live class scheduling for educational institutions.',
      image: lmsImage,
      technologies: [
        { name: 'ReactJS', icon: <FaReact /> },
        { name: 'Bootstrap', icon: <FaCss3Alt /> },
        { name: '.NET', icon: <FaServer /> },
        { name: 'SQL Server', icon: <FaDatabase /> }
      ],
      link: 'https://5mantralms.dbasesolutions.in/',
      category: 'Web Development'
    },
    {
      id: 2,
     title: 'AI Chatbot Platform',
    description: 'Built an intelligent AI chatbot with a clean, modern interface featuring real-time message streaming, chat history management, and light/dark mode toggle for enhanced user experience.',
      image: Gemini,
      technologies: [
        { name: 'ReactJS', icon: <FaReact /> },
        { name: 'API', icon: <SiOpenai /> },
        { name: 'Vercel', icon: <SiVercel /> },
      ],
      link: 'https://gemini-ai-v3.vercel.app/',
      category: 'AI'
    },
    {
      id: 3,
      title: 'Fashion E-Commerce Store',
    description: 'Designed and developed a modern e-commerce platform featuring product catalogs, wishlist functionality, shopping cart, and secure authentication, delivering a seamless online shopping experience.',
      image: Ecom,
      technologies: [
        { name: 'ReactJS', icon: <FaReact /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Vercel', icon: <SiVercel /> }
      ],
      link: 'https://shopping-samantha.vercel.app/',
      category: 'E-Commerce Website'
    }
  ];

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => [...new Set([...prev, index])]);
              }, index * 150);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="projects-page">
     
      
      <div className="projects-content">
        <div className="projects-header">
          <h1 className="projects-title">Projects</h1>
          {/* <p className="projects-subtitle">
            A showcase of my work and contributions
          </p> */}
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => (cardRefs.current[index] = el)}
              className={`project-card ${visibleCards.includes(index) ? 'visible' : ''}`}
            >
              {/* Project Image */}
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                {/* <div className="project-overlay">
                  <span className="view-project">View Project →</span>
                </div> */}
              </div>

              {/* Project Info */}
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <div key={idx} className="tech-badge" title={tech.name}>
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
