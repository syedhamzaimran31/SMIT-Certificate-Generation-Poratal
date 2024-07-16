import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddCourses() {
    const [show, setShow] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        if (!inputValue) {
            return setError("Please Insert The Field")
        }
        const addCours = await axios.post('http://localhost:8003/add-Courses',
            {
                course:inputValue
            }
        )
        if(addCours.status !== 200){
            return alert("This Course Is Already Exist")
        }
        
        window.location.reload()
        handleClose();
    };

    return (
        <>
            <Button variant="primary" className='fw-semibold' onClick={handleShow}>
                Add Course
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control
                            size="lg"
                            type="text"
                            placeholder="Enter course name"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        <p className='text-danger fw-semibold'>{error}</p>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddCourses;
