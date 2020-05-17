import React, { Component } from 'react'

export default class AddProduct extends Component {
    render() {
        return (
            <div>
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
                {/* <form onSubmit={this.displayLogin}> */}
                <form>
                  <div className="product-box">
                    <h1>Ajouter votre produit</h1>

                    <div className="form-group">
                      <input
                        type="text"
                        className="nomproduit"
                        id="exampleInputNom"
                        // value={this.state.nom}
                        // onChange={this.update}
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
                        // value={this.state.prix}
                        // onChange={this.update}
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
                        // value={this.state.description}
                        // onChange={this.update}
                        name="description"
                        placeholder="Description..."
                        required
                        defaultValue={""}
                      />
                    </div>

                    <div className="form-group">
                      <select
                        className="categorieproduit"
                        // value={this.state.categorie}
                        // onChange={this.update}
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
                            // value={this.state.image1}
                            // onChange={this.update}
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
                            // value={this.state.image2}
                            // onChange={this.update}
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
                            // value={this.state.image3}
                            // onChange={this.update}
                            name="image3"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <select
                        className="emplacementproduit"
                        // value={this.state.emplacement}
                        // onChange={this.update}
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
            </div>
        )
    }
}
