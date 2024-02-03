import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Code from './Components/Code';
import Private from './Components/Private';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import React from 'react'

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route  path='/' Component={Home}/>
    <Route  path='/Signup' Component={Signup}/>
    <Route  path='/Login' Component={Login}/>
    <Route  path='/Code' Component={Code}/>
    <Route  path='/Private' Component={Private}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
