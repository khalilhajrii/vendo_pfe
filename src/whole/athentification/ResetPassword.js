import React, { Component } from "react";
import NavBar from "../sharedcomponents/NavBar";
import Footer from "../sharedcomponents/Footer";
import "./css/ResetPassword.css";

export class ResePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };

    this.update = this.update.bind(this);

    this.displayReset = this.displayReset.bind(this);
  }

  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  displayReset(e) {
    e.preventDefault();
    console.log("rmail est envoyée");
    console.log(this.state);
    this.setState({
      email: "",
    });
  }
  render() {
    return (
      <div>
        <NavBar />
        <img src="/images/motdepasse.jpg" alt="background" className="logpic" />

        <div className="content12">
          <form onSubmit={this.displayReset}>
            <div className="reset-box">
              <h1>Mot de passe oubliée ?</h1>

              <div className="textbox">
                <i class="fa fa-user"></i>
                <input
                  type="email"
                  placeholder="Email..."
                  id="exampleInputemail"
                  value={this.state.email}
                  onChange={this.update}
                  name="email"
                  required
                />
              </div>
              <div className="btn1">
                <input className="btn" type="submit" value="Valider" />
              </div>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    );
  }
}

export default ResePassword;
