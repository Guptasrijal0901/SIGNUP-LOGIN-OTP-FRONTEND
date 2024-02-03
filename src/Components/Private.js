import React from 'react'
import "./private.css"

export const Private = () => {
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
          <a className="nav-link active" href="/" > Logout </a>
        </div>
      </div>
    </div>
  </nav>
    <div className='profile'>
    <h1>This is your Profile
    </h1>
    </div>
    </div>
  )
}

export default Private;