import React from "react";
import { useState, useEffect } from 'react';
import "./App.css";
import "./bulma.css"
import NavbarTop from "./components/NavBar/navbar_top";
import NavbarBottom from "./components/NavBar/navbar_bottom";
import NavbarMiddle from "./components/NavBar/navbar_middle";
import ResultBody from './components/Results/result-body';
import Search from './components/Search/Search';
import MapResult from './components/Request/MapResult';
import {results, props} from "./components/Results/result-body";
import Routes from './Routes/Route';

/*
interface results {
  cityName: string,
  distance?: number,
  travelTime?: number,
  averageCost?: number
}

interface props {
  results: results[],
  statusCode: number,
  message: string,
  lat: number,
  lng: number,
  address: string
}
*/

const App = () => {
  return (
    <Routes/>
  );
}

export default App;
