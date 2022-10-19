import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { Component } from "react";
const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Quản lý người dùng",
  },
];

const TrangAdmin = ({ Component }) => (
  <Layout className="h-screen">
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" />
      <Content>
        <div className="site-layout-background px-4">
          <Component />
        </div>
      </Content>
    </Layout>
  </Layout>
);
export default TrangAdmin;
