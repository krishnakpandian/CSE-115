import React from 'react';
import { render, screen } from '@testing-library/react';
import { mount, shallow, render as testing } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import data from './components/Request/sampleReturn.json'


import App from './App';
import AboutHome from './Views/AboutHome';
import Home from './Views/Home';
import About from './components/About/About';
import NavbarTop from './components/NavBar/navbar_top';
import NavbarBottom from './components/NavBar/navbar_bottom';
import NavbarMiddle from './components/NavBar/navbar_middle';
import ResultBody from './components/Results/result-body';
import Search from './components/search/Search';


import firebase from './components/Signup/firebaseConfig';
import routeData from 'react-router';
import newGoogleUser from './components/Signup/google_signup';
Enzyme.configure({ adapter: new Adapter() });


jest.mock('firebase', () => {
  const auth = jest.fn();
  auth.GoogleAuthProvider = jest.fn();
  auth.Auth = jest.fn();
  return { auth };
});

jest.mock('firebase', () => ({
  initializeApp: jest.fn(),
  analytics: jest.fn(),
  firestore: () => ({
    collection: jest.fn(path => ({
      doc: jest.fn(queryString => ({
        set: {}
      }))
    })) 
   }),
   auth: jest.fn()
}))


describe('App Renders', () => {

  jest.mock('firebase', () => {
    const auth = jest.fn();
    const mAuth = { signInWithRedirect: jest.fn() };
    // @ts-ignore
    auth.GoogleAuthProvider = jest.fn();
    // @ts-ignore
    auth.Auth = jest.fn(() => mAuth);
    return { auth };
  });


  it('Home renders', () => {
    shallow(<App />);
  });
})

describe("Analytics Renders", () => {
  it("Analytics Renders", () => {
    shallow(<Home/>);
  });
});

describe('Views Renders', () => {
  const mockLocation = {
    pathname: '/',
    hash: '',
    search: '',
    state: ''
  }
  beforeEach(() => {
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)
  });
  it('Home renders', () => {
    shallow(<AboutHome />);
  });
})

describe("Footer Renders", () => {
  const mockLocation = {
    pathname: '/',
    hash: '',
    search: '',
    state: ''
  }
  beforeEach(() => {
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)
  });
  it("Footer Renders", () => {
    shallow(<NavbarBottom/>);
  });
});

describe("Navbar Renders", () => {
  const mockLocation = {
    pathname: '/',
    hash: '',
    search: '',
    state: ''
  }
  beforeEach(() => {
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)
  });
  it("Navbar Renders", () => {
    shallow(<NavbarTop/>);
  });
});

describe("About Render", () => {
  it('About Renders', () =>{
    shallow(<About/>);
  })
})

describe("NavbarMiddle Render", () => {
  it('NavbarMiddle Renders', () =>{
    shallow(<NavbarMiddle {...{}}/>);
  })
})

describe("ResultBody Render", () => {
  it('ResultBody Renders', () =>{
    shallow(<ResultBody/>);
  })
})

describe("Search Render", () => {
  it('Search Renders', () =>{
    shallow(<Search/>);
  })
})

