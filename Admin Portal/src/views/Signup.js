import React from 'react';
import './index.css'

export default function Signup() {
    return (
        <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className='form-container p-5 rounded bg-white'>
                <form>
                    <h3 className='text-center'>Sign Up</h3>
                    <div className='mb-2'>
                        <label htmlFor='fname' role="button">First Name</label>
                        <input type='text' placeholder='Enter first name' className='form-control' id='fname' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='lname' role="button">Last Name</label>
                        <input type='text' placeholder='Enter Last name' className='form-control' id='lname' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email' role="button">Email</label>
                        <input type='email' placeholder='Enter Email' className='form-control' id='email' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password' role="button">Password</label>
                        <input type='password' placeholder='Enter Password' className='form-control' id='password' />
                    </div>

                    <div className='d-grid mt-3'>
                        <button className='btn btn-primary'>Sign up</button>
                    </div>
                    <p className='text-end mt-2'>
                        Already Registered?<a href='/login' className="ms-2" >Sign in</a>
                    </p>
                </form>
            </div>
        </div>
    )
}