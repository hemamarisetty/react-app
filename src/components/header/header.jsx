import React, { Component } from "react";
import './header.css';
class NavbarPage extends Component {

render() {
  return (
      <div className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">Home</a>

          </div>
          {/* <span className="nav-toggle"></span>
          <div className="nav-right nav-menu">
            <div className="nav-item">
              <p className="control">
                <a className="button is-primary is-outlined">
                  <span className="icon">
                    <i className="fa fa-download"></i>
                  </span>
                  <span>Join Now</span>
                </a>
              </p>

            </div>

          </div> */}
        </div>
      </div>
   
    );
  }
}

export default NavbarPage;