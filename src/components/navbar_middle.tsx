import React, { Component } from "react";
import './navbar_middle.css'
import "../bulma.css"

class NavbarMiddle extends Component {
  render() {
    return (
      <nav className="navbar" id="middle_navbar" role="navigation" aria-label="middle navigation">
        <div className="navbar-brand">
          <h1 className="navbar-item title is-3">
            Results: 
          </h1>
        </div>
      </nav> 
   );
  }
}
export default NavbarMiddle;