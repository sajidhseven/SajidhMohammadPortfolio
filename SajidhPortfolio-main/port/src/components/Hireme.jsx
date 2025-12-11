import React from 'react';
import Navbar from './Navbar';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import './Hireme.css';

const HireMe = () => {
  return (
    <div className="hireme-page">
      
      
      <div className="hireme-content">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-image-container">
            <img 
              src="Sajidh-Profile.jpg" 
              alt="Profile" 
              className="profile-image"
            />
          </div>
          
          <div className="profile-info">
            <h1 className="profile-name">Mohammad Sajidh Ali</h1>
            <p className="profile-designation">Software Engineer</p>
            
            <p className="profile-bio">
              With expertise in full-stack development, skilled in ReactJs, 
              NodeJs, ExpressJs, MongoDB, SQL, Python, and Java.
            </p>
           
            <a 
              href="https://www.linkedin.com/in/mohammad-sajidh-ali-633bb3212/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="view-profile-btn"
            >
              <FaLinkedin className="btn-icon" />
              View Profile
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="tagline">
          <p>If you are a Recruiter then definitely call me!</p>
        </div>

        {/* Contact Links */}
        <div className="contact-links">
          <a href="mailto:sajidhmohammad121@gmail.com" className="contact-link email-link">
            <FaEnvelope className="contact-icon" />
            <span>sajidhmohammad121@gmail.com</span>
          </a>
          
          <a href="tel:+917993174619" className="contact-link phone-link">
            <FaPhone className="contact-icon" />
            <span>+91 79931 74619</span>
          </a>
        </div>

        
      </div>
    </div>
  );
};

export default HireMe;





