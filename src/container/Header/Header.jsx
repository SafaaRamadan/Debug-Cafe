import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';


const Header = () => (
  <div className="app__header app__bg app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="☕Brew the Next Big Thing" />
      <h1 className="app__header-h1">The Key to High-Performance Coding</h1>
      <p className="p__cormorant" style={{ margin: '1rem 0' }}> Forget fine dining. This is fine debugging. <br />
        Brew like a backend wizard. Sip like a frontend hipster. <br />
        Our beans are optimized for your <code>stack overflow moments</code>.</p>
      <button type="button" className="custom__button">☕ {' Explore the Debug Menu '}</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.coffeeprog} alt="header_img" />
    </div>
  </div>
);

export default Header;
