import React from 'react';
import Sidebar from '../../component/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from '../../component/Navbar.jsx';

const Adminportal = () => {
    return (
        <>
            <div className="sticky-top p-0">
                <Navbar />
            </div>
            <div className="position-fixed d-none d-xl-block">
                <Sidebar />
            </div>

        </>
    );
};

export default Adminportal;
