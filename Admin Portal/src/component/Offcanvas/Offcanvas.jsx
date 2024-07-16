import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Sidebar from '../Sidebar';
import OffCanvasSideBar from '../OffCanvasSideBar/OffCanvasSideBar';
import { Link, useLocation } from 'react-router-dom';
import { useGlobalState } from '../../contextApi/ContextApi';

function OffcanvasButton() {
    const { adminData } = useGlobalState()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [activeButton, setActiveButton] = useState('');
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.split('/')[1]; // Adjusted to split by '/' and take the first part
        setActiveButton(path || 'home');
    }, [location]);

    const handleButtonClick = (section) => {
        setActiveButton(section);
        handleClose()
    };


    return (
        <>
            <Button onClick={handleShow} className='d-xl-none'>
                <i className="fa-solid fa-bars" />
            </Button>

            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton >
                    <Offcanvas.Title >
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                        <div className="d-flex align-items-center profile d-none d-lg-block d-md-block">
                        </div>
                    <div className=" text-start   border-bottom">
                            <p className="me-2 fw-semobold text-uppercase fw-bold border-bottom tex-start">{adminData}</p>
                        <p className="fs-4 tex-start">Admin Portal</p>
                    </div>
                    <ul className="nav flex-column ">
                        <li className="nav-item ">
                            <Link to="/home" className='sidebar_link'>
                                <button
                                    className={`nav-link btn btn-link text-dark ${activeButton === 'home' ? 'active' : ''}`}
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
                                    className={`nav-link btn btn-link text-dark ${activeButton === 'allcertificates' ? 'active' : ''}`}
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
                                    className={`nav-link btn btn-link text-dark ${activeButton === 'issuedcertificateform' ? 'active' : ''}`}
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
                                    className={`nav-link btn btn-link text-dark ${activeButton === 'allstudent' ? 'active' : ''}`}
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
                            className={`nav-link btn btn-link text-dark ${activeButton === 'createcertificate' ? 'active' : ''}`}
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
                                    className={`nav-link btn btn-link text-dark ${activeButton === 'settings' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('settings')}
                                >
                                    <i className="bi bi-gear me-2"></i>
                                    Settings
                                </button>
                            </Link>
                        </li>
                    </ul>
                    {/* <OffCanvasSideBar/> */}
                    {/* <Sidebar/> */}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffcanvasButton;