import React, { useEffect, useState } from "react";
import "./css/Demandes.css";
import NavBar from "../sharedcomponents/NavBar";
import Footer from "../sharedcomponents/Footer";
import { isAuthenticated } from "../athentification/IsAuthenticated";
import AddDemande from "./AddDemande";
const Demandes = () => {
  const [demandes, setdemandes] = useState([]);

  useEffect(() => {
    fetch("/demande")
      .then((response) => response.json())
      .then((data) => setdemandes(data));
  }, [demandes]);
  
  return (
    <div className="demandes">
      <NavBar />
      <img src="/images/demandes.jpg" alt="background" className="logpic" />

      {isAuthenticated() && (
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
        >
          Ajouter une demande
        </button>
      )}
      <AddDemande />
      <div className="content5">
        {demandes
          .slice(0)
          .reverse()
          .map((demande) => (
            <div className="media">
              <img
                src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png"
                className="mr-3"
                alt="..."
              />
              <div className="media-body">
                <h5 className="mt-0">{JSON.parse(localStorage.getItem("user")).Nom}</h5>
                <p>{demande.Description}</p>
                <p>Prix : {demande.Prix}</p>
                <div class="card-footer text-muted">
                  {demande.createdAt}
                  <button type="button" className="btn btn-success">
                    Contacter
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Demandes;
