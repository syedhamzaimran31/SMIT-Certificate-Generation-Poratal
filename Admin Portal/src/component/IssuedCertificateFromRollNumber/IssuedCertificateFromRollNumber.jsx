import React from 'react'
import { useGlobalState } from '../../contextApi/ContextApi'

function IssuedCertificateFromRollNumber() {
    const { issuedBatchNo, rollNo, setRollNo, setIssuedBatchNo, error, issuedCourseName, setIssuedCourseName } = useGlobalState()
    return (
        <>
            <div className="mt-4">
                <div className="mb-3">
                    <label htmlFor="recipient-name" className="form-label">Batch Number:</label>
                    <div className='form-floating mb-3'>
                        <input
                            type="text"
                            className="form-control"
                            id='recipient-name'
                            placeholder="Enter your name"
                            value={issuedBatchNo}
                            style={{ boxShadow: "none", outline: "none" }}
                            onChange={(e) => { setIssuedBatchNo(e.target.value) }}
                        />
                        <label htmlFor="email">Enter your batch no.</label>
                        <p className='text-danger fw-semibold'>{error}</p>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="recipient-email" className="form-label">Course Name:</label>
                    <div className='form-floating mb-3'>
                        <input
                            type="text"
                            className="form-control"
                            id='recipient-email'
                            value={issuedCourseName}
                            placeholder="Enter your course name"
                            style={{ boxShadow: "none", outline: "none" }}
                            onChange={(e) => { setIssuedCourseName(e.target.value) }}
                        />
                        <label htmlFor="email">Enter your course name</label>
                        <p className='text-danger fw-semibold'>{error}</p>

                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="recipient-email" className="form-label">Roll No's:</label>
                    <div className='form-floating mb-3'>
                        <input
                            type="text"
                            className="form-control"
                            id='recipient-email'
                            placeholder="Enter Roll No's"
                            value={rollNo}
                            style={{ boxShadow: "none", outline: "none" }}
                            onChange={(e) => { setRollNo(e.target.value) }}
                        />
                        <label htmlFor="email">Enter Roll No's</label>
                        <p className='text-danger fw-semibold'>{error}</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default IssuedCertificateFromRollNumber