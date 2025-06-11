import React from 'react';
import './AboutUs.css';
import { images } from '../../constants'; 

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="About">
    
    <div className="app__aboutus-content  ">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__caffeine">☕ About Us</h1>
        <p >
          At <strong>Caffè Codex</strong>, we believe every great commit starts with a great cup of coffee.
          Our beans are brewed with the same precision you use to write bug-free code (well, almost).
          Whether you're shipping features at 2AM or sipping through a sprint, we're here to fuel your flow state.
        </p>
        <button type="button" className="custom__button">🔍 Know More</button>
      </div>

      <div className="app__aboutus-content_img">
        <img src={images.coffeelab} alt="coffee mug and laptop" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__caffeine">📜 Our History</h1>
        <p >
          It started with a pull request...  
          Back in the early days of bootcamps and burnt toast, a group of tired devs asked: 
          <em>“Why can’t coffee be optimized like code?”</em>  
          So we built a brewstack: rich backend (espresso), smooth frontend (latte art), and full stack flavor.
        </p>
        <button type="button" className="custom__button">🧠 Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
