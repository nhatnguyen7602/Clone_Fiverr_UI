import { https } from "./configURL";

export const serviceNguoiDung = {
  dangNhap: (thongTinDangNhap) => {
    let uri = "/api/auth/signin";
    return https.post(uri, thongTinDangNhap);
  },
  dangKy: (thongTinDangKy) => {
    let uri = "/api/auth/signup";
    return https.post(uri, thongTinDangKy);
  },
};
