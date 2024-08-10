import React, { useEffect, useState } from "react";
import { Card, Spin, Col, Row, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import "./Module.css";

const { Meta } = Card;

const demoData = [
  {
    moduleName: "Quarter 1",
    attendence: 80, // Attendance percentage
    test: 75, // Test marks out of 100
    quiz1: 85, // Quiz 1 marks out of 100
    quiz2: 90, // Quiz 2 marks out of 100
    quiz3: 78, // Quiz 3 marks out of 100
    totalQuiz: 3,
    testStatus: Math.random() > 0.5 ? "Pass" : "Fail", // Randomly set Pass or Fail
    totalMarks: 85 + 90 + 78, // Sum of all quiz marks
  },
  {
    moduleName: "Quarter 2",
    attendence: 70,
    test: 80,
    quiz1: 60,
    quiz2: 70,
    quiz3: 65,
    totalQuiz: 3,
    testStatus: Math.random() > 0.5 ? "Pass" : "Fail",
    totalMarks: 60 + 70 + 65,
  },
  {
    moduleName: "Quarter 2",
    attendence: 70,
    test: 80,
    quiz1: 60,
    quiz2: 70,
    quiz3: 65,
    totalQuiz: 3,
    testStatus: Math.random() > 0.5 ? "Pass" : "Fail",
    totalMarks: 60 + 70 + 65,
  },
];

const Modules = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = demoData;

        // // Replace with your API call
        // const response = await fetch(
        //   "https://669a404d9ba098ed61feed64.mockapi.io/api/students/owais"
        // );
        // const result = await response.json();

        // // Added demo data for quizzes and test status
        // const demoData = result.map((module) => ({
        //   ...module,
        //   quiz1: Math.floor(Math.random() * 100),
        //   quiz2: Math.floor(Math.random() * 100),
        //   quiz3: Math.floor(Math.random() * 100),
        //   testStatus: Math.random() > 0.5 ? "Pass" : "Fail",
        // }));

        setData(result);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("DATA:", data);

  if (loading) {
    return (
      <div className="spinner-container">
        <Spin size="large" />
      </div>
    );
  }

  const handleCardClick = (module) => {
    navigate(`/module-details`, { state: { module } });
  };
  return (
    <div className="card-container">
      <Row gutter={[16, 16]} justify="center">
        {data.map((module, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              key={index}
              title={`Quarter: ${module.moduleName}`}
              bordered={false}
              style={{
                width: 300,
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                background: "white",
                margin: "10px", // margin added for spacing between cards
                cursor: "pointer",
              }}
              headStyle={{
                backgroundColor: "#0f50f5",
                color: "#fff",
                textAlign: "center",
                borderBottom: "none",
              }}
              onClick={() => handleCardClick(module)}
            >
              <p className="card-content" style={{ fontSize: "26px" }}>
                Attendance: {module.attendence}
              </p>
              <p className="card-content" style={{ fontSize: "26px" }}>
                Test Result:{" "}
                {module.testStatus == "Pass" ? (
                  <CheckCircleOutlined style={{ color: "#3f8600" }} />
                ) : (
                  <CloseCircleOutlined style={{ color: "#cf1322" }} />
                )}{" "}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Modules;
