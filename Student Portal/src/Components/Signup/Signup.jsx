import React from "react";
import { Link } from "react-router-dom";
import LoginSignupBtn from "../Buttons/LoginSignupBtn";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex, Layout, Row, Col } from "antd";
import "../Login/Login.css";
import smit_logo from "../../../src/assets/smit_logo.png";
function Signup() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const inputStyle = {
    width: "450px",
    height: "50px",
  };
  const logoStyle = {
    width: "150px",
    height: "100px ",
  };
  return (
    <>
      <div className="login-container">
        <Col>
          <img src={smit_logo} alt="" srcSet="" style={logoStyle} />
        </Col>
        <Col align="middle" justify="center">
          <h2 style={{ fontWeight: "bold" }}>Certificate Portal </h2>
          <LoginSignupBtn />
          <Form
            name="login"
            initialValues={{
              remember: true,
            }}
            style={{
              maxWidth: 450,
              width: "100%",
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <div>
                <p style={{ fontWeight: "500", fontSize: "14px" }}>
                  Provide CNIC you have used for registering the course
                </p>

                <Input
                  prefix={<UserOutlined />}
                  style={inputStyle}
                  placeholder="CNIC"
                />
              </div>
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                style={inputStyle}
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please Confirm Password!",
                },
              ]}
            >
              <Input
                style={inputStyle}
                prefix={<LockOutlined />}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Item>
            <Form.Item>
              <Flex justify="space-between" align="middle">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="">Forgot password</a>
              </Flex>
            </Form.Item>

            <Form.Item>
              <Button
                block
                type="primary"
                htmlType="submit"
                style={{ ...inputStyle, fontSize: "20px", fontWeight: "500" }}
              >
                Sign up
              </Button>
              or{" "}
              <Link to={"/login"} style={{ marginTop: "10px" }}>
                Login now!
              </Link>
            </Form.Item>
          </Form>
        </Col>
      </div>
    </>
  );
}

export default Signup;
