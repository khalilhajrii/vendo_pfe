import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../sharedcomponents/NavBar";
import Footer from "../sharedcomponents/Footer";
import "./css/Login.css";
import { Formik } from "formik";
import * as yup from "yup";
import { FormFeedback, FormGroup, Input, Button, Alert } from "reactstrap";
import Axios from "axios";

const LoginPage = () => {
  const [values, setValues] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    Axios.post(`/login`, values)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data));
      })
      .catch((err) => [console.log(err)]);
  };

  return (
    <body className="body">
      <div>
        <NavBar />
        <img src="/images/connexion.jpg" alt="background" className="logpic" />

        <div className="content2">
          <form onSubmit={clickSubmit}>
            <div>
              <div className="login-box">
                <h1>Connexion</h1>

                <div className="textbox">
                  <i class="fa fa-user"></i>
                  <FormGroup>
                    <Input
                      type="email"
                      placeholder="Email..."
                      id="exampleInputemail"
                      onChange={handleChange("Email")}
                      name="email"
                    />
                  </FormGroup>
                </div>

                <div className="textbox">
                  <i class="fa fa-lock"></i>
                  <FormGroup>
                    <Input
                      type="password"
                      placeholder="Mot de passe"
                      id="exampleInputpassword"
                      onChange={handleChange("Password")}
                      name="password"
                      required
                    />
                  </FormGroup>
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />

                  <label class="form-check-label" for="exampleCheck1">
                    Remember me
                  </label>
                </div>

                <div className="button">
                  <Button className="btn" type="submit">
                    Connexion
                  </Button>
                </div>

                <div className="return">
                  <Link to="/recuperer mot de passe">
                    <a href="heyy">Mot de passe oubliée ?</a>
                  </Link>
                  <Link to="/register">
                    <a href="heyy">Créer un compte ?</a>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </body>
  );
};

export default LoginPage;
