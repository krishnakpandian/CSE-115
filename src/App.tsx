import React from "react";
import "./App.css";
import "./bulma.css"
import NavbarTop from "./components/navbar_top";
import ResultBody from './components/result-body'
import Search from './components/search/Search'

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Search />
      <ResultBody />
    </div>
  );
}

export default App;
