import React from "react";
import { useState, useEffect } from 'react';
import { results, props } from "../components/Results/result-body";
import { getRequest } from "../components/Request/request";
import firebase from '../components/Signup/firebaseConfig';
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
import {analytics} from '../components/Signup/firebaseConfig'

let saved_props: props = {
  results: [],
  statusCode: 0,
  message: "",
  lat: 0,
  lng: 0,
  address: "",
  updateSaves: (add_or_delete: boolean, res: results) => null
};

const Home: React.FC = () => {
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
        if (element.cityName == res.cityName && element.searchAddress == res.searchAddress && element.numberPeople == res.numberPeople) {
          element.saved = true;
        }
      });
      updateData(saved_props);

    } else {
      setSaves(oldArray => oldArray.filter(oldArray => { return !(oldArray.cityName == res.cityName && oldArray.searchAddress == res.searchAddress && oldArray.numberPeople == res.numberPeople) }));
      saved_props.results.forEach(element => {
        if (element.cityName == res.cityName && element.searchAddress == res.searchAddress && element.numberPeople == res.numberPeople) {
          element.saved = false;
        }
      });
      updateData(saved_props);
    }
  }

  // update of data from save - unsave
  const updateData = (res: props) => {
    res.updateSaves = add_or_delete_save;
    setData(res);
  }

  // update of data from search
  const updateDataSearch = (res: props) => {
    // if a save's searchAddress matches the search input, check if the cityName matches
    saves.forEach(save => {
      if (save.searchAddress == res.address)
        res.results.forEach(city => {
          if (save.numberPeople == city.numberPeople && save.cityName == city.cityName) {
            city.saved = true;
          }
        });
    });

    res.updateSaves = add_or_delete_save;
    setData(res);
  }

  // sort saved cards
  const sortSaves = (orderedSaves) => {
    setSaves(orderedSaves);
  }

  // update view for search or saved cards
  const updateView = (view) => {
    setView(view)
  }

<<<<<<< HEAD
  // Just checking data is updated correctly
  //    Whenever data updates, print to console
  useEffect(() => {
    analytics.logEvent("pageVisited_Home")
    console.log(data);
  }, [data]);
=======
  // whenever data updates, print to console
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
>>>>>>> origin

  // get saved cards on initial load if user is logged in
  // adds a listener to user state, if user logs in or logs out change saves state
  useEffect(() => {
    if (firebase.auth().currentUser != null) {
      getRequest(firebase.auth().currentUser?.uid).then(res => {
        setSaves(res);
      });
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // user logged in already or has just logged in
        getRequest(user.uid).then(res => {
          setSaves(res);
        }).catch(error => {
          console.error("Error Getting Cards: ", error);
        });

      } else {
        // user not logged in or has just logged out
        setSaves([]);
      }
    });
  }, []);

  // whenever saves updates, stores current props so it appears after re-render
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
  }, [saves]);

  // necessary because of result-body props parameters
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
      <Search data={data} setData={updateDataSearch} />
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
