import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/logo.png";

function ChangeEmail() {
    const [getOldEmail, setOldGetEmail] = useState("")
    const [getNewEmail, setNewGetEmail] = useState("")
    const [getEmailerror, setGetEmailerror] = useState("")
    const [loading, setLoading] = useState(false);

    const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const navigate = useNavigate()
    let Done = async () => {
        try {
            if (!validateEmail.test(getOldEmail) || !validateEmail.test(getNewEmail)) {
                return setGetEmailerror("Invalid Credentials.Please chcek the input!")
            }
            setLoading(true)
            const response = await axios.post('http://localhost:8003/updateemail', {
                email: getOldEmail,
                newEmail: getNewEmail
            });
            if (response.data.status === 200) {
                alert("Successfully")
                navigate('/home')
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
                <div className='row d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
                    <div className='col-lg-6 col-md-6 col-sm-12  '>
                        <div className='mb-4 d-flex justify-content-center align-items-center'>
                            <img src={logo} width={160} />
                        </div>

                        <div className='form-floating mb-3'>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                style={{ boxShadow: "none", outline: "none" }}
                                onChange={(e) => { setOldGetEmail(e.target.value) }}
                            />
                            <label htmlFor="email">Enter Email</label>
                            <p className="text-danger">{getEmailerror}</p>
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                style={{ boxShadow: "none", outline: "none" }}
                                onChange={(e) => { setNewGetEmail(e.target.value) }}
                            />
                            <label htmlFor="email">Enter New Email</label>
                            <p className="text-danger">{getEmailerror}</p>
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

export default ChangeEmail;