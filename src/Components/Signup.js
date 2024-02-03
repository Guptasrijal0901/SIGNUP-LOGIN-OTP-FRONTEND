import React from 'react'
import "./signup.css"
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const navigate = useNavigate(); 
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Authentication App </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav my-2 my-sm-0">
          <a className="nav-link active" href="/" > Home </a>
          <a className="nav-link active" href="/Signup" > Signup </a>
          <a className="nav-link active" href="/Login" > Login </a>
        </div>
      </div>
    </div>
  </nav>
  <div className='main'>
    <form>
    <div className='header'> Sign Up </div>
  <div className="mb-3">
    <label htmlFor="exampleInputName" 
    className="form-label">Name</label>
    <input type="text" 
    className="form-control" 
    id="exampleInputName" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail" 
    className="form-label">Email address</label>
    <input type="text" 
    className="form-control" 
    id="exampleInputEmail" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword" 
    className="form-label">Password</label>
    <input type="password" 
    className="form-control" 
    id="exampleInputPassword" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputUserName" 
    className="form-label">User Name</label>
    <input type="text" 
    className="form-control" 
    id="exampleInputUserName"  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputDOB" 
    className="form-label">Date of Birth</label>
    <input type="date" 
    className="form-control" 
    id="exampleInputDOB"  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPhoneNumber" 
    className="form-label">Phone Number</label>
    <input type="number" 
    className="form-control" 
    id="exampleInputPhoneNumber" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputOccupation" 
    className="form-label">Occupation</label>
    <input type="text" 
    className="form-control" 
    id="exampleInputOccupation" />
  </div>
  <div className="button-container" >
  <button type="submit" 
  className="btn btn-primary"
  onClick={()=> navigate("/Login")}>Sign up</button>
  </div>
  <div>
  <h6> Already have account ? 
  <span className='loginspan'
  onClick={()=> navigate("/Login")}> <p>
  Login</p>
  </span></h6></div>
</form>
</div>
</>
  )
}
export default Signup;
