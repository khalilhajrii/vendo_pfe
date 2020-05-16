import React from "react";
import "./css/VotreDemandes.css";

const VotreDemandes = () => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Description</th>
            <th scope="col">Prix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Im looking for samsung galaxy s 9</td>
            <td>1000 dt</td>

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
                data-target=".bd-example-modal-lg2"
              >
                Supprimer
              </button>

              <div
                className="modal fade bd-example-modal-lg2"
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
            <td>Im looking for samsung galaxy s 9</td>
            <td>1000 dt</td>

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
                data-target=".bd-example-modal-lg2"
              >
                Supprimer
              </button>

              <div
                className="modal fade bd-example-modal-lg2"
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

export default VotreDemandes;
