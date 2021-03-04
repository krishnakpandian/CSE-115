import React, { Component } from "react";
import "./result-body.css"
import { checkServerIdentity } from "tls";
import { createRequest, deleteRequest } from "../Request/request";
import ImageModal from "../Modals/Modals";
import firebase from '../Signup/firebaseConfig'
import Fade from 'react-reveal/Fade';

export interface results {
  cityName: string,
  travelTime?: number,
  distance?: number,
  averageCost?: number,
  travelSeconds?: number,
  numberPeople?: number,
  searchAddress?: string,
  lat?: number,
  lng?: number,
  saved: boolean
}

export interface props {
  results: results[],
  statusCode: number,
  message: string,
  lat: number,
  lng: number,
  address: string,
  viewState?: string,
  currentState?: string,
  updateSaves(add_or_delete: boolean, res: results): void
}

const ResultBody: React.FC<props> = ({ results, updateSaves, viewState, currentState }: props) => {
  // true for add, false for delete
  const updateSave = (add_or_delete: boolean, city_name: string, travel_time?: number, distance?: number, average_cost?: number, travel_seconds?: number, number_people?: number, search_address?: string, lat?: number, lng?:number) => {
    if (firebase.auth().currentUser == null) return;
    // console.log("Search Address: " + search_address);
    if (add_or_delete) {
      createRequest(firebase.auth().currentUser?.uid, city_name, travel_time, distance, average_cost, travel_seconds, number_people, search_address, lat, lng).then(res => {
        // console.log(res);
        const newCard: results = {
          cityName: city_name,
          distance: distance,
          travelTime: travel_time,
          travelSeconds: travel_seconds,
          numberPeople: number_people,
          averageCost: average_cost,
          searchAddress: search_address,
          lat: lat,
          lng: lng,
          saved: true
        }
        updateSaves(add_or_delete, newCard);
      });
    } else {
      deleteRequest(firebase.auth().currentUser?.uid, city_name, travel_time, distance, average_cost, travel_seconds, number_people, search_address, lat, lng).then(res => {
        // console.log(res);
        const oldCard: results = {
          cityName: city_name,
          distance: distance,
          travelTime: travel_time,
          travelSeconds: travel_seconds,
          numberPeople: number_people,
          averageCost: average_cost,
          searchAddress: search_address,
          lat: lat,
          lng: lng,
          saved: false
        }
        updateSaves(add_or_delete, oldCard);
      });
    }

  }
  if (viewState == currentState) {
    return (
      <>
        <div className="result-container">
          {results.map((result, index) => {
            return (
              <>
              <Fade down delay={50} distance={"0.5em"}>
              <div className="card" key={index}>
                <div className="title">
                  {result.cityName}
                </div>
                <p className="address">From {result.searchAddress} with {numPeople(result.numberPeople)}</p>
                <div className="card-content">
                  <li>{result.distance} km</li>
                  <li>{cost(result.averageCost)}</li>
                  <li>{travel(result.travelTime)}</li>
                </div>
                <footer className="card-footer">
                  {/* <div className="card-footer-item" >
                    Views
                </div> */}
                <ImageModal {...result}/>
                  {!result.saved &&
                    <a onClick={() => updateSave(true, result.cityName, result.travelTime, result.distance, result.averageCost, result.travelSeconds, result.numberPeople, result.searchAddress, result.lat, result.lng)} className="card-footer-item">
                      Save
                  </a>
                  }
                  {result.saved &&
                    <a onClick={() => updateSave(false, result.cityName, result.travelTime, result.distance, result.averageCost, result.travelSeconds, result.numberPeople, result.searchAddress, result.lat, result.lng)} className="card-footer-item">
                      Unsave
                  </a>
                  }
                </footer>
              </div>
              </Fade>
              </>
            )
          })}
        </div>
      </>
    )
  }
  else {
    return null
  }

  function numPeople(numberPeople?: number) {
    if (numberPeople == 1) {
      return "1 person";
    }
    else {
      return numberPeople?.toString() + " people";
    }
  }


  // Checks if the travelTime exists
  function travel(param) {
    if (param != null) {
      return param
    }
    else {
      return "Time unavailable"
    }
  }

  // Checks if the averageCost exists
  function cost(param) {
    if (param != -1) {
      return "$" + param.toFixed(2)
    }
    else {
      return "Price unavailable"
    }
  }
}


export default ResultBody;