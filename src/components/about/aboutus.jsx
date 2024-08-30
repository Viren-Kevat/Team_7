import React from "react";
import "./aboutus.css";
import Member from "./member"; 
import Viren from "../../img/profile.jpg";
import Savan from "../../img/profilesv.jpg"
import Ridhi from "../../img/profiler.jpg"

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="textcontainerabut">
          <h1>About Us</h1>
          <p>Your satisfaction is our priority.</p>
        </div>
        
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver top-quality products that meet the needs of our customers. We believe in innovation, integrity, and a commitment to excellence.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Values</h2>
        <p>
          We are guided by core values that prioritize customer satisfaction, teamwork, and continuous improvement. Our team works tirelessly to ensure that we uphold these principles in everything we do.
        </p>
      </div>

      <div className="about-section">
            <h2>Meet the Team</h2>
            <div className="team">
                    <Member h3={"Virenkumar Vijay Kevat"} p={"Lead Developer"} src={Viren} url={"/viren"}/>
                    <Member h3={"Ridhdhi Ghanshyambhai Jogani"} p={"Chief Marketing Officer"} src={Ridhi} url={"/ridhi"}/>
                    <Member h3={"Savan Kirtibhai Kansagara"} p={"Developer"} src={Savan} url={"/savan"}/>        
            </div>
       </div> 
    </div>
          
   
  );
};

export default AboutUs;
