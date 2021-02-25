import React from "react";
import NavbarTop from '../components/NavBar/navbar_top';
import NavbarBottom from '../components/NavBar/navbar_bottom';
import Analysis from '../components/Analytics/Analytics'


const AnalyticsHome = () => {
    return(
        <div className="AnalyticsHome">
            <NavbarTop />
            <Analysis/>
            <NavbarBottom/>
        </div>
    )
}

export default AnalyticsHome