import React, { Component } from "react";
import "./css/Contact.css";
import NavBar from "../sharedcomponents/NavBar";
import Footer from "../sharedcomponents/Footer";

export class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nom: "",
      email: "",
      message: "",
    };

    this.update = this.update.bind(this);

    this.displayContact = this.displayContact.bind(this);
  }

  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  displayContact(e) {
    e.preventDefault();
    console.log("envoyée");
    console.log(this.state);
    this.setState({
      nom: "",
      email: "",
      message: "",
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <img src="/images/contact.jpg" alt="background" className="logpic" />
        <div className="content13">
          <form onSubmit={this.displayContact}>
            <div className="contact-box">
              <h1>Contact</h1>

              <div className="textbox">
                <i class="fa fa-user"></i>
                <input
                  type="text"
                  placeholder="Nom..."
                  id="exampleInputemail"
                  value={this.state.nom}
                  onChange={this.update}
                  name="nom"
                  required
                />
              </div>

              <div className="textbox">
                <i class="fa fa-envelope-square"></i>
                <input
                  type="Email"
                  placeholder="Email..."
                  id="exampleInputemail"
                  value={this.state.email}
                  onChange={this.update}
                  name="email"
                  required
                />
              </div>

              <div className="textbox">
                <i class="fa fa-inbox"></i>
                <textarea
                  placeholder="Message"
                  value={this.state.message}
                  onChange={this.update}
                  name="message"
                  required
                />
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

              <div className="btn2">
                <input className="btn" type="submit" value="Envoyer" />
              </div>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Contact;
