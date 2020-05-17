import React from "react";
import "./css/Productdetails.css";
import NavBar from "../sharedcomponents/NavBar";
import Footer from "../sharedcomponents/Footer";
import { useEffect } from "react";
import { useState } from "react";

const Productdetails = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("/produit")
      .then((response) => response.json())
      .then((data) => setproducts(data));
  }, []);
  console.log(products);
  return (
    <div>
      <NavBar />
      <img src="/images/produit.jpg" alt="background" className="logpic" />

      <div className="content10">
        <div className="card-body store-body">
          <div className="product-info">
            <div className="product-gallery">
              <div className="product-gallery-thumbnails">
                <ol className="thumbnails-list list-unstyled">
                  <li>
                    <img
                      src="https://cdn.vox-cdn.com/thumbor/E8c5U6A_RrsyiwRANmcCLNE2dzc=/0x0:2040x1360/1400x933/filters:focal(860x560:1186x886):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/55855309/akrales_190913_3628_0277.19.jpg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.popsci.com/resizer/6iA2dK-qrizE_TrGloIM5mYz5Mw=/760x570/filters:focal(600x450:601x451)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/VYHDQWEYQJMUBJTKNV4MMC5KMU.jpg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MRXK2_AV5_GEO_GB?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1549066044881"
                      alt=""
                    />
                  </li>
                </ol>
              </div>
              <div className="product-gallery-featured">
                <img
                  src="https://cdn.vox-cdn.com/thumbor/E8c5U6A_RrsyiwRANmcCLNE2dzc=/0x0:2040x1360/1400x933/filters:focal(860x560:1186x886):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/55855309/akrales_190913_3628_0277.19.jpg"
                  alt=""
                  className="img-produit"
                />
              </div>
            </div>
            {products.slice(0, 1).map(
              (product) =>
                product.Categorie == "test" && (
                  <div>
                    <h2 className="mb-5">Description</h2>
                    <p>{product.Description}</p>
                    <div className="product-comments">
                      <form action className="form-inline mb-5">
                        <textarea
                          name
                          id
                          cols={50}
                          rows={2}
                          className="form-control mr-4"
                          placeholder="Ecrire un commentaire..."
                          defaultValue={""}
                        />
                        <button className="btn btn-lg btn-primary">
                          Commenter
                        </button>
                      </form>
                      <ol className="list-unstyled last-questions-list">
                        {product.commentaires.map((comment) => (
                          <li>
                            <i className="fa fa-comment" />{" "}
                            <span>
                              {comment.Nom}: {comment.Description}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="product-payment-details">
                      <h4 className="product-title mb-2">{product.Nom_produit}</h4>
                      <h2 className="product-price display-4">{product.Prix} DT</h2>
                      <h4 className="product-title mb-2">
                        Catégorie: {product.Categorie}{" "}
                      </h4>

                      <p className="mb-0">
                        <i className="fa fa-map" /> {product.Emplacement}
                      </p>
                      <button className="btn btn-primary btn-lg btn-block">
                        Contacter
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Productdetails;
