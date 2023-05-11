import React, { useState } from "react";
import "./style/Contact.css";

function Contact() {
  //for input fields after submit
  const empty = {
    name: "",
    email: "",
    textarea: "",
  };

  const [handle, setHandle] = useState(empty);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };

  const createContatData = async () => {
    const record = await fetch("http://127.0.0.1:5000/createcontactdata", {
      method: "POST",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(handle),
    });
    record.save();
    setHandle(empty);
  };

  return (
    <div className="contact w-100 h-100">
      <div className="container">
        <form
          className="form-control border-0 bg-transparent"
          onSubmit={createContatData}
        >
          <div className="row p-4">
            <div className="col-md-6 text">
              <h2 className="text-white mb-3">
                <u>Where does it come from?</u>
              </h2>
              <p className="text-white lead">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit..." "There is no one who loves pain
                itself, who seeks after it and wants to have it, simply because
                it is pain..."
                <br />
                </p> 
                <p className="text-white lead">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit..." "There is no one who loves pain
                itself, who seeks after it and wants to have it, simply because
                it is pain..."
                
              </p>
            </div>
            <div className="col-md-6">
              <div>
                <h2 className="text-white">
                  <u>
                    <i>Contact Us:</i>
                  </u>
                </h2>
                <input
                  type="text"
                  name="name"
                  className="px-4 form-control bg-dark text-white border-0 input-fields my-3"
                  value={handle.name}
                  onChange={inputHandler}
                  required
                  placeholder="Full Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={handle.email}
                  onChange={inputHandler}
                  required
                  className="px-4 form-control bg-dark text-white border-0 input-fields mb-3"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <textarea
                  type="text"
                  rows={5}
                  name="textarea"
                  value={handle.textarea}
                  onChange={inputHandler}
                  required
                  className="px-4 form-control bg-dark text-white border-0 textarea"
                  placeholder="Enter Your Message..."
                />
              </div>

              <div className="text-right">
                <button className="btn btn-success mt-2">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
