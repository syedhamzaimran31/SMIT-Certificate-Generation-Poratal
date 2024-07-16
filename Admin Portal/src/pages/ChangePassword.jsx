import React, { memo, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/logo.png";
import "../index.css";

function Newpass() {
  const [newPassorwdGet, setNewPasswordGet] = useState("");
  const [confirmPassorwdGet, setConfirmPasswordGet] = useState("");
  const navigate = useNavigate()
  let changePassword = async () => {
    try {
      if (!newPassorwdGet && !confirmPassorwdGet) {
        return alert("something went wrong")
      }
      if (newPassorwdGet !== confirmPassorwdGet) {
        return alert("Invalid Password")
      }
      const response = await axios.post('http://localhost:8003/updatepass', {
        id: "668822b984d1ef6732e207bb",
        newpassword: newPassorwdGet
      });
      if (response.data.status === 200) {
        navigate("/home")
      }
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <>
    <div className='container ' >
      <div className="row p-3 py-5 d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
        <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="d-flex justify-content-center">
        <img src={logo} alt="" width={160} className="img-fluid mb-4" />
        </div>
        <p className="text-start fw-semibold">Change Your Password</p>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control custom-width"
            id="newPassword"
            placeholder="New password *"
            style={{ boxShadow: "none", outline: "none" }}
            onChange={(e) => { setNewPasswordGet(e.target.value) }}
          />
          <label htmlFor="newPassword">New Password</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="password"
            className="form-control custom-width"
            id="confirmPassword"
            placeholder="Confirm password *"
            style={{ boxShadow: "none", outline: "none" }}
            onChange={(e) => { setConfirmPasswordGet(e.target.value) }}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
        <div className="w-100">
          <button className='btn btn-primary w-100 fw-bold text-capitalize' style={{ boxShadow: "none", outline: "none" }} onClick={changePassword} >Continue</button>
        </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default memo(Newpass)