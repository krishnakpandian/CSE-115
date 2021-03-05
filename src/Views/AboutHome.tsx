import React, {useEffect} from "react";
import NavbarTop from '../components/NavBar/navbar_top';
import NavbarBottom from '../components/NavBar/navbar_bottom';
import About from '../components/About/About';
import {analytics} from '../components/Signup/firebaseConfig'


<<<<<<< HEAD

const AboutHome = () => {

    useEffect(() => {
        analytics.logEvent("pageVisited_About")
    })

    return(
=======
const AboutHome: React.FC = () => {
    return (
>>>>>>> origin
        <div className="App">
            <NavbarTop />
            <About />
            <NavbarBottom />
        </div>
    )
}

export default AboutHome;
