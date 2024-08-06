import React from "react";
import {
  Layout,
  Menu,
  Avatar,
  Button,
  Row,
  Col,
  Card,
  Badge,
  Typography,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const courses = [
  {
    title: "Saylani Devathon Summit 1.0",
    batch: 1,
    roll: 224620,
    city: "Karachi",
    campus: "N/A",
    status: "Pending",
    statusColor: "yellow",
  },
  {
    title: "Flutter",
    batch: 1,
    roll: 137375,
    city: "All Pakistan",
    campus: "N/A",
    status: "Pending",
    statusColor: "yellow",
  },
  {
    title: "Web and Mobile App Development",
    batch: 10,
    roll: 137369,
    city: "Karachi",
    campus: "N/A",
    status: "Dropout",
    statusColor: "red",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#ffff", // Change the background color
          height: "90px", // Increase the height
          padding: "0 20px", // Add padding
          borderRadius: "8px", // Rounded corners
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow for card effect
          margin: "10px", // Margin to separate from other elements
        }}
      >
        <img
          src="../../src/assets/smit_logo.png"
          alt="SMIT Logo"
          style={{ width: "150px" }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            size="large"
            icon={<UserOutlined />}
            src="/path/to/your/avatar.png"
          />
          <Text
            style={{
              margin: "0 10px",
              color: "black",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Syed Hamza Imran
          </Text>
          <Button
            style={{ height: "50px", width: "100px", fontSize: "18px" }}
            type="primary"
            onClick={() => console.log("Logout")}
          >
            LOGOUT
          </Button>
        </div>
      </Header>
      <Content style={{ padding: "20px", backgroundColor: "#ffff" }}>
        <Title level={2}>
          Hi! Syed Hamza Imran{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </Title>
        <Text>
          Welcome to the SMIT student portal. You can find all your courses
          listed below
        </Text>
        <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
          {courses.map((course, index) => (
            <Col span={8} key={index}>
              <Card
                title={course.title}
                bordered={false}
                style={{
                  border: `1px solid ${course.statusColor}`,
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                bodyStyle={{ padding: "20px" }}
                hoverable
                onClick={() => console.log(`Clicked on ${course.title}`)}
              >
                <p>
                  <strong>Batch:</strong> {course.batch}
                </p>
                <p>
                  <strong>Roll:</strong> {course.roll}
                </p>
                <p>
                  <strong>City:</strong> {course.city}
                </p>
                <p>
                  <strong>Campus:</strong> {course.campus}
                </p>
                <Badge
                  color={course.statusColor}
                  text={course.status.toUpperCase()}
                  style={{ padding: "5px 10px" }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default Dashboard;
