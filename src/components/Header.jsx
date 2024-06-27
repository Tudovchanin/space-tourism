
import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import "./Header.css"
import logo from "../assets/shared/logo.svg";




const setActive = ({ isActive }) =>
  isActive ? "link-common link-active" : "link-common";


const Header = () => {
  let [toggle, setToggle] = useState(false);
  const clickBurger = () => {
    setToggle((prev) => !prev);
    document.body.classList.add('no-scroll');
  };
const clickOutsideMenu = (e) => {
  if (!document.querySelector('.header__nav').contains(e.target) && !document.querySelector('.header__burger-menu').contains(e.target)) {
    setToggle(false);
    document.body.classList.remove('no-scroll');
  }
};
useEffect(() => {
  document.addEventListener('mousedown', clickOutsideMenu);


  return () => {
    document.removeEventListener('mousedown', clickOutsideMenu);
  };
}, []);

  return ( 
    <header className="header header--position padding-common">
    <div className="header__logo">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>
    </div>
    <div className={!toggle ? "header__nav" : "header__nav show-nav"}>
      <nav className="nav nav--size-header position-x-center">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className={setActive}>
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/destination" className={setActive}>
              Destination
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/crew" className={setActive}>
              Crew
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/technology" className={setActive}>
              Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <div className="header__burger-menu padding-common" onClick={clickBurger}>
      <svg
        className={
          toggle ? "header__burger-open hidden" : "header__burger-open"
        }
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="21"
      >
        <g fill="#D0D6F9" fillRule="evenodd">
          <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
        </g>
      </svg>
      <svg
        className={
          !toggle ? "header__burger-close hidden" : "header__burger-close"
        }
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
      >
        <g fill="#D0D6F9" fillRule="evenodd">
          <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
          <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
        </g>
      </svg>
    </div>
  </header>
   );
}
 
export default Header;