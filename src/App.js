import React from "react";
import "./App.css";
import NavBar from "./whole/sharedcomponents/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import LoginPage from "./whole/athentification/Login";
import Register from "./whole/athentification/Register";
import Home from "./whole/pages/Home";
import Product from "./whole/pages/Product";
import Footer from "./whole/sharedcomponents/Footer";
import Productdetails from "./whole/pages/Productdetails";
import Demandes from "./whole/pages/Demandes";
import Profile from "./whole/pages/Profile";
import ResePassword from "./whole/athentification/ResetPassword";
import Contact from "./whole/pages/Contact";
import Messanger from "./whole/pages/components/Messanger";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <Home />
          <Footer />
        </Route>

        <Route path="/Login" exact>
          <LoginPage />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/produit">
          <Product />
        </Route>

        <Route path="/details">
          <Productdetails />
        </Route>

        <Route path="/demandes">
          <Demandes />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/recuperer mot de passe">
          <ResePassword />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/messanger">
          <Messanger />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
