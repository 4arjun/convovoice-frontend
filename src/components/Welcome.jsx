import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <header className="welcome-header">
        <h1 className="welcome-title">Welcome to ConvoVoice!</h1>
        <p className="welcome-subtitle">
          Transform your language learning experience with engaging AI-powered
          conversations.
        </p>
        <button className="cta-button">Start Your Journey</button>
      </header>

      <section className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3 className="feature-title">Interactive Conversations</h3>
            <p className="feature-description">
              Dive into dynamic, real-time conversations designed to boost your
              fluency and confidence.
            </p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">Tailored Feedback</h3>
            <p className="feature-description">
              Get personalized insights and recommendations to perfect your
              pronunciation and grammar.
            </p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">Track Your Progress</h3>
            <p className="feature-description">
              Monitor your growth with detailed progress reports and celebrate
              your achievements.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <h2 className="section-title">Hear from Our Users</h2>
        <div className="testimonial-grid">
          <div className="testimonial-item">
            <p className="testimonial-quote">
              "ConvoVoice made learning a new language enjoyable and effective.
              The AI's feedback is spot-on!"
            </p>
            <p className="testimonial-author">- Emily, Global Traveler</p>
          </div>
          <div className="testimonial-item">
            <p className="testimonial-quote">
              "The interactive sessions and detailed feedback have significantly
              improved my language skills in just a few weeks."
            </p>
            <p className="testimonial-author">
              - David, Professional Interpreter
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2 className="section-title">Ready to Start Your Language Journey?</h2>
        <p className="cta-description">
          Join our community of learners today and unlock the full potential of
          your language skills!
        </p>
        <button className="cta-button">Join Now</button>
      </section>

      <footer className="footer-section">
        <p className="footer-text">© 2024 ConvoVoice. All rights reserved.</p>
        <p className="footer-links">
          <a href="/">Privacy Policy</a> | <a href="/">Terms of Service</a> |{" "}
          <a href="/">Contact Us</a>
        </p>
      </footer>
    </div>
  );
};

export default Welcome;
