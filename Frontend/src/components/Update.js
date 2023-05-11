import React from "react";
import { useNavigate } from 'react-router-dom';

function Update(props) {

  const {updateApi, handle = {},inputHandler = () => {},}=props;
  const navigate = useNavigate();

  return (
    <div>
      <div className="main-form p-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/create")
          }}
          className=" container w-25  bg-transparentform-control text-center my-5 border-0"
        >
          <h1 className="mt-5 text-white">Update Record</h1>
          <hr id="hr" />
          <div className="com-md-6">
            <input
              type="text"
              name="name"
              value={handle.name}
              onChange={inputHandler}
              className="p-2 form-control text-center bg-dark text-white border-0 input-fields"
              placeholder="Enter Exercise Name"
            />
            <br />
            <br />
            <input
              type="text"
              name="duration"
              value={handle.duration}
              onChange={inputHandler}
              className="p-2 form-control text-center bg-dark text-white border-0 input-fields"
              placeholder="Enter Duration"
            />
            <br />
            <br />
            <input
              type="date"
              name="date"
              value={handle.date}
              onChange={inputHandler}
              className="p-2 form-control text-center bg-dark text-white border-0 input-fields"
              placeholder="Enter Your City"
            />
            <br />
            <br />
            <button onClick={updateApi} className="p-2  btn btn-success border-0 form-control text-white">
              Update Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
