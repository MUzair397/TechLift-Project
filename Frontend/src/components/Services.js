import React from "react";
import './style/Services.css'

function Services() {
  return (
    <div className="about p-5">
    <div className="container p-5">
        <div className="mt-3 row">
          <div className="col-md-6 col-lg-6 col-sm-12 text-white service-text">
            <h1>Services</h1>
            <p className="lead mt-3">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown <br /> <br /> typesetter in the 15th
              century who is thought to have scrambled parts of Cicero's De
              Finibus Bonorum et Malorum for use in a type specimen book.
              <br /> <br /> It usually begins with: “Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.”
            </p>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <img
              className="w-100 img"
              src={require("../assets/images/12.jpg")}
            />
          </div>
        </div>
        <div className=" mt-5 row">
        <div className="col-md-6 col-lg-6 col-sm-12">
            <img
              className="w-100 img"
              src={require("../assets/images/15.jpg")}
            />
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 text-white service-text">
            <h1>Services</h1>
            <p className="lead mt-3">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown <br /> <br /> typesetter in the 15th
              century who is thought to have scrambled parts of Cicero's De
              Finibus Bonorum et Malorum for use in a type specimen book.
              <br /> <br /> It usually begins with: “Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.”
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Services;
