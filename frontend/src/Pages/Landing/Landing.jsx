import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useScrollFade from "../../Customs/useScrollFade.jsx"; // your custom hook
import SliderWithFlipCards from "../../Customs/SliderWithFlipCards.jsx";
import "./Landing.css";

const Home = () => {
  // About Us Section
  const [aboutRef, aboutVisible] = useScrollFade();
  // Features Section
  const [featuresRef, completedVisible] = useScrollFade();
  // Features Section
  const [subscriptionRef, subscriptionVisible] = useScrollFade();
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  
  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="banner">
        <img
          src="staticimages/homebanner.jpeg"
          alt="Banner"
          className="banner-image"
        />
        <div className="image-gradient-home"></div>
        <div className="image-overlay">
          <h1>
            Take Control of Your Finances, <br />
            One Plan at a Time
          </h1>
          <p>
            AI-powered budgeting, investment insights, and financial tools all
            in one place.
          </p>
          <button className="button-1" 
            onClick={() => navigate("/register")}>Get Started</button>
          <button className="button-2">Explore Features</button>
        </div>
      </div>

      {/* About Us Section */}
      <div
        ref={aboutRef}
        className={`about-us-container scroll-fade ${
          aboutVisible ? "visible" : ""
        }`}
      >
        <div className="about-us-block">
          <h2>About us</h2>
          <p>
            FinSight is a modern, user-friendly platform designed to simplify
            personal financial planning. Our mission is to make managing money
            effortless, insightful, and transparent. From budgeting and expense
            tracking to AI-powered investment strategies, we help you stay on
            top of your finances with ease. We believe in empowering users
            through clarity and control, ensuring every decision is informed and
            every goal within reach.
          </p>
          <button>Read More</button>
        </div>
        <div className="about-us-image">
          <img src="staticimages/calc3dpic.jpg" alt="About Us" />
        </div>
      </div>

      {/* Features Section */}
      <div
        ref={featuresRef}
        className={`features-container scroll-fade ${
          completedVisible ? "visible" : ""
        }`}
      >
        <div className="features-gradient"></div>
        <div className="features-overlay">
          <div className="left-side">
            <div className="top-left">
              <h1>
                Our <br />
                Services
              </h1>
              <p>Powered by</p>
              <button className="button-1">AI</button>
              <button className="button-2">Real Time</button>
              <button className="button-2">Insights</button>
            </div>
          </div>
          <div className="right-side">
            <SliderWithFlipCards />
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div
        ref={subscriptionRef}
        className={`subscription-container scroll-fade ${
          subscriptionVisible ? "visible" : ""
        }`}
      >
        <div className="subscription-image">
          <img src="staticimages/subscribe3dpic.png" alt="About Us" />
        </div>
        <div className="subscription-block">
          <span className="landing-subscription-title">Subscription</span>
          <h2>Get Updates Directly to Your Inbox</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
