import React, { Component, useState } from "react";
import NavBar from "../sharedcomponents/NavBar";
import Footer from "../sharedcomponents/Footer";
import "./css/Register.css";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { FormFeedback, FormGroup, Input, Button, Alert } from "reactstrap";
import Axios from "axios";

const Register = () => {

  const [values, setValues] = useState({
    Nom: "",
    Prenom: "",
    Email: "",
    Password: "",
    Numero: '',
    Adresse: "",
    Sexe: "",
    Naissance: "",
  });

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    Axios.post(`/user`, values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => [console.log(err)]);
  };

  return (
    <body className="body">
      <div id="hii">
        <NavBar />

        <img
          src="/images/inscription.jpg"
          alt="background"
          className="logpic"
        />

        <div className="content3">
          <form>
            <div>
              <form onSubmit={clickSubmit}>
                <div className="register-box">
                  <h1>Inscription</h1>

                  <FormGroup>
                    <Input
                      type="text"
                      className="nom"
                      name="nom"
                      onChange={handleChange("Nom")}
                      placeholder="Nom..."
                    />
                  </FormGroup>

                  <FormGroup>
                    <Input
                      type="text"
                      className="prenom"
                      name="prenom"
                      onChange={handleChange("Prenom")}
                      placeholder="Prenom..."
                    />
                  </FormGroup>

                  <FormGroup>
                    <Input
                      type="text"
                      className="email"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={handleChange("Email")}
                      name="email"
                      placeholder="Email"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Input
                      type="password"
                      className="password"
                      onChange={handleChange("Password")}
                      name="password"
                      placeholder="Mot de passe..."
                    />
                  </FormGroup>

                  <FormGroup>
                    <Input
                      type="text"
                      className="number"
                      name="numero"
                      onChange={handleChange("Numero")}
                      placeholder="Numero de téléphone..."
                    />
                  </FormGroup>

                  <FormGroup>
                    <Input
                      type="text"
                      className="adresse"
                      onChange={handleChange("Adresse")}
                      name="adresse"
                      placeholder="Adresse..."
                    />
                  </FormGroup>

                  <FormGroup>
                    <Input type="select" onChange={handleChange("Sexe")} className="sexe" name="sexe">
                      <option>Votre sexe ...</option>
                      <option>Homme</option>
                      <option>Femme</option>
                    </Input>
                  </FormGroup>

                  <FormGroup>
                    <Input type="select" onChange={handleChange("Naissance")} className="naissance" name="annee">
                      <option>Votre date de naissance ...</option>
                      <option>1998</option>
                      <option>1999</option>
                    </Input>
                  </FormGroup>

                  <Button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Inscription
                  </Button>
                  <div className="return1">
                    <Link to="/login">
                      <a href="login"> Vous-avez deja un compte ? </a>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </body>
  );
};

export default Register;
