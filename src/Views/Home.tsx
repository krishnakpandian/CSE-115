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

let saved_props: props =  {
  results: [],
  statusCode: 0,
  message:"",
  lat: 0,
  lng: 0,
  address: "",
  updateSaves: (add_or_delete: boolean, res: results) => {console.log(res);}
};

const Home = () => {
    const [saves, setSaves] = useState<results[]>([]);  

    const [data, setData] = useState<props>(saved_props);

    // add or delete save; true for add, false for delete
    const add_or_delete_save = (add_or_delete: boolean, res: results) => {
      if(add_or_delete){
        setSaves(oldArray => [...oldArray, res]);
        saved_props.results.forEach(element => {
          if(element.averageCost == res.averageCost && element.cityName == res.cityName && element.distance == res.distance && element.travelTime == res.travelTime){
            element.saved = true;
          }
        });
        updateData(saved_props);
      }else{
        setSaves(oldArray => oldArray.filter(oldArray => {return oldArray.cityName != res.cityName && oldArray.distance != res.distance}));
        saved_props.results.forEach(element => {
          if(element.averageCost == res.averageCost && element.cityName == res.cityName && element.distance == res.distance && element.travelTime == res.travelTime){
            element.saved = false;
          }
        });
        updateData(saved_props);
      }
      
    }

    // update of data
    const updateData = (res: props) => {
      res.updateSaves = add_or_delete_save;
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
        console.log("Loaded Cards");
      });
    }, []);

    // Just checking saves is updated correctly
    //    Whenever saves updates, print to console
    useEffect(() => {
      saved_props = {
        results: data.results,
        statusCode: data.statusCode,
        message: data.message,
        lat: data.lat,
        lng: data.lng,
        address: data.address,
        updateSaves: add_or_delete_save
      };
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
      updateSaves: add_or_delete_save
    };
    
    return (
      <div className="App">
        <NavbarTop />
        <Search data={data} setData={updateData} />
        <NavbarMiddle />
        <MapResult {...data} />
        <ResultBody {...data}/>
        <h1 >------------------------------------- Saves -------------------------------------</h1>
        <ResultBody {...saveFormat}/>
        <NavbarBottom />
      </div>
    );
  }
  
  export default Home;