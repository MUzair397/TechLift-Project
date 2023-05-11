import React from "react";
import "./style/Footer.css";

function Footer() {
  return (
    <div className=" bg-dark p-5 footer">

      <div className="container m-5">
        <div className="row">
          <div className="col-md-6 text-white">
            <h1>Address</h1>
            <address className="address">
              {" "}
              Allama Iqbal Town,
              <br />
              743, Kashmir Block <br />
              Lahore, Pakistan{" "}
            </address>
            <h1>Phone</h1>
            <address className="address">+92-123-456-789 <br/>
            +92-123-456-789</address>
          </div>
          <div className="col-md-6">
          <h3 className="text-white">Our Location</h3>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13605.202237434643!2d74.287808!3d31.515904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903a24f371795%3A0x74beee8aa43e49d5!2sPNY%20Trainings!5e0!3m2!1sen!2sus!4v1683002813329!5m2!1sen!2sus" width="500" height="350" ></iframe>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
