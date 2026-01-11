import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState('Developer');
  const [backgroundGif, setBackgroundGif] = useState(
    'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExamUzdDg0aWVueG5icjc4N3k5YTY2cDh3dW8zdG4zdmg0cDRhMnJtaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2zbskZp2j8wniE/giphy.gif'
  );

  useEffect(() => {
    // Background GIFs mapping
    const backgroundGifs = {
      Recruiter: 'https://res.cloudinary.com/dax1r9pni/image/upload/v1763297629/unwatermark_gif_dkaoab.gif',
      Developer: 'https://res.cloudinary.com/dax1r9pni/image/upload/v1763094778/giphy_ty3dis.gif',
      Stalker: 'https://res.cloudinary.com/dax1r9pni/image/upload/v1763053074/giphy_whjirt.gif',
    };

    const profile = sessionStorage.getItem('selectedProfile');

    if (profile) {
      setSelectedProfile(profile);
      setBackgroundGif(backgroundGifs[profile] || backgroundGifs['Developer']);
    } else {
      setSelectedProfile('Developer');
      setBackgroundGif(backgroundGifs['Developer']);
    }
  }, []);

  // JSON-LD Person schema for your portfolio (customize links)
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

  // Update these values to match your real content / images
  const seo = {
    title: "Sajidh — ReactJS Frontend Developer | Portfolio",
    description:
      "Sajidh is a ReactJS frontend developer building responsive, modern web apps using React, Node, Express, MongoDB. View projects, skills and contact details.",
    url: "https://sajidh-mohammad-portfolio.vercel.app/",
    image: "https://sajidh-mohammad-portfolio.vercel.app//og-image.png", // upload og-image.png to /public
  };

  return (
    <div className="home-page">
      {/* --- SEO / Meta tags (react-helmet) --- */}
      <Helmet>
        {/* Basic SEO */}
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href={seo.url} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:url" content={seo.url} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />

        {/* JSON-LD Person schema */}
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>

        {/* --- Optional: Google Search Console verification tag ---
            Replace YOUR_VERIFICATION_CODE with the code provided by GSC and uncomment.
            <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
        */}
      </Helmet>

      {/* Content Sections */}
      <div className="home-content">
        {/* Hero Section with Dynamic GIF */}
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
              {/* SEO-friendly H1 (one per page) */}
              <h1 className="banner-headline" id="headline">
                ReactJS Frontend Developer — Sajidh
              </h1>

              <p className="banner-description">
                I'm a dedicated Full Stack Developer skilled in building dynamic, scalable, and responsive web applications using ReactJS, Node.js, Express.js, MongoDB, SQL, and Python. With strong experience in frontend design, backend APIs, and cloud deployment, I love transforming ideas into clean, functional, and user-friendly products. Passionate about crafting seamless user experiences and writing maintainable code, I'm always eager to collaborate, learn, and bring innovative ideas to life.
              </p>

              <div className="banner-buttons">
                <button
                  className="play-button"
                  type="button"
                  onClick={() => window.open('/Sajidh-Resume.pdf', '_blank')}
                >
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faPlay} style={{ color: 'black' }} />
                  </div>
                  <div className="spacer" />
                  <span className="label">Resume</span>
                </button>

                <a
                  className="more-info-button"
                  href="https://www.linkedin.com/in/mohammad-sajidh-ali-633bb3212/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faLinkedin} style={{ color: 'black' }} />
                  </div>
                  <div className="spacer" />
                  <span className="label">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="top-row">
          <h2 className="row-title">Top pick's for you</h2>
          <div className="card-row">
            <div
              className="skill-card"
              onClick={() => navigate('/skills')}
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dax1r9pni/image/upload/v1763053257/giphy_lv2cac.gif)`,
              }}
            >
              <div className="card-overlay">
                <h3>Skills</h3>
              </div>
            </div>

            <div
              className="skill-card"
              onClick={() => navigate('/projects')}
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dax1r9pni/image/upload/v1768108950/giphy_slrrop.gif)`,
              }}
            >
              <div className="card-overlay">
                <h3>Projects</h3>
              </div>
            </div>

            <div
              className="skill-card"
              onClick={() => navigate('/professional')}
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dax1r9pni/image/upload/v1763053506/giphy_akghmi.gif)`,
              }}
            >
              <div className="card-overlay">
                <h3>Experience</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="top-row">
          <h2 className="row-title">Continue Watching</h2>
          <div className="card-row">
            <div
              className="skill-card"
              onClick={() => navigate('/hire-me')}
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dax1r9pni/image/upload/v1763053674/giphy_qcp80v.gif)`,
              }}
            >
              <div className="card-overlay">
                <h3>Contact Me</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

