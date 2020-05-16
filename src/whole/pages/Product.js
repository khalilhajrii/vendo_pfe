import React, { Component } from "react";
import "./css/Product.css";
import NavBar from "../sharedcomponents/NavBar";
import Footer from ".././sharedcomponents/Footer";
import { Link } from "react-router-dom";
import Axios from "axios";

class Product extends Component {
  constructor(props) {
    super(props);
   var data=[];
    this.state = {
      nom: "",
      prix: "",
      description: "",
      categorie: "",
      image1: "",
      image2: "",
      image3: "",
      emplacement: "",
      produit:[]
      
    };
   
    
    

    this.update = this.update.bind(this);

    this.displayLogin = this.displayLogin.bind(this);
  }
  componentDidMount(){
  console.log('heloooo');
    Axios.get('http://localhost:4000/produit')
     .then((response) => {
       console.log(response.body);
       return response.body;
     })
     .catch((err) => console.log(err));
   
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
      nom: "",
      prix: "",
      description: "",
      categorie: "",
      image1: "",
      image2: "",
      image3: "",
      emplacement: "",
    });
  }

  render() {
    return (
      <div className="tout">
        {/*la partie menu (navbar) component*/}

        <NavBar />

        {/* l'image de header de la page produit */}
        <img src="/images/produit.jpg" alt="background" className="logpic" />

        {/* le container principal */}
        <div className="maincontainer">
          {/* boutton d'ajout d'un produit et le contenu de modal lors de clic */}
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
          >
            Ajouter un produit
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
                {/*formulaire d'ajout d'un produit*/}
                <div className="content4">
                  <form onSubmit={this.displayLogin}>
                    <div className="product-box">
                      <h1>Ajouter votre produit</h1>

                      <div className="form-group">
                        <input
                          type="text"
                          className="nomproduit"
                          id="exampleInputNom"
                          value={this.state.nom}
                          onChange={this.update}
                          name="nom"
                          placeholder="Nom du produit..."
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="prixproduit"
                          id="exampleInputprix"
                          value={this.state.prix}
                          onChange={this.update}
                          name="prix"
                          placeholder="Prix..."
                          required
                        />
                      </div>

                      <div className="form-group">
                        <textarea
                          name
                          id
                          cols={50}
                          rows={2}
                          className="descriptionproduit"
                          value={this.state.description}
                          onChange={this.update}
                          name="description"
                          placeholder="Description..."
                          required
                          defaultValue={""}
                        />
                      </div>

                      <div className="form-group">
                        <select
                          className="categorieproduit"
                          value={this.state.categorie}
                          onChange={this.update}
                          name="categorie"
                          required
                        >
                          <option>Categories...</option>
                          <option>Ordinateurs</option>
                          <option>Telephones</option>
                          <option>Matriel PC</option>
                          <option>Cameras</option>
                          <option>Electromenager</option>
                          <option>Tabletes</option>
                          <option>Autres</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <div class="product-img">
                          <img
                            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MRXK2_AV5_GEO_GB?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1549066044881"
                            alt=""
                          />
                          <div class="file btn btn-lg btn-primary">
                            inserer une photo
                            <input
                              type="file"
                              name="file"
                              value={this.state.image1}
                              onChange={this.update}
                              name="image1"
                              required
                            />
                          </div>
                        </div>

                        <div class="product-img">
                          <img
                            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MRXK2_AV5_GEO_GB?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1549066044881"
                            alt=""
                          />
                          <div class="file btn btn-lg btn-primary">
                            inserer une photo
                            <input
                              type="file"
                              name="file"
                              value={this.state.image2}
                              onChange={this.update}
                              name="image2"
                              required
                            />
                          </div>
                        </div>

                        <div class="product-img">
                          <img
                            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MRXK2_AV5_GEO_GB?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1549066044881"
                            alt=""
                          />
                          <div class="file btn btn-lg btn-primary">
                            inserer une photo
                            <input
                              type="file"
                              name="file"
                              value={this.state.image3}
                              onChange={this.update}
                              name="image3"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <select
                          className="emplacementproduit"
                          value={this.state.emplacement}
                          onChange={this.update}
                          name="emplacement"
                          required
                        >
                          <option>Emplacement...</option>
                          <option>Tunisie</option>
                        </select>
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

          {/* le sous container tu trove le contenu de la produit (image,description,prix,boutton de voir plus) */}
          <div className="subcontainer">
            <div className="produit">
              <div className="image">
                <img
                  src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/144018-phones-review-review-huawei-p20-pro-review-2018-image1-sr0lwmedsp.jpg"
                  alt="produit"
                ></img>
                <div className="name">VENDO</div>
                <div className="desc">
                  a phone with high quality the inly default is that screen are
                  broken but it's okey.
                </div>
                <div className="buttons">
                  <Link to="/details">
                    <button
                      className="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                      href="https://codepen.io/ehermanson/pen/KwKWEv"
                    >
                      Voir plus
                    </button>{" "}
                  </Link>
                </div>
              </div>
              <div className="image">
                <img
                  src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/144018-phones-review-review-huawei-p20-pro-review-2018-image1-sr0lwmedsp.jpg"
                  alt="produit"
                ></img>
                <div className="name">VENDO</div>
                <div className="desc">
                  a phone with high quality the inly default is that screen are
                  broken but it's okey.
                </div>
                <div className="buttons">
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                    href="https://codepen.io/ehermanson/pen/KwKWEv"
                  >
                    Voir plus
                  </button>
                </div>
              </div>
              <div className="image">
                <img
                  src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/144018-phones-review-review-huawei-p20-pro-review-2018-image1-sr0lwmedsp.jpg"
                  alt="produit"
                ></img>
                <div className="name">VENDO</div>
                <div className="desc">
                  a phone with high quality the inly default is that screen are
                  broken but it's okey.
                </div>
                <div className="buttons">
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                    href="https://codepen.io/ehermanson/pen/KwKWEv"
                  >
                    Voir plus
                  </button>
                </div>
              </div>
              <div className="image">
                <img
                  src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/144018-phones-review-review-huawei-p20-pro-review-2018-image1-sr0lwmedsp.jpg"
                  alt="produit"
                ></img>
                <div className="name">VENDO</div>
                <div className="desc">
                  a phone with high quality the inly default is that screen are
                  broken but it's okey.
                </div>
                <div className="buttons">
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                    href="https://codepen.io/ehermanson/pen/KwKWEv"
                  >
                    Voir plus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* la partie footer */}
        <Footer />
      </div>
    );
  }
}

export default Product;
