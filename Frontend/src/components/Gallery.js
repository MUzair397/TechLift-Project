import React from "react";
import "./style/Gallery.css";

function Gallery() {
  return (
    <div className="background">
      <div className="container p-5 mt-5 ">
        <h3>Our PortFolio</h3>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mt-4 border-0 bg-color">
              <img
                className="card-image card-img-top"
                src={require("../assets/images/10.jpg")}
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mt-4 border-0 bg-color">
              <img
                className="card-image card-img-top"
                src={require("../assets/images/14.jpg")}
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mt-4 border-0 bg-color">
              <img
                className="card-image card-img-top"
                src={require("../assets/images/15.jpg")}
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mt-4 border-0 bg-color">
              <img
                className="card-image card-img-top"
                src={require("../assets/images/16.jpg")}
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mt-4 border-0 bg-color">
              <img
                className="card-image card-img-top"
                src={require("../assets/images/17.jpg")}
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mt-4 border-0 bg-color">
              <img
                className="card-image card-img-top"
                src={require("../assets/images/18.jpg")}
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mt-4 border-0 bg-color">
              <img
                className="card-image card-img-top"
                src={require("../assets/images/19.jpg")}
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mt-4 border-0 bg-color">
              <img
                className="card-image card-img-top"
                src={require("../assets/images/20.jpg")}
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mt-4 border-0 bg-color">
              <img
                className="card-image card-img-top"
                src={require("../assets/images/11.jpg")}
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
