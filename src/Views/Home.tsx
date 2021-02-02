import React from "react";
import { useState, useEffect } from 'react';
import "../bulma.css"
import NavbarTop from "../components/NavBar/navbar_top";
import NavbarBottom from "../components/NavBar/navbar_bottom";
import NavbarMiddle from "../components/NavBar/navbar_middle";
import ResultBody from '../components/Results/result-body';
import Search from '../components/search/Search';
import MapResult from '../components/Request/MapResult';
import {results, props} from "../components/Results/result-body";
import {getRequest} from "../components/Request/request";

const Home = () => {
    const [saves, setSaves] = useState<results[]>([]);  

    const [data, setData] = useState<props>({
      results: [],
      statusCode: 0,
      message:"",
      lat: 0,
      lng: 0,
      address: "",
      updateSaves: (res: results) => {console.log(res);}
    });

    // add save
    const appendSave = (res: results) => {
      setSaves(oldArray => [...oldArray, res]);
      console.log(data);
      data.results.forEach(element => {
        if(element.averageCost == res.averageCost && element.cityName == res.cityName && element.distance == res.distance && element.travelTime == res.travelTime){
          element.saved = true;
        }
      });
      console.log(data);
      updateData(data);
    }

    // update of data
    const updateData = (res: props) => {
      res.updateSaves = appendSave;
      setData(res);
    }
  
    // Just checking data is updated correctly
    //    Whenever data updates, print to console
    useEffect(() => {
      console.log(data);
    }, [data]);

    // Get saved cards on intial load
    useEffect(() => {
      getRequest("gypCsrGv8s3QEk8iuaeP").then(res => {
        setSaves(res);
      });
    }, []);

    // Just checking saves is updated correctly
    //    Whenever saves updates, print to console
    useEffect(() => {
      console.log(saves);
    }, [saves]);
    
    // necessary because of result-body props parameters, might have to change this
    const saveFormat = {
      results: saves,
      statusCode: 200,
      message: "",
      lat: 0,
      lng: 0,
      address: "",
      updateSaves: appendSave
    };
    
    return (
      <div className="App">
        <NavbarTop />
        <Search data={data} setData={updateData} />
        <NavbarMiddle />
        <MapResult {...data} />
        <ResultBody {...data}/>
        <h1 >Temporary Separator between Results and Saves </h1>
        <ResultBody {...saveFormat}/>
        <NavbarBottom />
      </div>
    );
  }
  
  export default Home;