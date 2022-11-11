import { Table, Tag, Button, Modal, Popover, Popconfirm, message } from "antd";
import {
  EditFilled,
  DeleteFilled,
  UserAddOutlined,
  SettingOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import React, { Fragment, useEffect, useState } from "react";
import { userServ } from "../../../services/serviceNguoiDung";
import TrangThemCongViec from "./TrangThemCongViec/TrangThemCongViec";
import { useDispatch } from "react-redux";
import {
  SUA_CONG_VIEC_MODAL,
  SUA_MODAL,
  THEM_CONG_VIEC_MODAL,
  THEM_MODAL,
} from "../constantAdmin";
import { jobServ } from "../../../services/serviceCongViec";
import TrangSuaCongViec from "./TrangSuaCongViec/TrangSuaCongViec";

const TrangQuanLyCongViec = () => {
  const [dataJob, setDataJob] = useState(null);
  const [modalOpen, setModalOpen] = useState({ modalName: "", isOpen: false });
  const [infoJob, setInfoJob] = useState(null);

  const dispatch = useDispatch();

  const showModalThem = () => {
    setModalOpen({ modalName: THEM_CONG_VIEC_MODAL, isOpen: true });
  };

  const showModalSua = (id) => {
    jobServ
      .layCongViecTheoId(id)
      .then((res) => {
        setModalOpen({ modalName: SUA_CONG_VIEC_MODAL, isOpen: true });
        setInfoJob(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setModal = (nameModal) => {
    if (nameModal === THEM_CONG_VIEC_MODAL) {
      return <TrangThemCongViec />;
    } else {
      return <TrangSuaCongViec infoJob={infoJob} />;
    }
  };

  const titleXoa = `Bạn có chắc muốn xoá?`;

  const handleXoaUser = (id) => {
    jobServ
      .xoaCongViec(id)
      .then(() => {
        message.success("Xoá công việc thành công!");
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
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "id",
      render: (hinhAnh) => (
        <img style={{ width: 120, borderRadius: 4 }} src={hinhAnh} />
      ),
      width: "20%",
    },

    {
      title: "Tên công việc",
      dataIndex: "tenCongViec",
      key: "id",
      width: "40%",
    },
    {
      title: "Giá tiền",
      dataIndex: "giaTien",
      key: "id",
      render: (giaTien) => (
        <Tag color="#e63946">
          <span className="text-sm font-semibold">{`${giaTien} $`}</span>
        </Tag>
      ),
      width: "10%",
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
    jobServ
      .layDanhSachCongViec()
      .then((res) => {
        setDataJob(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between h-20">
        <span className="text-4xl text-left leading-none">
          Quản lý công việc
        </span>

        <div className="text-right">
          <Popover placement="left" content="Thêm công việc">
            <Button
              icon={<AppstoreAddOutlined />}
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
            width={1000}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            {setModal(modalOpen.modalName)}
          </Modal>
        </div>
      </div>
      <Table columns={columns} dataSource={dataJob} />
    </div>
  );
};
export default TrangQuanLyCongViec;
