import React from "react";
import { useEffect } from 'react';
import './Analytics.css'
import {analytics} from '../Signup/firebaseConfig'

const Analysis = () => {

    useEffect(()=> { 
        console.log("test")
        analytics.logEvent("Analytics_page_visited")
    })
    
    return(
        <div className="Analysis">
            <h1 className="mostSearched">Most Searched Result</h1>
            Card Data here
            <h1>Most Saved Result</h1>
            Card Data here
        </div>
    )
}

export default Analysis