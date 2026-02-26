import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const navigate = useNavigate();

  const [backgroundGif, setBackgroundGif] = useState(
    'https://res.cloudinary.com/dax1r9pni/image/upload/v1763094778/giphy_ty3dis.gif'
  );

  useEffect(() => {
    const backgroundGifs = {
      Recruiter:
        'https://res.cloudinary.com/dax1r9pni/image/upload/v1763297629/unwatermark_gif_dkaoab.gif',
      Developer:
        'https://res.cloudinary.com/dax1r9pni/image/upload/v1763094778/giphy_ty3dis.gif',
      Stalker:
        'https://res.cloudinary.com/dax1r9pni/image/upload/v1763053074/giphy_whjirt.gif',
    };

    const profile = sessionStorage.getItem('selectedProfile');

    setBackgroundGif(
      backgroundGifs[profile] || backgroundGifs['Developer']
    );
  }, []);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sajidh",
    url: "https://sajidh-mohammad-portfolio.vercel.app/",
    jobTitle: "ReactJS Developer",
    sameAs: [
      "https://github.com/sajidhseven",
      "https://www.linkedin.com/in/mohammad-sajidh-ali-633bb3212/"
    ]
  };

  const seo = {
    title: "Sajidh — ReactJS Frontend Developer | Portfolio",
    description:
      "Sajidh is a ReactJS frontend developer building responsive, modern web apps using React, Node, Express, MongoDB.",
    url: "https://sajidh-mohammad-portfolio.vercel.app/",
    image: "https://sajidh-mohammad-portfolio.vercel.app/og-image.png",
  };

  return (
    <div className="home-page">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.url} />
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>

      <div
        className="profile-page"
        style={{
          backgroundImage: `url(${backgroundGif})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="profile-banner">
          <div className="banner-content">
            <h1 className="banner-headline">
              ReactJS Frontend Developer — Sajidh
            </h1>

            <p className="banner-description">
              I'm a dedicated Full Stack Developer skilled in building dynamic,
              scalable, and responsive web applications using ReactJS, Node.js,
              Express.js, MongoDB, SQL, and Python.
            </p>

            <div className="banner-buttons">
              <button
                className="play-button"
                type="button"
                onClick={() =>
                  window.open('/Sajidh-Resume.pdf', '_blank')
                }
              >
                <FontAwesomeIcon icon={faPlay} />
                <span className="label">Resume</span>
              </button>

              <a
                className="more-info-button"
                href="https://www.linkedin.com/in/mohammad-sajidh-ali-633bb3212/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span className="label">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="top-row">
        <h2 className="row-title">Top Picks</h2>
        <div className="card-row">
          <div
            className="skill-card"
            onClick={() => navigate('/skills')}
          >
            <div className="card-overlay">
              <h3>Skills</h3>
            </div>
          </div>

          <div
            className="skill-card"
            onClick={() => navigate('/projects')}
          >
            <div className="card-overlay">
              <h3>Projects</h3>
            </div>
          </div>

          <div
            className="skill-card"
            onClick={() => navigate('/professional')}
          >
            <div className="card-overlay">
              <h3>Experience</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
