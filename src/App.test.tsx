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
import SaveToggle from './components/Results/saveToggle'
import SortDropdown from './components/Results/Sort/SortDropdown'
import Sort from './components/Results/Sort/Sort';
import Modals from './components/Modals/Modals';

import firebase from './components/Signup/firebaseConfig';
//import firebase from 'firebase';
import routeData from 'react-router';
import newGoogleUser from './components/Signup/google_signup';
import DeveloperCard from './components/About/DeveloperCard/DeveloperCard';
Enzyme.configure({ adapter: new Adapter() });


// Mocks Firebase Methods
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



//Tests Shallow Rendering of Each Component

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


describe("About Render", () => {
  it('About Renders', () =>{
    shallow(<About/>);
  })
})




describe("NavbarMiddle Render", () => {
  it('NavbarMiddle Renders', () =>{
    shallow(<NavbarMiddle {...{data: {address: 'city'}, view: 'search'}}
    />);
  })
})

describe("ResultBody Render", () => {
  it('ResultBody Renders', () =>{
    shallow(<ResultBody {...{results: [{
      cityName: "city",
      travelTime: 1,
      distance: 1,
      averageCost: 1,
      travelSeconds: 1,
      numberPeople: 1,
      searchAddress: "Yes",
      lat: 1,
      lng: 1,
      saved: true
    }],updateSaves: jest.fn() ,viewState: "yes", currentState: "no", statusCode: 200, }}/>);
  })
})

describe("Search Render", () => {
  it('Search Renders', () =>{
    shallow(<Search/>);
  })
})

describe("SaveToggle Render", () => {
  it('SaveToggle Renders', () =>{
    shallow(<SaveToggle/>);
  })
})

describe("SortDropdown Render", () => {
  it('SortDropdown Renders', () =>{
    shallow(<SortDropdown/>);
  })
})

describe("Sort Render", () => {
  it('Sort Renders', () =>{
    shallow(<Sort {...{data: {address: 'city', results: []}, setData: jest.fn(), sort: [], sortSaves: "default", view: 'search' }}/>);
  })
})

describe("Modal Render", () => {
  it('Modal Renders', () =>{
    shallow(<Modals/>);
  })
})

describe("DeveloperCard Render", () => {
  it('DeveloperCard Renders', () =>{
    shallow(<DeveloperCard/>);
  })
})