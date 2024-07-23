import React, { memo, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/logo.png";
import { toast } from 'sonner';
import "../index.css";

function Newpass() {
  const [newPassorwdGet, setNewPasswordGet] = useState("");
  const [confirmPassorwdGet, setConfirmPasswordGet] = useState("");
  const [error, setError] = useState("")
  const navigate = useNavigate()

  let changePassword = async () => {
    try {
      if (!newPassorwdGet && !confirmPassorwdGet) {
        return setError("All fields must be filled!");
      }
      if (newPassorwdGet !== confirmPassorwdGet) {
        return setError("Password must be same!")
      }
      const response = await axios.post('http://localhost:8003/updatepass', {
        id: "66901cab7120dc516f461e17",
        newpassword: newPassorwdGet
      });
      if (response.data.status === 200) {
        navigate("/home")
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <>
      <div className='container ' >
        <div className="row p-3 py-5 d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center">
              <img src={logo} alt="" width={160} className="img-fluid mb-4" />
            </div>
            <p className="text-start fw-semibold">Change Your Password</p>
            <div className="form-floating mb-3">
              <input
                type="password"
                className={`form-control custom-width ${error ? 'is-invalid' : ''}`}
                id="newPassword"
                placeholder="New password *"
                style={{ boxShadow: "none", outline: "none" }}
                onChange={(e) => { setNewPasswordGet(e.target.value); setError(''); }}
              />
              <label htmlFor="newPassword">New Password</label>
              <div className="invalid-feedback">{error}</div>
            </div>
            <div className="form-floating mb-4">
              <input
                type="password"
                className={`form-control custom-width ${error ? 'is-invalid' : ''}`}
                id="confirmPassword"
                placeholder="Confirm password *"
                style={{ boxShadow: "none", outline: "none" }}
                onChange={(e) => { setConfirmPasswordGet(e.target.value); setError(''); }}
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="invalid-feedback">{error}</div>
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