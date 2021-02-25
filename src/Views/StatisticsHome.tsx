import React from "react";
import NavbarTop from '../components/NavBar/navbar_top';
import NavbarBottom from '../components/NavBar/navbar_bottom';
import Statistics from '../components/Statistics/Statistics'


const StatisticsHome = () => {
    return(
        <div className="StatisticsHome">
            <NavbarTop />
            <Statistics/>
            <NavbarBottom/>
        </div>
    )
}

export default StatisticsHome