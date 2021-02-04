import React, { Component, RefObject } from "react";
import { useState } from 'react';
import PropTypes from "prop-types";
import './navbar_top.css'
import "../../bulma.css"
import truck_logo from '../../assets/moving_truck.png'
import form_logo from '../../assets/form_icon.png'
import apartment_logo from '../../assets/apartment_icon.png'
import newUser from '../Signup/signup_form'
import loginUser from '../Login/login_form'
import firebase from 'firebase';
import checkLogin from "../Login/check_login";
import logoutUser from "../Login/logout_form";

type state = { collapsed: boolean,
              signupCollapsed: boolean,
              loginCollapsed: boolean,
              email: string,
              password: string };
type props = unknown;

class NavbarTop extends React.Component<any, any> {
  
  constructor(props) {
    super(props);
    
    this.state = { collapsed: true,
                  signupCollapsed: false,
                  loginCollapsed: false,
                  email: "",
                  password: "",
                  userLogged: this.getUserStatus(),
                  userEmail: this.getUserEmail()
    }
    this.handleChange = this.handleChange.bind(this);
  }

  getUserEmail(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({userEmail: user.email});
      } else {
        this.setState({userEmail: ""});
        this.setState({userLogged: true});
      }
    });  
  }
  
  getUserStatus(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        this.setState({userLogged: false});
      } else {
        // User not logged in or has just logged out.
        this.setState({userLogged: true});
      }  
    });
  }

  handleToggle() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  handleSignup() {
    this.setState({ signupCollapsed: !this.state.signupCollapsed});
    this.setState({ loginCollapsed: false});
  }

  handleChange(field){
    this.setState({ [field.target.name]: field.target.value});
  }

  handleLogin() {
    this.setState({ loginCollapsed: !this.state.loginCollapsed});
    this.setState({ signupCollapsed: false});
  }

  handleLogout() {
    logoutUser();
    this.setState({userLogged: false});
    this.setState({userEmail: ""});
  }

  signUpClick() {
    this.setState({signupCollapsed: false});
    this.setState({loginCollapsed: false});
    newUser(this.state.email, this.state.password);
  }

  async loginClick() {
    this.setState({signupCollapsed: false});
    this.setState({loginCollapsed: false});
    const check = await loginUser(this.state.email, this.state.password);
    if(check == false){
      this.setState({userLogged: false});
    } else {
      this.setState({userLogged: false});
    }
    this.getUserEmail();
  }

  render() {
    return (
      <section>
      <nav className="navbar has-shadow" id="top_navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-brand">
            <h1 className="navbar-item title is-1" id="logo_title">
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
              { this.state.userLogged ? <this.menuShown /> : <this.userMenuShown /> }
            </div>
          </div>
        </div>
        <div id="navbarButtons" className="navbar-menu">
          <div className="navbar-end">
            { this.state.userLogged ? <this.buttonsShown /> : <this.userShown /> }
          </div>
        </div>
      </nav> 
      { this.state.signupCollapsed ? <this.Signup /> : null }
      { this.state.loginCollapsed ? <this.Login /> : null }
      <div className="columns is-centered" id="about_section">
        <div className="column is-one-third">
          <div id="info_card">
            <div className='is-flex is-horizontal-center'>
              <figure className='image is-64x64'><img src={form_logo}></img></figure>
            </div>
            <h1 className="title is-2"> Search </h1>
            <p className="is-size-4">Enter an address to receive vital information
              about cost of living, traffic, and distances to 
              places to visit.
            </p>
            </div>
        </div>
        <div className="column is-one-third">
          <div id="info_card">
            <div className='is-flex is-horizontal-center'>
              <figure className='image is-64x64'><img src={apartment_logo}></img></figure>
            </div>
            <h1 className="title is-2"> Choose </h1>
            <p className="is-size-4">Pick a place that fits your creteria from the results
              and save it along with other relevant links. 
            </p>
          </div>
        </div>
        <div className="column is-one-third">
          <div id="info_card">
              <div className='is-flex is-horizontal-center'>
                <figure className='image is-64x64'><img src={truck_logo}></img></figure>
              </div>
              <h1 className="title is-2"> Relocate </h1>
              <p className="is-size-4">Now that you are informed and prepared, it is time to make your 
                life-changing move. 
              </p>
              
            </div>
          </div>
      </div>
      </section>
   );
  }

  userMenuShown = () => (
    <div className="dropdown-content">
      { this.state.userLogged ? this.state.userEmail : this.state.userEmail }
      <button className="button dropdown-item" id="list_button" onClick={()=>this.handleLogout()}>Log Out</button>
    </div>
  );

  menuShown = () => (
    <div className="dropdown-content">
      <button className="button dropdown-item" id="list_button" onClick={()=>this.handleSignup()}>Sign Up</button>
      <button className="button dropdown-item" id="list_button" onClick={()=>this.handleLogin()}>Login</button>
    </div>
  );

  userShown = () => (
    <div className="navbar-item">
              <div id="Username">
                Welcome, { this.state.userLogged ? this.state.userEmail 
                                                 : this.state.userEmail }
              </div>
              <div className="buttons">
                <button className={"button is-black is-outlined"} onClick={()=>this.handleLogout()}>Log out</button>
              </div>
    </div>
  );

  buttonsShown = () => (
  <div className="navbar-item">
    <div className="buttons">
      <button className={"button is-black is-outlined"} onClick={()=>this.handleSignup()}>Sign Up</button>
      <button className="button is-black is-outlined" onClick={()=>this.handleLogin()}>Login</button>
    </div>
  </div>
  );

  Signup = () => (
    <div className="box column is-quarter is-pulled-right has-background-white">
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input name="email" type="email" placeholder="test@gmail.com" className="input" required
                 onChange={this.handleChange}>
              
                </input>
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left">
                <input name="password" type="password" placeholder="*******" className="input" required 
                onChange={this.handleChange}>
                </input>
              </div>
            </div>
            <div>
              <button className="button is-success" onClick={() => this.signUpClick()}>
                Signup
              </button>
            </div>
      </div>
  );

  Login = () => (
    <div className="box column is-quarter is-pulled-right has-background-white">
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input name="email" type="email" placeholder="test@gmail.com" className="input" required
                 onChange={this.handleChange}>
                </input>
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left">
                <input name="password" type="password" placeholder="*******" className="input" required 
                onChange={this.handleChange}>
                </input>
              </div>
            </div>
            <div>
              <button className="button is-success" onClick={() => this.loginClick()}>
                Login
              </button>
            </div>
      </div>
  );
}
export default NavbarTop;