import React from "react";
import NavbarTop from '../components/NavBar/navbar_top';
import NavbarBottom from '../components/NavBar/navbar_bottom';
import About from '../components/About/About';


const AboutHome = () => {
    return(
        <div className="App">
        <NavbarTop />
        <About/>
        <NavbarBottom/>
        </div>
    )
}


export default AboutHome;