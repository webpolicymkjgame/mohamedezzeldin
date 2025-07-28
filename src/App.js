import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import logoImg from './assets/logo.png';
import imgMkj from './assets/banner.png';
import googlePlayIcon from './assets/google-play.png';

import loan from './assets/app/loan.png';
import autoclick from './assets/app/autoclick.png';
import casttotv from './assets/app/casttotv.png';
import control from './assets/app/control.png';
import currency from './assets/app/currency.png';
import prank from './assets/app/prank.png';
import video from './assets/app/video.png';


import PolicyPage from './PolicyPage';

// Header component
function Header() {
  const location = useLocation();
  const isPolicyPage = location.pathname === '/policy';

  return (
      <header className="header">
          <div className="container header-container">
            <div className="header-left">
              <div className="logo-wrapper">
                <img src={logoImg} alt="Mohamed Ezz ElDin Studio" className="logo-img" />
                <span className="studio-name">Mohamed Ezz ElDin Studio</span>
              </div>
            </div>

            {!isPolicyPage && (
              <nav className="nav">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/policy" className="nav-link">POLICY</Link>
                <a href="#contact" className="nav-link">CONTACT</a>
              </nav>
            )}
          </div>
        </header>
  );
}

// Trang chính
function HomePage() {
  const games = [
    {
      name: 'Loan',
      image: loan,
      link: 'https://play.google.com/store/apps/details?id=com.loancalculator.finance.emi.emicalculator.autoloan'
    },
    {
      name: 'Auto Click',
      image: autoclick,
      link: 'https://play.google.com/store/apps/details?id=com.autoclicker.auto.tap.automatictap'
    },
    {
      name: 'Cast to TV',
      image: casttotv,
      link: 'https://play.google.com/store/apps/details?id=com.cast.casttvto.screenmirroring.chromecast.cast.video'
    },
    {
      name: 'Control Center',
      image: control,
      link: 'https://play.google.com/store/apps/details?id=com.tools.controlcenter.simplecontrol.easycontrol.controlpanel'
    },
    {
      name: 'Currency Converter',
      image: currency,
      link: 'https://play.google.com/store/apps/details?id=com.currency.converter.currencyconverter.currencyexchanger'
    },
    {
      name: 'Prank Call',
      image: prank,
      link: 'https://play.google.com/store/apps/details?id=com.call.chat.game.fakecall.idolprank.fun'
    },
    {
      name: 'Video Download',
      image: video,
      link: 'https://play.google.com/store/apps/details?id=com.videoplayer.videodownloader.downloader.hdvideodownloader.saver'
    }
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="section about">
        <div className="container about-row">
          <div className="about-text-container">
            <h2 className="highlight-title">Welcome to Mohamed Ezz ElDin Studio</h2>
            <p className="about-text">Mohamed Ezz ElDin Studio is a mobile app development studio dedicated to creating innovative, high-quality, and user-friendly applications.
              Our official website serves as a showcase for all the apps developed by Mohamed Ezz ElDin – from casual games and productivity tools to educational and lifestyle apps.
            </p>
          </div>
          <div className="about-img-container">
            <img src={imgMkj} alt="About MKJ Studio" className="about-img" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="games" className="section games">
        <div className="container">
          <h2 className="text-center">Our Products</h2>
          <div className="game-grid">
            {games.map((game, index) => (
              <div key={index} className="game-card">
                <img src={game.image} alt={game.name} />
                <div className="game-info">
                  <h3>{game.name}</h3>
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="btn btn-google-play">
                    <img src={googlePlayIcon} alt="Google Play" className="google-play-icon" />
                    Get on Google Play
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, request support, please contact us at:<br />
            <a href="mailto:mohamed.ezz19991@gmail.com">mohamed.ezz19991@gmail.com</a><br />
            <span style={{ display: 'inline-block', marginTop: '10px' }}>
              📍 محمد عز الدين عبد المنعم طنطاوي
                مجاورة 24 قطعة 128
                مدينة ١٥ مايو
                حلوان - 11426
                Egypt (EG)
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

// App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} Mohamed Ezz ElDin Studio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
