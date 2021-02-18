import React from "react";
import './invalid_search.css'

interface props {
  data,
  view
}

let status;

const InvalidSearch: React.FC<props> = ({ data, view }: props) => {
  status = (data.statusCode === 400) && (view == 'search') && (
    <div className="container is-widescreen" id="middle_navbar">
      <div className="notification" id="info_bar">
        <h1 className="navbar-item title is-1 is-flex is-horizontal-center" id="prompt_text">
          No Results
        </h1>
      </div>
    </div>
  );

  return (
    <div>
      {status}
    </div>
  );
}

export default InvalidSearch;