import AOS from 'aos';
import 'aos/dist/aos.css'; 
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,      
    });
  }, []);

  const handleButtonClick = () => {
    navigate("/login");
  };

  return (
    <div className="welcome-body">
      <header className="welcome-hero-section" data-aos="fade-up">
        <div className="welcome-hero-content">
          <h1 className="welcome-hero-title">
            Unlock Your Language Potential with <span>ConvoVoice</span>
          </h1>
          <p className="welcome-hero-subtitle">
            Dive into interactive AI-powered conversations and enhance your
            language skills.
          </p>
          <button className="welcome-cta-button" onClick={handleButtonClick}>
            Get Started
          </button>
        </div>
      </header>

      <section className="welcome-features-section" data-aos="fade-up">
        <h2 className="welcome-section-title">Why ConvoVoice?</h2>
        <div className="welcome-features-grid">
          <div className="welcome-feature-card" data-aos="zoom-in">
            <div className="welcome-feature-icon">🗣️</div>
            <h3 className="welcome-feature-title">Interactive Conversations</h3>
            <p className="welcome-feature-description">
              Engage in dynamic dialogues that adapt to your language level.
            </p>
          </div>
          <div className="welcome-feature-card" data-aos="zoom-in">
            <div className="welcome-feature-icon">📝</div>
            <h3 className="welcome-feature-title">Tailored Feedback</h3>
            <p className="welcome-feature-description">
              Receive personalized feedback to refine your language skills.
            </p>
          </div>
          <div className="welcome-feature-card" data-aos="zoom-in">
            <div className="welcome-feature-icon">📈</div>
            <h3 className="welcome-feature-title">Progress Tracking</h3>
            <p className="welcome-feature-description">
              Track your improvement with detailed progress reports.
            </p>
          </div>
          <div className="welcome-feature-card" data-aos="zoom-in">
            <div className="welcome-feature-icon">💡</div>
            <h3 className="welcome-feature-title">Smart Insights</h3>
            <p className="welcome-feature-description">
              Get actionable insights to boost your learning journey.
            </p>
          </div>
        </div>
      </section>

      <section className="welcome-pricing-section" data-aos="fade-up">
        <h2 className="welcome-section-title">Choose Your Plan</h2>
        <div className="welcome-pricing-cards">
          <div className="welcome-pricing-card basic" data-aos="flip-left">
            <h3 className="welcome-card-title">Basic</h3>
            <p className="welcome-card-price">$9.99/month</p>
            <ul className="welcome-card-features">
              <li>Standard features</li>
              <li>5 hours of AI conversations</li>
              <li>Monthly progress reports</li>
            </ul>
            <button className="welcome-cta-button">Select</button>
          </div>
          <div className="welcome-pricing-card standard" data-aos="flip-left">
            <h3 className="welcome-card-title">Standard</h3>
            <p className="welcome-card-price">$14.99/month</p>
            <ul className="welcome-card-features">
              <li>All Basic features</li>
              <li>10 hours of AI conversations</li>
              <li>Bi-weekly reports</li>
            </ul>
            <button className="welcome-cta-button">Select</button>
          </div>
          <div className="welcome-pricing-card premium" data-aos="flip-left">
            <h3 className="welcome-card-title">Premium</h3>
            <p className="welcome-card-price">$19.99/month</p>
            <ul className="welcome-card-features">
              <li>All Standard features</li>
              <li>Unlimited conversations</li>
              <li>Weekly reports</li>
              <li>Priority support</li>
            </ul>
            <button className="welcome-cta-button">Select</button>
          </div>
          <div className="welcome-pricing-card ultimate" data-aos="flip-left">
            <h3 className="welcome-card-title">Ultimate</h3>
            <p className="welcome-card-price">$29.99/month</p>
            <ul className="welcome-card-features">
              <li>All Premium features</li>
              <li>1-on-1 expert sessions</li>
              <li>Customized learning plans</li>
              <li>Exclusive content</li>
            </ul>
            <button className="welcome-cta-button">Select</button>
          </div>
        </div>
      </section>

      <footer className="welcome-footer-section" data-aos="fade-up">
        <p className="welcome-footer-text">
          © 2024 ConvoVoice. All rights reserved.
        </p>
        <p className="welcome-footer-links">
          <a href="/">Privacy Policy</a> | <a href="/">Terms of Service</a> |{" "}
          <a href="/">Contact Us</a>
        </p>
      </footer>
    </div>
  );
};

export default Welcome;
