import React from 'react'

function ContentSection() {
  return (
    <div className='bg-dark'>
        <div className='container p-5 text-white'>
        <h2 className='text-center mb-5'><i><u>PUSH YOUR LIMITS FORWORD</u></i></h2>
            <div className='row'>
            <div className='col-md-3 text-center'>
            <img className="card-img  card-img-top h-25 w-25" src={require("../assets/images/dumbbell.png")}  alt="Card image cap" />
            <h5 className='m-3'>Modern Equipments</h5>
            <p className='lead'>What Does Lorem Ipsum Mean? </p>
            </div>
            <div className='col-md-3 text-center'>
            <img className="card-img  card-img-top h-25 w-25" src={require("../assets/images/dumbbell.png")} alt="Card image cap" />
            <h5 className='m-3'>Healthy Diet Plans</h5>
            <p className='lead'>What Does Lorem Ipsum Mean? </p>
            </div>
            <div className='col-md-3 text-center'>
            <img className="card-img  card-img-top h-25 w-25" src={require("../assets/images/dumbbell.png")} alt="Card image cap" />
            <h5 className='m-3'>Professional Training Plans</h5>
            <p className='lead'>What Does Lorem Ipsum Mean? </p>
            </div>
            <div className='col-md-3 text-center'>
            <img className="card-img  card-img-top h-25 w-25" src={require("../assets/images/dumbbell.png")}  alt="Card image cap" />
            <h5 className='m-3'>Be Strong</h5>
            <p className='lead'>What Does Lorem Ipsum Mean? </p>
            </div>
            </div>
        </div>
        </div>
  )
}

export default ContentSection