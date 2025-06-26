import React, { useState } from 'react'
import "./Login.css"
import image from "../Images/plant.jpg"
export default function Login() {

  const [email,setEmail]=useState('')

  const [password,setpassword]=useState('')
  const url='http://localhost:8000/api/register'

  const handlsubmit=async (e)=>{
               e.preventDefault()

               const res=await fetch(url,{
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ email, password }),
               })
            if (email.trim() === '' || password.trim() === '') {
              alert("Email and password cannot be empty.");
              return;
            }
               const data=await res.text()
               alert(data)
  }
  return (
   <div className="container-fluid fullscreen-container my-3">
        <div className="containerpage ">
        <div className="row g-0 h-100 ">
        
                    <div className="col-lg-6 p-0">
                      <form onSubmit={handlsubmit}>
                                <div className="login-container p-5">
                                  <h2 className="Mainheading my-2 mx-3">Welcome Back!</h2>
                                  <h4 className="Inerheading my-4 mx-3">
                                    Enter login credentials to access your account
                                  </h4>

                                  <h5 className="Emailheading mx-3">Email address</h5>
                                  <input
                                    className="form-control custom-width mx-3 my-0 mb-3"
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                  />

                                  <div className="row align-items-center mx-1 my2">
                                    <div className="col-6">
                                      <h5 className="Passwordheading my-1 mt-4">Password</h5>
                                    </div>
                                    <div className="col-6 text-end">
                                      <p className="forgetpassword mt-4 mb-0 mx-4">Forget Password?</p>
                                    </div>
                                  </div>

                                  <input
                                    className="form-control custom-width mx-3 my-0 mb-3"
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e)=>setpassword(e.target.value)}
                                  />

                                  <div className="form-check d-flex align-items-center mx-3 mb-4">
                                    <input
                                      className="form-check-input m-0"
                                      type="checkbox"
                                      id="rememberCheckbox"
                                    />
                                    <label className="form-check-label ms-2" htmlFor="rememberCheckbox">
                                      Remember for 30 days
                                    </label>
                                  </div>

                                  <button
                                    className="btn btn-primary login-btn custom-width mx-5 mb-3"
                                    type="submit"
                                  >
                                    Login
                                  </button>

                                  <div className="row gx-2 px-2">
                                    <div className="googleapp col-6 my-3 d-flex justify-content-center align-items-center">
                                      <i className="fa-brands fa-google me-2"></i>
                                      <span>Sign in with Google</span>
                                    </div>
                                    <div className="googleapp col-6 my-3 d-flex justify-content-center align-items-center">
                                      <i className="fa-brands fa-apple me-2"></i>
                                      <span>Sign in with Apple</span>
                                    </div>
                                  </div>

                                  <p className="mx-3">
                                    Don’t have an account?
                                    <span className="sineup ms-2">Sign Up</span>
                                  </p>
                                </div>
                              </form>
                      </div>
    
                <div className="col-lg-6  p-0">
                        <div className="image-wrapper">
                <img src={image} alt="..." className="img-fluid" />
                </div>
            
        </div>
        
      </div>
        </div>
       
    </div>
  )
}
