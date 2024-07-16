import React from 'react';
import logo from "../../assets/Logo.png";

const initialValues = {
  otp: [
    { digit: "" },
    { digit: "" },
    { digit: "" },
    { digit: "" },
    { digit: "" },
    { digit: "" }
  ]
};

function Otp() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ maxWidth: "500px", width: "100%" }}>
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
            {
            initialValues.otp.map((item, index) => (
              <input
                key={index}
                className="otp-input form-control text-center"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={1}
                style={{ maxWidth: "50px", margin: "0 5px" }}
              />
            ))}
          </div>
          <button type="submit" className="btn btn-primary w-50">verify</button>
        </form>
        <div className="otp-resend text-center mt-3">
          Didn’t get the code? <a href="#">Resend Code</a>
        </div>
      </div>
    </div>
  );
}

export default Otp;
