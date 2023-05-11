import React, { useState, useEffect } from "react";
import "./style/AddExerciseForm.css";
import { Link, useNavigate } from "react-router-dom";

function AddExerciseForm(props) {
  const {
    data = [],
    getApi = () => {},
    inputHandler = () => {},
    createApi = () => {},
    deleteData = () => {},
    fetchApi = () => {},
    handle = {},
  } = props;
  const navigate = useNavigate();

  const [sessionData,getSessionData] = useState(null);
  const getSession = () => {
    getSessionData(sessionStorage.getItem("userId"));
    getSessionData(sessionStorage.getItem("userEmail"));
  };

  useEffect(() => {
    fetchApi()
    getSession()
  });

  return (
    <>
    {sessionData===null?(navigate("/login")):(
      <div className="main-form p-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createApi();
          }}
          className=" container w-25  bg-transparentform-control text-center my-5 border-0"
        >
          <h1 className="mt-5 text-white">Add Exercise</h1>
          <hr id="hr" />
          <div className="com-md-6">
            <input
              type="text"
              value={handle.name}
              name="name"
              onChange={inputHandler}
              required
              className="p-2 form-control text-center bg-dark text-white border-0 input-fields"
              placeholder="Enter Exercise Name"
            />
            <br />
            <br />
            <input
              type="text"
              value={handle.duration}
              name="duration"
              onChange={inputHandler}
              required
              className="p-2 form-control text-center bg-dark text-white border-0 input-fields"
              placeholder="Enter Duration"
            />
            <br />
            <br />
            <input
              type="date"
              value={handle.date}
              name="date"
              onChange={inputHandler}
              required
              className="p-2 form-control text-center bg-dark text-white border-0 input-fields"
              placeholder="Enter Your City"
            />
            <br />
            <br />
            <button className="p-2  btn btn-success border-0 form-control text-white">
              Add Exercise
            </button>
          </div>
        </form>

        <table className="container">
          <div className="row">
            {data.map((item) => (
              <div className=" bg-dark border table p-3 col-sm-12 col-md-6 col-lg-4">
                <h1 className="text-left text-white">Record</h1>
                <hr id="hr" />
                <tr>
                  <th className="text-white">Exercise Name</th>
                  <td className="text-white">{item.name}</td>
                </tr>
                <tr>
                  <th className="text-white">Exercise Duration</th>
                  <td className="text-white">{item.duration}</td>
                </tr>
                <tr>
                  <th className="text-white">Exercise date</th>
                  <td className="text-white">{item.date}</td>
                </tr>
                <button onClick={() => deleteData(item._id)} className="btn btn-danger">Delete</button>
                <Link to="/update"><button onClick={()=>getApi(item._id)} className="btn btn-success">Edit</button></Link>to
              </div>
            ))}
          </div>
        </table>
      </div>
      )}
    </>
  );
}

export default AddExerciseForm;
