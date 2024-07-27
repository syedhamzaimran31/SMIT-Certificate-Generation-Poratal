import React, { useState, useEffect, useRef } from 'react';
import logo from "../assets/logo.png";
import OffcanvasButton from './Offcanvas/Offcanvas';
import { useGlobalState } from '../contextApi/ContextApi';
import { GetAdminData } from '../services/users.services';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import profilePic from '../assets/profilePic.png';

export default function Navbar() {
    const { adminData, setAdminData } = useGlobalState();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        (async () => {
            const response = await GetAdminData();
            setAdminData(response.data[0].email);
        })();
    }, [setAdminData]);

    const [activeButton, setActiveButton] = useState('');
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.split('/')[1];
        setActiveButton(path || 'home');
    }, [location]);

    const handleButtonClick = (section) => {
        setActiveButton(section);
    };

    const handleDropdownClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (dropdownOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dropdownOpen]);

    return (
        <>
            <nav className="d-flex justify-content-between shadow-sm align-items-center py-3 px-5 bg-white position-sticky sticky-top border-bottom zindex-tooltip">
                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <OffcanvasButton />
                    </div>
                    <a href='/'><img src={logo} alt="Saylani Welfare Logo" className='img-fluid ms-3' width="100" /></a>
                </div>
                <div className='navs_div d-none d-lg-flex d-md-flex'>
                    <div className='navs'>
                        <ul>
                            <li>
                                <Link to="/home" onClick={() => handleButtonClick('home')} className={`nav-link ${activeButton === 'home' ? 'active' : ''}`}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/allcertificates" onClick={() => handleButtonClick('allcertificates')} className={`nav-link ${activeButton === 'allcertificates' ? 'active' : ''}`}>
                                    All Certificates
                                </Link>
                            </li>
                            <li>
                                <Link to="/issuedcertificateform" onClick={() => handleButtonClick('issuedcertificateform')} className={`nav-link ${activeButton === 'issuedcertificateform' ? 'active' : ''}`}>
                                    Issued Certificates
                                </Link>
                            </li>
                            <li>
                                <Link to="/allstudent" onClick={() => handleButtonClick('allstudent')} className={`nav-link ${activeButton === 'allstudent' ? 'active' : ''}`}>
                                    All Students
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center justify-content-end profile ms-3 dropdown" ref={dropdownRef}>
                        <div className='dropdown-toggle zindex-tooltip bg-white overflow-hidden' type="button" onClick={handleDropdownClick} aria-expanded={dropdownOpen ? "true" : "false"}>

                            <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" alt="Profile" className="rounded-circle" width="40" height="40" id="dropdownMenuButton" />

                            <span className="ms-2 fw-semibold">{adminData}</span>
                        </div>
                        <ul className={`dropdown-menu custom_dropdownMenu ${dropdownOpen ? 'show' : ''}`} >
                            <li><Link className="dropdown-item custom_CSS_li" to="/settings">Settings</Link></li>
                            <li className="dropdown-item custom_CSS_li">Logout</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

