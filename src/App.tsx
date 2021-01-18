import React from "react";
import "./App.css";
import "./bulma.css"
import NavbarTop from "./components/navbar_top";
import NavbarBottom from "./components/navbar_bottom";
import NavbarMiddle from "./components/navbar_middle";
import ResultBody from './components/result-body';
import Search from './components/search/Search';
import MapResult from './components/MapResult';

const location = {
  // temporary for google maps, delete later
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

const App = () => {
  return (
    <div className="App">
      <NavbarTop />
      <Search />
      <NavbarMiddle />
      <MapResult location={location} zoomLevel={17} />
      <ResultBody />
      <NavbarBottom />
    </div>
  );
}

export default App;
