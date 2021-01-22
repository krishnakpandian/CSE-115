import React, { Component } from "react";
import './navbar_bottom.css'
import "../bulma.css"

class NavbarBottom extends Component {
  render() {
    return (
      <div className="container is-widescreen" id="bottom_navbar">
        <div className="notification" id="info_bar">
          <p className="navbar-item is-size-6 is-flex is-horizontal-center" id="prompt_text">
            Developed by students at UC Santa Cruz
          </p>
          <a className="navbar-item is-size-6 is-flex is-horizontal-center" href="#" id="prompt_text">
            Click here to Learn More
          </a>
        </div>
      </div>
      
   );
  }
}
export default NavbarBottom;