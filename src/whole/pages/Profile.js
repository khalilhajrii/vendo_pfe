import React, { Component } from "react";
import NavBar from "../sharedcomponents/NavBar";
import "./css/Profile.css";
import Footer from "../sharedcomponents/Footer";
import VotreProduit from "./components/VotreProduit";
import VotreDemandes from "./components/VotreDemandes";

export class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <NavBar />
        <img src="/images/profile.jpg" alt="background" className="logpic" />

        {/*notification*/}
        <div className="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa fa-bell"></i>{" "}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div class="alert alert-primary" role="alert">
              you have a follwer
            </div>
            <div class="alert alert-primary" role="alert">
              you have a follwer
            </div>
          </div>
        </div>

        {/*message*/}
        <div className="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa fa-envelope-square"></i>{" "}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div class="alert alert-primary" role="alert">
              you have a follwer
            </div>
            <div class="alert alert-primary" role="alert">
              you have a follwer
            </div>
          </div>
        </div>

        <div className="content8">
          <div class="col-md-4">
            <div class="profile-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                alt=""
              />
              <div class="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div className="media">
            <div className="media-body">
              <h5 className="mt-0">Khalil hajri</h5>
              <h5 className="mt-0">khalilhajri07@gmail.com</h5>
              <h5 className="mt-0">Homme</h5>
              <h5 className="mt-0">1998</h5>
              <button type="button" className="btn btn-success">
                Modifier le profile
              </button>
              <button type="button" className="btn btn-success">
                Deconnexion
              </button>
            </div>
          </div>
        </div>
        <div className="mes-donnees">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                consulter mes produits
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                consulter mes demandes
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                consulter les produits vendu
              </a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <VotreProduit />
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <VotreDemandes />
            </div>
            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              ...
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Profile;
