import React from "react";
import { DownOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import {
  Layout,
  Avatar,
  Button,
  Dropdown,
  Space,
  Typography,
  Menu,
} from "antd";

const { Header, Content } = Layout;
const { Title, Text } = Typography;


//Show Completed Certificates only for donwlaod in custom Menu
const customMenu = (
  <Menu style={{ width: "250px" }}>
    <Menu.Item key="1-1" style={{ fontSize: "20px",  }}>
      WEB App
    </Menu.Item>
    <Menu.Item key="1-2" style={{ fontSize: "20px",  }}>
      Flutter
    </Menu.Item>
  </Menu>
);

function Header_() {
  return (
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
        marginBlock: "10px", // Margin to separate from other elements
      }}
    >
      <img
        src="../../src/assets/smit_logo.png"
        alt="SMIT Logo"
        style={{ width: "150px" }}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Dropdown overlay={customMenu}>
          <a onClick={(e) => e.preventDefault()}>
            <Space style={{ width: "250px", fontSize: "20px" }}>
              Download Certificates
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
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
  );
}

export default Header_;
