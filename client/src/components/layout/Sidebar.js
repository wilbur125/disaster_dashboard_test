
import React from 'react';
import { bubble	 as Menu } from 'react-burger-menu';
import ReadyKit from "../readykit";
export default props => {
  this.state = {
    currentUserName: JSON.parse(localStorage.getItem("okta-token-storage"))
      .idToken.claims.name,
  };
  return (
    <Menu>

<div>
      <h2>{this.state.currentUserName} Are you Ready?</h2>
      </div>
      <div className="menu-item" id = 'readyKit' >
     <ReadyKit/>
      </div>
      <h3>Need more data? </h3>
      <a className="menu-item" href="https://kj-labs.github.io/Earthquake_Tracker">
        Earthquake Tracker - Project 1
      </a>
      <a className="menu-item" href="https://vent-tracker.herokuapp.com/">
        Air Quality Tracker - Project 2
      </a>
      <br></br>
      <a className="menu-item" href = '/login'>
      <button className="btn btn-light btn-lg" onClick={this.logout}>
            Logout
          </button>
      </a>
      <a className="menu-item" href = '/puppies'>
      <button className="btn btn-light btn-lg" >
            Puppies
          </button>
      </a>


    </Menu>
  );
};
