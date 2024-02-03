import React from 'react'
import "./code.css"
import { useNavigate } from 'react-router-dom';

export const Code = () => {
  const navigate = useNavigate(); 
  return (
    <div>
    <div className='mainbody'>
    <div className="row g-3 align-items-center">
    <p> Enter OTP sent to your Phone Number </p>
  <div className="col-auto">
    <label htmlFor="inputOTP" className="col-form-label">OTP</label>
  </div>
  <div className="col-auto">
    <input type="Number" id="inputOTP" className="form-control" />
  </div>
  <div>
  <button type="submit" className="btn btn-primary"
  onClick={()=> navigate("/Private")}>Submit</button></div>
  </div>
</div>
</div>
  )
}
export default Code;