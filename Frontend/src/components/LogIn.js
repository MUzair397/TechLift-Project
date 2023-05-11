import React, { useState } from 'react'
import './style/LogIn.css'
import { useNavigate } from 'react-router-dom';


function LogIn() {

  const empty = {
    email:"",
    password:""
  }

  //for handling input fields
  const [handle, setHandle] = useState(empty);
  const handler=(e)=>{
    const {name,value}=e.target;
    setHandle ({...handle,[name]:value})
    console.log(handle)
  }

  const navigate = useNavigate();

  //for LogIn api
  const logIn=async()=>{
    if(handle.email===""||handle.password===""){
      alert("Please Enter the Fields First")
    }else{
      let record= await fetch("http://localhost:5000/login",{
        method:"POST",
        headers:{
          "content-Type": "application/json",
         },
         body:JSON.stringify(handle)
      })
      record= await record.json()
      if(record.message==="Login Successfully"){
        // store id in SessionStorage
        sessionStorage.setItem("userId",record.LoginUser._id)
        sessionStorage.setItem("userEmail",record.LoginUser.email)
        alert("Login Successfully")
        navigate("/create")
  
      }else{
        alert("Username and Passwor is invalid")
      }
    }
  }
  return (
    <div className=' form-container p-5'>
        <form className=' container w-25 bg-transparent form-control text-center my-5 border-0' 
          onSubmit={(e)=>{
            e.preventDefault()
            logIn()
          }}>
            <h1 className='mt-5 text-white'>Log In User</h1>
            <hr id='hr'/>
            <input type='email' onChange={handler} name='email' className='text-white p-2 border-0 form-control text-center bg-dark border-0 inputs' placeholder='Enter Your Email Or Phone'/>
            <br/>
            <br/>
            <input type='password' onChange={handler} name='password' className='text-white p-2 border-0 form-control text-center bg-dark border-0 inputs' placeholder='Enter Your Password'/>
            <br/>
            <br/>
            <button className='border-0 p-2 btn btn-success form-control text-white'>Log In</button>
        </form>
    </div>
  )
}

export default LogIn