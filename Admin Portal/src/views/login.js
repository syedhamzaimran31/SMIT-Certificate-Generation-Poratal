import React from 'react';
import './index.css';

export default function Login() {
    return (
        <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className='form-container p-5 rounded bg-white'>
                <form>
                    <h3 className='text-center'>Sign In</h3>
                    <div className='mb-2'>
                        <label htmlFor='email' role="button">Email</label>
                        <input type='email' placeholder='Enter Email' className='form-control' id='email' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password' role="button">Password</label>
                        <input type='password' placeholder='Enter Password' className='form-control' id='password' />
                    </div>
                    <div className='mb-2'>
                        <input type='checkbox' className='custom-control custom-checkbox' id='check' role="button" />
                        <label htmlFor='check' className='custom-input-label ms-1' role="button">
                            Remember me
                        </label>
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary'>Sign in</button>
                    </div>
                    <p className='text-end mt-2'>
                        Forgot <a href=''>Password?</a><a href='/' className="ms-2" >Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    )
}