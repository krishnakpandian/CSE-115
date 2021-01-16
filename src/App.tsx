import React from "react";
import "./App.css";
import "./bulma.css"
import NavbarTop from "./components/navbar_top";
import NavbarBottom from "./components/navbar_bottom";
import NavbarMiddle from "./components/navbar_middle";
import ResultBody from './components/result-body'
import Search from './components/search/Search'

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Search />
      <NavbarMiddle/>
      <ResultBody />
      <NavbarBottom />
    </div>
  );
}

export default App;
