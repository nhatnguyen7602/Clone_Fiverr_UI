import {
  UserOutlined,
  AppstoreOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Item from "antd/lib/list/Item";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

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
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <NavLink to="/admin">Quản lý người dùng</NavLink>
        </Menu.Item>

        <Menu.Item key="2" icon={<AppstoreOutlined />}>
          <NavLink to="/admin/job">Quản lý công việc</NavLink>
        </Menu.Item>

        <Menu.Item key="3" icon={<FolderOutlined />}>
          <NavLink to="/admin/typejob">Quản lý loại công việc</NavLink>
        </Menu.Item>
      </Menu>
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
