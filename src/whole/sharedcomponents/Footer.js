import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="body-content">
      <p></p>
      <div className="footer">
        <div className="inner-footer">
          <div className="footer-items">
            <h1>A propos vendo</h1>
            <p>
              vendo is an e commerce website for customers and based on exchange
            </p>
          </div>
          <div className="footer-items">
            <h2>General</h2>
            <div className="border"></div>
            <ul>
              <Link to="/">
                <a href="heyy">
                  <li>Acceuil</li>
                </a>
              </Link>
              <Link to="/produit">
                {" "}
                <a href="heyy">
                  <li>Les produis</li>
                </a>
              </Link>
              <a href="heyy">
                <li>les CEOs</li>
              </a>
              <Link to="contact">
                <a href="heyy">
                  <li>Contact</li>
                </a>
              </Link>
            </ul>
          </div>
          <div className="footer-items">
            <h2>tutorials</h2>
            <div className="border"></div>
            <ul>
              <a href="heyy">
                <li>home</li>
              </a>
              <a href="heyy">
                <li>home</li>
              </a>
              <a href="heyy">
                <li>home</li>
              </a>
              <a href="heyy">
                <li>home</li>
              </a>
            </ul>
          </div>

          <div className="footer-items">
            <h2>contact us</h2>
            <div className="border"></div>
            <ul>
              <li>
                <i class="fa fa-map-pin"></i>51 street ettatower ettahrir
              </li>
              <li>
                <i class="fa fa-phone"></i>+216 92 430 690
              </li>
              <li>
                <i class="fa fa-envelope"></i>khalil.hajri@esen.tn
              </li>
            </ul>
            <div className="social-media">
              <a href="heyy">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="heyy">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="heyy">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="heyy">
                <i class="fa fa-google-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
