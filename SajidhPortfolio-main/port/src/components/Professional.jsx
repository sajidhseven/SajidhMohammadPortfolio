import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Professional.css';

const Professional = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRefs = useRef([]);

  const experiences = [
    {
      id: 1,
      position: 'Software Developer - Internship',
      company: 'D Base Solutions (Jun 2025 - Present)',
      duration: 'Jun 2025 - Present',
      type: 'work',
      technologies: '🔧 ReactJs, ASP.Net, SQL, C#',
      achievements: [
        '🧠 Worked on a comprehensive Learning Management System (LMS) optimizing modules for students, instructors, and administrators.',
        '⚙️ Developed and enhanced front-end components using React.js, Bootstrap, and RESTful APIs.',
        '⚡ Improved UI responsiveness and performance, ensuring smoother user experiences across web and mobile platforms.'
      ],
      side: 'left'
    },
    {
      id: 2,
      position: 'Software Developer - Internship',
      company: 'Numetry Technologies (Sep 2024 - Jan 2025)',
      duration: 'Sep 2024 - Jan 2025',
      type: 'work',
      technologies: 'ReactJS, Node.js, Express.js, MongoDB, SQL,Vercel',
      achievements: [
        '💻 Contributed to multiple Full-Stack Client Projects.',
        '🎨 Built responsive UIs aligned precisely with provided design specifications.',
        '🤝 Collaborated within Agile teams to deliver high-quality features on time.'
      ],
      side: 'right'
    },
    {
      id: 3,
      position: 'Bachelor of Technology - CSE',
      company: 'Vishnu Institute of Technology (2020-2024)',
      duration: '2020-2024',
      type: 'Education',
      // technologies: '🔧 Ruby on Rails, React, Node.js, AWS, PostgreSQL',
      achievements: [
        '💻 Computer Science graduate passionate about full-stack development — from my first static website to hackathon projects that sparked my coding journey.',
        '🎓From leading my farewell event to building early web apps, I’ve always blended creativity, collaboration, and code.',
        '🏁 Started with a single static site — grew into a developer who turns ideas into interactive experiences.'
      ],
      side: 'left'
    }
  ];

  useEffect(() => {
    const observers = timelineRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => [...new Set([...prev, index])]);
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
    <div className="professional-page">
      
      <div className="professional-content">
        <div className="professional-header">
          <h1 className="section-title">
            📅 Work Experience & Education
          </h1>
        </div>

        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              ref={(el) => (timelineRefs.current[index] = el)}
              className={`timeline-item timeline-${exp.side} ${
                visibleItems.includes(index) ? 'visible' : ''
              }`}
            >
              {/* Left Side Content */}
              {exp.side === 'left' && (
                <div className="timeline-content">
                  <div className={`timeline-card card-${exp.side}`}>
                    <h3 className="position-title">{exp.position}</h3>
                    <h4 className="company-name">{exp.company}</h4>
                    
                    <p className="technologies">{exp.technologies}</p>
                    
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                    
                    {/* Arrow pointing to dot */}
                    <div className="arrow-right"></div>
                  </div>
                </div>
              )}

              {/* Center Dot */}
              <div className="timeline-dot">
                <div className="dot-inner">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                  </svg>
                </div>
              </div>

              {/* Right Side Content */}
              {exp.side === 'right' && (
                <div className="timeline-content">
                  <div className={`timeline-card card-${exp.side}`}>
                    <h3 className="position-title">{exp.position}</h3>
                    <h4 className="company-name">{exp.company}</h4>
                    
                    <p className="technologies">{exp.technologies}</p>
                    
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                    
                    {/* Arrow pointing to dot */}
                    <div className="arrow-left"></div>
                  </div>
                </div>
              )}

              {/* Duration Badge */}
              {/* <div className={`timeline-date date-${exp.side}`}>
                <span>{exp.duration}</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Professional;
