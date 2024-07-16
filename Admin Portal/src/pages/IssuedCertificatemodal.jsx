import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import IssuedCertificateForm from '../component/IssuedCertificateForm/IssuedCertificateForm';
import { useGlobalState } from '../contextApi/ContextApi';
import axios from 'axios';
import IssuedCertificateFromRollNumber from '../component/IssuedCertificateFromRollNumber/IssuedCertificateFromRollNumber';
function IssuedCertificatemodal() {
    const { setError, rollNo, setRollNo, issuedBatchNo, setIssuedBatchNo, issuedCourseName, setIssuedCourseName } = useGlobalState()

    const [show, setShow] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [showRollNo, setShowRollNo] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const ISSUEDcERTIFICATE = async () => {
        const rollNumberArray = rollNo.split(',').map(Number);
        // if (!issuedBatchNo | !issuedCourseName || !rollNo) {
        //     setError("Please fill inputs")
        //     return;
        // }
        handleClose();
        setError("");
        setIssuedBatchNo("");
        setIssuedCourseName("");
        setRollNo("")
        alert("Certificates generated successfully");
        try {
            const response = await axios.post('http://localhost:8003/generate', {
                batchno: issuedBatchNo.toLowerCase(),
                course: issuedCourseName.toLowerCase(),
                rollno:rollNumberArray
            });
            const successStatus = await response.status

            if (successStatus === 200) {
                alert("Certificates generated successfully");
                handleClose();
                setError("");
                setIssuedBatchNo("");
                setIssuedCourseName("");
            } else {
                alert("Failed to generate certificates. Status: " + successStatus);
            }

        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    alert("Certificates not found on server. Please check your inputs.");
                } else {
                    alert("Internal Server Error. Failed to issue certificates.");
                }
            } else if (error.request) {
                alert("Network error. Failed to communicate with server.");
            } else {
                alert("Error issuing certificate: " + error.message);
            }
        }
    }
    const handleButton = async (name) => {
        if (name === "all") {
            setShowAll(true)
            setShowRollNo(false)
        } if (name === "roll no") {
            setShowAll(false)
            setShowRollNo(true)
        }
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Isuued certificate
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Isuued certificate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="border d-flex">
                        <button className="btn btn-primary border w-100" onClick={() => { handleButton("all") }}>All</button>
                        <button className="btn btn-primary border w-100" onClick={() => { handleButton("roll no") }}>Roll No</button>
                    </div>
                    {
                        showRollNo ? <IssuedCertificateFromRollNumber /> :
                            <IssuedCertificateForm />
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={ISSUEDcERTIFICATE}>
                        Issued
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default IssuedCertificatemodal