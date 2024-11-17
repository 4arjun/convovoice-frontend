import React from "react";
import "./Welcome.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/login");
  };

  return (
    <div className="welcome-body">
      <header className="welcome-hero-section">
        <div className="welcome-hero-content">
          <h1 className="welcome-hero-title">
            Unlock Your Language Potential with ConvoVoice
          </h1>
          <p className="welcome-hero-subtitle">
            Dive into interactive AI-powered conversations and enhance your
            language skills.
          </p>
          <button className="welcome-cta-button" onClick={handleButtonClick}>
            Get Started
          </button>{" "}
        </div>
      </header>

      <section className="welcome-features-section">
        <h2
          style={{
            textAlign: "center",
            margin: "auto 0",
            paddingBottom: "40px",
          }}
          className="welcome-section-title"
        >
          Why ConvoVoice?
        </h2>
        <div className="welcome-features-grid">
          <div className="welcome-feature-card">
            <div className="welcome-feature-icon">🗣️</div>
            <h3 className="welcome-feature-title">Interactive Conversations</h3>
            <p className="welcome-feature-description">
              Engage in dynamic dialogues that adapt to your language level.
            </p>
          </div>
          <div className="welcome-feature-card">
            <div className="welcome-feature-icon">📝</div>
            <h3 className="welcome-feature-title">Tailored Feedback</h3>
            <p className="welcome-feature-description">
              Get personalized feedback to refine your language skills.
            </p>
          </div>
          <div className="welcome-feature-card">
            <div className="welcome-feature-icon">📈</div>
            <h3 className="welcome-feature-title">Progress Tracking</h3>
            <p className="welcome-feature-description">
              Track your improvement with detailed progress reports.
            </p>
          </div>
        </div>
      </section>

      <section className="welcome-pricing-section">
        <h2
          style={{
            textAlign: "center",
            margin: "auto 0",
            paddingBottom: "40px",
          }}
          className="welcome-section-title"
        >
          Choose Your Plan
        </h2>
        <div className="welcome-pricing-cards">
          <div className="welcome-pricing-card basic">
            <h3 className="welcome-card-title">Basic</h3>
            <p className="welcome-card-price">$9.99/month</p>
            <ul className="welcome-card-features">
              <li>Standard features</li>
              <li>5 hours of AI conversations</li>
              <li>Monthly progress reports</li>
            </ul>
            <button className="welcome-cta-button">Select</button>
          </div>
          <div className="welcome-pricing-card premium">
            <h3 className="welcome-card-title">Premium</h3>
            <p className="welcome-card-price">$19.99/month</p>
            <ul className="welcome-card-features">
              <li>All features</li>
              <li>Unlimited conversations</li>
              <li>Weekly reports</li>
              <li>Priority support</li>
            </ul>
            <button className="welcome-cta-button">Select</button>
          </div>
          <div className="welcome-pricing-card ultimate">
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

      <section className="welcome-testimonial-section">
        <h2
          style={{
            textAlign: "center",
            margin: "auto 0",
            paddingBottom: "40px",
          }}
          className="welcome-section-title"
        >
          What Our Users Say
        </h2>
        <div className="welcome-testimonials">
          <div className="welcome-testimonial-item">
            <p className="welcome-testimonial-quote">
              "ConvoVoice has made learning languages fun and effective. The
              feedback is always insightful!"
            </p>
            <p className="welcome-testimonial-author">
              - Emily, Global Traveler
            </p>
          </div>
          <div className="welcome-testimonial-item">
            <p className="welcome-testimonial-quote">
              "The interactive features and progress tracking have taken my
              language skills to the next level."
            </p>
            <p className="welcome-testimonial-author">
              - David, Professional Interpreter
            </p>
          </div>
        </div>
      </section>

      <section className="welcome-faq-section">
        <h2
          style={{
            textAlign: "center",
            margin: "auto 0",
            paddingBottom: "40px",
          }}
          className="welcome-section-title"
        >
          Frequently Asked Questions
        </h2>
        <div className="welcome-faq-item">
          <h3 className="welcome-faq-question">
            How does the AI conversation feature work?
          </h3>
          <p className="welcome-faq-answer">
            Our AI utilizes advanced technology to create immersive and
            realistic conversations tailored to your level.
          </p>
        </div>
        <div className="welcome-faq-item">
          <h3 className="welcome-faq-question">Can I change my plan later?</h3>
          <p className="welcome-faq-answer">
            Yes, you can switch your plan at any time via your account settings.
          </p>
        </div>
        <div className="welcome-faq-item">
          <h3 className="welcome-faq-question">Do you offer a free trial?</h3>
          <p className="welcome-faq-answer">
            Yes, we provide a 7-day free trial for all new users.
          </p>
        </div>
      </section>

      <section className="welcome-footer-section">
        <p className="welcome-footer-text">
          © 2024 ConvoVoice. All rights reserved.
        </p>
        <p className="welcome-footer-links">
          <a href="/">Privacy Policy</a> | <a href="/">Terms of Service</a> |{" "}
          <a href="/">Contact Us</a>
        </p>
      </section>
    </div>
  );
};

export default Welcome;
