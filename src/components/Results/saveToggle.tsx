import React, { Component } from "react";
import { isConstructorDeclaration, setConstantValue } from "typescript";
import ResultBody from "./result-body"

export interface results {
    cityName: string,
    distance?: number,
    travelTime?: number,
    averageCost?: number,
    saved: boolean
}

export interface card {
    results: results[],
    statusCode: number,
    message: string,
    lat: number,
    lng: number,
    address: string,
    updateSaves(add_or_delete: boolean, res: results): void
}

export interface props {
    saved: card,
    actual: card
}

type state = {
    searchState: any
}

class SaveToggle extends Component<props, state> {

    constructor(props) {
        super(props);
        this.state = { searchState: "search" };
    }

    render() {
        return (
            <div>
                <div className="select is-primary is-rounded">
                    <select onChange={(e) => this.changeState(e.target.value)}>
                        <option value='search'>Search Results</option>
                        <option value='saved'>Saved Results</option>
                    </select>
                </div>
                <ResultBody viewState="search" currentState={this.state.searchState} {...this.props.actual} />
                <ResultBody viewState="saved" currentState={this.state.searchState} {...this.props.saved} />
            </div >
        )
    }

    changeState(params: any) {
        this.setState({
            searchState: params
        })
        console.log(this.state.searchState)
    }

}
export default SaveToggle;