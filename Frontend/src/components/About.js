import React from "react";
import "../components/style/About.css";
import aboutimage from "../assets/images/image1.jpg";

function About() {
  return (
    <div className="about">
    <div className="container p-5">
      <div className="mt-5 row">
        <div className="col-md-6 col-lg-6 col-sm-12 text-white left">
          <h1 className="heading text-danger">About Us</h1>
          <p className="lead mt-3">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown <br/> <br/> typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.<br/> <br/> It usually begins with:
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”<br/> <br/> The
            purpose of lorem ipsum is to create a natural looking block of text
            (sentence, paragraph, page, etc.) <br/> <br/> that doesn't distract from the
            layout. A practice not without controversy, laying out pages with
            meaningless filler text can be very useful when the focus is meant
            to be on design, not content. The passage experienced a surge in
            popularity during the 1960s when Letraset used it on their
            dry-transfer sheets, and again during the 90s as desktop publishers
            bundled the text with their software.
          </p>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
        <img className="w-100 image" src={aboutimage}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
