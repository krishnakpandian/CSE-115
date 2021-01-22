import React, { Component } from "react";
import './navbar_middle.css'
import "../bulma.css"

class NavbarMiddle extends Component {
  render() {
    return (
      <div className="container is-widescreen" id="middle_navbar">
        <div className="notification" id="info_bar">
          <h1 className="navbar-item title is-1 is-flex is-horizontal-center" id="prompt_text">
            Your Results:
          </h1>
        </div>
      </div>
   );
  }
}
export default NavbarMiddle;