import React from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Typography,
} from "antd";
import './index.css';

const { Content } = Layout;
const { Title, Text } = Typography;

const courses = [
  {
    course_name: "Saylani Devathon Summit 1.0",
    batch: 1,
    roll: 224620,
    city: "Karachi",
    campus: "N/A",
    status: "completed",
    statusColor: "green",
  },
  {
    course_name: "Python Programming",
    batch: 1,
    roll: 928477,
    city: "Karachi",
    campus: "N/A",
    status: "pending",
    statusColor: "red",
  },
  {
    course_name: "Graphic Designing",
    batch: 1,
    roll: 592873,
    city: "Karachi",
    campus: "N/A",
    status: "in-progress",
    statusColor: "orange",
  },
  {
    course_name: "Cyber Security",
    batch: 1,
    roll: 532632,
    city: "Karachi",
    campus: "N/A",
    status: "in-progress",
    statusColor: "orange",
  },
  {
    course_name: "Flutter",
    batch: 1,
    roll: 137375,
    city: "All Pakistan",
    campus: "N/A",
    status: "pending",
    statusColor: "red",
  },
  {
    course_name: "Web and Mobile App Development",
    batch: 10,
    roll: 137369,
    city: "Karachi",
    campus: "N/A",
    status: "dropout",
    statusColor: "grey",
  },
];

const Dashboard = () => {

  return (
    <Layout>
      <Content style={{ padding: "20px" }} className="container">
        <Title level={2}>
          Hi! Syed Hamza Imran{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </Title>
        <Text style={{ fontSize: "20px" }}>
          Welcome to the SMIT student portal. You can find all your courses
          listed below
        </Text>
        {
          courses ? (
            <div className="row abc m-auto mt-4">
              {courses.map((data) => (
                <div key={data.id} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                  <div className={`batch-status-card ${data.status}`} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

                    <div className='d-flex justify-content-between'>
                      <h3 style={{ fontSize: 'clamp(1rem, 3vw, 2rem)' }} className='text-capitalize'>{data.course_name}</h3>
                      {/* <DeleteCourseButton id={data._id} /> */}
                    </div>

                    <div className="d-flex align-items-end">
                      <h6>Batch: <span style={{ fontWeight: "400", fontSize: '16px' }}>{data.batch}</span></h6>
                    </div>

                    <div className="d-flex align-items-end">
                      <h6>Roll Number: <span style={{ fontWeight: "400", fontSize: '16px' }}>{data.roll}</span></h6>
                    </div>

                    <div className="d-flex align-items-end">
                      <h6>City: <span style={{ fontWeight: "400", fontSize: '16px' }}>{data.city}</span></h6>
                    </div>

                    <div className="d-flex align-items-end">
                      <h6>Campuss: <span style={{ fontWeight: "400", fontSize: '16px' }}>{data.campus}</span></h6>
                    </div>

                    <div className="d-flex align-items-end">
                      <h6 style={{ fontWeight: "400", fontSize: '14px', color: `${data.statusColor}` }}>{data.status}</h6>
                    </div>

                    <div className="d-flex justify-content-between align-items-end">
                      <p>Date: 12-07-2024</p>
                      {/* <Link to={`/dp/${data.course_name}`} className='text-decoration-none text-dark fw-semibold'>More Detail</Link> */}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          ) : <p>No courses available.</p>
        }
      </Content>
    </Layout>
  );
};

export default Dashboard;
