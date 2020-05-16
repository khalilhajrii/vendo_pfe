import React from "react";
import "./css/Productdetails.css";
import NavBar from "../sharedcomponents/NavBar";
import Footer from "../sharedcomponents/Footer";

const Productdetails = () => {
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

            {/*Description et partie des commentaires*/}

            <h2 className="mb-5">Description</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              nemo reiciendis quisquam a quis delectus consectetur ipsa eligendi
              aliquam earum in vitae voluptate ratione fugiat similique nostrum
              debitis dolor, ipsam quo officiis quas necessitatibus? Magnam
              eveniet iure, eligendi est ullam consectetur repellat quis
              doloremque ad perspiciatis assumenda ducimus distinctio quaerat
              sit repudiandae illo praesentium modi dolor. Veritatis aperiam,
              minima natus assumenda ipsum voluptatem reprehenderit? Possimus
              nobis, voluptate, blanditiis, temporibus ad nostrum corrupti quos
              corporis voluptas tempora aliquid magnam quia voluptatem rerum
              odit fugiat facere necessitatibus adipisci sunt. Veritatis
              architecto, perferendis labore sit nobis eaque perspiciatis et
              iusto, in doloribus est!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vel
              reiciendis voluptatibus assumenda tempora vitae aut adipisci
              harum, corporis in id perferendis quia repellat reprehenderit
              temporibus aspernatur ab ullam magni error consectetur, facilis
              inventore ipsum, veniam voluptas. Error laboriosam atque quisquam
              facere esse repellat consectetur quos eum, quaerat blanditiis
              saepe?
            </p>

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
                <button className="btn btn-lg btn-primary">Commenter</button>
              </form>
              <ol className="list-unstyled last-questions-list">
                <li>
                  <i className="fa fa-comment" />{" "}
                  <span>Hello david, can i pay with credit card?</span>
                </li>
                <li>
                  <i className="fa fa-comment" />{" "}
                  <span>can i send it to another address?</span>
                </li>
              </ol>
            </div>
          </div>
          <div className="product-payment-details">
            <h4 className="product-title mb-2">Iphone 7 </h4>
            <h2 className="product-price display-4">700 DT</h2>
            <h4 className="product-title mb-2">Catégorie: Téléphone </h4>

            <p className="mb-0">
              <i className="fa fa-map" /> Tunis
            </p>
            <button className="btn btn-primary btn-lg btn-block">
              Contacter
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Productdetails;
