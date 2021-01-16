import React, { Component } from "react";
import './navbar_top.css'
import "../bulma.css"

class NavbarTop extends Component {
  render() {
    return (
      <nav className="navbar has-background-danger" id="top_navbar"role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <h1 className="navbar-item title is-1">
            We-Locate
          </h1>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <button className="button" onClick={this.signUpClick}>Sign Up</button>
          </div>
          <div className="navbar-item">
            <button className="button" onClick={this.logInClick}>Login</button>
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