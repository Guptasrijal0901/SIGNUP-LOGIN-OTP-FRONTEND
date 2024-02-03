import React from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom';

export const Login = () => {
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
    <div className='header'> Login </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" />
  </div>
  <div className="button-container" >
  <button type="submit" 
  className="btn btn-primary"
  onClick={()=> navigate("/Code")}>Login</button>
  </div>
</form>
<br></br>
<div>
  <h6> New User? 
  <span className='loginspan'
  onClick={()=> navigate("/Signup")}> <p>
  Sign up</p>
  </span></h6></div>
  </div>

</>
  )
}
export default Login;