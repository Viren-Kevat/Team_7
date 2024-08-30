import React from 'react';
import './hero.css';
import Imgslider from './imgslider';
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="imgslider">
        <Imgslider/>
        </div>
        <div className="textcontainer">
            <h1 className="hero-title">Welcome to Our Online Store</h1>
            <p className="hero-subtitle">Discover the best products for you and your loved ones.</p>
            <a href="/products" className="hero-button">Shop Now</a>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
