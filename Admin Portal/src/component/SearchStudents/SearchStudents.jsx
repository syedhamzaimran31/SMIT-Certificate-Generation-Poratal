// import axios from 'axios';
// import React, { useState, useEffect } from 'react';


// function SearchStudents() {
//     const [searchStudent, setSearchStudent] = useState("");
//     const [students, setStudents] = useState([]);
  
//     useEffect(() => {
//       if (searchStudent) {
//         axios.get(`http://localhost:8003/searchStudents?rollnumber=${searchStudent}`)
//           .then(response => {
//             setStudents(response.data);
//             console.log(response.data);
//           })
//           .catch(error => {
//             console.error('Error fetching data:', error);
//           });
//         console.log(searchStudent)
//       } else {
//         setStudents([]);
//       }
//     }, [searchStudent]);
  
//     return (
//       <div>
//         <input
//           type="text"
//           className="form-control mt-4"
//           placeholder="Enter Student Roll Number"
//           style={{ boxShadow: "none", outline: "none" }}
//           value={searchStudent}
//           onChange={(e) => setSearchStudent(e.target.value)}
//         />
//         <div>
//             <p>{
//                 searchStudent ? students[0].batchNo: ""
//                 }</p>
//         </div>
//       </div>
//     );
//   }
  
//   export default SearchStudents;
  

import axios from 'axios';
import React, { useState, useEffect } from 'react';

function SearchStudents() {
  const [searchStudent, setSearchStudent] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (searchStudent) {
      axios.get(`http://localhost:8003/searchStudents?rollnumber=${searchStudent}`)
        .then(response => {
          setStudents(response.data);
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

export default SearchStudents;
