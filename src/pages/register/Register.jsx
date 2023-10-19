import React, { useState } from "react";
import "./register.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export default function Register() {
  const [show, setShow] = useState(false);
  const handlePassword = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="register">
        <div className="register-wrapper">
          <h1 className="register-title">Sign up</h1>
          <span className="register-desc gradient-text">
            Welcome to FreeMind - Connect with friends and the world around you
            on FreeMind
          </span>

          <div className="form-group">
            <input type="text" required />
            <p className="gradient-text">User name</p>
            <span>
              <i />
            </span>
          </div>

          <div className="form-group">
            <input type="text" required />
            <p className="gradient-text">Email/Phone number</p>
            <span>
              <i />
            </span>
          </div>

          <div className="form-group">
            <input type={show ? "text" : "password"} required />
            <p className="gradient-text">Password</p>
            <span>
              <i />
            </span>
            <div className="toggle-password" onClick={handlePassword}>
              {show ? (
                <BsEye size={15} color="#e47aeb" />
              ) : (
                <BsEyeSlash size={15} color="#e47aeb" />
              )}
            </div>
          </div>

          <div className="form-group">
            <input type={show ? "text" : "password"} required />
            <p className="gradient-text"> Comfirm Password</p>
            <span>
              <i />
            </span>
            <div className="toggle-password" onClick={handlePassword}>
              {show ? (
                <BsEye size={15} color="#e47aeb" />
              ) : (
                <BsEyeSlash size={15} color="#e47aeb" />
              )}
            </div>
          </div>

          <button className="btn btn-register">Sign Up</button>
          <a className="forgetpassword gradient-text" href="#">Already have account</a>
        </div>
      </div>
    </div>
  );
}
