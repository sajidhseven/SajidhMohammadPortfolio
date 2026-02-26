import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const [selectedProfile, setSelectedProfile] = useState('Developer');
  const [profileImage, setProfileImage] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const profileImages = {
      Recruiter:
        'https://res.cloudinary.com/dax1r9pni/image/upload/v1763962286/klaus_uox1pn.webp',
      Developer:
        'https://res.cloudinary.com/dax1r9pni/image/upload/v1763962775/Elijan_ukuspx.jpg',
      Stalker:
        'https://res.cloudinary.com/dax1r9pni/image/upload/v1763962265/damon_lllgdb.webp',
    };

    const profile = sessionStorage.getItem('selectedProfile');

    if (profile) {
      setSelectedProfile(profile);
      setProfileImage(profileImages[profile] || profileImages['Developer']);
    } else {
      setProfileImage(profileImages['Developer']);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToHome = () => {
    navigate('/home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={goToHome}>
          <h1>SAJIDH</h1>
        </div>

        {/* Desktop */}
        <ul className="navbar-menu">
          <li onClick={() => navigate('/professional')}>Professional</li>
          <li onClick={() => navigate('/skills')}>Skills</li>
          <li onClick={() => navigate('/projects')}>Projects</li>
          <li onClick={() => navigate('/hire-me')}>Hire Me</li>
        </ul>

        {/* Profile */}
        <div
          className="navbar-profile"
          onClick={() => navigate('/profiles')}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="navbar-avatar"
          />
          <span className="profile-name-nav">
            {selectedProfile}
          </span>
        </div>

        {/* Mobile Toggle */}
        <div
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li onClick={() => handleNavClick('/professional')}>
              Professional
            </li>
            <li onClick={() => handleNavClick('/skills')}>
              Skills
            </li>
            <li onClick={() => handleNavClick('/projects')}>
              Projects
            </li>
            <li onClick={() => handleNavClick('/hire-me')}>
              Hire Me
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
