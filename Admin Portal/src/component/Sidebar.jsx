// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';

// const Sidebar = () => {
//     const [activeButton, setActiveButton] = useState('');
//     const location = useLocation();

//     const handleButtonClick = (section) => {
//         setActiveButton(section);
//     };

//     useEffect(() => {
//         const path = location.pathname.split('/')[2];
//         setActiveButton(path || 'home'); 
//     }, [location]);

//     return (
//         <aside className="col-md-2 sidebar bg-dark text-white p-3">
//             <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
//                 <span className="fs-4">Admin Portal</span>
//             </div>
//             <ul className="nav flex-column">
//                 <li className="nav-item">
//                     <Link to="/home" className='sidebar_link'>
//                         <button
//                             className={`nav-link btn btn-link text-white ${activeButton === 'home' ? 'active' : ''}`}
//                             onClick={() => handleButtonClick('home')}
//                         >
//                             <i className="bi bi-house-door-fill me-2"></i>
//                             Home
//                         </button>
//                     </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/allcertificates" className='sidebar_link'>
//                         <button
//                             className={`nav-link btn btn-link text-white ${activeButton === 'allcertificates' ? 'active' : ''}`}
//                             onClick={() => handleButtonClick('allCertificates')}
//                         >
//                             <i className="bi bi-file-earmark-text-fill me-2"></i>
//                             All Certificates
//                         </button>
//                     </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/issuedcertificateform" className='sidebar_link'>
//                         <button
//                             className={`nav-link btn btn-link text-white ${activeButton === 'issuedcertificateform' ? 'active' : ''}`}
//                             onClick={() => handleButtonClick('issuedcertificateform')}
//                         >
//                             <i className="bi bi-award-fill me-2"></i>
//                             Issued Certificates
//                         </button>
//                     </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/createcertificate" className='sidebar_link'>
//                         <button
//                             className={`nav-link btn btn-link text-white ${activeButton === 'createcertificate' ? 'active' : ''}`}
//                             onClick={() => handleButtonClick('createCertificate')}
//                         >
//                             <i className="bi bi-file-earmark-plus-fill me-2"></i>
//                             Create Certificate
//                         </button>
//                     </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/settings" className='sidebar_link'>
//                         <button
//                             className={`nav-link btn btn-link text-white ${activeButton === 'settings' ? 'active' : ''}`}
//                             onClick={() => handleButtonClick('settings')}
//                         >
//                             <i className="bi bi-gear me-2"></i>
//                             Settings
//                         </button>
//                     </Link>
//                 </li>
//             </ul>
//         </aside>
//     );
// };

// export default Sidebar;


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Sidebar = () => {
    const [activeButton, setActiveButton] = useState('');
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.split('/')[1]; // Adjusted to split by '/' and take the first part
        setActiveButton(path || 'home'); 
    }, [location]);

    const handleButtonClick = (section) => {
        setActiveButton(section);
    };

    return (
        <aside className="sidebar bg-dark text-white p-3 ">
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
                {/* <li className="nav-item">
                    <Link to="/about" className='sidebar_link'>
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
                    <Link to="/contact" className='sidebar_link'>
                        <button
                            className={`nav-link btn btn-link text-white ${activeButton === 'issuedcertificateform' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('issuedcertificateform')}
                        >
                            <i className="bi bi-award-fill me-2"></i>
                            Issued Certificates
                        </button>
                    </Link>
                </li> */}
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
};

export default Sidebar;
