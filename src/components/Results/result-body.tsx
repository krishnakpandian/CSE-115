import React, { Component } from "react";
import { checkServerIdentity } from "tls";
import "../../bulma.css"
import "./result-body.css"
import {createRequest, deleteRequest} from "../Request/request";

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
  updateSaves(add_or_delete: boolean, res: results): void
}

const ResultBody: React.FC<props> = ({ results, updateSaves }: props) => {
  // true for add, false for delete
  const updateSave = (add_or_delete: boolean, city_name: string, travel_time?: number, distance?: number, average_cost?: number) => {
    if(add_or_delete){
      createRequest("gypCsrGv8s3QEk8iuaeP", city_name, travel_time, distance, average_cost).then(res => {
        console.log(res);
        const newCard: results = {
          cityName: city_name,
          distance: distance,
          travelTime: travel_time,
          averageCost: average_cost,
          saved: true
        }
        updateSaves(add_or_delete, newCard);
      });
    } else{
      deleteRequest("gypCsrGv8s3QEk8iuaeP", city_name, travel_time, distance, average_cost).then(res => {
        console.log(res);
        const oldCard: results = {
          cityName: city_name,
          distance: distance,
          travelTime: travel_time,
          averageCost: average_cost,
          saved: false
        }
        updateSaves(add_or_delete, oldCard);
      });
    }

  }

  return (
    <>
      <div className="result-container">
        {results.map((result, index) => {
          return (
            <div className="card" key={index}>
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
                { !result.saved &&
                  <a onClick={() => updateSave(true, result.cityName, result.travelTime, result.distance, result.averageCost)} className="card-footer-item">
                    Save
                  </a>
                }
                { result.saved &&
                  <a onClick={() => updateSave(false, result.cityName, result.travelTime, result.distance, result.averageCost)} className="card-footer-item">
                    Unsave
                  </a>
                }
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