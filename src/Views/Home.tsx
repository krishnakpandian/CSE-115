import React from "react";
import { useState, useEffect } from 'react';
import "../bulma.css"
import NavbarTop from "../components/NavBar/navbar_top";
import NavbarBottom from "../components/NavBar/navbar_bottom";
import NavbarMiddle from "../components/NavBar/navbar_middle";
import ResultBody from '../components/Results/result-body';
import SaveToggle from '../components/Results/saveToggle';
import Search from '../components/search/Search';
import MapResult from '../components/Request/MapResult';
import { results, props } from "../components/Results/result-body";

const Home = () => {
  const [data, setData] = useState<props>({
    results: [{ cityName: "Test", distance: 5, travelTime: "", averageCost: -1 }],
    statusCode: 0,
    message: "",
    lat: 0,
    lng: 0,
    address: ""
  });

  // update of data
  const updateData = (res: props) => {
    setData(res);
  }

  // Just checking data is updated correctly
  //    Whenever data updates, print to console
  useEffect(() => {
    console.log(data);
  }, [data]);


  const card = {
    saved: data,
    actual: data
  }

  return (
    <div className="App">
      <NavbarTop />
      <Search data={data} setData={updateData} />
      <NavbarMiddle />
      <MapResult {...data} />
      <SaveToggle {...card} />
      <NavbarBottom />
    </div>
  );
}

export default Home;