import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { GetAllCertificateData } from '../services/getAllCourse';
import Loader from '../component/Loader/Loader';
import { useGlobalState } from '../contextApi/ContextApi';
import axios from 'axios';

function AllCertificates() {
    const { totalCertificaet, setTotalCertificate } = useGlobalState()
    const [certificateData, setCertificateData] = useState([]);
    const [getInput, setGetInput] = useState("")
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await GetAllCertificateData();
                setCertificateData(response.data);
                setTotalCertificate(response.data.length)
            } catch (error) {
                console.error('Error fetching certificate data:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);
    
    const deleted = async (id) => {
        try {
            alert("Delete this student")
            const response = await axios.delete(`http://localhost:8003/deleteCertificates/${id}`)
            if (response.data.status === 200) {
                window.location.reload()
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    //isEmail

    return (
        <div className="bg-white p-3 mb-3 rounded shadow-sm">
            <div className="d-flex mt-3 justify-content-between align-items-center">
                <h2>All Certificates</h2>
                <p>Total Certificate:{totalCertificaet}</p>

            </div>
            {/* <input type="text" className="form-control mt-4" placeholder="Enter Student Roll Number" onChange={(e)=>{setGetInput(e.target.value)}} style={{ boxShadow: "none", outline: "none" }} /> */}
            <div className="mt-3" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {loading ? (
                    <Loader />
                ) : certificateData.length > 0 ? (
                    <table className="table table-bordered mt-4">
                        <thead>
                            <tr>
                                <th>Roll No</th>
                                <th>Course Name</th>
                                <th>Batch No</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {certificateData.map((certificate) => (
                                <tr key={certificate._id}>
                                    <td>{certificate.rollno}</td>
                                    <td>{certificate.course}</td>
                                    <td>{certificate.batchNo}</td>
                                    <td>
                                        <span className='bg-primary text-white py-1 px-2 rounded-3' style={{ fontSize: "13px" }}>
                                            Unactive
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger btn-sm m-1" onClick={() => { deleted(certificate._id) }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className='text-center fw-semibold d-flex align-items-center'>No data available</p>
                )}
            </div>
        </div>
    );
}

export default AllCertificates;
