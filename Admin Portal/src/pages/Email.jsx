import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/logo.png";
import '../index.css';
import { useGlobalState } from '../contextApi/ContextApi';

function Password() {
    const { setOtpVerificationEmail } = useGlobalState()
    const [getEmail, setGetEmail] = useState("")
    const [getEmailerror, setGetEmailerror] = useState("")
    const [loading, setLoading] = useState(false);

    const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const navigate = useNavigate()
    let Done = async () => {
        try {
            if (!validateEmail.test(getEmail)) {
                return setGetEmailerror("Invalid Credential.Please chcek the input!")
            }
            setLoading(true)
            const response = await axios.post('http://localhost:8003/sendOtp', {
                email: getEmail
            });
            if (response.data.status === 200) {
                setOtpVerificationEmail(getEmail)
                navigate("/otp")
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    alert("Incorrect Email.Please check your inputs.");
                } else {
                    alert("Internal Server Error. ");
                }
            } else if (error.request) {
                alert("Network error. Failed to communicate with server.");
            } else {
                alert("Error issuing certificate: " + error.message);
            }
        }finally{
            setLoading(false)
        }
    }
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <div className="col-lg-6 col-md-6 col-sm-12 py-5">
                        <div className='mb-4 d-flex justify-content-center mb-5 pb-2'>
                            <img src={logo} width={160} />
                        </div>
                        <p className="fw-semibold">First enter your email</p>
                        <div className='form-floating mb-3 '>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                style={{ boxShadow: "none", outline: "none" }}
                                onChange={(e) => { setGetEmail(e.target.value) }}
                            />
                            <label htmlFor="email">Enter Email</label>
                            <p className='text-danger'>{getEmailerror}</p>
                        </div>

                        <div className='d-grid mt-3'>
                            <button className='btn btn-primary w-100' onClick={Done}>
                            {loading ? 'Loading...' : 'Continue'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default memo(Password);