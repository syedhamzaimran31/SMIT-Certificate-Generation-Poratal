import React from 'react';
import { useGlobalState } from '../../contextApi/ContextApi';
import axios from 'axios';
import BackButton from '../BackButton/BackButton';

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

    const submit = async () => {
        try {
            if (!studentName || !courseName || !currentDate || !studentEmail || !studentCnic || !batchNo  ) {
                alert("Something went wrong. Please fill all fields.");
                // return;
            }
            const response = await axios.post("http://localhost:8003/addStudents", {
                name: studentName,
                course: courseName,
                date: currentDate,
                email: studentEmail,
                cnic: studentCnic,
                batchNo: batchNo,
                // rollno: rollNo
            });
            if (response.status === 200) {
                alert("Certificates generated successfully");
                setStudentName("")
                setCourseName("")
                setCurrentDate("")
                setStudentEmail("")
                setStudentCnic("")
                setBatchNo("")
                setRollNo("")
            } else {
                alert("Failed to generate certificates. Status: " + response.status);
            }

        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    alert("Please check your inputs.");
                } else {
                    alert("Internal Server Error. Failed to add students.");
                }
            } else if (error.request) {
                alert("Network error. Failed to communicate with server.");
            } else {
                alert("Error add students: " + error.message);
            }
        }
    }

    return (
        <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="d-flex align-items-center">
                <button className="btn btn-primary" onClick={submit}>Add Student</button>
                <BackButton />
            </div>
        </div>
    )
}

export default AddStudentFormButton;
