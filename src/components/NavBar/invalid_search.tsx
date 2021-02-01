import React, { Component } from "react";
import { props } from "../Results/result-body";
import './invalid_search.css'
import { stat } from "fs";

let status;

const InvalidSearch: React.FC<props> = ({ results, statusCode, message, lat, lng, address }: props) => {

  status = (statusCode === 400) && (
    <div className="container is-widescreen" id="middle_navbar">
      <div className="notification" id="info_bar">
        <h1 className="navbar-item title is-1 is-flex is-horizontal-center" id="prompt_text">
          No Results
        </h1>
      </div>
    </div>
  );

  return (
    <div>
      {status}
    </div>
  );
}

export default InvalidSearch;