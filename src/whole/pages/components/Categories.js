import React from "react";
import "./css/Categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <h2>Categories</h2>

      <div className="content1">
        <div></div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body ">
            <h5 class="card-title">Ordinateurs</h5>
            <a href="heyy" class="btn btn-primary">
              Voir plus
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 class="card-title">Telephones</h5>
            <a href="heyyy" class="btn btn-primary">
              Voir plus
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 class="card-title">Matriel PC</h5>
            <a href="heyyy" class="btn btn-primary">
              Voir plus
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 class="card-title">Cameras</h5>
            <a href="heyyy" class="btn btn-primary">
              Voir plus
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 class="card-title">Electromenager</h5>
            <a href="heyyy" class="btn btn-primary">
              Voir plus
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 class="card-title">Tabletes</h5>
            <a href="heyyy" class="btn btn-primary">
              Voir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
