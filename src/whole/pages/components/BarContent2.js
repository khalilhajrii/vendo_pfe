import React from "react";
import "./css/BarContent2.css";

const BarContent2 = () => {
  return (
    <div>
      <div className="card"></div>
      <div className="highlight-phone">
        <div className="content">
          <div className="row">
            <div className="col-md-8">
              <div className="intro">
                <h2>Download now</h2>
                <p>
                  find also our application on andrid and IOS for free so by
                  this you can shop whatever the place the time and the device
                  what are you waiting for hurry up !!
                </p>

                <a className="btn btn-primary" role="button" href="heey">
                  Android App
                </a>
                <a className="btn btn-primary" role="button" href="heey">
                  Ios App
                </a>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="d-none d-md-block iphone-mockup">
                <img className="device" src="/images/pc.png" alt="iphone"></img>
                <div className="screen"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarContent2;
