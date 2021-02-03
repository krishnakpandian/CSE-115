import React from "react";
import { useState, useEffect } from 'react';
import "../bulma.css"
import NavbarTop from "../components/NavBar/navbar_top";
import NavbarBottom from "../components/NavBar/navbar_bottom";
import NavbarMiddle from "../components/NavBar/navbar_middle";
import InvalidSearch from '../components/NavBar/invalid_search';
import ResultBody from '../components/Results/result-body';
import Search from '../components/search/Search';
import MapResult from '../components/Request/MapResult';
import {results, props} from "../components/Results/result-body";

const Home = () => {
    const [data, setData] = useState<props>({
      results: [],
      statusCode: 0,
      message:"",
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
  
    return (
      <div className="App">
        <NavbarTop />
        <Search data={data} setData={updateData} />
        <InvalidSearch {...data} />
        <NavbarMiddle {...data} />
        <MapResult {...data} />
        <ResultBody {...data}/>
        <NavbarBottom />
      </div>
    );
  }
  
  export default Home;