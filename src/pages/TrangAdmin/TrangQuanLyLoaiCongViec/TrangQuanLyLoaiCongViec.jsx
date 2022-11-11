import { Table, Tag, Button, Modal, Popover, Popconfirm, message } from "antd";
import {
  EditFilled,
  DeleteFilled,
  UserAddOutlined,
  SettingOutlined,
  AppstoreAddOutlined,
  FolderAddOutlined,
} from "@ant-design/icons";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { typeJobServ } from "../../../services/serviceLoaiCongViec";
import {
  SUA_LOAI_CONG_VIEC_MODAL,
  THEM_LOAI_CONG_VIEC_MODAL,
} from "../constantAdmin";
import { userServ } from "../../../services/serviceNguoiDung";
import TrangThemCongViec from "../TrangQuanLyCongViec/TrangThemCongViec/TrangThemCongViec";
import TrangSuaCongViec from "../TrangQuanLyCongViec/TrangSuaCongViec/TrangSuaCongViec";
import TrangThemLoaiCongViec from "./TrangThemLoaiCongViec/TrangThemLoaiCongViec";
import TrangSuaLoaiCongViec from "./TrangSuaLoaiCongViec/TrangSuaLoaiCongViec";

const TrangQuanLyLoaiCongViec = () => {
  const [dataTypeJob, setDataTypeJob] = useState(null);
  const [modalOpen, setModalOpen] = useState({ modalName: "", isOpen: false });
  const [infoTypeJob, setInfoTypeJob] = useState(null);

  const dispatch = useDispatch();

  const showModalThem = () => {
    setModalOpen({ modalName: THEM_LOAI_CONG_VIEC_MODAL, isOpen: true });
  };

  const showModalSua = (id) => {
    typeJobServ
      .layLoaiCongViecTheoId(id)
      .then((res) => {
        setModalOpen({ modalName: SUA_LOAI_CONG_VIEC_MODAL, isOpen: true });
        setInfoTypeJob(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setModal = (nameModal) => {
    if (nameModal === THEM_LOAI_CONG_VIEC_MODAL) {
      return <TrangThemLoaiCongViec />;
    } else {
      return <TrangSuaLoaiCongViec infoTypeJob={infoTypeJob} />;
    }
  };

  const titleXoa = `Bạn có chắc muốn xoá?`;

  const handleXoaTypeJob = (id) => {
    typeJobServ
      .xoaLoaiCongViec(id)
      .then(() => {
        message.success("Xoá loại công việc thành công!");
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
      title: "Tên loại công việc",
      dataIndex: "tenLoaiCongViec",
      key: "tenLoaiCongViec",
      width: "60%",
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

          <Popconfirm
            placement="top"
            title={titleXoa}
            onConfirm={() => {
              handleXoaTypeJob(id);
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
      with: "30%",
      align: "center",
    },
  ];

  useEffect(() => {
    typeJobServ
      .layDsLoaiCongViec()
      .then((res) => {
        setDataTypeJob(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between h-20">
        <span className="text-4xl text-left leading-none">
          Quản lý loại công việc
        </span>

        <div className="text-right">
          <Popover placement="left" content="Thêm loại công việc">
            <Button
              icon={<FolderAddOutlined />}
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
      <Table columns={columns} dataSource={dataTypeJob} />
    </div>
  );
};
export default TrangQuanLyLoaiCongViec;
