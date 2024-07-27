import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetAllEnrolledStudents } from '../services/getAllCourse';
import Loader from '../component/Loader/Loader';
import GoBackButton from '../component/GoBackButton/GoBackButton';

function DetailPage() {
  const params = useParams();
  const [allStudentsData, setAllStudentsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await GetAllEnrolledStudents(params.cn);
        setAllStudentsData(response.data);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [params.cn]);


  if (error) {
    return <div className="container border bg-white p-3 rounded-3">{error}</div>;
  }

  return (
    <>
      <div className="">
        <GoBackButton />
      </div>
      {/* <div className="container border bg-white mt-3 p-3 rounded-3">
        <h2 className='text-capitalize'>Detail Page:</h2>
        <div className="d-flex justify-content-between align-items-center">
          <p className='text-capitalize fw-semibold'>Course: {params.cn}</p>
          <p className='text-capitalize fw-semibold'>Total Students: {allStudentsData ? allStudentsData.length : '0'}</p>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="mt-3">
              {
                isLoading ? (<Loader />) : (
                  <table className='table table-border'>
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Roll No</th>
                        <th>Student Name</th>
                        <th>Course</th>
                        <th>Batch</th>
                      </tr>
                    </thead>

                    <tbody>
                    </tbody>
                  </table>
                )
              }
            </div>
          </div>
        </div>
      </div> */}
      {/* {
                allStudentsData ? (
                  allStudentsData.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.rollno}</td>
                      <td>{data.name}</td>
                      <td>{data.course}</td>
                      <td>{data.batchNo}</td>
                    </tr>
                  ))

                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">No data found</td>
                  </tr>
                )} */}
      <div className="container">
        <div className="row">
          {
            allStudentsData ? (
              allStudentsData.map((data, index) => (
                < >
                  <div className="col-lg-4 py-3 px-3 rounded-3 col-md-6 col-sm-12 border" key={index}>
                    <div className="">
                      <h3 className='text-capitalize '>{data.name}</h3>
                      <p className=''>Roll No : {data.rollno}</p>
                      <p className=''>COurses : {data.course}</p>
                      <p className=''>Batchb  : {data.batchNo}</p>
                      <div className="d-flex justify-content-end">
                        <span className='bg-primary py-2 px-2 rounded-3 text-white fw-semibold' style={{ fontSize: "14px" }}>pending</span>
                      </div>
                    </div>
                  </div>
                </>
              ))

            ) : (
              <tr>
                <td colSpan="5" className="text-center">No data found</td>
              </tr>
            )}
        </div>
      </div>
    </>
  );
}

export default DetailPage;
