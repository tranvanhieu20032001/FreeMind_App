import React, { useState } from "react";
import './login.css'
import { BsEye, BsEyeSlash } from "react-icons/bs";

export default function Login() {
    const [show, setShow] = useState(false)
    const handlePassword = () =>{
        setShow(!show)
    }

  return (
    <div>
      <div className="login">
        <div className="login-wrapper">
          <h1 className="login-title">Login</h1>
          <span className="login-desc gradient-text">Welcome to FreeMind - Connect with friends and the world around you on FreeMind</span>

          <div className="form-group">
            <input type="text" required />
            <p className="gradient-text">Email/Phone number</p>
            <span><i/></span>
          </div>

          <div className="form-group">
            <input type={show?'text':'password'} required />
            <p className="gradient-text">Password</p>
            <span><i/></span>
            <div className="toggle-password" onClick={handlePassword}>
               {show?<BsEye size={15} color="#e47aeb"/>: <BsEyeSlash size={15} color="#e47aeb"/>}
            </div>
          </div>

          <button className="btn btn-login">Login</button>
        <a className="forgetpassword gradient-text" href="#">Forget Password</a>
        <hr/>
        <button className="btn btn-login">Create new Acount</button>

        </div>
      </div>
    </div>
  );
}
