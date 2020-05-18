import React from "react";
import { Link } from "react-router-dom";
import "./css/NavBar.css";
import { isAuthenticated } from "../athentification/IsAuthenticated";

const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <a className="nav-link" href="heyy">
          <img className="logo" src="/images/vendo.png" alt="" />{" "}
        </a>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="heyy">
              Acceuil{" "}
            </a>
          </li>
            <li className="nav-item">
              <Link to="/produit">
                <a className="nav-link" href="heyy">
                  Produits
                </a>
              </Link>
            </li>
          <li className="nav-item">
            <Link to="/demandes">
              <a className="nav-link " href="heyy">
                Les Demandes
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact">
              <a className="nav-link " href="heyy">
                Contact
              </a>
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <a href="heyyy">
            <i class="fa fa-search"></i>
          </a>

          {!isAuthenticated() && (
            <Link to="register">
              {" "}
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                href="https://codepen.io/ehermanson/pen/KwKWEv"
              >
                Incription
              </button>
            </Link>
          )}
          {!isAuthenticated() && (
            <Link to="/login">
              {" "}
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Connexion
              </button>
            </Link>
          )}
          {isAuthenticated() && (
            <Link to="/login">
              {" "}
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={() => localStorage.clear()}
              >
                Logout
              </button>
            </Link>
          )}
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
