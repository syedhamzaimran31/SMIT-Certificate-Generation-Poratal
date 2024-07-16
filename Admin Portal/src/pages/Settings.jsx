import React, { memo } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import { logout } from '../services/use4rAutghentication';
import { useGlobalState } from '../contextApi/ContextApi';

const Settings = () => {
  const{adminData}=useGlobalState()
  return (
    <>
      <div className="container-fluid">
        <div className="row">
            <div className="bg-white p-4 pt-5 pb-5 rounded shadow-sm">
              <h2>Settings</h2>
              <form className='setting_form mt-4'>
                <div>
                  <p className='text-muted email_heading'>Current Email:</p>
                  <div className="mb-3 align-items-end">
                    <p className='py-3 px-3 border rounded'>{adminData}</p>
                    <Link className='btn chnge_pass_btn' to={'/ce'}>Change Email</Link>
                  </div>

                </div>
                <div className="mb-3">
                  <Link className='  btn chnge_pass_btn' to={'/email'}>Change Password</Link>
                </div>
                <button className="btn btn-primary logout_btn" onClick={() => { logout() }}>Log Out</button>
              </form>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default memo(Settings);
