import React, { useEffect, useState } from 'react';
import { useGlobalState } from '../../contextApi/ContextApi';

function AddStudentForm() {
    const { studentName, setStudentName,
        courseName, setCourseName,
        currentDate, setCurrentDate,
        studentEmail, setStudentEmail,
        studentCnic, setStudentCnic,
        batchNo, setBatchNo,
        // rollNo, setRollNo,
        allCourse, setAllCourse } = useGlobalState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
            } catch (error) {
                console.error('Error fetching courses:', error);
            } finally {
                setLoading(false); 
            }
        })();
    }, [setAllCourse]);
    console.log(allCourse)

    if (loading) {
        return <p>Loading ...</p>;
    }

    return (
        <>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingInput"
                        placeholder="Student Name"
                        type="text"
                        value={studentName}
                        onChange={(e) => { setStudentName(e.target.value) }}
                    />
                    <label htmlFor="floatingInput">
                        Student Name
                    </label>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="dropdown mb-3">
                    <input
                        type="text"
                        aria-expanded="false"
                        className="form-control py-3 dropdown-toggle"
                        data-bs-toggle="dropdown"
                        placeholder={courseName || 'Select Course'}
                    />
                    <ul className="dropdown-menu">
                        {allCourse.map((course) => (
                            <li key={course._id}>
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCourseName(course.course_name);
                                    }}
                                >
                                    {course.course_name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingInput"
                        placeholder="Student Name"
                        value={currentDate}
                        type="date"
                        onChange={(e) => { setCurrentDate(e.target.value) }}
                    />
                    <label htmlFor="floatingInput">
                        Current Date
                    </label>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingInput"
                        placeholder="Student Email"
                        value={studentEmail}
                        type="email"
                        onChange={(e) => { setStudentEmail(e.target.value) }}
                    />
                    <label htmlFor="floatingInput">
                        Student Email
                    </label>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingInput"
                        placeholder="Student CNIC"
                        value={studentCnic}
                        type="number"
                        onChange={(e) => { setStudentCnic(e.target.value) }}
                    />
                    <label htmlFor="floatingInput">
                        Student CNIC
                    </label>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingInput"
                        placeholder="Batch No"
                        value={batchNo}
                        type="text"
                        onChange={(e) => { setBatchNo(e.target.value) }}
                    />
                    <label htmlFor="floatingInput">
                        Batch No
                    </label>
                </div>
            </div>
            {/* <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingInput"
                        placeholder="Roll No"
                        value={rollNo}
                        type="number"
                        onChange={(e) => { setRollNo(e.target.value) }}
                    />
                    <label htmlFor="floatingInput">
                        Roll No
                    </label>
                </div>
            </div> */}
        </>
    );
}

export default AddStudentForm;
