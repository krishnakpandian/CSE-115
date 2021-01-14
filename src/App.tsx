import React from "react";
import "./App.css";
import ResultBody from './components/result-body'

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Welocate</h1>
          </div>
        </div>
      </section>
      <section>
        <ResultBody></ResultBody>
      </section>
    </div>
  );
}

export default App;
