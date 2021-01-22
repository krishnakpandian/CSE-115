import React, { Component } from "react";
import { checkServerIdentity } from "tls";
import dog from '../assets/dog2.jpg'
import "../bulma.css"
import "./result-body.css"

interface results {
  cityName: string,
  distance?: number,
  travelTime?: number,
  averageCost?: number
}

interface props {
  results: results[],
  statusCode: number,
  message: string
}

const ResultBody: React.FC<props> = ({ results, statusCode, message }) => {
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
              <div className="card-content distance">
                {result.distance} Miles
                </div>
              <div className="card-content averageCost">
                ${result.averageCost}
              </div>
              <div className="card-content travelTime">
                {result.travelTime} Minutes
              </div>
              <div className="card-footer">
                <p className="card-footer-item">
                  View
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default ResultBody;