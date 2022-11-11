import { Table, Tag, Button, Modal, Popover, Popconfirm, message } from "antd";
import {
  EditFilled,
  DeleteFilled,
  UserAddOutlined,
  SettingOutlined,
  AppstoreAddOutlined,
  DiffOutlined,
} from "@ant-design/icons";
import React, { Fragment, useEffect, useState } from "react";
import { userServ } from "../../../services/serviceNguoiDung";
import TrangThemDichVu from "../TrangQuanLyDichVu/TrangThemDichVu/TrangThemDichVu";
import TrangSuaDichVu from "../TrangQuanLyDichVu/TrangSuaDichVu/TrangSuaDichVu";
import { useDispatch } from "react-redux";
import {
  SUA_CONG_VIEC_MODAL,
  SUA_DICH_VU_MODAL,
  SUA_MODAL,
  THEM_CONG_VIEC_MODAL,
  THEM_DICH_VU_MODAL,
  THEM_MODAL,
} from "../constantAdmin";
import { jobServ } from "../../../services/serviceCongViec";
import { dichVuServ } from "../../../services/serviceThueCongViec";

const TrangQuanLyDichVu = () => {
  const [dataService, setDataService] = useState(null);
  const [modalOpen, setModalOpen] = useState({ modalName: "", isOpen: false });
  const [infoService, setInfoService] = useState(null);

  const showModalThem = () => {
    setModalOpen({ modalName: THEM_DICH_VU_MODAL, isOpen: true });
  };

  const showModalSua = (id) => {
    dichVuServ
      .layDichVuTheoId(id)
      .then((res) => {
        setModalOpen({ modalName: SUA_DICH_VU_MODAL, isOpen: true });
        setInfoService(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setModal = (nameModal) => {
    if (nameModal === THEM_DICH_VU_MODAL) {
      return <TrangThemDichVu />;
    } else {
      return <TrangSuaDichVu infoService={infoService} />;
    }
  };

  const titleXoa = `Bạn có chắc muốn xoá?`;

  const handleXoaDichVu = (id) => {
    dichVuServ
      .xoaDichVu(id)
      .then(() => {
        message.success("Xoá dịch vụ thành công!");
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
      title: "Mã công việc",
      dataIndex: "maCongViec",
      key: "id",
      width: "10%",
    },

    {
      title: "Ngày thuê",
      dataIndex: "ngayThue",
      key: "id",
      width: "30%",
    },
    {
      title: "Trạng thái",
      dataIndex: "hoanThanh",
      key: "id",
      render: (hoanThanh) =>
        hoanThanh ? (
          <Tag color="#457b9d">Đã hoàn thành</Tag>
        ) : (
          <Tag color="#e63946">Chưa hoàn thành</Tag>
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
              handleXoaDichVu(id);
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
    dichVuServ
      .layDsDichVu()
      .then((res) => {
        setDataService(res.data.content);
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
          <Popover placement="left" content="Thêm dịch vụ">
            <Button
              icon={<DiffOutlined />}
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
      <Table columns={columns} dataSource={dataService} />
    </div>
  );
};
export default TrangQuanLyDichVu;
