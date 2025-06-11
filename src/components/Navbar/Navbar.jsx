import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Icon from '@mdi/react';
import { mdiCoffee } from '@mdi/js';
import './Navbar.css';
import coffeelogo from '../../assets/coffee__logo2.png'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  
  return(
    <nav className= "app__navbar "> 
      <div className="app__navbar-logo">
        <img src = {coffeelogo} alt = "app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href = "#Home">Home</a></li>
        <li className="p__opensans"><a href = "#About">About</a></li>
        <li className="p__opensans"><a href = "#Menu">Menu</a></li>
        <li className="p__opensans"><a href = "#Awards">Awards</a></li>
        <li className="p__opensans"><a href = "#Contact">Contact</a></li>
      </ul>

      <div className="app__navbar-login">
        <a href = "#login" className="p__opensans" >Log In / Register</a>
        <div />
        <a href = "/" className="p__opensans">Book coffee</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu className="hamMenu" color= "#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <Icon path={mdiCoffee} size={1.2} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen-links">
              <li><a href = "#Home" onClick = {() => setToggleMenu(false)}>Home</a></li>
              <li><a href = "#About" onClick = {() => setToggleMenu(false)}>About</a></li>
              <li><a href = "#Menu" onClick = {() => setToggleMenu(false)}>Menu</a></li>
              <li><a href = "#Awards" onClick = {() => setToggleMenu(false)}>Awards</a></li>
              <li><a href = "#Contact" onClick = {() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
