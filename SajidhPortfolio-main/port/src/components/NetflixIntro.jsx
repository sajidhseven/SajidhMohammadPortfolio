import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NetflixIntro.css';

const NetflixIntro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // After 6 seconds, navigate to profiles page
    const timer = setTimeout(() => {
      navigate('/profiles');
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="intro-container">
      <h1 className="intro-name">SAJIDH</h1>
    </div>
  );
};

export default NetflixIntro;


