import { Table, Tag, Button, Modal, Popover } from "antd";
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
import TrangSuaUser from "../TrangSuaUser/TrangSuaUser";
import { useDispatch } from "react-redux";
import { layThongTinUserAction } from "../../../redux/actions/actionTrangAdmin";

const TrangQuanLyUser = () => {
  const [dataUser, setDataUser] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThemUser, setIsThemUser] = useState(true);
  const [infoUser, setInfoUser] = useState("");

  const dispatch = useDispatch();

  const showModalThem = () => {
    setIsModalOpen(true);
    setIsThemUser(true);
  };

  const showModalSua = (id) => {
    setIsModalOpen(true);
    setIsThemUser(false);

    userServ
      .layNguoiDungTheoId(id)
      .then((res) => {
        setInfoUser(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <div className="text-2xl flex justify-center items-center">
          <Popover placement="top" content="Sửa thông tin">
            <button
              className="flex mx-2"
              onClick={() => {
                showModalSua(id);
              }}
            >
              <EditFilled style={{ color: "#457b9d" }} />
            </button>
          </Popover>

          <Popover placement="top" content="Xoá người dùng">
            <button className="flex mx-2">
              <DeleteFilled style={{ color: "#e63946" }} />
            </button>
          </Popover>
        </div>
      ),
      with: "20%",
      align: "center",
    },
  ];

  useEffect(() => {
    userServ
      .layDsNguoiDung()
      .then((res) => {
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
          <Popover placement="left" content="Thêm người dùng">
            <Button
              icon={<UserAddOutlined />}
              size="large"
              style={{
                backgroundColor: "#1d3557",
                color: "white",
              }}
              onClick={showModalThem}
            />
          </Popover>

          <Modal
            centered
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            {isThemUser === true ? (
              <TrangThemUser />
            ) : (
              <TrangSuaUser infoUser={infoUser} />
            )}
          </Modal>
        </div>
      </div>
      <Table columns={columns} dataSource={dataUser} />
    </div>
  );
};
export default TrangQuanLyUser;
