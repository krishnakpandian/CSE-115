import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

interface props {
  keyword,
  setKeyword,
  buttonClick
}

const SearchBar: React.FC<props> = ({ keyword, setKeyword, buttonClick }: props) => {
  // get lat and lng for autocomplete 
  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
  };

  // state for search button, if clicked and loading or not
  const [load, setLoad] = useState<boolean>(false);

  // change state of button when clicked to wait for data
  const onButtonClick = async () => {
    setLoad(true);
    await buttonClick(setLoad);
  }

  // print to console with load state change
  useEffect(() => console.log(load), [load]);

  return (
    <div className='SearchBar'>
      <div className='field has-addons'>
        <div className='control is-expanded is-fullwidth'>
          <PlacesAutocomplete
            value={keyword}
            onChange={setKeyword}
            onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div >
                <input
                  {...getInputProps({
                    placeholder: 'search location',
                    className: 'input is-primary is-medium is-rounded',
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion, i) => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div key={i}
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <div onClick={e => setKeyword(e.currentTarget.textContent)}>{suggestion.description}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>

        <div className='control'>
          <button className="button is-primary is-medium is-outlined ButtonMargin" disabled={load || !keyword}
            onClick={onButtonClick}>
            {load ? "Loading" : "Search"}</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;