import React, { Component } from "react";
import './navbar_bottom.css'
import "../../bulma.css"
import { Link, useLocation } from "react-router-dom";

const NavbarBottom: React.FC = () => {
  const location = useLocation()
  return (
    <div className="container is-widescreen" id="bottom_navbar">
      <div className="notification" id="info_bar">
        <p className="navbar-item is-size-6 is-flex is-horizontal-center" id="prompt_text">
          Developed by students at UC Santa Cruz
          </p>
        {location.pathname != "/about" ?
          <Link to="/about">
            Click Here To Learn More
          </Link>
          :
          <Link to="/">
            Check Out Our Product
          </Link>
        }
      </div>
    </div>

  );
}
export default NavbarBottom;