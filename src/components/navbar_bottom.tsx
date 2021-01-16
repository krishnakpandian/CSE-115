import React, { Component } from "react";
import './navbar_bottom.css'
import "../bulma.css"

class NavbarBottom extends Component {
  render() {
    return (
      <nav className="navbar has-background-danger" id="bottom_navbar" role="navigation" aria-label="footer navigation">
        <div className="navbar-end">
          <div className="navbar-item">
            <p>About Us</p>
          </div>
          <div className="navbar-item">
            <p>Contact</p>
          </div>
        </div>
      </nav> 
   );
  }
}
export default NavbarBottom;