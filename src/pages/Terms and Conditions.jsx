import React from 'react';

const TermsAndConditions = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '40px', lineHeight: 1.6, color: '#333' }}>
      <h1 style={{ color: '#2c3e50', borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>
        Terms and Conditions
      </h1>
      <p><strong>Effective Date:</strong> 1st April 2024</p>
      <p>
        Welcome to IQ Bridge! These Terms and Conditions (“Terms”) govern your use of our platform
        and services. By accessing or using our website and tutoring services, you agree to comply
        with and be bound by these Terms.
      </p>

      <h2 style={{ color: '#2c3e50' }}>1. About IQ Bridge</h2>
      <p>IQ Bridge offers personalized one-on-one tutoring sessions for students on a pay-per-session basis.</p>

      <h2 style={{ color: '#2c3e50' }}>2. Eligibility</h2>
      <p>Users must be at least 13 years old. Under 18s need parental consent.</p>

      <h2 style={{ color: '#2c3e50' }}>3. Account Registration</h2>
      <p>Keep your account credentials safe; you're responsible for all activity under your account.</p>

      <h2 style={{ color: '#2c3e50' }}>4. Booking & Payment</h2>
      <ul>
        <li>Sessions must be booked and paid for in advance.</li>
        <li>Payments are securely processed and displayed in [Insert Currency].</li>
      </ul>

      <h2 style={{ color: '#2c3e50' }}>5. Cancellations & Rescheduling</h2>
      <ul>
        <li>Free changes allowed up to 12 hours before the session.</li>
        <li>No refunds for late cancellations.</li>
        <li>In tutor no-show cases, users can reschedule or get a full refund.</li>
      </ul>

      <h2 style={{ color: '#2c3e50' }}>6. Refunds</h2>
      <ul>
        <li>Only granted for missed sessions due to tutor absence or platform issues.</li>
        <li>Request within 48 hours. Refunds processed in 5-7 business days.</li>
      </ul>

      <h2 style={{ color: '#2c3e50' }}>7. Code of Conduct</h2>
      <p>All users must behave respectfully. Violations may result in suspension or termination.</p>

      <h2 style={{ color: '#2c3e50' }}>8. Intellectual Property</h2>
      <p>All content is the property of IQ Bridge or tutors and may not be copied or redistributed.</p>

      <h2 style={{ color: '#2c3e50' }}>9. Limitation of Liability</h2>
      <p>IQ Bridge's liability is limited to the session fee. We are not liable for indirect damages.</p>

      <h2 style={{ color: '#2c3e50' }}>10. Modifications</h2>
      <p>We may revise these Terms. You will be notified of significant changes.</p>

      <h2 style={{ color: '#2c3e50' }}>11. Governing Law</h2>
      <p>These Terms are governed by UAE law and under the jurisdiction of Dubai courts.</p>

      <p>
        Contact us: <a href="mailto:contact@iqbridge.org">contact@iqbridge.org</a>
      </p>
    </div>
  );
};

export default TermsAndConditions;
