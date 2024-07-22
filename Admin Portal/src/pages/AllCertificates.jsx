import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetAllCertificateData } from '../services/getAllCourse';
import Loader from '../component/Loader/Loader';
import { useGlobalState } from '../contextApi/ContextApi';
import DeleteModal from '../component/Modals/AlertModal';
import axios from 'axios';
import '../index.css';

function AllCertificates() {
    const { totalCertificaet, setTotalCertificate } = useGlobalState()
    const [certificateData, setCertificateData] = useState([]);
    const [getInput, setGetInput] = useState("")
    const [loading, setLoading] = useState(true);
    const [toggleModal, setToggleModal] = useState(false);

    const handleClose = () => setToggleModal(false);

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
            const response = await axios.delete(`http://localhost:8003/deleteCertificates/${id}`)
            if (response.data.status === 200) {
                window.location.reload()
            }
        } catch (error) {
            console.error(error.message)
        } finally {
            setToggleModal(false);
        }
    }

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
                                <th className='text-center'>Roll No</th>
                                <th className='text-center'>Course Name</th>
                                <th className='text-center'>Batch No</th>
                                <th className='text-center'>Status</th>
                                <th className='text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {certificateData.map((certificate) => (
                                <tr key={certificate._id}>
                                    <td className='text-center'>{certificate.rollno}</td>
                                    <td className='text-center'>{certificate.course}</td>
                                    <td className='text-center'>{certificate.batchNo}</td>
                                    <td className='d-flex align-items-center justify-content-center'>
                                        <span className='bg-primary text-white py-1 px-2 rounded-3' style={{ fontSize: "13px" }}>
                                            Unactive
                                        </span>
                                    </td>
                                    <td className='text-center'>
                                        <button className="btn btn-danger btn-sm m-1" onClick={() => setToggleModal(true)}>Delete</button>

                                        <DeleteModal show={toggleModal} handleClose={handleClose} handleDelete={() => deleted(certificate._id)} body="Do you want to delete this Student's Certificate?" />
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
