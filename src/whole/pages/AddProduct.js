import React, { Component, useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [values, setValues] = useState({
    Nom_produit: "",
    Prix: 0,
    Description: "",
    Categorie: "",
    Emplacement: "",
    commentaires: [],
    owner: JSON.parse(localStorage.getItem("user"))._id,
  });

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`/produit`, values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => [console.log(err)]);
  };

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
            <div className="content4">
              <form onSubmit={clickSubmit}>
                <div className="product-box">
                  <h1>Ajouter votre produit</h1>

                  <div className="form-group">
                    <input
                      type="text"
                      className="nomproduit"
                      id="exampleInputNom"
                      onChange={handleChange("Nom_produit")}
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
                      onChange={handleChange("Prix")}
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
                      onChange={handleChange("Description")}
                      name="description"
                      placeholder="Description..."
                      required
                      defaultValue={""}
                    />
                  </div>

                  <div className="form-group">
                    <select
                      className="categorieproduit"
                      onChange={handleChange("Categorie")}
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
                        <input type="file" name="file" name="image1" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <select
                        className="emplacementproduit"
                        onChange={handleChange("Emplacement")}
                        name="emplacement"
                        required
                      >
                        <option>Tunisie</option>
                        <option>Manouba</option>
                        <option>Ben Arous</option>
                        <option>Ariana</option>
                      </select>
                    </div>
                    <input
                      type="submit"
                      className="btn btn-success"
                      value="Ajouter le produit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
