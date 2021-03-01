import React, {useEffect} from "react";
import NavbarTop from '../components/NavBar/navbar_top';
import NavbarBottom from '../components/NavBar/navbar_bottom';
import Analysis from '../components/Analytics/Analytics'
import {analytics} from '../components/Signup/firebaseConfig'

const AnalyticsHome = () => {

    useEffect(() => {
        analytics.logEvent("pageVisited_Analytics")
    })

    return(
        <div className="AnalyticsHome">
            <NavbarTop />
            <Analysis/>
            <NavbarBottom/>
        </div>
    )
}

export default AnalyticsHome