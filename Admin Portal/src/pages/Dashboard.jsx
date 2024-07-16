import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import AddCourses from '../component/AddCourse/AddCourses';
import { GetAllCourse } from '../services/getAllCourse';
import DeleteCourseButton from '../component/DeleteCourseButton/DeleteCourseButton';
import Loader from '../component/Loader/Loader';
import { useGlobalState } from '../contextApi/ContextApi';

export default function Dashboard() {
    const {allCourse, setAllCourses}= useGlobalState()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const getAllCourses = await GetAllCourse();
                setAllCourses(getAllCourses.getcourses);
            } catch (error) {
                console.error('Error fetching courses:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) {
        return <Loader />
    }
    // .length > 0 
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-between">
                    <h2>All Courses</h2>
                    <AddCourses />
                </div>
            </div>
            {
                allCourse? (
                    <div className="row abc mt-4">
                        {allCourse.map((data) => (
                            <div key={data.id} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div className={`batch-status-card completed`} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div className='d-flex justify-content-between'>
                                        <h3 style={{ fontSize: 'clamp(1rem, 3vw, 2rem)' }} className='text-capitalize'>{data.course_name}</h3>
                                        <DeleteCourseButton id={data._id} />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-end">
                                        <p>Date: 12-07-2024</p>
                                        <Link to={`/dp/${data.course_name}`} className='text-decoration-none text-dark fw-semibold'>More Detail</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : <p>No courses available.</p>
            }
        </div>
    );
}
