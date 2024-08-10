import React from 'react';
import { Layout, Avatar, Button, Typography, Dropdown, Menu, Space } from 'antd';
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import './index.css';

function Navbar() {
    const { Header } = Layout;
    const { Text } = Typography;

    const customMenu = (
        <Menu style={{ width: "250px" }}>
            <Menu.Item key="1-1" style={{ fontSize: "18px", }}>
                WEB App
            </Menu.Item>
            <Menu.Item key="1-2" style={{ fontSize: "18px", }}>
                Flutter
            </Menu.Item>
        </Menu>
    );

    return (
        <Header className="header px-5 sticky-top">
            <img
                src="../../src/assets/smit_logo.png"
                alt="SMIT Logo"
                className='ms-3'
                width="100"
                style={{ pointerEvents: 'none' }}
            />
            <div style={{ display: "flex", alignItems: "center" }}>
                <Dropdown overlay={customMenu}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space style={{ width: "250px", fontSize: "18px" }}>
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
                        fontSize: "16px",
                        fontWeight: "500",
                    }}
                >
                    Syed Hamza Imran
                </Text>
                <Button
                    style={{ height: "48px", width: "100px", fontSize: "16px", fontWeight: '600' }}
                    type="primary"
                    onClick={() => console.log("Logout")}
                    className="custom_btn"
                >
                    LOGOUT
                </Button>
            </div>
        </Header>
    )
}

export default Navbar;