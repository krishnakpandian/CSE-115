import React, { Component } from "react";
import './navbar_top.css'
import "../bulma.css"

type state = { collapsed: boolean };
type props = {};
class NavbarTop extends React.Component<props,state> {

  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  handleToggle() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    return (
      <nav className="navbar has-background-danger" id="top_navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-brand">
            <h1 className="navbar-item title is-1">
              We-Locate
            </h1>
          </div>

          <div className={"navbar-burger dropdown is-right" + (this.state.collapsed ? "" : " is-active")} onClick={() => this.handleToggle()} aria-label="menu"
            aria-haspopup="true" aria-controls="dropdown-menu" aria-expanded="false">
            <div className="dropdown-trigger">
              
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <button className="button dropdown-item" onClick={this.signUpClick}>Sign Up</button>
                  <button className="button dropdown-item" onClick={this.logInClick}>Login</button>
                </div>
            </div>
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