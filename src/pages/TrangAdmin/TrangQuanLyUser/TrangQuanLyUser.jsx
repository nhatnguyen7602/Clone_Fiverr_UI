import { Table, Tag, Button, Modal } from "antd";
import {
  EditFilled,
  DeleteFilled,
  UserAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React, { Fragment, useEffect, useState } from "react";
import { userServ } from "../../../services/serviceNguoiDung";
import { NavLink } from "react-router-dom";
import TrangThemUser from "../TrangThemUser/TrangThemUser";
const columns = [
  {
    title: "Mã số",
    dataIndex: "id",
    key: "id",
    width: "10%",
  },
  {
    title: "Họ tên",
    dataIndex: "name",
    key: "id",
    width: "20%",
  },

  {
    title: "Email",
    dataIndex: "email",
    key: "id",
    width: "35%",
  },
  {
    title: "Loại người dùng",
    dataIndex: "role",
    key: "id",
    render: (role) =>
      role === "ADMIN" ? (
        <Tag color="#e63946">Quản trị viên</Tag>
      ) : (
        <Tag color="#457b9d">Khách hàng</Tag>
      ),
    width: "15%",
  },
  {
    title: <SettingOutlined className="text-xl" />,
    key: "id",
    render: () => (
      <div className="text-2xl flex justify-center items-center">
        <NavLink style={{ display: "flex", margin: "0px 10px" }}>
          <EditFilled style={{ color: "#457b9d" }} />
        </NavLink>

        <NavLink style={{ display: "flex", margin: "0px 10px" }}>
          <DeleteFilled style={{ color: "#e63946" }} />
        </NavLink>
      </div>
    ),
    with: "20%",
    align: "center",
  },
];

const TrangQuanLyUser = () => {
  const [dataUser, setDataUser] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    userServ
      .layDsNguoiDung()
      .then((res) => {
        console.log("res: ", res);
        setDataUser(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between h-20">
        <span className="text-4xl text-left leading-none">
          Quản lý người dùng
        </span>

        <div className="text-right">
          <Button
            icon={<UserAddOutlined />}
            size="large"
            style={{
              backgroundColor: "#1d3557",
              color: "white",
            }}
            onClick={showModal}
          />

          <Modal
            title="Thêm người dùng"
            centered
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <TrangThemUser />
          </Modal>
        </div>
      </div>
      <Table columns={columns} dataSource={dataUser} />
    </div>
  );
};
export default TrangQuanLyUser;
