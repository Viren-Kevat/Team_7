import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./thankyou.css"; // Optional: Add your custom styles

const ThankYou = () => {
  return (
    <div className="thank-you-section">
      <h1>Thank You!</h1>
      <p>Your message has been successfully sent. We will get back to you shortly.</p>
      <Link to="/" className="home-link">Go Back to Home</Link>
    </div>
  );
};

export default ThankYou;
