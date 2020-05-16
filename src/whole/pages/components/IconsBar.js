import React from "react";
import "./css/Icons.css";

const IconBar = () => {
  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="testimonals">
          <div className="person">
            <img src="/images/bag.png" alt="produit"></img>
            <div className="name">Choose what you want</div>
          </div>
          <div className="person">
            <img src="/images/message.png" alt="produit"></img>
            <div className="name">send message to the seller</div>
          </div>
          <div className="person">
            <img src="/images/demande.png" alt="prduit"></img>
            <div className="name">upload Demandes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconBar;
