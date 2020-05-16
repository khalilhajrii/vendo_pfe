import React from "react";
import "./css/VotreProduits.css";

const VotreProduit = () => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nom</th>
            <th scope="col">Prix</th>
            <th scope="col">Description</th>
            <th scope="col">Categorie</th>
            <th scope="col">Image</th>
            <th scope="col">Emplacement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Samsung s9+</td>
            <td>1000dt</td>
            <td>Bon qualité avec ue carte memoire et chargeur</td>
            <td>Telephone</td>
            <td>
              <img
                src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/144018-phones-review-review-huawei-p20-pro-review-2018-image1-sr0lwmedsp.jpg"
                className="Product-pic"
                alt=""
              ></img>
            </td>
            <td>Tunis</td>
            <td>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                Modifier les produits
              </button>

              <div
                class="modal fade bd-example-modal-lg"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">Form </div>
                </div>
              </div>
            </td>

            <td>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target=".bd-example-modal-lg1"
              >
                Supprimer les produits
              </button>

              <div
                className="modal fade bd-example-modal-lg1"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <p>vous êtes sûre ? </p>
                    <div className="buttons">
                      <button className="btn btn-success">Oui</button>
                      <button
                        type="button"
                        class="btn btn-success"
                        data-dismiss="modal"
                      >
                        Annuler
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Samsung s9+</td>
            <td>1000dt</td>
            <td>Bon qualité avec ue carte memoire et chargeur</td>
            <td>Telephone</td>
            <td>
              <img
                src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/144018-phones-review-review-huawei-p20-pro-review-2018-image1-sr0lwmedsp.jpg"
                className="Product-pic"
                alt=""
              ></img>
            </td>
            <td>Tunis</td>
            <td>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                Modifier
              </button>

              <div
                class="modal fade bd-example-modal-lg"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">Form </div>
                </div>
              </div>
            </td>

            <td>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target=".bd-example-modal-lg1"
              >
                Supprimer
              </button>

              <div
                className="modal fade bd-example-modal-lg1"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <p>vous êtes sûre ? </p>
                    <div className="buttons">
                      <button className="btn btn-success">Oui</button>
                      <button
                        type="button"
                        class="btn btn-success"
                        data-dismiss="modal"
                      >
                        Close
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Samsung s9+</td>
            <td>1000dt</td>
            <td>Bon qualité avec ue carte memoire et chargeur</td>
            <td>Telephone</td>
            <td>
              <img
                src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/144018-phones-review-review-huawei-p20-pro-review-2018-image1-sr0lwmedsp.jpg"
                className="Product-pic"
                alt=""
              ></img>
            </td>
            <td>Tunis</td>
            <td>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                Modifier
              </button>

              <div
                class="modal fade bd-example-modal-lg"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">Form </div>
                </div>
              </div>
            </td>

            <td>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target=".bd-example-modal-lg1"
              >
                Supprimer
              </button>

              <div
                className="modal fade bd-example-modal-lg1"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <p>vous êtes sûre ? </p>
                    <div className="buttons">
                      <button className="btn btn-success">Oui</button>
                      <button
                        type="button"
                        class="btn btn-success"
                        data-dismiss="modal"
                      >
                        Close
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VotreProduit;
