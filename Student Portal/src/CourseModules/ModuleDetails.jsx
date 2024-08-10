import React from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Progress, Card, Typography } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import "./Module.css";

const { Title, Text } = Typography;

const ModuleDetails = () => {
  const location = useLocation();
  const { module } = location.state || {}; // Handle if module is undefined

  if (!module) {
    return <div>No module data found</div>; // Handle the case where module is not passed
  }

  return (
    <div style={{ padding: "20px" }}>
      <Card style={{ marginBottom: "20px", textAlign: "center" }}>
        <h1 style={{ margin: "5px", marginBottom: "10px" }}>
          {module.moduleName}
        </h1>
        <Title level={1}>Marks and Quizzes</Title>
        <Row
          gutter={[16, 16]}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Col span={8}>
            <Card>
              <h1 style={{ margin: "5px", marginBottom: "10px" }}>
                Attendance
              </h1>
              <Progress type="circle" percent={module.attendence} />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <h1 style={{ margin: "5px", marginBottom: "10px" }}>Overall</h1>

              <Progress type="circle" percent={Math.floor(module.totalMarks/module.totalQuiz)} />
            </Card>
          </Col>
        </Row>
        <Title level={3} style={{ marginTop: "20px" }}>
          Quizzes
        </Title>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card>
              <h1 style={{ margin: "5px", marginBottom: "10px" }}>Quiz 1</h1>
              <Progress type="circle" percent={module.quiz1} />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <h1 style={{ margin: "5px", marginBottom: "10px" }}>Quiz 2</h1>

              <Progress type="circle" percent={module.quiz2} />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <h1 style={{ margin: "5px", marginBottom: "10px" }}>Quiz 3</h1>
              <Progress type="circle" percent={module.quiz3} />
            </Card>
          </Col>
        </Row>
        <h3 style={{ margin: "15px" }}>Total Marks</h3>

        <Card>
          <h4>{module.totalMarks}</h4>
        </Card>
        <h3 style={{ margin: "15px" }}>Test Status</h3>

        <Card>
          {module.testStatus === "Pass" ? (
            <div>
              <span style={{ fontSize: "40px", marginRight: "10px" }}>
                Pass
              </span>
              <CheckCircleOutlined
                style={{ color: "#3f8600", fontSize: "50px" }}
              />
            </div>
          ) : (
            <div>
              <span style={{ fontSize: "40px", marginRight: "10px" }}>
                Fail
              </span>
              <CloseCircleOutlined
                style={{ color: "#cf1322", fontSize: "50px" }}
              />
            </div>
          )}
        </Card>
      </Card>
    </div>
  );
};

export default ModuleDetails;
