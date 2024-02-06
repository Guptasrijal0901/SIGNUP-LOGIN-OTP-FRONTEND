import React, { useState } from 'react'
import "./signup.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';

export const Signup = () => {
  const navigate = useNavigate(); 
  const [userEMAIL, setuserEMAIL] = useState("");
  const [userNAME, setuserNAME] = useState("");
  const [userPASSWORD, setuserPASSWORD] = useState("");
  const [userDOB, setuserDOB] = useState("");
  const [userPHONENUMBER, setuserPHONENUMBER] = useState(null);
  const [userOCCUPATION, setuserOCCUPATION] = useState("");

  const handleRegister = async ()=>{
    try {
    if (userNAME.trim() === "") return toast.warning("Please enter your name");
    if (userPASSWORD.trim() === "") return toast.warning("Please enter your password");
    if (userEMAIL.trim() === "") return toast.warning("Please enter your email");
    if (userDOB.trim() === "") return toast.warning("Please enter your date");
    if (!userPHONENUMBER) return toast.warning("Please enter your number");
    const response = await axios.post("/signup", {
        userNAME: userNAME,
        userEMAIL: userEMAIL,
        userPASSWORD: userPASSWORD,
        userDOB: userDOB,
        userPHONENUMBER: userPHONENUMBER,
        userOCCUPATION: userOCCUPATION
      })
      if (response.data.success){
        toast.success("Successfully registered")
        navigate("/login")
      }
    } catch (error) {
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
    <div className='header'> Sign Up </div>
  <div className="mb-3">
    <label
    className="form-label">Name</label>
    <input type="text" 
    autocomplete="username"
    className="form-control"
    value={userNAME}
    onChange={(e)=>setuserNAME(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label 
    className="form-label">Email address</label>
    <input type="email" 
    autocomplete="username"
    className="form-control" 
    value={userEMAIL}
    onChange={(e)=>setuserEMAIL(e.target.value)} />
  </div>
  <div className="mb-3">
    <label 
    className="form-label">Password</label>
    <input type="password" 
    className="form-control" 
    autoComplete="current-password"
    value={userPASSWORD}
    onChange={(e)=>setuserPASSWORD(e.target.value)} />
  </div>
  <div className="mb-3">
    <label
    className="form-label">Date of Birth</label>
    <input type="date" 
    className="form-control" 
    value={userDOB}
    onChange={(e)=>setuserDOB(e.target.value)}  />
  </div>
  <div className="mb-3">
    <label
    className="form-label">Phone Number</label>
    <input type="number" 
    className="form-control" 
    value={userPHONENUMBER}
    onChange={(e)=>setuserPHONENUMBER(e.target.value)} />
  </div>
  <div className="mb-3">
    <label
    className="form-label">Occupation</label>
    <input type="text" 
    autocomplete="username"
    className="form-control" 
    value={userOCCUPATION}
    onChange={(e)=>setuserOCCUPATION(e.target.value)}/>
  </div>
  <div className="button-container" >
  <button type='button' 
  className="btn btn-primary" 
  onClick={()=>handleRegister()}>Sign up</button>
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
