import React, { Component } from "react";
import { isConstructorDeclaration } from "typescript";
import ResultBody from "./result-body"

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
    searchState: any;
}

const SaveToggle: React.FC<props> = ({ searchState, ...data }: props) => {
    return (
        <div>
            <div className="select is-primary is-rounded">
                <select onChange={(e) => changeState(e.target.value)}>
                    <option value='search'>Search Results</option>
                    <option value='saved'>Saved Results</option>
                </select>
            </div>
            <ResultBody viewState="search" currentState={searchState} {...data} />
        </div>
    )
    function changeState(param) {
        searchState = { param }
        console.log({ searchState })
    }
}
export default SaveToggle;
