import React, {useEffect} from "react";
import NavbarTop from '../components/NavBar/navbar_top';
import NavbarBottom from '../components/NavBar/navbar_bottom';
import About from '../components/About/About';
import {analytics} from '../components/Signup/firebaseConfig'


const AboutHome: React.FC = () => {
    useEffect(() => {
        analytics.logEvent("page_visited_About")
    })
    return (
        <div className="App">
            <NavbarTop />
            <About />
            <NavbarBottom />
        </div>
    )
}

export default AboutHome;
