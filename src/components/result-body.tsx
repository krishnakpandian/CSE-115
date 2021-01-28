import React, { Component } from "react";
import { checkServerIdentity } from "tls";
import "../bulma.css"
import "./result-body.css"

export interface results {
  cityName: string,
  distance?: number,
  travelTime?: number,
  averageCost?: number
}

export interface props {
  results: results[],
  statusCode: number,
  message: string,
  lat: number,
  lng: number,
  address: string
}

const ResultBody: React.FC<props> = ({ results, statusCode, message, lat, lng, address }) => {
  console.log(results);
  return (
    <>
      <div className="result-container">
        {results.map((result) => {
          return (
            <div className="card">
              <div className="title">
                {result.cityName}
              </div>
              <div className="card-content">
                <li>{result.distance} Miles</li>
                <li>{cost(result.averageCost)}</li>
                <li>{travel(result.travelTime)}</li>
              </div>
              <footer className="card-footer">

                <a href="#" className="card-footer-item">
                  View
                </a>
                <a href="#" className="card-footer-item">
                  Save
                </a>
              </footer>
            </div>
          )
        })}
      </div>
    </>
  )

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