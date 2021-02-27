import React from "react";
import { useState, useEffect } from 'react';
import { results, props } from "../components/Results/result-body";
import { getRequest } from "../components/Request/request";
import firebase from '../components/Signup/firebaseConfig'
import NavbarTop from "../components/NavBar/navbar_top";
import NavbarBottom from "../components/NavBar/navbar_bottom";
import NavbarMiddle from "../components/NavBar/navbar_middle";
import InvalidSearch from '../components/NavBar/invalid_search';
import AboutProduct from '../components/NavBar/AboutProduct';
import Sort from '../components/Results/Sort/Sort';
import Search from '../components/search/Search';
import MapResult from '../components/Request/MapResult';
import SaveToggle from "../components/Results/saveToggle";
import ResultBody from '../components/Results/result-body';

let saved_props: props = {
  results: [],
  statusCode: 0,
  message: "",
  lat: 0,
  lng: 0,
  address: "",
  updateSaves: (add_or_delete: boolean, res: results) => { console.log(res); }
};

const Home = () => {
  // state for saved cards
  const [saves, setSaves] = useState<results[]>([]);

  // state for data of search
  const [data, setData] = useState<props>(saved_props);

  // state for viewing either searched results or saved cards
  const [view, setView] = useState('search');

  // add or delete save; true for add, false for delete
  const add_or_delete_save = (add_or_delete: boolean, res: results) => {
    if (add_or_delete) {
      setSaves(oldArray => [...oldArray, res]);
      saved_props.results.forEach(element => {
        if (element.cityName == res.cityName && element.searchAddress == res.searchAddress) {
          console.log("Saved: " + element.cityName);
          element.saved = true;
        }
      });
      updateData(saved_props);
    } else {
      setSaves(oldArray => oldArray.filter(oldArray => { return oldArray.cityName != res.cityName && oldArray.distance != res.distance }));
      saved_props.results.forEach(element => {
        if (element.cityName == res.cityName && element.searchAddress == res.searchAddress) {
          element.saved = false;
        }
      });
      updateData(saved_props);
    }

  }

  // update of data
  const updateData = (res: props) => {
    // make sure function is correct
    res.updateSaves = add_or_delete_save;
    setData(res);
    console.log("TEST", saves);
  }

  // sort saved cards
  const sortSaves = (orderedSaves) => {
    setSaves(orderedSaves);
  }

  // update view for search or saved cards
  const updateView = (view) => {
    setView(view)
  }

  // Just checking data is updated correctly
  //    Whenever data updates, print to console
  useEffect(() => {
    console.log(data);
  }, [data]);

  // Get saved cards on intial load if user is logged in
  // Adds a listener to user state; if user logsin/logsout change saves state
  useEffect(() => {
    if (firebase.auth().currentUser != null) {
      getRequest(firebase.auth().currentUser?.uid).then(res => {
        console.log("Loading Cards");
        setSaves(res);
        console.log("Loaded Cards");
      });
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        getRequest(user.uid).then(res => {
          console.log("Loading Cards");
          setSaves(res);
          console.log("Loaded Cards");
        }).catch(error => {
          console.error("Error Getting Cards: ", error);
        });
      } else {
        // User not logged in or has just logged out.
        console.log("Not logged in");
        setSaves([]);
      }
    });
  }, []);

  // Just checking saves is updated correctly
  //    Whenever saves updates, print to console
  // Also stores current proprs, so it appears after rerender
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

  const card = {
    actual: data,
    saved: saveFormat
  }

  // display for search results
  const searchDisplay = data.address && (
    <ResultBody viewState="search" currentState={view} {...card.actual} />
  );

  // display for saved cards
  const savedDisplay = (view == 'saved') && (
    <ResultBody viewState="saved" currentState={view} {...card.saved} />
  );

  return (
    <div className="App">
      <NavbarTop />
      <AboutProduct />
      <Search data={data} setData={updateData} />
      <SaveToggle view={view} setView={updateView} />
      <InvalidSearch data={data} view={view} />
      <NavbarMiddle data={data} view={view} />
      <MapResult data={data} view={view} />
      <Sort data={data} setData={updateData} saves={saves} sortSaves={sortSaves} view={view} />
      <div>
        {searchDisplay}
        {savedDisplay}
      </div>
      <NavbarBottom />
    </div>
  );
}

export default Home;