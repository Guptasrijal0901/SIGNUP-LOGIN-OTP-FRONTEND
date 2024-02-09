import React from 'react'
import "./code.css"
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useState } from "react";
import axios from 'axios';

export const Code = () => {
  const navigate = useNavigate(); 
  const [isOtpsend, setisOtpsend] = useState(false);
  const [code, setcode] = useState(null);

  const handleOtpverify = async () =>{
    try {
      const response = await axios.post("/mfaverify", {
      code: code,
      })
      if(response.data.success){
        // verify otp 
        setisOtpsend(true) // Set isOtpsend to true before navigating
        toast.success("Welcome to your profile")
        navigate("/privatetuser") 
      }
      else {
        toast.error(response.data.error); // Show error message from server response
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
    <div>
    <div className='mainbody'>
    <div className="row g-3 align-items-center">
    <p> Enter OTP sent to your Phone Number </p>
  <div className="col-auto">
    <label htmlFor="inputOTP" className="col-form-label">OTP</label>
  </div>
  <div className="col-auto">
    <input type="text" 
    value={code}
    onChange={(e)=>setcode(e.target.value)}
    className="form-control" />
  </div>
  <div>
  <button type="button" 
  className="btn btn-primary"
  onClick={() => {
    if (isOtpsend) {
      handleOtpverify();
    } else {
      toast.error("OTP not sent. Please go back to login.");
      navigate("/login");
    }
  }}
>
Submit
</button>
</div>
</div>
</div>
</div>
  )
}
export default Code;