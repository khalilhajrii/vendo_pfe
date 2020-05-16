import React, { Component } from "react";
import NavBar from "../sharedcomponents/NavBar";
import Footer from "../sharedcomponents/Footer";
import "./css/Register.css";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { FormFeedback, FormGroup, Input, Button, Alert } from "reactstrap";

class Register extends Component {
  _handleFormSubmit(values)  { 
    console.log(values);
}

_renderError(){
  const {error} = this.props;
  if(error){
  return (
    <Alert color="danger">
          {error}
        </Alert>
  );
  }

}
  render() {
    return (
      <body className="body">
        <div id="hii">
          <NavBar />

          <img
            src="/images/inscription.jpg"
            alt="background"
            className="logpic"
          />
                    {this._renderError()}


          <div className="content3">
          <Formik
              initialValues={{ nom:"",
                               prenom:"",
                               email: "", 
                              password: "",
                              numero:"",
                              adresse:"",
                              sexe:"",
                              annee:""
                             }}
            onSubmit={this._handleFormSubmit.bind(this)}
            validationSchema={yup.object().shape({
              nom : yup.string().required(),
              prenom:yup.string().required(),
              email: yup.string().email().required(),
              password: yup
                .string()
                .min(12,'Minimum 12 caracteres')
                .required(),
              numero: yup.string().required().min(8).max(8),
              adresse:yup.string().required(),
              sexe: yup.string().required(),
              annee: yup.string().required()
            })}
            render={({
              handleChange,
              handleSubmit,
              handleBlur,
              errors,
              touched,
            }) => (
              <div>
<form onSubmit={this.displayRegister}>
              <div className="register-box">
                <h1>Inscription</h1>

                <FormGroup>
                  <Input
                    type="text"
                    invalid={errors.nom && touched.nom}
                    valid={errors.nom ? false : null}
                    className="nom"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="nom"
                    placeholder="Nom..."
                  />
                  {errors.nom && touched.nom ? (
                          <FormFeedback> {errors.nom} </FormFeedback>
                        ) : null}
                </FormGroup>

                <FormGroup>
                  <Input
                    type="text"
                    invalid={errors.prenom && touched.prenom}
                    className="prenom"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="prenom"
                    placeholder="Prenom..."
                  />
                  {errors.prenom && touched.prenom ? (
                          <FormFeedback> {errors.prenom} </FormFeedback>
                        ) : null}
                  </FormGroup>
               
                <FormGroup>
                  <Input
                    type="text"
                    invalid={errors.email && touched.email}
                    className="email"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    placeholder="Email"
                  />
                  {errors.email && touched.email ? (
                          <FormFeedback> {errors.email} </FormFeedback>
                        ) : null}
                  </FormGroup>

                <FormGroup>
                  <Input
                    type="password"
                    invalid={errors.password && touched.password}
                    className="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    placeholder="Mot de passe..."
                  />
                  {errors.password && touched.password? (
                          <FormFeedback> {errors.password} </FormFeedback>
                        ) : null}
                </FormGroup>
                

                <FormGroup>
                  <Input
                    type="text"
                    invalid={errors.numero && touched.numero}
                    className="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="numero"
                    placeholder="Numero de téléphone..."
                  />
                  {errors.numero && touched.numero ? (
                          <FormFeedback> {errors.numero} </FormFeedback>
                        ) : null}
                </FormGroup>

                <FormGroup>
                  <Input
                    type="text"
                    invalid={errors.adresse && touched.adresse}
                    className="adresse"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="adresse"
                    placeholder="Adresse..."
                  />
                  {errors.adresse && touched.adresse ? (
                          <FormFeedback> {errors.adresse} </FormFeedback>
                        ) : null}
                </FormGroup>

                <FormGroup>
                  <Input
                  type="select"
                    className="sexe"
                    invalid={errors.sexe && touched.sexe}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="sexe"
                  >
                    <option>Votre sexe ...</option>
                    <option>Homme</option>
                    <option>Femme</option>
                  </Input>
                  {errors.sexe && touched.sexe ? (
                          <FormFeedback> {errors.sexe} </FormFeedback>
                        ) : null}
                </FormGroup>

                <FormGroup>
                  <Input
                  type="select"
                    className="naissance"
                    invalid={errors.annee && touched.annee}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="annee"
                  >
                    <option>Votre date de naissance ...</option>
                    <option>1998</option>
                    <option>1999</option>
                  </Input>
                  {errors.annee && touched.annee ? (
                          <FormFeedback> {errors.annee} </FormFeedback>
                        ) : null}
                </FormGroup>

                <Button
                  className="btn btn-outline-success my-2 my-sm-0"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Inscription
                </Button>
				<div className="return1">
				<Link to="/login">
                      <a href="login">  Vous-avez deja un compte ? </a>
                      </Link>
					  </div>
              </div>
            </form>
              </div>
            )}


              />
            
          </div>
          <Footer />
        </div>
      </body>
    );
  }
}

export default Register;
