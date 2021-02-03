import React, { Component } from "react";

interface props {
    searchState: any;
}

const SaveToggle: React.FC<props> = ({ searchState }: props) => {
    return (
        <div className="control">
            <div className="select is-primary is-rounded">
                <select onChange={(e) => changeState(e.target.value)}>
                    <option value='false'>Search Results</option>
                    <option value='true'>Saved Results</option>
                </select>
            </div>
        </div>
    )
    function changeState(param) {
        searchState = { param }
        console.log({ searchState })
    }
}
export default SaveToggle;
