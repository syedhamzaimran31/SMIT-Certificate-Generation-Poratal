import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SendEmail from '../SendEmail/SendEmail';
import IssuedCertificatemodal from '../../pages/IssuedCertificatemodal';

function Modals() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="light" onClick={handleShow}>
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <div className="d-flex flex-column g-5 w-100">
                        <div className="mb-3">
                            <IssuedCertificatemodal />
                        </div>
                        <div className="mb-3">
                            <SendEmail />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Modals