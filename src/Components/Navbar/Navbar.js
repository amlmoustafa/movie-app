import React, { useState } from "react";
import "../../assets/styles/navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Favorites from "../../pages/Favorites";
import Home from "../../pages/Home";
import SearchResults from "../../pages/SearchResults";

const Navbar = () => {
  const [isClickd, setIsClicked] = useState(false);

  const handleMenuClick = () => {
    setIsClicked(!isClickd);
  };
  return (
    <Router>
      <nav className="navbar-items">
        <h1 className="navbar-logo">
          FS movies <i className="fas fa-film"></i>
        </h1>
        <div className="menu-icon" onClick={handleMenuClick}>
          <i className={isClickd ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={isClickd ? "nav-menu active" : "nav-menu"}>
          <Link className={"nav-links"} to="/">
            Home
          </Link>
          <Link className={"nav-links"} to="/favorites">
            Favorites
          </Link>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/searchResults">
          <SearchResults />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
