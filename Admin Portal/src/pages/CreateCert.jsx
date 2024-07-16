import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

export default function CreateCert() {
    return (
        <div className="bg-white p-3 mb-3 rounded shadow-sm create_cert">
            <h2>Create Certificate</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="template" className="form-label">Certificate Template:</label>
                    <select className="form-select" id="template" name="template" style={{ boxShadow: "none", outline: "none" }}>
                        <option value="template1">Template 1</option>
                        <option value="template2">Template 2</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="recipient-name" className="form-label">Recipient Name:</label>
                    <div className='form-floating mb-3'>
                        <input
                            type="text"
                            className="form-control"
                            id='recipient-name'
                            placeholder="Enter your name"
                            style={{ boxShadow: "none", outline: "none" }}
                        />
                        <label htmlFor="email">Enter your name</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="recipient-email" className="form-label">Course Name:</label>
                    <div className='form-floating mb-3'>
                        <input
                            type="text"
                            className="form-control"
                            id='recipient-email'
                            placeholder="Enter your course name"
                            style={{ boxShadow: "none", outline: "none" }}
                        />
                        <label htmlFor="email">Enter your course name</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="issue-date" className="form-label">Issue Date:</label>
                    <input type="date" className="form-control" id="issue-date" name="issue-date" style={{ boxShadow: "none", outline: "none" }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="expiry-date" className="form-label">Expiry Date:</label>
                    <input type="date" className="form-control" id="expiry-date" name="expiry-date" style={{ boxShadow: "none", outline: "none" }} />
                </div>
                <button type="submit" className="btn btn-primary">Generate Certificate</button>
            </form>
        </div>
    )
}
