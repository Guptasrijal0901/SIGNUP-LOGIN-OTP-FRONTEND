import React, { useEffect, useState } from "react";
import "./private.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Private = () => {

  const navigate = useNavigate();
  const [userdata, setuserdata] = useState(null);

  const getuserdata = async ()=>{
    try {
      const response = await axios.get("/privatetuser")
      if(response.data.success){
        setuserdata(response.data.data)
      }
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Session timed out! Login again");
        navigate("/login");
      } else if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        toast.error(error.response.data.error);
      }
      else {
        toast.error("An unexpected error occurred");
      }
    }
  }
  const handlelogout = async ()=>{
    try {
      const response = await axios.get("/logout");
      if(response.data.success){
        toast.success("You were logged out successfully!")
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
      else {
        toast.error("An unexpected error occurred");
      }
    }
  }
  useEffect(() => {
    getuserdata();
  }, []);
  if (userdata)
  return (
    <div>
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
          <a className="nav-link active" href="/" 
          onClick={() => handlelogout()}> Logout </a>
        </div>
      </div>
    </div>
  </nav>
    <div className='profile'>
    <h1>Welcome {userdata.userNAME};</h1>
    <p>userEMAIL: {userdata.userEmail}</p>
    <p>userNAME: {userdata.userNAME}</p>
    <p>userPHONENUMBER: {userdata.userPHONENUMBER}</p>
    <div className="button-container" >
    <button type="button" 
    className="btn btn-primary"
    onClick={()=> handlelogout()}>Logout</button>
    </div>
    </div>
    </div>
  )
}

export default Private;