import React from "react";
import "./css/BarContent.css";

const BarContent = () => {
  return (
    <div className="row">
      <div className="col-4">
        <div className="list-group" id="list-tab" role="tablist">
          <a
            className="list-group-item list-group-item-action active"
            id="list-home-list"
            data-toggle="list"
            href="#list-home"
            role="tab"
            aria-controls="home"
          >
            Step 1
          </a>
          <a
            className="list-group-item list-group-item-action"
            id="list-profile-list"
            data-toggle="list"
            href="#list-profile"
            role="tab"
            aria-controls="profile"
          >
            Step 2
          </a>
          <a
            className="list-group-item list-group-item-action"
            id="list-messages-list"
            data-toggle="list"
            href="#list-messages"
            role="tab"
            aria-controls="messages"
          >
            Step 3
          </a>
          <a
            className="list-group-item list-group-item-action"
            id="list-settings-list"
            data-toggle="list"
            href="#list-settings"
            role="tab"
            aria-controls="settings"
          >
            Step 4
          </a>
        </div>
      </div>
      <div className="col-8">
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="list-home"
            role="tabpanel"
            aria-labelledby="list-home-list"
          >
            <h2 className="titre">Ajouter votre article</h2>
          </div>
          <div
            className="tab-pane fade"
            id="list-profile"
            role="tabpanel"
            aria-labelledby="list-profile-list"
          >
            <h2 className="titre">Ajouter votre article</h2>
            <p></p>
          </div>
          <div
            className="tab-pane fade"
            id="list-messages"
            role="tabpanel"
            aria-labelledby="list-messages-list"
          >
            <h2 className="titre">Ajouter votre article</h2>
          </div>
          <div
            className="tab-pane fade"
            id="list-settings"
            role="tabpanel"
            aria-labelledby="list-settings-list"
          >
            <h2 className="titre">Ajouter votre article</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarContent;
