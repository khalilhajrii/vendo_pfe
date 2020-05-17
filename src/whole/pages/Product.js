import React, { Component, useState, useEffect } from "react";
import "./css/Product.css";
import NavBar from "../sharedcomponents/NavBar";
import Footer from ".././sharedcomponents/Footer";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("/produit")
      .then((response) => response.json())
      .then((data) => setproducts(data));
  }, []);

  const update = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  const displayLogin = (e) => {
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
  };

  const filterbyproduct = (name) => {
    return name._id
  }

  return (
    <div className="tout">
      <NavBar />
      <img src="/images/produit.jpg" alt="background" className="logpic" />
      <div className="maincontainer">
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
        >
          Ajouter un produit
        </button>
        {products.map((product) => (
          <div className="subcontainer">
            <div className="produit">
              <div className="image">
                <img
                  src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/144018-phones-review-review-huawei-p20-pro-review-2018-image1-sr0lwmedsp.jpg"
                  alt="produit"
                ></img>
                <div className="name">{product.Nom_produit}</div>
                <div className="desc">
                  {product.Description}
                </div>
                <div className="buttons">
                  <Link to='/details'>
                    <button
                    id={product}
                      className="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                      onClick={() => filterbyproduct(product)}
                    >
                      Voir plus
                    </button>{" "}
                    </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Product;
