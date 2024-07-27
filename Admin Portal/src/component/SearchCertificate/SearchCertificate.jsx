import axios from 'axios';
import React, { useState, useEffect } from 'react';

function SearchCertificate() {
  const [searchStudent, setSearchStudent] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (searchStudent) {
      axios.get(`http://localhost:8003/serachissuedcertificate?rollnumber=${searchStudent}`)
        .then(response => {
          setStudents(response.data.data);
          console.log(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } else {
      setStudents([]);
    }
  }, [searchStudent]);

  return (
    <div>
      <input
        type="text"
        className="form-control mt-4"
        placeholder="Enter Student Roll Number"
        style={{ boxShadow: "none", outline: "none" }}
        value={searchStudent}
        onChange={(e) => setSearchStudent(e.target.value)}
      />
      <div>
        {students.length > 0 ? (
            <>
          <p className='fw-semibold'>Certificate has been ceated <span> <a href={students[0].certificateUrl} target="_blank" rel="noopener noreferrer">
        <button className="btn btn-success btn-sm m-1">View Certificate</button>
        </a></span></p>
          <p>Roll No: {students[0].rollno}</p>
          <p>Name: {students[0].name}</p>
          <p>Course: {students[0].course}</p>
          <p>Batch no: {students[0].batchNo}</p>
            </>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default SearchCertificate;
