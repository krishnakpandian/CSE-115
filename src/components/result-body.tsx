import React, { Component } from "react";
import dog from '../assets/dog.jpg'
import './result-body.css'
class ResultBody extends Component {
  render() {
    return (
      <section>
        <div>
          <img src={dog} className="Box1" onClick={this.imgClick}/> 
          <img src={dog} className="Box2" onClick={this.imgClick}/> 
          <img src={dog} className="Box3" onClick={this.imgClick}/> 
          <img src={dog} className="Box4" onClick={this.imgClick}/> 
          <img src={dog} className="Box5" onClick={this.imgClick}/> 
          <img src={dog} className="Box6" onClick={this.imgClick}/> 
        </div>
        <div>
          <button className="Back" onClick={this.backClick}>Back</button>
          <button className="Next" onClick={this.nextClick}>Next</button>
        </div>
      </section>
   );
  }

  backClick() {
    console.log("Back button has been pressed.");
  }

  nextClick() {
    console.log("Next button has been pressed.");
  }

  imgClick() {
    console.log("You clicked on this image.")
  }

}
export default ResultBody;
