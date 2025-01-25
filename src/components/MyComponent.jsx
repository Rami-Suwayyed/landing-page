import React from "react";
import "./MyComponent.css"; // Assuming you have a CSS file named App.css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCheck } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className="home-section">
      <div className="effects">
        <div className="bg-effect"></div>
      </div>
      <div className="container">
        <div className="animation-effects">
          <div className="effect1">
            {[...Array(24)].map((_, index) => (
              <div key={index}></div>
            ))}
          </div>
          <div className="effect2"></div>
          <div className="effect3"></div>
          <div className="effect4"></div>
        </div>
        {/* header start */}
        <div className="header">
          <a href="index.html" className="logo">
            your logo
          </a>
          <div className="links">
            <div className="hamburger-btn outer-shadow hover-in-shadow">
              <span></span>
            </div>

            <ul className="nav-bar">
              <li>
                <a href="/" className="active">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              {/* <li>
                <a href="#">Blog</a>
              </li> */}
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/resume" className="register">Resume</a>
              </li>
              <button className="close-navBar outer-shadow hover-in-shadow">
                x
              </button>
              <div className="copy-right">
                <p>&copy; 2025 <a href="https://rami-suwayyed.netlify.app/" target="_blank" rel="noopener noreferrer">Rami Suwayyed</a> All rights reserved</p>
              </div>
            </ul>
          </div>
        </div>
        {/* header end */}
        {/* landing start */}
        <div className="landing">
          <div className="landing-text">
            <h1>
              Get Quick <span>Medical Services</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              nulla, dolorum quasi reprehenderit fuga, odio qui quaerat magnam
              perspiciatis cumque temporibus eveniet ea quod totam esse. Fugit
              ex quas cumque.
            </p>
            <button>
              <a href="/services" aria-label="Get Services">Get Services</a>
            </button>
          </div>
          <div className="landing-img">
            <div className="circle-effect"></div>
            <div className="left-box">
              <div className="icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div>
                <h3>1520+</h3>
                <span>Activate Clients</span>
              </div>
            </div>
            <div className="img">
              <img src="doctor.png" alt="landing-img" />
            </div>
            <div className="right-box">
              <p>
                <FontAwesomeIcon icon={faCheck} />
                <span>Get 20% off on every 1st month</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} />
                <span>Expert Doctors</span>
              </p>
            </div>
          </div>
        </div>
        {/* landing end */}
      </div>
    </div>
  );
};

export default App;
