import React from 'react';
import './MapResult.css';
import GoogleMapReact from 'google-map-react';
import { props } from "../Results/result-body";

const MapResult: React.FC<props> = ({ results, statusCode, message, lat, lng, address }) => {
  let map;
  map = address && (
    <div className="googleMap columns">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GMAPS_API_KEY }}
        center={{ lat, lng }}
        defaultZoom={11}
      >
      </GoogleMapReact>
    </div>
  );

export default MapResult;