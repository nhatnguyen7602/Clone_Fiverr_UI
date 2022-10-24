import { Table, Tag, Button, Modal, Popover, Popconfirm, message } from "antd";
import {
  EditFilled,
  DeleteFilled,
  UserAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React, { Fragment, useEffect, useState } from "react";
import { userServ } from "../../../services/serviceNguoiDung";
import TrangThemUser from "../TrangThemUser/TrangThemUser";
import TrangSuaUser from "../TrangSuaUser/TrangSuaUser";
import { useDispatch } from "react-redux";
import { SUA_MODAL, THEM_MODAL, XOA_MODAL } from "../constantAdmin";

const TrangQuanLyUser = () => {
  const [dataUser, setDataUser] = useState(null);
  const [modalOpen, setModalOpen] = useState({ modalName: "", isOpen: false });
  const [infoUser, setInfoUser] = useState(null);

  const dispatch = useDispatch();

  const showModalThem = () => {
    setModalOpen({ modalName: THEM_MODAL, isOpen: true });
  };

  const showModalSua = (id) => {
    userServ
      .layNguoiDungTheoId(id)
      .then((res) => {
        setModalOpen({ modalName: SUA_MODAL, isOpen: true });
        setInfoUser(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setModal = (nameModal) => {
    if (nameModal === THEM_MODAL) {
      return <TrangThemUser />;
    } else {
      return <TrangSuaUser infoUser={infoUser} />;
    }
  };

  const titleXoa = `Bạn có chắc muốn xoá?`;

  const handleXoaUser = (id) => {
    userServ
      .xoaNguoiDung(id)
      .then(() => {
        message.success("Xoá người dùng thành công!");
      })
      .catch((err) => {
        message.error(err.response?.data);
      });
  };

  const handleOk = () => {
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
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
      render: (id, user) => (
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

          <Popconfirm
            placement="top"
            title={titleXoa}
            onConfirm={() => {
              handleXoaUser(id);
            }}
            okText="Xoá"
            cancelText="Huỷ"
          >
            <button className="flex mx-2">
              <DeleteFilled style={{ color: "#e63946" }} />
            </button>
          </Popconfirm>
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
            open={modalOpen.isOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            {setModal(modalOpen.modalName)}
          </Modal>
        </div>
      </div>
      <Table columns={columns} dataSource={dataUser} />
    </div>
  );
};
export default TrangQuanLyUser;
