import React from 'react'
import './style/RegistrationForm.css'
import { useState  } from 'react'
import { useNavigate } from 'react-router-dom'

function RegistrationForm() {

  const navigate = useNavigate()
  //for input fields after submit
  const empty = {
    name:"",
    email:"",
    phone:"",
    password:"",
    city:""
  }
  const [handle, setHandle]=useState(empty)

//for creating api
const createapi=async()=>{
  if(handle.name===""||handle.email===""||handle.password==="")
  {
      alert("Please Enter the Input Fields First")
  }else{
      let record= await fetch("http://localhost:5000/signup",{
          method:"POST",
          headers:{
              "content-Type": "application/json",
             },
             body:JSON.stringify(handle)
      })
      record= await record.json()
      if(record==="Email Already Exist")
      {
          alert("Email Already Exist")
      }else{
          alert("User Created Successfully")
          navigate("/login")

      }
  }
}

//for handling input fields
  const handler=(e)=>{
    const {name,value}=e.target;
    setHandle ({...handle,[name]:value})
    console.log(handle)
  }
  return (
    <div className='reg-form p-5'>
        <form onSubmit={(e)=>{
          e.preventDefault()
          createapi();
          }}  className=' container w-25  bg-transparentform-control text-center my-5 border-0'>
            <h1 className='mt-5 text-white'>Register User</h1>
            <hr id='hr'/>
            <div className='com-md-6'>
            <input type='text' value={handle.name} name='name' onChange={handler} required className='p-2 form-control text-center bg-dark text-white border-0 inputs' placeholder='Enter Your Name'/>
            <br/>
            <br/>
            <input type='email' value={handle.email} name='email' onChange={handler} required className='p-2 form-control text-center bg-dark text-white border-0 inputs' placeholder='Enter Your Email'/>
            <br/>
            <br/>
            <input type='number' value={handle.phone} name='phone' onChange={handler} required className='p-2 form-control text-center bg-dark text-white border-0 inputs' placeholder='Enter Your Phome'/>
            <br/>
            <br/>
            <input type='password' value={handle.password} onChange={handler} name='password' required className='p-2 form-control text-center bg-dark text-white border-0 inputs' placeholder='Enter Your Password'/>
            <br/>
            <br/>
            <input type='text' value={handle.city} onChange={handler} name='city' required className='p-2 form-control text-center bg-dark text-white border-0 inputs' placeholder='Enter Your City'/>
            <br/>
            <br/>
            <button className= 'p-2  btn btn-success border-0 form-control text-white'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default RegistrationForm