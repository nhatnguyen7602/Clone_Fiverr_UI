import { https } from "./configURL";
// import { serviceLocalStorageUser } from "./serviceLocalStorageUser";

export const serviceCongViec = {
  layMenuLoaiCongViec: () => {
    let uri = `/api/cong-viec/lay-menu-loai-cong-viec`;
    return https.get(uri);
  },
  layDanhSachCongViecTheoTen: (tenCongViec) => {
    let uri = `/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${tenCongViec}`;
    return https.get(uri);
  },
  layChiTietLoaiCongViec: (maLoaiCongviec) => {
    let uri = `/api/cong-viec/lay-chi-tiet-loai-cong-viec/${maLoaiCongviec}`;
    return https.get(uri);
  },
  layCongViecChiTiet: (maCongViec) => {
    let uri = `/api/cong-viec/lay-cong-viec-chi-tiet/${maCongViec}`;
    return https.get(uri);
  },
};
