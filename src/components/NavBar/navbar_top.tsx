import React from "react";
import './navbar_top.css'
import { Link } from "react-router-dom";
import newUser from '../Signup/signup_form'
import loginUser from '../Login/login_form'
import firebase from '../Signup/firebaseConfig'
import logoutUser from "../Login/logout_form";
import newGoogleUser from '../Signup/google_signup'
import loginGoogleUser from '../Login/google_login'
import google_logo from '../../assets/google_icon.png'

class NavbarTop extends React.Component<any, any> {

  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
      signupCollapsed: false,
      loginCollapsed: false,
      email: "",
      password: "",
      userLogged: this.getUserStatus(),
      userEmail: this.getUserEmail()
    }
    this.handleChange = this.handleChange.bind(this);
  }

  getUserEmail() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ userEmail: user.email });
      } else {
        this.setState({ userEmail: "" });
        this.setState({ userLogged: true });
      }
    });
  }

  getUserStatus() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        this.setState({ userLogged: false });
      } else {
        // User not logged in or has just logged out.
        this.setState({ userLogged: true });
      }
    });
  }

  handleToggle() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  handleSignup() {
    this.setState({ signupCollapsed: !this.state.signupCollapsed });
    this.setState({ loginCollapsed: false });
  }

  handleChange(field) {
    this.setState({ [field.target.name]: field.target.value });
  }

  handleLogin() {
    this.setState({ loginCollapsed: !this.state.loginCollapsed });
    this.setState({ signupCollapsed: false });
  }

  handleLogout() {
    logoutUser();
    this.setState({ userLogged: false });
    this.setState({ userEmail: "" });
  }

  signUpClick() {
    this.setState({ signupCollapsed: false });
    this.setState({ loginCollapsed: false });
    newUser(this.state.email, this.state.password);
  }

  async googleSignUpClick() {
    this.setState({ signupCollapsed: false });
    this.setState({ loginCollapsed: false });
    newGoogleUser();
  }

  async googleLoginClick() {
    this.setState({ signupCollapsed: false });
    this.setState({ loginCollapsed: false });
    const check = await loginGoogleUser();
    if (check == false) {
      this.setState({ userLogged: true });
    } else {
      this.setState({ userLogged: false });
    }
    this.getUserEmail();
  }

  async loginClick() {
    this.setState({ signupCollapsed: false });
    this.setState({ loginCollapsed: false });
    const check = await loginUser(this.state.email, this.state.password);
    if (check == false) {
      this.setState({ userLogged: true });
    } else {
      this.setState({ userLogged: false });
    }
    this.getUserEmail();
  }

  render() {
    return (
      <section>
        <nav className="navbar has-shadow" id="top_navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand HeightFix">
            <div className="navbar-brand">
              <Link to="/">
                <h1 className="navbar-item title is-1 CenterTitle" id="logo_title">
                  We-Locate
              </h1>
              </Link>
            </div>

            <div className={"navbar-burger dropdown is-right HeightFix" + (this.state.collapsed ? "" : " is-active")} onClick={() => this.handleToggle()} aria-label="menu"
              aria-haspopup="true" aria-controls="dropdown-menu" aria-expanded="false">
              <div className="dropdown-trigger">

                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>

              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                {this.state.userLogged ? <this.menuShown /> : <this.userMenuShown />}
              </div>
            </div>
          </div>
          <div id="navbarButtons" className="navbar-menu">
            <div className="navbar-end">
              {this.state.userLogged ? <this.buttonsShown /> : <this.userShown />}
            </div>
          </div>
        </nav>
        { this.state.signupCollapsed ? <this.Signup /> : null}
        { this.state.loginCollapsed ? <this.Login /> : null}
      </section>
    );
  }

  userMenuShown = () => (
    <div className="dropdown-content">
      { this.state.userLogged ? this.state.userEmail : this.state.userEmail}
      <button className="button dropdown-item" id="list_button" onClick={() => this.handleLogout()}>Log Out</button>
    </div>
  );

  menuShown = () => (
    <div className="dropdown-content">
      <button className="button dropdown-item" id="list_button" onClick={() => this.handleSignup()}>Sign Up</button>
      <button className="button dropdown-item" id="list_button" onClick={() => this.handleLogin()}>Login</button>
    </div>
  );

  userShown = () => (
    <div className="navbar-item">
      <div id="Username">
        Welcome, {this.state.userLogged ? this.state.userEmail
          : this.state.userEmail}
      </div>
      <div className="buttons ButtonAlign">
        <button className={"button is-black is-outlined"} onClick={() => this.handleLogout()}>Log out</button>
      </div>
    </div>
  );

  buttonsShown = () => (
    <div className="navbar-item">
      <div className="buttons ButtonAlign">
        <button className={"button is-black is-outlined"} onClick={() => this.handleSignup()}>Sign Up</button>
        <button className="button is-black is-outlined" onClick={() => this.handleLogin()}>Login</button>
      </div>
    </div>
  );

  Signup = () => (
    <div className="box column is-quarter is-pulled-right has-background-white">
      <button className='is-square button is-success' id="google_img" onClick={() => this.googleSignUpClick()}>
        <img className="image is-16x16" src={google_logo}></img>
              Sign Up with Google
            </button>
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
      <button className='is-square button is-success' id="google_img" onClick={() => this.googleLoginClick()}>
        <img className="image is-16x16" src={google_logo}></img>
              Login with Google
            </button>

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