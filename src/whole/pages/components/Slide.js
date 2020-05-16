import React from "react";
import { Link } from "react-router-dom";
import "./css/Slide.css";

const Slide = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleCaptions" data-slide-to={1} />
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/Images/slide3.jpg"
            className="d-block w-100"
            alt="main logo"
          />

          <div className="carousel-caption d-none d-md-block">
            <Link to="login">
              <button type="button" class="btn btn-success">
                Connexion
              </button>
            </Link>
            <Link to="register">
              <button type="button" class="btn btn-success">
                Inscription
              </button>
            </Link>
          </div>
        </div>

        <div className="carousel-item">
          <img src="/images/slide.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>

      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Slide;
