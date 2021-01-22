import React from "react";
import { useState, useEffect } from 'react';
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
  const [cities, setCities] = useState<Array<object>>([]);

  // update of cities
  const updateCities = (results) => {
    setCities(results);
  }

  // Just checking cities is updated correctly
  //    Whenever cities updates, print to console
  useEffect(() => {
    console.log(cities);
  }, [cities]);

  return (
    <div className="App">
      <NavbarTop />
      <Search cities={cities} setCities={updateCities} />
      <MapResult location={location} zoomLevel={17} />
      <NavbarMiddle />
      <ResultBody />
      <NavbarBottom />
    </div>
  );
}

export default App;
