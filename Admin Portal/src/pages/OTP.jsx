import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import logo from "../assets/logo.png";
import '../index.css'
import { useGlobalState } from '../contextApi/ContextApi';

function Otp() {
  const { otpVerificationEmail } = useGlobalState()
  const [otpDigits, setOtpDigits] = useState(Array(6).fill(''));
  const [otpNo, setOtpNo] = useState("")
  const [loading, setLoading] = useState(false);
  const naviagte = useNavigate()

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtpDigits = [...otpDigits];
      newOtpDigits[index] = value;
      setOtpDigits(newOtpDigits);

      const otpCode = newOtpDigits.join('');
      setOtpNo(otpCode);

      if (value && index < otpDigits.length - 1) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  let verifiedOtp = async () => {
    try {
      if (otpDigits) {
        setLoading(true)
        const response = await axios.post('http://localhost:8003/verify-otp', {
          email: otpVerificationEmail,
          otp: otpNo
        });
        if (response.status === 200) {
          naviagte("/changepassword")
        }
        console.log(otpNo, otpVerificationEmail)
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          alert("Incorrect OTP.Please check your inputs.");
        } else {
          alert("Internal Server Error.");
        }
      } else if (error.request) {
        alert("Network error. Failed to communicate with server.");
      } else {
        alert("Error issuing certificate: " + error.message);
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="container d-flex justify-content-center align-items-center main_divs" style={{ height: "100vh" }}>
      <div className="card p-4" style={{ maxWidth: "500px", width: "100%", backgroundColor: 'white' }}>
        <div className="card-header text-center">
          <img src={logo} alt="smartphone" className="img-fluid mb-3" style={{ maxHeight: "100px" }} />
          <h5 className="header-text mb-1">Two-Factor Verification</h5>
          <div className="header-subtext mb-2">
            Enter the verification code we sent to
          </div>
          <div className="verification-number">******789</div>
        </div>
        <form className="otp-container mt-3">
          <div className="otp-subtext text-center mb-3">Type your 6 digit security code</div>
          <div className="d-flex justify-content-between mb-3">
            {otpDigits.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                className="otp-input form-control text-center"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={1}
                style={{ maxWidth: "50px", margin: "0 5px" }}
                value={digit}
                onChange={(e) => handleChange(e, index)}
              />
            ))}
          </div>
        </form>
        <div className='text-center'>
          <button className="btn btn-primary w-50" onClick={verifiedOtp}>
            {loading ? 'Loading...' : 'Verify'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Otp;