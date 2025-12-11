import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NetflixIntro from './components/NetflixIntro';
import ProfileSelection from './components/ProfileSelection';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Professional from './components/Professional';
import Skills from './components/Skills';
import HireMe from './components/Hireme';
import Projects from './components/Projects';

import './App.css';

// Layout wrapper component
function Layout({ children }) {
  const location = useLocation();
  
  // Pages where navbar should NOT appear
  const noNavbarPages = ['/', '/profiles'];
  const showNavbar = !noNavbarPages.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<NetflixIntro />} />
            <Route path="/profiles" element={<ProfileSelection />} />
            <Route path="/home" element={<Home />} />
            {/* Add more routes here as you build more pages */}
            {/* <Route path="/recruiter" element={<RecruiterPage />} /> */}
            {/* <Route path="/developer" element={<DeveloperPage />} /> */}
            {/* <Route path="/stalker" element={<StalkerPage />} /> */}
            <Route path="/professional" element={<Professional />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/hire-me" element={<HireMe />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
