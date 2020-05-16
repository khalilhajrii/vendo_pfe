import React, { Component } from "react";
import "./css/Demandes.css";
import NavBar from "../sharedcomponents/NavBar";
import Footer from "../sharedcomponents/Footer";

export class Demandes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      prix: "",
    };

    this.update = this.update.bind(this);

    this.displayLogin = this.displayLogin.bind(this);
  }

  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  displayLogin(e) {
    e.preventDefault();
    console.log("produit est ajoutée avec succées");
    console.log(this.state);
    this.setState({
      description: "",
      prix: "",
    });
  }

  render() {
    return (
      <div className="demandes">
        <NavBar />
        <img src="/images/demandes.jpg" alt="background" className="logpic" />
        {/*partie d'ajout d'une annonce*/}

        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
        >
          Ajouter une demande
        </button>

        <div
          class="modal fade bd-example-modal-lg"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div className="content7">
                <form onSubmit={this.displayLogin}>
                  <div className="demandes-box">
                    <h1>Ajouter votre demandes</h1>

                    <div className="form-group">
                      <textarea
                        className="Descriptiondemande"
                        id="exampleInputdesc"
                        value={this.state.description}
                        onChange={this.update}
                        name="description"
                        placeholder="Description..."
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="Prixdemande"
                        id="exampleInputprix"
                        value={this.state.prix}
                        onChange={this.update}
                        name="prix"
                        placeholder="Prix..."
                        required
                      />
                    </div>

                    <input
                      type="submit"
                      className="btn btn-success"
                      value="Ajouter le produit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/*partie des demandes */}
        <div className="content5">
          <div className="media">
            <img
              src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png"
              className="mr-3"
              alt="..."
            />
            <div className="media-body">
              <h5 className="mt-0">Khalil hajri</h5>
              <p>Im looking for samsung galaxy s 9 </p>
              <p>Prix : 100 DT</p>
              <div class="card-footer text-muted">
                2 days ago
                <button type="button" className="btn btn-success">
                  Contacter
                </button>
              </div>
            </div>
          </div>

          <div className="media">
            <img
              src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png"
              className="mr-3"
              alt="..."
            />
            <div className="media-body">
              <h5 className="mt-0">Khalil hajri</h5>
              <p>Im looking for samsung galaxy s 9 </p>
              <p>Prix : 100 DT</p>
              <div class="card-footer text-muted">
                2 days ago
                <button type="button" className="btn btn-success">
                  Contacter
                </button>
              </div>
            </div>
          </div>

          <div className="media">
            <img
              src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png"
              className="mr-3"
              alt="..."
            />
            <div className="media-body">
              <h5 className="mt-0">Khalil hajri</h5>
              <p>Im looking for samsung galaxy s 9 </p>
              <p>Prix : 100 DT</p>
              <div class="card-footer text-muted">
                2 days ago
                <button type="button" className="btn btn-success">
                  Contacter
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Demandes;
