import React, { useEffect, useState } from 'react'
import IssuedCertificateForm from './IssuedCertificatemodal'
import { GetAllIssuedCertificate } from '../services/getAllCourse';
import Loader from '../component/Loader/Loader';
import SendEmail from '../component/SendEmail/SendEmail';
import PdfButton from '../component/PdfButton/PdfButton';
import Modals from '../component/Modals/Modals';

export default function IssuedCertForm() {
    const [allStudentData, setAllStudentData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await GetAllIssuedCertificate();
                setAllStudentData(response.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);
    return (
        <div className="bg-white py-5 px-4 mb-3 rounded shadow-sm">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Issued Certificates</h2>
                <div className="d-flex">
                    <div className="d-none d-lg-block">
                        <IssuedCertificateForm />
                        <SendEmail />
                    </div>
                    <div className=" d-lg-none ">
                        <Modals/>
                    </div>
                </div>
            </div>
            {/* <input type="text" className="form-control mt-4" placeholder="Enter Student Roll Number" style={{ boxShadow: "none", outline: "none" }} /> */}
            <div className="mt-3" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {loading ? (
                    <Loader />
                ) : allStudentData ? (
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
                            {allStudentData.map((certificate) => (
                                <tr key={certificate._id}>
                                    <td>{certificate.rollno}</td>
                                    <td>{certificate.course}</td>
                                    <td>{certificate.batchNo}</td>
                                    <td>
                                        <span className='bg-primary text-white py-1 px-2 rounded-3' style={{ fontSize: "13px" }}>
                                            complete
                                        </span>
                                    </td>
                                    <td>
                                        <PdfButton pdfUrl={certificate.certificateUrl} />
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
    )
}
