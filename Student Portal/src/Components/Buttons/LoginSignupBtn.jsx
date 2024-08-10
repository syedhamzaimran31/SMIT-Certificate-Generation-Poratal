import React, { useState, useEffect } from "react";
import { Button, Divider, Flex, Radio, Space, Tooltip } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";

function LoginSignupBtn() {
  const location = useLocation();
  const [position, setPosition] = useState("login");
  const navigate = useNavigate();

  const buttonStyle = (value) => ({
    width: "222px",
    height: "50px",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
    border: "grey",
    padding: "10px",
    marginBlock: "20px",
    backgroundColor: position === value ? "#1890ff" : "#f0f0f0",
    color: position === value ? "#fff" : "#000",
  });
  useEffect(() => {
    // Update the position state based on the current pathname
    const path = location.pathname.substring(1); // Remove leading '/'
    if (path === "login" || path === "signup") {
      setPosition(path);
    }
  }, [location]);
  const handleNavigation = (e) => {
    const value = e.target.value;
    setPosition(value);
    navigate(`/${value}`);
  };

  return (
    <>
      <Space>
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          defaultValue="login"
          value={position}
          onChange={handleNavigation}
        >
          <Radio.Button value="login" style={buttonStyle("login")}>
            Login
          </Radio.Button>
          <Radio.Button value="signup" style={buttonStyle("signup")}>
            Signup
          </Radio.Button>
        </Radio.Group>
      </Space>
    </>
  );
}

export default LoginSignupBtn;
