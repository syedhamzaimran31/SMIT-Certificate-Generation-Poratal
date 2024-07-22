import React, { useState } from 'react';
import { useGlobalState } from '../../contextApi/ContextApi';
import axios from 'axios';
import BackButton from '../BackButton/BackButton';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import AlertModal from '../Modals/AlertModal';

function AddStudentFormButton() {
    const {
        studentName, setStudentName,
        courseName, setCourseName,
        currentDate, setCurrentDate,
        studentEmail, setStudentEmail,
        studentCnic, setStudentCnic,
        batchNo, setBatchNo,
        rollNo, setRollNo
    } = useGlobalState();

    const [showAlert, setShowAlert] = useState(false);
    const [alertBody, setAlertBody] = useState('');
    const [alertTitle, setAlertTitle] = useState('');

    const handleCloseAlert = () => setShowAlert(false);

    const submit = async () => {
        try {
            if (!studentName || !courseName || !currentDate || !studentEmail || !studentCnic || !batchNo) {
                setAlertTitle('Form Incomplete');
                setAlertBody('Something went wrong. Please fill all fields.');
                setShowAlert(true);
                return;
            }

            const response = await axios.post("http://localhost:8003/addStudents", {
                name: studentName,
                course: courseName,
                date: currentDate,
                email: studentEmail,
                cnic: studentCnic,
                batchNo: batchNo,
            });

            if (response.status === 200) {
                toastr.success("Student added successfully");
                setStudentName("");
                setCourseName("");
                setCurrentDate("");
                setStudentEmail("");
                setStudentCnic("");
                setBatchNo("");
                setRollNo("");
            } else {
                toastr.warning(`Failed to add student. Status: ${response.status}`);
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    toastr.warning("Please check your inputs.");
                } else {
                    toastr.warning(`Failed to add student. Status: ${error.response.status}`);
                }
            } else if (error.request) {
                toastr.error("Network error. Unable to communicate with the server.");
            } else {
                toastr.error(`Error adding students: ${error.message}`);
            }
        }
    };

    return (
        <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="d-flex align-items-center">
                <button className="btn btn-primary" onClick={submit}>Add Student</button>
                <BackButton />
            </div>
            <AlertModal
                show={showAlert}
                handleClose={handleCloseAlert}
                handleDelete={handleCloseAlert}
                title={alertTitle}
                body={alertBody}
            />
        </div>
    );
}

export default AddStudentFormButton;
