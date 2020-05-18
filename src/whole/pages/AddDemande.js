import React, { useEffect, useState } from "react";
import "./css/Demandes.css";
import Axios from "axios";

const Demandes = () => {
  const [values, setValues] = useState({
    Prix: 0,
    Description: "",
    owner: JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))._id
      : "test",
  });
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    Axios.post(`/demande`, values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => [console.log(err)]);
  };

  return (
    <div className="demandes">
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
              <form onSubmit={clickSubmit}>
                <div className="demandes-box">
                  <h1>Ajouter votre demandes</h1>

                  <div className="form-group">
                    <textarea
                      className="Descriptiondemande"
                      id="exampleInputdesc"
                      name="Nom_produit"
                      placeholder="Nom_produit..."
                      onChange={handleChange("Nom_produit")}
                      required
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
                    <textarea
                      className="Descriptiondemande"
                      id="exampleInputdesc"
                      name="description"
                      placeholder="Description..."
                      onChange={handleChange("Description")}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="number"
                      className="Prixdemande"
                      id="exampleInputprix"
                      name="prix"
                      placeholder="Prix..."
                      onChange={handleChange("Prix")}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="Prixdemande"
                      id="exampleInputprix"
                      name="Budg"
                      placeholder="Budg..."
                      onChange={handleChange("Budg")}
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
    </div>
  );
};

export default Demandes;
