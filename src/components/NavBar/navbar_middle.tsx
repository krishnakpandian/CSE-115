import React from "react";
import './navbar_middle.css'

interface props {
  data,
  view
}

let status;

const NavbarMiddle: React.FC<props> = ({ data, view }: props) => {
  status = data.address && (view == 'search') && (
    <div className="container is-widescreen" id="middle_navbar">
      <div className="notification" id="info_bar">
        <h1 className="navbar-item title is-1 is-flex is-horizontal-center" id="prompt_text">
          Your Results
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

export default NavbarMiddle;