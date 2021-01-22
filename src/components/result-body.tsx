import React, { Component } from "react";
import dog from '../assets/dog2.jpg'
import "../bulma.css"
import "./result-body.css"

// ResultBody Contains the 6 rectangles that will host the results of a search
// Also contains the back and next buttons
// Back and next button call backClick() and nextClick() respectively
// Clicking on an image calls imgClick()
// Formatted using bulma columns, split into three columns
// Each column has two images on them with automatically stacked on the other
// The first and third column have the back and next button on the bottom respectively

// Columns currently in use but tiles might be better later when bringing in data

class resultBody extends Component {
  render() {
    return (
      <section>

        <div className="columns">

          <div className="column">
            <figure className="image">
              <img src={dog} onClick={this.imgClick} />
            </figure>
            <figure className="image">
              <img src={dog} onClick={this.imgClick} />
            </figure>
            <button className="button" onClick={this.backClick}>Back</button>
          </div>

          <div className="column">
            <figure className="image">
              <img src={dog} onClick={this.imgClick} />
            </figure>
            <figure className="image">
              <img src={dog} onClick={this.imgClick} />
            </figure>
          </div>

          <div className="column">
            <figure className="image">
              <img src={dog} onClick={this.imgClick} />
            </figure>
            <figure className="image">
              <img src={dog} onClick={this.imgClick} />
            </figure>
            <button className="button" onClick={this.nextClick}>Next</button>
          </div>

        </div>

      </section >
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



interface results{
  cityName: string,
  distance?: number,
  travelTime?: number,
  averageCost?: number
}

interface props{
  results: results[],
  statusCode: number,
  message: string
}

const ResultBody: React.FC<props> = ( {results, statusCode, message} ) => {
    console.log(results);
    return(
      <>
        <div className="result-container">
            component Renders
            { results.map( (result) => {
                return(
                  <>
                    <div>
                        Hello
                    </div>
                  </>
                )
            })}
        </div>
      </>
    )
}


export default ResultBody;