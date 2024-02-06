import React, { useState } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from 'axios';

export const Login = () => {
  const navigate = useNavigate(); 
  // const [isOtpsend, setisOtpsend] = useState(false);
  const [userEMAIL, setuserEMAIL] = useState("");
  const [userPASSWORD, setuserPASSWORD] = useState("");

  const handlelogin = async()=>{
    try {
      if (userEMAIL.trim() === "") return toast.warning("Please enter your email");
      if (userPASSWORD.trim() === "") return toast.warning("Please enter your password");
      const response = await axios.post("/login", {
        userEMAIL : userEMAIL,
        userPASSWORD: userPASSWORD
      })
      if(response.data.success){
        toast.success(response.data.message);
        navigate("/code")
      }
    } catch (error) {
      console.log(error);
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        toast.error(error.response.data.error);
      }
    }
  }
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
    <label className="form-label">Email address</label>
    <input 
    type="email" 
    className="form-control"
    value={userEMAIL}
    onChange={(e)=> setuserEMAIL(e.target.value)} />
    <div className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input 
    type="password" 
    className="form-control"
    autoComplete="current-password"
    value={userPASSWORD}
    onChange={(e)=> setuserPASSWORD(e.target.value)} />
  </div>
  <div className="button-container" >
  <button type="button" 
  className="btn btn-primary"
  onClick={()=> handlelogin()}>Login</button>
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