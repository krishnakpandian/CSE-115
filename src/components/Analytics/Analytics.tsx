import React from "react";
import './Analytics.css'
import firebase from '../Signup/firebaseConfig'

const analytics = firebase.analytics();

const Analysis = () => {
    return(
        <div className="Analysis">
            <h1 className="mostSaved">Most Searched Result</h1>
            Card Data here
            <h1>Most Saved Result</h1>
            Card Data here
        </div>
    )
}

export default Analysis