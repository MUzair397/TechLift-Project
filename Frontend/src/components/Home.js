import React from "react";
import "./style/Home.css";
import Contact from "./Contact";
import Notification from './Notification'
import ContentSection from "./ContentSection";

function Home() {
  return (
    <div className="home">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 carocel-image"
              src={require("../assets/images/3.jpg")}
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block shadow rounded carocell">
              <h5>Work Out</h5>
              <p>Don’t limit your challenges. Challenge your limits....</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carocel-image"
              src={require("../assets/images/12.jpg")}
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block shadow rounded carocell">
              <h5>Biceps</h5>
              <p>Strength does not come from physical capacity....</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carocel-image"
              src={require("../assets/images/7.jpg")}
              alt="Third slide"
            />
            <div className="carousel-caption d-none d-md-block shadow rounded carocell">
              <h5>Boxing</h5>
              <p>If you want something you've never had, you must be willing to do something you've never done....</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <ContentSection/>
      <Notification/>
      <Contact/>
    </div>
  );
}

export default Home;
