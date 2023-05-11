import React,{useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Home from './components/Home'
import Services from './components/Services'
import Gallery from './components/Gallery'
import AddExerciseForm from './components/AddExerciseForm'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm'
import LogIn from './components/LogIn'
import Update from './components/Update'





function App() {

  const empty = {
    name: "",
    duration: "",
    date: "",
  };
  const [handle, setHandle] = useState(empty);
  const [data, setData] = useState();

  //for handling input fields
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };
  //for creating API
  const createApi = async () => {
    const record = await fetch("http://127.0.0.1:5000/create", {
      method: "POST",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(handle),
    });
    setHandle(empty);
    alert("Record Created")
    record.save();
    
  };

  //for displaying API
  const fetchApi = async () => {
    const value = await fetch("http://localhost:5000/display");
    const data = await value.json();
    setData(data);
  };

  const deleteData = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE",
      });
      if (response.status === 200) {
        fetchApi();
        alert("Record Deleted")
      } else {
        console.log("Failed to delete record");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getApi = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/getting/${id}`);
      const data = await response.json();
      setHandle(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateApi = async () => {
    const response = await fetch(`http://localhost:5000/update/${handle._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(handle),
    });
    if (response.status === 200) {
      fetchApi();
      setHandle(empty);
      alert("Record Updated SuccessFully")
    } else {
      console.log("Failed to update record");
    }
  };
  return (
    <div>
    <Router>
    <Header/>
    <Routes>
    <Route path="/" element=<Home/>/>
    <Route path="/about" element=<About/>/>
    <Route path="/services" element=<Services/>/>
    <Route path="/gallery" element=<Gallery/>/>
    <Route path="/register" element=<RegistrationForm/>/>
    <Route path="/login" element=<LogIn/>/>
    <Route path="/create" element=<AddExerciseForm data={data} handle={handle} inputHandler={inputHandler} createApi={createApi} deleteData={deleteData} fetchApi={fetchApi} getApi={getApi}/>/>
    <Route path="/update" element=<Update updateApi={updateApi} handle={handle} inputHandler={inputHandler}/>/>
    </Routes>
    <Footer/>
    </Router>
    </div>
  )
}

export default App