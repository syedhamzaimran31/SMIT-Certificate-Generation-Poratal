import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function IssuedCert() {
    
    return (
        <div>
            <div className="bg-white p-3 mb-3 rounded shadow-sm">
                <h2>Issued Certificates</h2>
                <input type="text" className="form-control mb-3" placeholder="Search..." style={{ boxShadow: "none", outline: "none" }} />
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Certificate ID</th>
                            <th>Recipient Name</th>
                            <th>Date Issued</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>John Doe</td>
                            <td>2024-01-01</td>
                            <td>Valid</td>
                            <td>
                                <button className="btn btn-success btn-sm m-1">View</button>
                                <button className="btn btn-danger btn-sm m-1">Revoke</button>
                            </td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>Jane Smith</td>
                            <td>2024-01-02</td>
                            <td>Expired</td>
                            <td>
                                <button className="btn btn-success btn-sm m-1">View</button>
                                <button className="btn btn-danger btn-sm m-1">Revoke</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};
