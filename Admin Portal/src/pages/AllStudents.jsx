import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetAllSTudents } from '../services/getAllCourse';
import Loader from '../component/Loader/Loader';
import axios from 'axios';

function AllStudents() {
    const [allStudentData, setAllStudentData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await GetAllSTudents();
                setAllStudentData(response.studentsData);
            } catch (error) {
                console.error('Error fetching students:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const deleteStudent = async (id) => {
        try {
            alert("Delete this student")
            const response = await axios.delete(`http://localhost:8003/deleteStudent/${id}`)
            if (response.data.status === 200) {
                window.location.reload()
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <div className="bg-white p-3 mb-3 rounded shadow-sm">
            <div className="d-flex justify-content-between">
                <h2>All Students</h2>
                <Link className='btn btn-primary' to={'/addstudents'}>Add Students</Link>
            </div>
            {/* <input type="text" className="form-control mt-4" placeholder="Enter Student Roll Number" style={{ boxShadow: "none", outline: "none" }} /> */}
            {
                loading ? <Loader /> : (
                    <div className="mt-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        <table className="table table-bordered mt-4">
                            <thead>
                                <tr>
                                    <th>Roll No</th>
                                    <th>Student Name</th>
                                    <th>Course Name</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allStudentData ? (
                                        allStudentData.map((data) => (
                                            <tr key={data._id}>
                                                <td>{data.rollno}</td>
                                                <td>{data.name}</td>
                                                <td>{data.course}</td>
                                                <td>
                                                    <span className='bg-primary text-white py-1 px-2 rounded-3' style={{ fontSize: "13px" }}>Active</span>
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger btn-sm m-1" onClick={() => { deleteStudent(data._id) }}>Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center">No Data</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    );
}

export default AllStudents;
