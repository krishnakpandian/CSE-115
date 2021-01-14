import React, { Component } from "react";
import dog from '../assets/dog.jpg'
class ResultBody extends Component {
  render() {
    return (
      <section>
        <div>
          <img src={dog} className="Dog" onClick={this.imgClick}/> 
          <img src={dog} className="Dog" onClick={this.imgClick}/> 
          <img src={dog} className="Dog" onClick={this.imgClick}/> 
          <img src={dog} className="Dog" onClick={this.imgClick}/> 
          <img src={dog} className="Dog" onClick={this.imgClick}/> 
          <img src={dog} className="Dog" onClick={this.imgClick}/> 
 
        </div>
        <div>
          <button onClick={this.backClick}>Back</button>
          <button onClick={this.nextClick}>Next</button>
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
