import './SpecialMenu.css';
import { images } from '../../constants';
import{ data } from '../../constants'
import {  MenuItem } from '../../components';



const SpecialMenu = () => (
  <div className="app__SpecialMenu flex__center section__padding" id="menu">
    <div className="app__SpecialMenu-title">
      <h1 className="headtext__cormorant">☕ Debug Menu</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_coffee flex center">
        <h2>Coffee & Espresso</h2>
        <div className="app__specialMenu_menu_items">
          {data.CoffeeANDEspresso.map((CoffeeANDEspresso, index) => (
           <MenuItem key={CoffeeANDEspresso.title + index} title={CoffeeANDEspresso.title} price={CoffeeANDEspresso.price} tags={CoffeeANDEspresso.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.centercoffee} alt="coffee center" />
      </div>

      <div className="app__specialMenu-menu_CodeSnacks  flex__center">
        <h2>Code Snacks</h2>
        <div className="app__specialMenu_menu_items">
          {data.CodeSnacks.map((CodeSnacks, index) => (
            <MenuItem key={CodeSnacks.title + index} title={CodeSnacks.title} price={CodeSnacks.price} tags={CodeSnacks.tags} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
