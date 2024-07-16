import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function OffCanvasSideBar() {
    const [activeButton, setActiveButton] = useState('');
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.split('/')[1]; 
        setActiveButton(path || 'home'); 
    }, [location]);

    const handleButtonClick = (section) => {
        setActiveButton(section);
    };

    return (
        <aside className=" bg-dark text-white p-3 " style={{
            height:"100vh",width:"100%"
        }}>
            <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
                <span className="fs-4">Admin Portal</span>
            </div>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/home" className='sidebar_link'>
                        <button
                            className={`nav-link btn btn-link text-white ${activeButton === 'home' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('home')}
                        >
                            <i className="bi bi-house-door-fill me-2"></i>
                            Home
                        </button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/allcertificates" className='sidebar_link'>
                        <button
                            className={`nav-link btn btn-link text-white ${activeButton === 'allcertificates' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('allcertificates')}
                        >
                            <i className="bi bi-file-earmark-text-fill me-2"></i>
                            All Certificates
                        </button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/issuedcertificateform" className='sidebar_link'>
                        <button
                            className={`nav-link btn btn-link text-white ${activeButton === 'issuedcertificateform' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('issuedcertificateform')}
                        >
                            <i className="bi bi-award-fill me-2"></i>
                            Issued Certificates
                        </button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/allstudent" className='sidebar_link'>
                        <button
                            className={`nav-link btn btn-link text-white ${activeButton === 'allstudent' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('allstudent')}
                        >
                            <i className="fa-solid fa-users "></i>
                            All Students
                        </button>
                    </Link>
                </li>
                {/* <li className="nav-item">
                    <Link to="/createcertificate" className='sidebar_link'>
                        <button
                            className={`nav-link btn btn-link text-white ${activeButton === 'createcertificate' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('createcertificate')}
                        >
                            <i className="bi bi-file-earmark-plus-fill me-2"></i>
                            Create Certificate
                        </button>
                    </Link>
                </li> */}
                <li className="nav-item">
                    <Link to="/settings" className='sidebar_link'>
                        <button
                            className={`nav-link btn btn-link text-white ${activeButton === 'settings' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('settings')}
                        >
                            <i className="bi bi-gear me-2"></i>
                            Settings
                        </button>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default OffCanvasSideBar