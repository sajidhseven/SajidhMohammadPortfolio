import  { useState } from 'react';
import './Skills.css';
import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/javascript.png";
import mongoIcon from "../assets/icons/mongo-db.png"
import javaIcon from "../assets/icons/java.png"
import csharpIcon from "../assets/icons/c-sharp.png"
import reactIcon from "../assets/icons/react.png"
import bootIcon from "../assets/icons/bootstrap.png"
import tailIcon from "../assets/icons/tailwind.png"
import sqlIcon from "../assets/icons/sql.png"
import expressIcon from "../assets/icons/express-js.png"
import nodeIcon from "../assets/icons/nodejs.png"
import firebaseIcon from "../assets/icons/firebase.png"
import vercelIcon from "../assets/icons/vercel.png"
import netlifyIcon from "../assets/icons/netlify.png"
import pythonIcon from "../assets/icons/python.png"
import mlIcon from "../assets/icons/ml.png"

const Skills = () => {
  const [activeCardIndex, setActiveCardIndex] = useState({
    frontend: 0,
    backend: 0,
    database: 0,
    devops: 0,
    programming: 0
  });

  const skillCategories = [
    {
      id: 'frontend',
      icon: '🖥️',
      title: 'Frontend Development',
      color: 'blue',
      imageUrl: '', // Add your image/gif URL here later
      skills: [
        { name: 'React.js', icon: reactIcon, level: 'Advanced', description: '' },
        { name: 'HTML', icon: htmlIcon, level: 'Expert', description: '' },
        { name: 'CSS', icon: cssIcon, level: 'Advanced', description: '' },
        { name: 'JavaScript', icon: jsIcon, level: 'Advanced', description: '' },
        { name: 'Bootstrap', icon: bootIcon, level: 'Intermediate', description: '' },
        { name: 'Tailwind CSS', icon: tailIcon, level: 'Advanced', description: '' }
      ]
    },
    {
      id: 'backend',
      icon: '⚙️',
      title: 'Backend Development',
      color: 'green',
      imageUrl: '', // Add your image/gif URL here later
      skills: [
        { name: 'Node.js', icon: nodeIcon, level: 'Advanced', description: '' },
        { name: 'Express.js', icon: expressIcon, level: 'Advanced', description: '' },
        { name: 'C#', icon: csharpIcon, level: 'Intermediate', description: '' },
        { name: 'SQL', icon: sqlIcon, level: 'Intermediate', description: '' }
      ]
    },
    {
      id: 'database',
      icon: '🗄️',
      title: 'Database & Cloud',
      color: 'purple',
      imageUrl: '', // Add your image/gif URL here later
      skills: [
        { name: 'MongoDB', icon: mongoIcon, level: 'Advanced', description: '' },
        { name: 'Firebase', icon: firebaseIcon, level: 'Intermediate', description: '' }
      ]
    },
    {
      id: 'devops',
      icon: '☁️',
      title: 'DevOps & Deployment',
      color: 'orange',
      imageUrl: '', // Add your image/gif URL here later
      skills: [
        { name: 'Vercel', icon: vercelIcon, level: 'Intermediate', description: '' },
        { name: 'Netlify', icon: netlifyIcon, level: 'Intermediate', description: '' }
      ]
    },
    {
      id: 'programming',
      icon: '🤖',
      title: 'Programming & Data',
      color: 'red',
      imageUrl: '', // Add your image/gif URL here later
      skills: [
        { name: 'Python', icon: pythonIcon, level: 'Advanced', description: '' },
        { name: 'Java', icon: javaIcon, level: 'Intermediate', description: '' },
        { name: 'Machine Learning', icon: mlIcon, level: 'Beginner', description: '' }
      ]
    }
  ];

  const handleCardClick = (categoryId, e) => {
    e.stopPropagation(); // Prevent event bubbling
    setActiveCardIndex((prev) => ({
      ...prev,
      [categoryId]: (prev[categoryId] + 1) % skillCategories.find(cat => cat.id === categoryId).skills.length
    }));
  };

 const getCardPosition = (index, activeIndex, totalCards) => {
  const w = typeof window !== "undefined" ? window.innerWidth : 1200;

  // smaller offsets on small screens
  const step = w <= 480 ? 6 : w <= 768 ? 8 : 12;
  const scaleStep = w <= 480 ? 0.03 : w <= 768 ? 0.035 : 0.04;
  const fadeStep = 0.14;

  const offset = (index - activeIndex + totalCards) % totalCards;
  return {
    zIndex: totalCards - offset,
    transform: `translateX(${offset * step}px) translateY(${offset * step}px) scale(${1 - offset * scaleStep})`,
    opacity: Math.max(0.2, 1 - offset * fadeStep)
  };
};


  return (
    <div className="skills-page">
     
      
      <div className="skills-content">
        <div className="skills-header">
          <h1 className="skills-title">Skills</h1>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category) => (
            <div key={category.id} className={`category-section section-${category.color}`}>
              {/* Left Side - Image/GIF Placeholder + Title */}
              <div className="category-info">
                <h2 className="category-title">{category.title}</h2>
                <div className="category-media">
                  {category.imageUrl ? (
                    <img src={category.imageUrl} alt={category.title} className="category-image" />
                  ) : (
                    <div className="category-placeholder">
                      <div className="category-icon">{category.icon}</div>
                    </div>
                  )}
                </div>
                
              </div>

              {/* Right Side - Stacked Cards */}
              <div className="cards-stack-wrapper">
                <div className="cards-stack">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className={`skills-card card-${category.color}`}
                      style={getCardPosition(index, activeCardIndex[category.id], category.skills.length)}
                      onClick={(e) => handleCardClick(category.id, e)}
                    >
                      <div className="card-counter">
                        {activeCardIndex[category.id] + 1} / {category.skills.length}
                      </div>
                      <div className="skill-icon">
  <img src={skill.icon} alt={skill.name} className="skill-img" />
</div>
                      <h3 className="skill-name">{skill.name}</h3>
                      {skill.description && (
                        <p className="skill-description">{skill.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
