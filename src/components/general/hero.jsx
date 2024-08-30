import React from 'react';
import './hero.css';
import Imgslider from './imgslider';
import { Link } from "react-router-dom";

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
            <Link to={'/products'}><a className="hero-button">Shop Now</a></Link>
            
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
