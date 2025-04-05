import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '40px', lineHeight: 1.6, color: '#333' }}>
      <h1 style={{ color: '#2c3e50', borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> 1st April 2024 </p>

      <h2 style={{ color: '#2c3e50' }}>1. Information We Collect</h2>
      <ul>
        <li>Name, email, phone number, and billing address</li>
        <li>Academic level and subject preferences</li>
        <li>Session history and performance feedback</li>
        <li>Payment information (secured via third-party processors)</li>
        <li>IP address, browser type, and usage data</li>
      </ul>

      <h2 style={{ color: '#2c3e50' }}>2. How We Use Your Information</h2>
      <ul>
        <li>To deliver tutoring services</li>
        <li>To communicate about sessions and platform updates</li>
        <li>To enhance platform functionality and user experience</li>
        <li>To fulfill legal obligations</li>
      </ul>

      <h2 style={{ color: '#2c3e50' }}>3. Sharing Your Information</h2>
      <p>We do not sell your data. We may share information with:</p>
      <ul>
        <li>Tutors (to prepare for sessions)</li>
        <li>Payment processors (to handle transactions)</li>
        <li>Authorities, if legally required</li>
      </ul>

      <h2 style={{ color: '#2c3e50' }}>4. Data Security</h2>
      <p>We implement appropriate safeguards to protect your information. Sensitive data is encrypted and securely stored.</p>

      <h2 style={{ color: '#2c3e50' }}>5. Cookies</h2>
      <p>Cookies help improve your browsing experience. You can manage cookie preferences through your browser.</p>

      <h2 style={{ color: '#2c3e50' }}>6. Your Rights</h2>
      <ul>
        <li>Access your personal data</li>
        <li>Request correction or deletion</li>
        <li>Withdraw consent for communications</li>
      </ul>
      <p>To exercise these rights, contact us at: <a href="mailto:contact@iqbridge.org">contact@iqbridge.org</a></p>

      <h2 style={{ color: '#2c3e50' }}>7. Data Retention</h2>
      <p>We retain data only as long as necessary for our services or as required by law.</p>

      <h2 style={{ color: '#2c3e50' }}>8. Third-Party Links</h2>
      <p>Our site may contain links to third-party websites. We are not responsible for their privacy practices.</p>

      <h2 style={{ color: '#2c3e50' }}>9. Updates to This Policy</h2>
      <p>We may revise this Privacy Policy periodically. Major changes will be communicated to users via email or our platform.</p>
    </div>
  );
};

export default PrivacyPolicy;
