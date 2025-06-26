import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Navbar() {

  const [colors,setcolors]=useState('white')

  const Changecolor=()=>{
    if(colors==='white')
    {
      setcolors('black');
    }
    else
    {
      setcolors('white')
    }
  }
   useEffect(() => {
    document.body.style.backgroundColor = colors === 'white' ? 'white' : 'black';
    document.body.style.color = colors === 'black' ? 'black' : 'black';
  }, [colors]);
  return (
        <nav className="navbar navbar-expand-lg bg-body-secondary ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Alpesh Page</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Options
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="https://www.linkedin.com/in/alpesh-chandankhede-623927238/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a className="dropdown-item" href="https://github.com/Alpeshdev-git" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </li>
      </ul>
      <div className="form-check form-switch my-1 mx-3">
            <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch"  onChange={Changecolor}/>
            <label className="form-check-label" htmlFor="checkNativeSwitch">
             {colors==='white'?'LightMode':'DarkMode'}
            </label>
            </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

       
