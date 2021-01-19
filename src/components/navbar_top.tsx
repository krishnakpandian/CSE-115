import React, { Component } from "react";
import './navbar_top.css'
import "../bulma.css"

class NavbarTop extends Component {
  render() {
    return (
      <nav className="navbar has-background-danger" id="top_navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-brand">
          <h1 className="navbar-item title is-1">
            We-Locate
          </h1>
          </div>
          <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        
        <div id="navbarButtons" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button" onClick={this.signUpClick}>Sign Up</button>
                <button className="button" onClick={this.logInClick}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </nav> 
   );
  }

  logInClick() {
    console.log("Login button has been pressed.");
  }
  signUpClick() {
    console.log("Sign up button has been pressed.");
  }
}
export default NavbarTop;