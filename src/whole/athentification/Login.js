import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../sharedcomponents/NavBar";
import Footer from "../sharedcomponents/Footer";
import "./css/Login.css";
import { Formik } from "formik";
import * as yup from "yup";
import { FormFeedback, FormGroup, Input, Button, Alert } from "reactstrap";



class LoginPage extends Component {
 


   

  _handleFormSubmit(values)  { 
      console.log(values);
  }

  _renderError(){
    const {error,} = this.props;
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
        <div>
          <NavBar />
          <img
            src="/images/connexion.jpg"
            alt="background"
            className="logpic"
          />
          {this._renderError()}
          

          <div className="content2">
            <Formik
              initialValues={{ email: "", 
              password: "" }}
              onSubmit={this._handleFormSubmit.bind(this)}
              validationSchema={yup.object().shape({
                email: yup.string().email().required(),
                password: yup
                  .string()
                  .required()
              })}
              render={({
                handleChange,
                handleSubmit,
        
                handleBlur,
                errors,
                touched,
              }) => (
                <div>
                  <div className="login-box">
                    <h1>Connexion</h1>

                    <div className="textbox">
                      <i class="fa fa-user"></i>
                      <FormGroup>
                        <Input
                          type="email"
                          invalid={errors.email && touched.email}
                          placeholder="Email..."
                          id="exampleInputemail"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="email"
                        />
                        {errors.email && touched.email ? (
                          <FormFeedback> {errors.email} </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </div>

                    <div className="textbox">
                      <i class="fa fa-lock"></i>
                      <FormGroup>
                        <Input
                          type="password"
                          invalid={errors.password && touched.password}
                          placeholder="Mot de passe"
                          id="exampleInputpassword"
                          onChange={handleChange} 
                          onBlur={handleBlur}
                          name="password"
                          required
                        />
                        {errors.password && touched.password ? (
                          <FormFeedback> {errors.password} </FormFeedback>
                        ) : null}
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
                      <Button
                        className="btn"
                        type="submit"
                        onClick={handleSubmit}
                      >
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
              )}
            />
          </div>
        </div>
        <Footer />
      </body>
    );
  }
}




export default LoginPage;
