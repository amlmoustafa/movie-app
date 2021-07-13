import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
  const [isClickd, setIsClicked] = useState(false);

  const handleMenuClick = () => {
    setIsClicked(!isClickd);
  };
  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo">
        FS movies <i className="fas fa-film"></i>
      </h1>
      <div className="menu-icon" onClick={handleMenuClick}>
        <i className={isClickd ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={isClickd ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.itemClassName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
