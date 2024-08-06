import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex, Layout, Row, Col } from "antd";
import LoginSignupBtn from "../Buttons/LoginSignupBtn";
import { useGlobalState } from "../../ContextApi/ContextApi";
import "./Login.css";
const Login = () => {
  const { studentCnic, setStudentCnic } = useGlobalState();
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const validateInputs = () => {
    const isCNICValid = studentCnic.length === 13 && /^\d+$/.test(studentCnic);
    setIsButtonEnabled(isCNICValid);
  };
  useEffect(() => {
    validateInputs();
  }, [studentCnic]);

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
          <img
            src="../../src/assets/smit_logo.png"
            alt=""
            srcSet=""
            style={logoStyle}
          />
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
                  type="text"
                  // className="form-control"
                  id="cnic"
                  value={studentCnic}
                  onChange={(e) => {
                    setStudentCnic(e.target.value);
                  }}
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
                Log in
              </Button>
              or <Link style={{marginTop: "10px"}} to="/signup">Register now!</Link>
            </Form.Item>
          </Form>
        </Col>
      </div>
    </>
  );
};
export default Login;
