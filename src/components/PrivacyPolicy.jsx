import React from "react";
import "./PrivacyPolicy.css"; 

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <header className="privacy-header">
        <h1>Privacy Policy</h1>
      </header>

      <section className="privacy-introduction">
        <p>
          Welcome to SocialConnect (“we,” “our,” “us”). This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website [Your Website URL] or use our mobile
          applications. Please read this policy carefully to understand our
          views and practices regarding your personal data and how we will treat
          it.
        </p>
      </section>

      <section className="privacy-information">
        <h2>Information We Collect</h2>

        <h3>Personal Data</h3>
        <p>
          We may collect personal data that you provide directly to us,
          including:
        </p>
        <ul>
          <li>
            <strong>Account Information:</strong> Name, email address, phone
            number, and password
          </li>
          <li>
            <strong>Profile Data:</strong> Profile picture, gender, date of
            birth, and other details you provide
          </li>
          <li>
            <strong>Payment Information:</strong> Payment method and billing
            information (if applicable)
          </li>
          <li>
            <strong>Communication Data:</strong> Any messages, feedback, or
            inquiries you send to us
          </li>
        </ul>

        <h3>Non-Personal Data</h3>
        <p>
          We may also collect non-personal data about your use of our services,
          including:
        </p>
        <ul>
          <li>
            <strong>Usage Data:</strong> IP address, browser type, operating
            system, and usage statistics
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> Information
            about your browsing behavior and preferences
          </li>
        </ul>
      </section>

      <section className="privacy-use-info">
        <h2>How We Use Your Information</h2>
        <ul>
          <li>
            <strong>To Provide and Improve Our Services:</strong> We use your
            information to operate, maintain, and enhance our services
          </li>
          <li>
            <strong>To Communicate With You:</strong> We may send you updates,
            promotional materials, and respond to your inquiries
          </li>
          <li>
            <strong>To Personalize Your Experience:</strong> We may use your
            information to tailor content and recommendations to you
          </li>
          <li>
            <strong>For Security and Fraud Prevention:</strong> To detect and
            prevent fraudulent activities and protect our users
          </li>
          <li>
            <strong>To Comply With Legal Obligations:</strong> To fulfill legal
            requirements and enforce our policies
          </li>
        </ul>
      </section>

      <section className="privacy-disclosure">
        <h2>Disclosure of Your Information</h2>
        <p>We may share your information in the following circumstances:</p>
        <ul>
          <li>
            <strong>With Service Providers:</strong> Third parties who provide
            services on our behalf (e.g., payment processors, data analytics)
          </li>
          <li>
            <strong>For Legal Reasons:</strong> To comply with legal obligations
            or respond to lawful requests and legal processes
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with a merger,
            acquisition, or sale of assets
          </li>
          <li>
            <strong>With Your Consent:</strong> When you have explicitly
            authorized us to share your information
          </li>
        </ul>
      </section>

      <section className="privacy-security">
        <h2>Security</h2>
        <p>
          We implement various security measures to protect your information.
          However, no system is completely secure. We cannot guarantee the
          absolute security of your information, but we strive to protect it
          using industry-standard practices.
        </p>
      </section>

      <section className="privacy-your-rights">
        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have the following rights
          regarding your personal data:
        </p>
        <ul>
          <li>
            <strong>Access:</strong> The right to request access to the personal
            data we hold about you
          </li>
          <li>
            <strong>Correction:</strong> The right to request correction of
            inaccurate or incomplete data
          </li>
          <li>
            <strong>Deletion:</strong> The right to request deletion of your
            personal data under certain circumstances
          </li>
          <li>
            <strong>Objection:</strong> The right to object to certain
            processing of your data
          </li>
          <li>
            <strong>Data Portability:</strong> The right to request a copy of
            your data in a commonly used format
          </li>
        </ul>
      </section>

      <section className="privacy-changes">
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the updated Privacy Policy on this page.
          We encourage you to review this Privacy Policy periodically to stay
          informed about how we are protecting your information.
        </p>
      </section>

      <section className="privacy-contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our data
          practices, please contact us at:
        </p>
        <address>
          SocialConnect Inc.
          <br />
          1234 Elm Street, Suite 567
          <br />
          Springfield, IL 62701
          <br />
          Email: support@socialconnect.com
          <br />
          Phone: (555) 123-4567
        </address>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
