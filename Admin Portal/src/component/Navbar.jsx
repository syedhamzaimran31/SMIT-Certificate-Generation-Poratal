import React, { useEffect } from 'react';
import logo from "../assets/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import OffcanvasButton from './Offcanvas/Offcanvas';
import { useGlobalState } from '../contextApi/ContextApi';
import { GetAdminData } from '../services/users.services';

export default function Navbar() {
    const  { adminData, setAdminData}=useGlobalState()
    useEffect(()=>{
        (async()=>{
            const response = await GetAdminData()
            setAdminData(response.data[0].email)
        })()
    },[])

    return (
        <>
            <nav className="d-flex justify-content-between align-items-center py-2 px-5 bg-white position-sticky sticky-top border-bottom">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="">
                        <OffcanvasButton/>
                    </div>
                    <a href='/'><img src={logo} alt="Saylani Welfare Logo" className='img-fluid ms-3' width="100" /></a>
                </div>
                <div className="d-flex align-items-center profile d-none d-lg-block d-md-block">
                    <span className="me-2 fw-semobold">{adminData}</span>
                </div>
            </nav>
        </>

    )
}