import React, { Component } from "react";
import { checkServerIdentity } from "tls";
import "../../bulma.css"
import "./result-body.css"

export interface results {
  cityName: string,
  distance?: number,
  travelTime?: number,
  averageCost?: number,
  saved: boolean
}

export interface props {
  results: results[],
  statusCode: number,
  message: string,
  lat: number,
  lng: number,
  address: string,
  setSave: React.Dispatch<React.SetStateAction<results[]>>
}

const ResultBody: React.FC<props> = ({ results, statusCode, message, lat, lng, address, setSave }: props) => {
  console.log(typeof results);
  return (
    <>
      <div className="result-container">
<<<<<<< HEAD:src/components/Results/result-body.tsx
        {results.map((result,i) => {
=======
        {results.map((result, index) => {
          let cardResult = result;
>>>>>>> origin/result-body:src/components/result-body.tsx
          return (
            <div className="card" key={i}>
              <div className="title">
                {result.cityName}
              </div>
              <div className="card-content">
                <li>{result.distance} Miles</li>
                <li>{cost(result.averageCost)}</li>
                <li>{travel(result.travelTime)}</li>
              </div>
              <footer className="card-footer">
                <a className="card-footer-item">
                  View
                </a>
                <a key={index} onClick={() => saveFunc(cardResult)} className="card-footer-item">
                  Save
                </a>
              </footer>
            </div>
          )
        })}
      </div>
    </>
  )
  function saveFunc(cardResult) {
    console.log(cardResult);
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
      return "$" + param
    }
    else {
      return "Price unavailable"
    }
  }
}


export default ResultBody;