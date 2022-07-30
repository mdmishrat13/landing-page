import React from "react";
import "./hero.css";
import Navbar from "../Navbar/Navbar";
import heroImage from "./../../images/heroImage.png";
import section from "./../../images/section.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-nav">
          <Navbar />
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="" />
        </div>
        <div className="hero-section">
          <img src={section} alt="" />
        </div>
        <div className="hero-time">
            <h1>PUBLIC MINT END IN </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
