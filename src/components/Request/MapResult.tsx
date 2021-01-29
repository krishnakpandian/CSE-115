import './MapResult.css';
import GoogleMapReact from 'google-map-react';
import { props } from "./result-body";
import { useEffect, useState } from 'react';

// https://blog.logrocket.com/a-practical-guide-to-integrating-google-maps-in-react/

// lng always 0 and map not updating, need to rerender somehow

// don't think we need your results

let coordinates = {
  // delete later, test location
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

const MapResult: React.FC<props> = ({ results, statusCode, message, lat, lng, address }) => {
  const [location, setLocation] = useState({ lat, lng })

  let map;

  map = address && (
    <div className="googleMap columns">
      {console.log(lat)}
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GMAPS_API_KEY }}
        center={{lat: 20, lng: -20}}
        defaultZoom={15}
      >
      </GoogleMapReact>
    </div>
  );

  // useEffect(() => {
    
  // }, [address, lat, lng, location]);

  return (
    <div className='MapResult'>
      {map}
    </div>
  );
};

export default MapResult;